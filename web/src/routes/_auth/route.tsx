import { useSession } from "@/hooks/useSession";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: session, isPending } = useSession();
  const navigate = Route.useNavigate();

  if (isPending) return <div>Loading</div>;

  if (session?.error || session === undefined) navigate({ to: "/orewa" });

  return <Outlet />;
}
