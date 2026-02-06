import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";
import { TRPCError } from "@trpc/server";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
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

  // Newsletter router
  newsletter: router({
    subscribe: publicProcedure
      .input(z.object({
        email: z.string().email(),
        name: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        return await db.subscribeToNewsletter(input);
      }),
    
    unsubscribe: publicProcedure
      .input(z.object({
        email: z.string().email(),
      }))
      .mutation(async ({ input }) => {
        return await db.unsubscribeFromNewsletter(input.email);
      }),
    
    list: protectedProcedure
      .query(async ({ ctx }) => {
        // Only admin can list subscribers
        if (ctx.user.role !== 'admin') {
          throw new TRPCError({ code: 'FORBIDDEN', message: 'Admin access required' });
        }
        return await db.getAllNewsletterSubscribers();
      }),
  }),

  // Feedback router
  feedback: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().optional(),
        email: z.string().email().optional(),
        message: z.string().min(1),
        rating: z.number().min(1).max(5).optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        return await db.submitFeedback({
          ...input,
          userId: ctx.user?.id,
        });
      }),
    
    list: protectedProcedure
      .query(async ({ ctx }) => {
        // Only admin can list feedback
        if (ctx.user.role !== 'admin') {
          throw new TRPCError({ code: 'FORBIDDEN', message: 'Admin access required' });
        }
        return await db.getAllFeedback();
      }),
    
    delete: protectedProcedure
      .input(z.object({
        id: z.number(),
      }))
      .mutation(async ({ input, ctx }) => {
        // Only admin can delete feedback
        if (ctx.user.role !== 'admin') {
          throw new TRPCError({ code: 'FORBIDDEN', message: 'Admin access required' });
        }
        return await db.deleteFeedback(input.id);
      }),
  }),

  // Statistics router
  stats: router({
    track: publicProcedure
      .input(z.object({
        page: z.string(),
        userAgent: z.string().optional(),
        referrer: z.string().optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        return await db.trackPageVisit({
          ...input,
          userId: ctx.user?.id,
        });
      }),
    
    get: protectedProcedure
      .query(async ({ ctx }) => {
        // Only admin can view stats
        if (ctx.user.role !== 'admin') {
          throw new TRPCError({ code: 'FORBIDDEN', message: 'Admin access required' });
        }
        return await db.getPageVisitStats();
      }),
  }),
});

export type AppRouter = typeof appRouter;
