import Profile from "@/components/core/profile";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import type { ProjectSpec } from "../../../../engine/src/spec";

export const Route = createFileRoute("/_auth/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [spec, setSpec] = useState<ProjectSpec>({
    name: "my-app",
    runtime: "browser",
    framework: "vanilla",
    language: "ts",
    styling: { type: "tailwind" },
    features: {
      externalApi: {
        client: "axios",
        envKeyName: "VITE_API_URL",
      },
    },
  });

  return (
    <div className="flex flex-col p-4">
      <h1 className="text-3xl font-bold uppercase text-center py-4">
        Senku JS
      </h1>
      <Profile />
      <select
        value={spec.language}
        onChange={(e) => setSpec({ ...spec, language: e.target.value as any })}
      >
        <option value="js">JavaScript</option>
        <option value="ts">TypeScript</option>
      </select>
    </div>
  );
}
