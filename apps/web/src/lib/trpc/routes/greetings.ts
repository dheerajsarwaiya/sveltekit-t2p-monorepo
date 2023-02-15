import { t } from '$lib/trpc/t';

export const greetings = t.router({
  greeting: t.procedure.query(async () => {
    // await delay(500); // 👈 simulate an expensive operation
    console.log('greeting is this the server?');
    return `Hello tRPC v10 @ ${new Date().toLocaleTimeString()}`;
  })
});
