import type { Assembler } from "@ts/assembler";

export const baseAssembler: Assembler = (files, spec) => {
  files.set("index.html", {
    path: "index.html",
    content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${spec.name}</title>

  <!-- STYLE_INJECT -->
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.${spec.language}"></script>
</body>
</html>`,
  });
};
