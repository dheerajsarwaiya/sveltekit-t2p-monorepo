import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import type { Handle } from '@sveltejs/kit';
import { createTRPCHandle } from 'trpc-sveltekit';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

const trpcPathBase = '/api/trpc';

export const handle: Handle = async ({ event, resolve }) => {
  if (event.url.pathname.startsWith(`${trpcPathBase}/`)) {
    const response = await fetchRequestHandler({
      endpoint: trpcPathBase,
      req: event.request,
      router: router,
      createContext() {
        return {
          req: event.request
        };
      }
    });

    return response;
  }

  return await resolve(event);
};

// export const handle: Handle = createTRPCHandle({
//   router,
//   createContext,
//   onError: ({ type, path, error }) =>
//     console.error(`Encountered error while trying to process ${type} @ ${path}:`, error)
// });
