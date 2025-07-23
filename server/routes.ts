import type { Express, Request, Response } from "express";
import express from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertJobApplicationSchema, 
  insertHiringRequestSchema, 
  insertContactMessageSchema 
} from "@shared/schema";
import multer from "multer";
import path from "path";
import fs from "fs";

// Configure multer for file uploads
const uploadsDir = path.join(process.cwd(), "cv_uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage_multer = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    cb(null, uploadsDir);
  },
  filename: (req: any, file: any, cb: any) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage_multer,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req: any, file: any, cb: any) => {
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF, DOC, and DOCX files are allowed.'));
    }
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Job Applications
  app.post("/api/job-applications", upload.single('cv'), async (req: any, res: Response) => {
    try {
      const data = insertJobApplicationSchema.parse(req.body);
      
      // Add file path if file was uploaded
      if (req.file) {
        data.cvFilePath = req.file.filename;
      }
      
      const application = await storage.createJobApplication(data);
      res.json(application);
    } catch (error) {
      console.error("Error creating job application:", error);
      res.status(400).json({ 
        message: error instanceof Error ? error.message : "Invalid application data" 
      });
    }
  });

  app.get("/api/job-applications", async (req, res) => {
    try {
      const applications = await storage.getAllJobApplications();
      res.json(applications);
    } catch (error) {
      console.error("Error fetching job applications:", error);
      res.status(500).json({ message: "Failed to fetch job applications" });
    }
  });

  // Hiring Requests
  app.post("/api/hiring-requests", async (req, res) => {
    try {
      const data = insertHiringRequestSchema.parse(req.body);
      const request = await storage.createHiringRequest(data);
      res.json(request);
    } catch (error) {
      console.error("Error creating hiring request:", error);
      res.status(400).json({ 
        message: error instanceof Error ? error.message : "Invalid hiring request data" 
      });
    }
  });

  app.get("/api/hiring-requests", async (req, res) => {
    try {
      const requests = await storage.getAllHiringRequests();
      res.json(requests);
    } catch (error) {
      console.error("Error fetching hiring requests:", error);
      res.status(500).json({ message: "Failed to fetch hiring requests" });
    }
  });

  // Contact Messages
  app.post("/api/contact-messages", async (req, res) => {
    try {
      const data = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(data);
      res.json(message);
    } catch (error) {
      console.error("Error creating contact message:", error);
      res.status(400).json({ 
        message: error instanceof Error ? error.message : "Invalid contact message data" 
      });
    }
  });

  app.get("/api/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ message: "Failed to fetch contact messages" });
    }
  });

  // Mock job listings endpoint
  app.get("/api/jobs", async (req, res) => {
    const mockJobs = [
      {
        id: 1,
        title: "Senior Software Engineer",
        company: "TechCorp Solutions",
        location: "San Francisco, CA",
        salary: "$120k - $160k",
        type: "Full-time",
        postedDate: "2 days ago",
        description: "Join our innovative team to build cutting-edge software solutions. We're looking for a passionate developer with 5+ years of experience in React, Node.js, and cloud technologies."
      },
      {
        id: 2,
        title: "Marketing Manager",
        company: "Growth Dynamics",
        location: "Remote",
        salary: "$80k - $100k",
        type: "Remote",
        postedDate: "1 week ago",
        description: "Lead our digital marketing initiatives and drive customer acquisition. Experience with SEO, social media marketing, and analytics tools required."
      },
      {
        id: 3,
        title: "Product Designer",
        company: "DesignHub Inc.",
        location: "New York, NY",
        salary: "$95k - $125k",
        type: "Full-time",
        postedDate: "3 days ago",
        description: "Create exceptional user experiences for our mobile and web applications. Strong portfolio in UI/UX design and proficiency in Figma required."
      },
      {
        id: 4,
        title: "Data Scientist",
        company: "Analytics Pro",
        location: "Los Angeles, CA",
        salary: "$130k - $170k",
        type: "Contract",
        postedDate: "5 days ago",
        description: "Drive insights from complex datasets using machine learning and statistical analysis. PhD in related field and Python/R experience preferred."
      }
    ];
    
    res.json(mockJobs);
  });

  // Serve uploaded CV files
  app.use("/uploads", (req: Request, res: Response, next: any) => {
    // Add basic security check
    const filename = req.path.substring(1);
    if (filename.includes("..") || filename.includes("/")) {
      return res.status(400).json({ message: "Invalid file path" });
    }
    next();
  }, express.static(uploadsDir));

  const httpServer = createServer(app);
  return httpServer;
}
