const scriptInstanceId = crypto.randomUUID();

Deno.serve((req: Request) => new Response(`Hello Lambda from GitHub! ID=${scriptInstanceId}`));
