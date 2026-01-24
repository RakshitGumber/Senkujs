import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/auth/signup"!
      <Link to="/auth/login">Login</Link>
    </div>
  );
}
