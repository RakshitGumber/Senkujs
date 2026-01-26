import type { Assembler } from "@ts/assembler";

export const stylingAssembler: Assembler = (files, spec) => {
  if (spec.styling.type === "tailwind") {
    const html = files.get("index.html")!;
    html.content = html.content.replace(
      "<!-- STYLE_INJECT -->",
      `<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>`,
    );
  }

  if (spec.styling.type === "css") {
    files.set("src/style.css", {
      path: "src/style.css",
      content:
        "body { margin: 0; padding: 0; font-family: sans-serif; box-sizing: border-box }",
    });

    const html = files.get("index.html")!;
    html.content = html.content.replace(
      "<!-- STYLE_INJECT -->",
      `<link rel="stylesheet" href="./src/style.css">`,
    );
  }
};
