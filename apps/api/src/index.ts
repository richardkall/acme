import { cors } from "hono/cors";
import { createApp } from "./lib/create-app";
import health from "./routes/health";
import users from "./routes/users";

const app = createApp();

app.use("*", cors());

app.route("/health", health);
app.route("/users", users);

export default app;
