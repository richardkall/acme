import type { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Link,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import styles from "../globals.css?url";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        {
          charSet: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          title: "Acme",
        },
      ],
      links: [
        {
          rel: "stylesheet",
          href: styles,
        },
      ],
    }),
    shellComponent: RootDocument,
    component: RootComponent,
  },
);

type RootDocumentProps = {
  children: React.ReactNode;
};

function RootDocument({ children }: RootDocumentProps) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <nav className="flex gap-4">
        <Link
          to="/"
          className="text-blue-600"
          activeProps={{ className: "font-bold" }}
        >
          Home
        </Link>
        <Link
          to="/users"
          className="text-blue-600"
          activeProps={{ className: "font-bold" }}
        >
          Users
        </Link>
      </nav>
      <Outlet />
    </>
  );
}
