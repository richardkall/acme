import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

export default defineConfig({
  casing: "snake_case",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
  dialect: "postgresql",
  migrations: {
    schema: "public",
    table: "migration",
  },
  out: "./migrations",
  schema: "./src/schema.ts",
});
