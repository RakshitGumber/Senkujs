import { authClient } from "@/libs/better-auth/client";
import { createFileRoute, Navigate, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  if (!session?.user) {
    // Redirect to landing page if not authenticated
    return <Navigate to="/orewa" replace />;
  }

  return <Outlet />;
}
