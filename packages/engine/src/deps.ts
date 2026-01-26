import type { ProjectSpec } from "./spec";

export function resolveDeps(spec: ProjectSpec): string[] {
  const deps = new Set<string>();

  if (spec.features.externalApi?.client === "axios") {
    deps.add("axios");
  }

  if (spec.styling.type === "tailwind") {
    deps.add("tailwindcss");
  }

  return [...deps];
}
