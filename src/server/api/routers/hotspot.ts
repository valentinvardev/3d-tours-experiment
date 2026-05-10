import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const hotspotRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        fromRoomId: z.string(),
        toRoomId: z.string(),
        yaw: z.number(),
        pitch: z.number(),
        label: z.string().optional(),
      }),
    )
    .mutation(({ ctx, input }) =>
      ctx.db.hotspot.create({ data: input }),
    ),

  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        toRoomId: z.string().optional(),
        yaw: z.number().optional(),
        pitch: z.number().optional(),
        label: z.string().nullable().optional(),
      }),
    )
    .mutation(({ ctx, input: { id, ...data } }) =>
      ctx.db.hotspot.update({ where: { id }, data }),
    ),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) =>
      ctx.db.hotspot.delete({ where: { id: input.id } }),
    ),
});
