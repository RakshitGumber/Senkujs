import fs from "fs/promises";
import path from "path";
import type { FileGraph } from "./file";

export async function emit(files: FileGraph, outDir: string) {
  for (const file of files.values()) {
    const full = path.join(outDir, file.path);
    await fs.mkdir(path.dirname(full), { recursive: true });
    await fs.writeFile(full, file.content);
  }
}
