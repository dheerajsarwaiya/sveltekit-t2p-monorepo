import type { Context } from './context';
import { initTRPC } from '@trpc/server';
// import delay from 'delay';

export const t = initTRPC.context<Context>().create();
