import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <a href="http://localhost:3000/auth/github">
        <button>Login with GitHub</button>
      </a>
      <Link to="/auth/signup">Singup</Link>
    </div>
  );
}
