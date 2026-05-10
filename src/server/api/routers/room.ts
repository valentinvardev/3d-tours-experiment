import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const roomRouter = createTRPCRouter({
  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) =>
      ctx.db.room.findUnique({
        where: { id: input.id },
        include: {
          floor: true,
          hotspotsFrom: { include: { toRoom: true } },
        },
      }),
    ),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1), floorId: z.string() }))
    .mutation(({ ctx, input }) =>
      ctx.db.room.create({ data: input }),
    ),

  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().min(1).optional(),
        panoramaPath: z.string().nullable().optional(),
        cubemapPaths: z.array(z.string()).length(6).nullable().optional(),
        boxX: z.number().nullable().optional(),
        boxY: z.number().nullable().optional(),
        boxWidth: z.number().nullable().optional(),
        boxHeight: z.number().nullable().optional(),
        defaultYaw: z.number().nullable().optional(),
        defaultPitch: z.number().nullable().optional(),
      }),
    )
    .mutation(({ ctx, input: { id, cubemapPaths, ...rest } }) =>
      ctx.db.room.update({
        where: { id },
        data: {
          ...rest,
          ...(cubemapPaths !== undefined && {
            cubemapPaths: cubemapPaths
              ? JSON.stringify(cubemapPaths)
              : null,
          }),
        },
      }),
    ),

  setStart: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.room.updateMany({ data: { isStart: false }, where: {} });
      return ctx.db.room.update({
        where: { id: input.id },
        data: { isStart: true },
      });
    }),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) =>
      ctx.db.room.delete({ where: { id: input.id } }),
    ),
});
