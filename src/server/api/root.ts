import { floorRouter } from "~/server/api/routers/floor";
import { roomRouter } from "~/server/api/routers/room";
import { hotspotRouter } from "~/server/api/routers/hotspot";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

export const appRouter = createTRPCRouter({
  floor: floorRouter,
  room: roomRouter,
  hotspot: hotspotRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
