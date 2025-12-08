import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { usersQueryOptions } from "@/lib/queries";

export const Route = createFileRoute("/users")({
  loader: async ({ context }) => {
    await context.queryClient.ensureQueryData(usersQueryOptions);
  },
  component: UsersRoute,
});

function UsersRoute() {
  const { data } = useSuspenseQuery(usersQueryOptions);

  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>email</th>
            <th>createdAt</th>
          </tr>
        </thead>
        <tbody>
          {data.users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
