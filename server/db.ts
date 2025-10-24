import { eq, desc, and } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, worksheets, videos, games, files, studentProgress, adminLogs, InsertWorksheet, InsertVideo, InsertGame, InsertFile, InsertAdminLog } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Worksheet queries
export async function createWorksheet(data: InsertWorksheet) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.insert(worksheets).values(data);
  return result;
}

export async function getWorksheets(filters?: { subject?: string; grade?: number; isPublished?: number }) {
  const db = await getDb();
  if (!db) return [];
  
  const conditions = [];
  
  if (filters?.subject) conditions.push(eq(worksheets.subject, filters.subject as any));
  if (filters?.grade) conditions.push(eq(worksheets.grade, filters.grade));
  if (filters?.isPublished !== undefined) conditions.push(eq(worksheets.isPublished, filters.isPublished));
  
  let query = db.select().from(worksheets);
  if (conditions.length > 0) {
    query = query.where(and(...conditions)) as any;
  }
  
  return (query as any).orderBy(desc(worksheets.createdAt));
}

export async function getWorksheetById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(worksheets).where(eq(worksheets.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function updateWorksheet(id: number, data: Partial<InsertWorksheet>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.update(worksheets).set({ ...data, updatedAt: new Date() }).where(eq(worksheets.id, id));
}

export async function deleteWorksheet(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.delete(worksheets).where(eq(worksheets.id, id));
}

// Video queries
export async function createVideo(data: InsertVideo) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.insert(videos).values(data);
}

export async function getVideos(filters?: { subject?: string; grade?: number; isPublished?: number }) {
  const db = await getDb();
  if (!db) return [];
  
  const conditions = [];
  
  if (filters?.subject) conditions.push(eq(videos.subject, filters.subject as any));
  if (filters?.grade) conditions.push(eq(videos.grade, filters.grade));
  if (filters?.isPublished !== undefined) conditions.push(eq(videos.isPublished, filters.isPublished));
  
  let query = db.select().from(videos);
  if (conditions.length > 0) {
    query = query.where(and(...conditions)) as any;
  }
  
  return (query as any).orderBy(desc(videos.createdAt));
}

export async function getVideoById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(videos).where(eq(videos.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function updateVideo(id: number, data: Partial<InsertVideo>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.update(videos).set({ ...data, updatedAt: new Date() }).where(eq(videos.id, id));
}

export async function deleteVideo(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.delete(videos).where(eq(videos.id, id));
}

// Game queries
export async function createGame(data: InsertGame) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.insert(games).values(data);
}

export async function getGames(filters?: { subject?: string; grade?: number; isPublished?: number }) {
  const db = await getDb();
  if (!db) return [];
  
  const conditions = [];
  
  if (filters?.subject) conditions.push(eq(games.subject, filters.subject as any));
  if (filters?.grade) conditions.push(eq(games.grade, filters.grade));
  if (filters?.isPublished !== undefined) conditions.push(eq(games.isPublished, filters.isPublished));
  
  let query = db.select().from(games);
  if (conditions.length > 0) {
    query = query.where(and(...conditions)) as any;
  }
  
  return (query as any).orderBy(desc(games.createdAt));
}

export async function getGameById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(games).where(eq(games.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function updateGame(id: number, data: Partial<InsertGame>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.update(games).set({ ...data, updatedAt: new Date() }).where(eq(games.id, id));
}

export async function deleteGame(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.delete(games).where(eq(games.id, id));
}

// File queries
export async function createFile(data: InsertFile) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.insert(files).values(data);
}

export async function getFiles(filters?: { fileType?: string; isPublic?: number }) {
  const db = await getDb();
  if (!db) return [];
  
  const conditions = [];
  
  if (filters?.fileType) conditions.push(eq(files.fileType, filters.fileType as any));
  if (filters?.isPublic !== undefined) conditions.push(eq(files.isPublic, filters.isPublic));
  
  let query = db.select().from(files);
  if (conditions.length > 0) {
    query = query.where(and(...conditions)) as any;
  }
  
  return (query as any).orderBy(desc(files.createdAt));
}

export async function getFileById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(files).where(eq(files.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function updateFile(id: number, data: Partial<InsertFile>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.update(files).set({ ...data, updatedAt: new Date() }).where(eq(files.id, id));
}

export async function deleteFile(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.delete(files).where(eq(files.id, id));
}

// Admin log queries
export async function createAdminLog(data: InsertAdminLog) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.insert(adminLogs).values(data);
}
