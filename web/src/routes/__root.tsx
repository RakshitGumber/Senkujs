import { authClient } from "@/libs/better-auth/client";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";

export const Route = createRootRouteWithContext<{
  queryClient: any;
}>()({
  beforeLoad: async ({ context }) => {
    await context.queryClient.ensureQueryData({
      queryKey: ["session"],
      queryFn: authClient.getSession,
    });
  },
  component: () => <Outlet />,
});
