import { emit } from "./src/emitter";
import type { ProjectSpec } from "./src/spec";

import type { FileGraph } from "./src/file";
import type { Assembler } from "./src/assembler";

import { baseAssembler } from "./assemblers/base";
import { languageAssembler } from "./assemblers/language";
import { stylingAssembler } from "./assemblers/styling";
import { externalApiAssembler } from "./assemblers/external-api";

export function buildProject(spec: ProjectSpec): FileGraph {
  const files: FileGraph = new Map();

  const pipeline: Assembler[] = [
    baseAssembler,
    languageAssembler,
    stylingAssembler,
    externalApiAssembler,
  ];

  for (const assembler of pipeline) {
    assembler(files, spec);
  }

  return files;
}

export async function generateProject(spec: ProjectSpec, outDir: string) {
  const files = buildProject(spec);
  await emit(files, outDir);
}

generateProject(
  {
    name: "First",

    runtime: "browser",

    framework: "vanilla",
    language: "ts",
    styling: { type: "tailwind" },
    features: {},
  },
  "D:/Projects/senkujs/first",
);
