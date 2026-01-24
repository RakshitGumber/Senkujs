import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/auth/login"!
      <Link to="/auth/signup">Singup</Link>
    </div>
  );
}
