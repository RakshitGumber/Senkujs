import type { ProjectSpec } from "./spec";
import type { FileGraph } from "./file";

export type Assembler = (files: FileGraph, spec: ProjectSpec) => void;
