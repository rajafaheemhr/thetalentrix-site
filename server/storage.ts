import { 
  users, 
  jobApplications, 
  hiringRequests, 
  contactMessages,
  type User, 
  type InsertUser,
  type JobApplication,
  type InsertJobApplication,
  type HiringRequest,
  type InsertHiringRequest,
  type ContactMessage,
  type InsertContactMessage
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Job Application methods
  createJobApplication(application: InsertJobApplication): Promise<JobApplication>;
  getAllJobApplications(): Promise<JobApplication[]>;
  
  // Hiring Request methods
  createHiringRequest(request: InsertHiringRequest): Promise<HiringRequest>;
  getAllHiringRequests(): Promise<HiringRequest[]>;
  
  // Contact Message methods
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getAllContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private jobApplications: Map<number, JobApplication>;
  private hiringRequests: Map<number, HiringRequest>;
  private contactMessages: Map<number, ContactMessage>;
  private currentUserId: number;
  private currentJobApplicationId: number;
  private currentHiringRequestId: number;
  private currentContactMessageId: number;

  constructor() {
    this.users = new Map();
    this.jobApplications = new Map();
    this.hiringRequests = new Map();
    this.contactMessages = new Map();
    this.currentUserId = 1;
    this.currentJobApplicationId = 1;
    this.currentHiringRequestId = 1;
    this.currentContactMessageId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Job Application methods
  async createJobApplication(insertApplication: InsertJobApplication): Promise<JobApplication> {
    const id = this.currentJobApplicationId++;
    const application: JobApplication = { 
      ...insertApplication, 
      id,
      cvFilePath: insertApplication.cvFilePath || null,
      experience: insertApplication.experience || null,
      createdAt: new Date()
    };
    this.jobApplications.set(id, application);
    return application;
  }

  async getAllJobApplications(): Promise<JobApplication[]> {
    return Array.from(this.jobApplications.values());
  }

  // Hiring Request methods
  async createHiringRequest(insertRequest: InsertHiringRequest): Promise<HiringRequest> {
    const id = this.currentHiringRequestId++;
    const request: HiringRequest = { 
      ...insertRequest, 
      id,
      urgency: insertRequest.urgency || 'standard',
      positions: insertRequest.positions || 1,
      additionalNotes: insertRequest.additionalNotes || null,
      createdAt: new Date()
    };
    this.hiringRequests.set(id, request);
    return request;
  }

  async getAllHiringRequests(): Promise<HiringRequest[]> {
    return Array.from(this.hiringRequests.values());
  }

  // Contact Message methods
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentContactMessageId++;
    const message: ContactMessage = { 
      ...insertMessage, 
      id,
      phone: insertMessage.phone || null,
      createdAt: new Date()
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getAllContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
}

export const storage = new MemStorage();
