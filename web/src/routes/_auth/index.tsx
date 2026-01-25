import { authClient } from "@/libs/better-auth/client";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: user } = authClient.useSession();

  return (
    <div>
      <h1>Hello {user?.user.name}</h1>
      <img src={user?.user.image!} alt="Wow" />
    </div>
  );
}
