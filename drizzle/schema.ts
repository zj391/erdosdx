import { mysqlTable, varchar, timestamp, int, text } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").primaryKey().autoincrement(),
  openId: varchar("openId", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }),
  role: varchar("role", { length: 50 }),
  loginMethod: varchar("loginMethod", { length: 50 }),
  lastSignedIn: timestamp("lastSignedIn"),
  createdAt: timestamp("createdAt").defaultNow(),
});

export const files = mysqlTable("files", {
  id: int("id").primaryKey().autoincrement(),
  userId: int("userId").notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  url: varchar("url", { length: 1024 }),
  size: int("size"),
  mimeType: varchar("mimeType", { length: 100 }),
  createdAt: timestamp("createdAt").defaultNow(),
});

export type InsertUser = typeof users.$inferInsert;
export type InsertFile = typeof files.$inferInsert;
