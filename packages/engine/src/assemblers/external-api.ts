import type { Assembler } from "../src/assembler";

export const externalApiAssembler: Assembler = (files, spec) => {
  const api = spec.features.externalApi;
  if (!api) return;

  files.set("src/api/client.ts", {
    path: "src/api/client.ts",
    content:
      api.client === "axios"
        ? `
import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.${api.envKeyName},
  timeout: 10000,
});
`.trim()
        : `
export async function apiFetch<T>(url: string): Promise<T> {
  const res = await fetch(import.meta.env.${api.envKeyName} + url);
  if (!res.ok) throw new Error("API Error");
  return res.json();
}
`.trim(),
  });

  files.set(".env.example", {
    path: ".env.example",
    content: `${api.envKeyName}=https://api.example.com`,
  });
};
