import { createApp } from "@/lib/create-app";

const app = createApp();

app.get("/", (c) => {
  return c.text("OK");
});

export default app;
