import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/auth/success")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate({ to: "/dashboard" });
  }, []);

  return <div>Hello "/auth/success"!</div>;
}
