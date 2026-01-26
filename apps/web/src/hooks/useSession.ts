import { authClient } from "@/libs/better-auth/client";
import { useQuery } from "@tanstack/react-query";

export const useSession = () =>
  useQuery({
    queryKey: ["session"],
    queryFn: () => authClient.getSession(),
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
