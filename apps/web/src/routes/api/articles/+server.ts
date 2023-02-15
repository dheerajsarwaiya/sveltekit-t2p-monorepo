import { initTRPC } from '@trpc/server';
// import delay from 'delay';

export const t = initTRPC.create();

export const articleRouter = t.router({
  serverGreeting: t.procedure.query(async () => {
    // await delay(500); // 👈 simulate an expensive operation
    return `Hello tRPC from sveltekit server ${new Date().toLocaleTimeString()}`;
  })
});

export type Router = typeof articleRouter;
