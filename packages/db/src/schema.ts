import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

function timestamptz() {
  return timestamp({ precision: 3, withTimezone: true });
}

const timestamps = {
  createdAt: timestamptz().notNull().defaultNow(),
  updatedAt: timestamptz().notNull().defaultNow(),
};

export const user = pgTable("user", {
  id: uuid().primaryKey().defaultRandom(),
  name: text(),
  email: text().unique().notNull(),
  ...timestamps,
});

export type User = typeof user.$inferSelect;
export type NewUser = typeof user.$inferInsert;
