import type { Assembler } from "@ts/assembler";

export const languageAssembler: Assembler = (files, spec) => {
  files.set(`src/main.${spec.language}`, {
    path: `src/main.${spec.language}`,
    content:
      spec.language === "ts"
        ? `const app = document.getElementById("root") as HTMLDivElement;`
        : `const app = document.getElementById("root");`,
  });

  if (spec.language === "ts") {
    files.set("tsconfig.json", {
      path: "tsconfig.json",
      content: JSON.stringify(
        {
          compilerOptions: {
            target: "ESNext",
            module: "ESNext",
            strict: true,
          },
        },
        null,
        2,
      ),
    });
  }
};
