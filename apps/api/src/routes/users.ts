import { createClient, type NewUser, schema } from "@acme/db";
import { createApp } from "@/lib/create-app";

const app = createApp();

app.get("/", async (c) => {
  const db = createClient(c.env.HYPERDRIVE.connectionString);
  const users = await db.query.user.findMany();
  return c.json({ users });
});

app.post("/", async (c) => {
  const db = createClient(c.env.HYPERDRIVE.connectionString);
  const body: NewUser = await c.req.json();
  if (!body.email) {
    return c.json({ error: "Email is required" }, 400);
  }
  const [user] = await db
    .insert(schema.user)
    .values({
      name: body.name,
      email: body.email,
    })
    .returning();
  return c.json({ user });
});

export default app;
