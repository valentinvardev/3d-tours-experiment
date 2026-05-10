import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const floorRouter = createTRPCRouter({
  list: publicProcedure.query(({ ctx }) =>
    ctx.db.floor.findMany({
      orderBy: { order: "asc" },
      include: { rooms: { orderBy: { name: "asc" } } },
    }),
  ),

  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) =>
      ctx.db.floor.findUnique({
        where: { id: input.id },
        include: { rooms: { orderBy: { name: "asc" } } },
      }),
    ),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1), order: z.number().int().default(0) }))
    .mutation(({ ctx, input }) =>
      ctx.db.floor.create({ data: input }),
    ),

  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().min(1).optional(),
        order: z.number().int().optional(),
        mapImagePath: z.string().nullable().optional(),
        mapWidth: z.number().int().nullable().optional(),
        mapHeight: z.number().int().nullable().optional(),
      }),
    )
    .mutation(({ ctx, input: { id, ...data } }) =>
      ctx.db.floor.update({ where: { id }, data }),
    ),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) =>
      ctx.db.floor.delete({ where: { id: input.id } }),
    ),
});
