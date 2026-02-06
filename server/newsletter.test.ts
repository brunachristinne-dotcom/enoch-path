import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("newsletter.subscribe", () => {
  it("allows public users to subscribe with valid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.newsletter.subscribe({
      email: "test@example.com",
      name: "Test User",
    });

    expect(result).toEqual({ success: true });
  });

  it("allows subscription without name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.newsletter.subscribe({
      email: "anonymous@example.com",
    });

    expect(result).toEqual({ success: true });
  });
});

describe("feedback.submit", () => {
  it("allows public users to submit feedback", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.feedback.submit({
      message: "Great game concept!",
      rating: 5,
    });

    expect(result).toHaveProperty("success", true);
    expect(result).toHaveProperty("id");
  });

  it("allows feedback with optional fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.feedback.submit({
      name: "John Doe",
      email: "john@example.com",
      message: "Looking forward to the release!",
      rating: 4,
    });

    expect(result).toHaveProperty("success", true);
    expect(result).toHaveProperty("id");
  });
});

describe("stats.track", () => {
  it("allows tracking page visits", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.stats.track({
      page: "/",
      userAgent: "Mozilla/5.0",
      referrer: "https://google.com",
    });

    expect(result).toEqual({ success: true });
  });
});
