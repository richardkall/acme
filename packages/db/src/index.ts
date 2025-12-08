import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

export function createClient(connectionString: string) {
  const client = postgres(connectionString);
  return drizzle(client, { casing: "snake_case", schema });
}

export type Database = ReturnType<typeof createClient>;

export * from "drizzle-orm";
export type * from "./schema";
export * as schema from "./schema";
