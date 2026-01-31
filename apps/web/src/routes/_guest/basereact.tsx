import { createFileRoute } from "@tanstack/react-router";
import "./index.css";
import { useState } from "react";

export const Route = createFileRoute("/_guest/basereact")({
  component: RouteComponent,
});

function RouteComponent() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="app">
      <h1>Arigatou_ for using Senku JS</h1>
    </div>
  );
}
