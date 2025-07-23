# replit.md

## Overview

This is a full-stack recruitment platform called "Talentrix" built with a modern TypeScript stack. The application serves both job seekers and employers, providing features like job applications, talent pool registration, resume building, interview tips, and hiring services. The architecture follows a client-server pattern with React frontend and Express backend, using PostgreSQL for data persistence through Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and purple theme
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints under `/api` prefix
- **File Uploads**: Multer middleware for CV/resume file handling
- **Development**: Hot reloading with Vite integration
- **Request Logging**: Custom middleware for API request/response logging

### Database Architecture
- **Database**: PostgreSQL (configured for production)
- **ORM**: Drizzle ORM with type-safe queries
- **Schema Management**: Centralized schema definitions in `shared/schema.ts`
- **Migrations**: Drizzle Kit for database migrations
- **Development**: In-memory storage implementation for rapid prototyping

## Key Components

### Frontend Components
1. **Layout System**: Navbar, Footer, and WhatsApp widget for consistent UI
2. **Page Components**: Dedicated pages for jobs, talent pool, resume builder, interview tips, hiring, and contact
3. **Form Components**: Reusable form components with validation and file upload capabilities
4. **UI Components**: Comprehensive set of accessible components from Shadcn/ui library

### Backend Components
1. **Route Handlers**: Centralized route registration with type-safe request handling
2. **Storage Layer**: Abstracted storage interface with both memory and database implementations
3. **File Management**: Secure file upload handling with validation and storage
4. **Middleware**: Request logging, error handling, and development tooling integration

### Shared Components
1. **Schema Definitions**: Unified data models and validation schemas
2. **Type Safety**: Shared TypeScript interfaces between frontend and backend
3. **Validation**: Zod schemas for runtime type checking and form validation

## Data Flow

### Job Application Flow
1. User fills out application form with personal details and uploads CV
2. Frontend validates data using Zod schemas
3. File upload handled by Multer middleware with type and size validation
4. Data persisted to database via Drizzle ORM
5. Success/error feedback provided to user

### Hiring Request Flow
1. Companies submit hiring requests through dedicated form
2. Form data validated on both client and server sides
3. Request stored in database with all company and role details
4. Email notifications triggered for new requests

### Resume Builder Flow
1. Multi-step form collects user information progressively
2. Data stored in component state during form completion
3. PDF generation using jsPDF library
4. Option to download completed resume

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Libraries**: Radix UI primitives, Tailwind CSS, Lucide React icons
- **Data Fetching**: TanStack Query for server state management
- **PDF Generation**: jsPDF for client-side PDF creation
- **Date Handling**: date-fns for date manipulation
- **Validation**: Zod for schema validation

### Backend Dependencies
- **Server Framework**: Express.js with TypeScript support
- **Database**: Drizzle ORM, PostgreSQL client (@neondatabase/serverless)
- **File Handling**: Multer for multipart form data
- **Development**: tsx for TypeScript execution, ESBuild for production builds

### Development Dependencies
- **Build Tools**: Vite for frontend bundling and development server
- **Database Tools**: Drizzle Kit for migrations and schema management
- **Replit Integration**: Custom plugins for Replit environment support

## Deployment Strategy

### Development Environment
- Vite development server with hot module replacement
- Express server with TypeScript compilation via tsx
- In-memory storage for rapid prototyping
- Replit-specific middleware and banner integration

### Production Build
- Frontend: Vite builds optimized React bundle to `dist/public`
- Backend: ESBuild compiles TypeScript server to `dist/index.js`
- Database: PostgreSQL with Drizzle ORM for production data persistence
- File Storage: Local filesystem storage for uploaded CVs

### Database Management
- Schema definitions centralized in shared directory
- Drizzle migrations for version control of database changes
- Environment variable configuration for database connections
- Fallback to in-memory storage for development without database setup

### Scalability Considerations
- Stateless server design for horizontal scaling
- File upload size limits and type validation for security
- Query optimization through Drizzle ORM's type-safe query builder
- Component-based architecture for maintainable frontend code