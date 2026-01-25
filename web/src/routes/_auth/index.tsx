import Profile from "@/components/core/profile";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col p-4">
      <h1 className="text-3xl font-bold uppercase text-center py-4">
        Senku JS
      </h1>
      <Profile />
    </div>
  );
}
