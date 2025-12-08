import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: IndexRoute,
});

function IndexRoute() {
  return (
    <main>
      <h1 className="font-bold">Hello World</h1>
    </main>
  );
}
