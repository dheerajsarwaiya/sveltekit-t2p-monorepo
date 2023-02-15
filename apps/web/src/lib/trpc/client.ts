// lib/trpc/client.ts
import type { Router } from '$lib/trpc/router';
import { dev } from '$app/environment';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

// import { createTRPCClient, type TRPCClientInit } from 'trpc-sveltekit';

// let browserClient: ReturnType<typeof createTRPCClient<Router>>;

// export function trpc(init?: TRPCClientInit) {
//   const client = createTRPCClient<Router>({ init });
//   if (typeof window === 'undefined') return client;
//   if (!browserClient) browserClient = client;
//   return browserClient;
// }

export const trpc = createTRPCProxyClient<Router>({
  links: [
    httpBatchLink({
      // url is dependent on the environment
      // in dev, we use localhost
      // in prod, we use the public domain
      url: dev ? 'http://localhost:3002/api/trpc' : `https://example.com/api/trpc`
    })
  ]
});
