import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { storagePut } from "./storage";
import * as db from "./db";

export const appRouter = router({
  system: systemRouter,

  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Worksheets management
  worksheets: router({
    list: publicProcedure
      .input(z.object({ subject: z.string().optional(), grade: z.number().optional() }).optional())
      .query(async ({ input }) => {
        return db.getWorksheets({ ...input, isPublished: 1 });
      }),
    
    get: publicProcedure
      .input(z.number())
      .query(async ({ input }) => {
        return db.getWorksheetById(input);
      }),
    
    create: protectedProcedure
      .input(z.object({
        title: z.string(),
        description: z.string().optional(),
        subject: z.enum(["German", "Maths"]),
        grade: z.number(),
        difficulty: z.enum(["Easy", "Medium", "Hard"]),
        fileKey: z.string(),
        fileUrl: z.string(),
        fileName: z.string(),
        fileSize: z.number().optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== "admin") throw new Error("Unauthorized");
        return db.createWorksheet({
          ...input,
          uploadedBy: ctx.user.id,
          isPublished: 0,
        });
      }),
    
    update: protectedProcedure
      .input(z.object({
        id: z.number(),
        title: z.string().optional(),
        description: z.string().optional(),
        isPublished: z.number().optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== "admin") throw new Error("Unauthorized");
        const { id, ...data } = input;
        return db.updateWorksheet(id, data);
      }),
    
    delete: protectedProcedure
      .input(z.number())
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== "admin") throw new Error("Unauthorized");
        return db.deleteWorksheet(input);
      }),
  }),

  // Videos management
  videos: router({
    list: publicProcedure
      .input(z.object({ subject: z.string().optional(), grade: z.number().optional() }).optional())
      .query(async ({ input }) => {
        return db.getVideos({ ...input, isPublished: 1 });
      }),
    
    get: publicProcedure
      .input(z.number())
      .query(async ({ input }) => {
        return db.getVideoById(input);
      }),
    
    create: protectedProcedure
      .input(z.object({
        title: z.string(),
        description: z.string().optional(),
        subject: z.enum(["German", "Maths"]),
        grade: z.number(),
        difficulty: z.enum(["Easy", "Medium", "Hard"]),
        videoType: z.enum(["youtube", "s3", "external"]),
        videoUrl: z.string(),
        youtubeId: z.string().optional(),
        durationSeconds: z.number().optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== "admin") throw new Error("Unauthorized");
        return db.createVideo({
          ...input,
          uploadedBy: ctx.user.id,
          isPublished: 0,
        });
      }),
    
    update: protectedProcedure
      .input(z.object({
        id: z.number(),
        title: z.string().optional(),
        description: z.string().optional(),
        isPublished: z.number().optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== "admin") throw new Error("Unauthorized");
        const { id, ...data } = input;
        return db.updateVideo(id, data);
      }),
    
    delete: protectedProcedure
      .input(z.number())
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== "admin") throw new Error("Unauthorized");
        return db.deleteVideo(input);
      }),
  }),

  // Games management
  games: router({
    list: publicProcedure
      .input(z.object({ subject: z.string().optional(), grade: z.number().optional() }).optional())
      .query(async ({ input }) => {
        return db.getGames({ ...input, isPublished: 1 });
      }),
    
    get: publicProcedure
      .input(z.number())
      .query(async ({ input }) => {
        return db.getGameById(input);
      }),
    
    create: protectedProcedure
      .input(z.object({
        title: z.string(),
        description: z.string().optional(),
        subject: z.enum(["German", "Maths"]),
        grade: z.number(),
        gameType: z.enum(["vocabulary_match", "spelling_bee", "hangman", "quiz", "mental_math", "puzzle", "race", "fraction_master", "geometry"]),
        difficulty: z.enum(["Easy", "Medium", "Hard"]),
        gameUrl: z.string().optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== "admin") throw new Error("Unauthorized");
        return db.createGame({
          ...input,
          uploadedBy: ctx.user.id,
          isPublished: 0,
        });
      }),
    
    delete: protectedProcedure
      .input(z.number())
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== "admin") throw new Error("Unauthorized");
        return db.deleteGame(input);
      }),
  }),

  // File upload and management
  files: router({
    upload: protectedProcedure
      .input(z.object({
        fileName: z.string(),
        fileType: z.enum(["worksheet", "image", "video", "document", "other"]),
        mimeType: z.string(),
        fileData: z.string(),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== "admin") throw new Error("Unauthorized");
        
        const buffer = Buffer.from(input.fileData, "base64");
        const fileKey = `uploads/${ctx.user.id}/${Date.now()}-${input.fileName}`;
        
        const { url } = await storagePut(fileKey, buffer, input.mimeType);
        
        return db.createFile({
          fileName: input.fileName,
          fileKey,
          fileUrl: url,
          mimeType: input.mimeType,
          fileType: input.fileType,
          fileSize: buffer.length,
          uploadedBy: ctx.user.id,
          isPublic: 1,
        });
      }),
    
    list: publicProcedure
      .input(z.object({ fileType: z.string().optional() }).optional())
      .query(async ({ input }) => {
        return db.getFiles({ ...input, isPublic: 1 });
      }),
    
    get: publicProcedure
      .input(z.number())
      .query(async ({ input }) => {
        return db.getFileById(input);
      }),
    
    delete: protectedProcedure
      .input(z.number())
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== "admin") throw new Error("Unauthorized");
        return db.deleteFile(input);
      }),
  }),
});

export type AppRouter = typeof appRouter;

