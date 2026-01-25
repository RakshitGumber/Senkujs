import type { Assembler } from "../src/assembler";
import type { FileGraph, FileNode } from "../src/file";
import type { ProjectSpec } from "../src/spec";

export const baseAssembler: Assembler = (files, spec) => {
  files.set("index.html", {
    path: "index.html",
    content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${spec.name}</title>
</head>
<body>
  <div id="app"></div>
  <!-- STYLE_INJECT -->
  <script type="module" src="/src/main.${spec.language}"></script>
</body>
</html>`,
  });
};
