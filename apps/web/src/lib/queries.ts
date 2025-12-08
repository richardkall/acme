import { queryOptions } from "@tanstack/react-query";

export type User = {
  id: string;
  name: string | null;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type UsersResponse = {
  users: User[];
};

export const usersQueryOptions = queryOptions({
  queryKey: ["users"],
  queryFn: async (): Promise<UsersResponse> => {
    const response = await fetch(
      "https://acme-api.richardkall.workers.dev/users",
    );
    if (!response.ok) {
      console.log(`${response.status}: ${response.statusText}`);
      throw new Error("Failed to fetch users");
    }
    return response.json();
  },
});
