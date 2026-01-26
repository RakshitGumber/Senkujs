import type { Assembler } from "@ts/assembler";

export const stylingAssembler: Assembler = (files, spec) => {
  if (spec.styling.type === "tailwind") {
    files.set("src/style.css", {
      path: "src/style.css",
      content: "@tailwind base;\n@tailwind components;\n@tailwind utilities;",
    });

    const html = files.get("index.html")!;
    html.content = html.content.replace(
      "<!-- STYLE_INJECT -->",
      `<script src="https://cdn.tailwindcss.com"></script>`,
    );
  }

  if (spec.styling.type === "css") {
    files.set("src/style.css", {
      path: "src/style.css",
      content: "body { margin: 0; font-family: sans-serif; }",
    });
  }
};
