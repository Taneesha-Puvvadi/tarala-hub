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
 * Worksheets table for storing educational worksheet metadata
 * Actual PDF files are stored in S3, this table stores metadata and references
 */
export const worksheets = mysqlTable("worksheets", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  subject: mysqlEnum("subject", ["German", "Maths"]).notNull(),
  grade: int("grade").notNull(), // 2-5
  difficulty: mysqlEnum("difficulty", ["Easy", "Medium", "Hard"]).notNull(),
  fileKey: varchar("fileKey", { length: 512 }).notNull(), // S3 file key
  fileUrl: text("fileUrl").notNull(), // S3 presigned URL
  fileName: varchar("fileName", { length: 255 }).notNull(),
  mimeType: varchar("mimeType", { length: 100 }).default("application/pdf"),
  fileSize: int("fileSize"), // Size in bytes
  uploadedBy: int("uploadedBy").notNull(), // User ID who uploaded
  downloadCount: int("downloadCount").default(0),
  isPublished: int("isPublished").default(1), // 1 = published, 0 = draft
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Worksheet = typeof worksheets.$inferSelect;
export type InsertWorksheet = typeof worksheets.$inferInsert;

/**
 * Videos table for storing educational video metadata
 * Videos can be embedded from YouTube or stored in S3
 */
export const videos = mysqlTable("videos", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  subject: mysqlEnum("subject", ["German", "Maths"]).notNull(),
  grade: int("grade").notNull(), // 2-5
  difficulty: mysqlEnum("difficulty", ["Easy", "Medium", "Hard"]).notNull(),
  videoType: mysqlEnum("videoType", ["youtube", "s3", "external"]).notNull(), // Where video is hosted
  videoUrl: text("videoUrl").notNull(), // YouTube URL, S3 URL, or external URL
  youtubeId: varchar("youtubeId", { length: 100 }), // YouTube video ID if applicable
  thumbnailUrl: text("thumbnailUrl"), // Thumbnail image URL
  durationSeconds: int("durationSeconds"), // Video duration in seconds
  uploadedBy: int("uploadedBy").notNull(), // User ID who uploaded
  viewCount: int("viewCount").default(0),
  isPublished: int("isPublished").default(1), // 1 = published, 0 = draft
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Video = typeof videos.$inferSelect;
export type InsertVideo = typeof videos.$inferInsert;

/**
 * Games table for storing game metadata and configuration
 */
export const games = mysqlTable("games", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  subject: mysqlEnum("subject", ["German", "Maths"]).notNull(),
  grade: int("grade").notNull(), // 2-5
  gameType: mysqlEnum("gameType", [
    "vocabulary_match",
    "spelling_bee",
    "hangman",
    "quiz",
    "mental_math",
    "puzzle",
    "race",
    "fraction_master",
    "geometry",
  ]).notNull(),
  difficulty: mysqlEnum("difficulty", ["Easy", "Medium", "Hard"]).notNull(),
  gameUrl: text("gameUrl"), // URL to game if hosted externally
  isEmbedded: int("isEmbedded").default(0), // 1 = embedded in site, 0 = external link
  uploadedBy: int("uploadedBy").notNull(),
  playCount: int("playCount").default(0),
  averageScore: int("averageScore"), // Average score out of 100
  isPublished: int("isPublished").default(1),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Game = typeof games.$inferSelect;
export type InsertGame = typeof games.$inferInsert;

/**
 * Files table for storing general file uploads (not just worksheets)
 * Used for admin to manage various educational resources
 */
export const files = mysqlTable("files", {
  id: int("id").autoincrement().primaryKey(),
  fileName: varchar("fileName", { length: 255 }).notNull(),
  fileKey: varchar("fileKey", { length: 512 }).notNull(), // S3 file key
  fileUrl: text("fileUrl").notNull(), // S3 presigned URL
  mimeType: varchar("mimeType", { length: 100 }).notNull(),
  fileSize: int("fileSize"), // Size in bytes
  fileType: mysqlEnum("fileType", ["worksheet", "image", "video", "document", "other"]).notNull(),
  uploadedBy: int("uploadedBy").notNull(),
  downloadCount: int("downloadCount").default(0),
  isPublic: int("isPublic").default(1), // 1 = public, 0 = private
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type File = typeof files.$inferSelect;
export type InsertFile = typeof files.$inferInsert;

/**
 * Student progress table for tracking worksheet and game completion
 */
export const studentProgress = mysqlTable("studentProgress", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  worksheetId: int("worksheetId"),
  gameId: int("gameId"),
  videoId: int("videoId"),
  completionStatus: mysqlEnum("completionStatus", ["started", "in_progress", "completed"]).notNull(),
  score: int("score"), // Score out of 100 for games
  timeSpentSeconds: int("timeSpentSeconds"), // Time spent in seconds
  completedAt: timestamp("completedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type StudentProgress = typeof studentProgress.$inferSelect;
export type InsertStudentProgress = typeof studentProgress.$inferInsert;

/**
 * Admin logs table for tracking admin actions
 */
export const adminLogs = mysqlTable("adminLogs", {
  id: int("id").autoincrement().primaryKey(),
  adminId: int("adminId").notNull(),
  action: varchar("action", { length: 100 }).notNull(), // upload_worksheet, delete_video, etc
  resourceType: varchar("resourceType", { length: 50 }), // worksheet, video, game, file
  resourceId: int("resourceId"),
  details: text("details"), // JSON string with additional details
  ipAddress: varchar("ipAddress", { length: 50 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type AdminLog = typeof adminLogs.$inferSelect;
export type InsertAdminLog = typeof adminLogs.$inferInsert;