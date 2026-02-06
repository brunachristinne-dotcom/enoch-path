import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Newsletter subscribers table
 * Stores email addresses of users who want to receive updates about Enoch Path
 */
export const newsletter = mysqlTable("newsletter", {
  id: int("id").autoincrement().primaryKey(),
  email: varchar("email", { length: 320 }).notNull().unique(),
  name: varchar("name", { length: 255 }),
  subscribedAt: timestamp("subscribedAt").defaultNow().notNull(),
  isActive: int("isActive").default(1).notNull(), // 1 = active, 0 = unsubscribed
});

export type Newsletter = typeof newsletter.$inferSelect;
export type InsertNewsletter = typeof newsletter.$inferInsert;

/**
 * Feedback table
 * Stores user feedback about the game/website
 */
export const feedback = mysqlTable("feedback", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 320 }),
  message: text("message").notNull(),
  rating: int("rating"), // Optional 1-5 rating
  submittedAt: timestamp("submittedAt").defaultNow().notNull(),
  userId: int("userId"), // Optional link to user if authenticated
});

export type Feedback = typeof feedback.$inferSelect;
export type InsertFeedback = typeof feedback.$inferInsert;

/**
 * Page visit statistics table
 * Tracks page visits for analytics
 */
export const pageVisits = mysqlTable("pageVisits", {
  id: int("id").autoincrement().primaryKey(),
  page: varchar("page", { length: 255 }).notNull(),
  userAgent: text("userAgent"),
  referrer: text("referrer"),
  visitedAt: timestamp("visitedAt").defaultNow().notNull(),
  userId: int("userId"), // Optional link to user if authenticated
});

export type PageVisit = typeof pageVisits.$inferSelect;
export type InsertPageVisit = typeof pageVisits.$inferInsert;