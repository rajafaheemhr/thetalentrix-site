import { defineConfig } from "drizzle-kit";

// Only require DATABASE_URL if we're actually using the database
if (process.env.USE_DATABASE === "true" && !process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is required when USE_DATABASE=true");
}

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL || "postgresql://localhost:5432/placeholder",
  },
});
