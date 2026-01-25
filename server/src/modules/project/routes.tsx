import { Elysia } from "elysia";
import { generateProject } from "../../../../engine";
import { zipDir } from "../utils/zip";
import { ProjectSpec } from "../../../../engine/src/spec";

export const createProject = new Elysia().post(
  "/projects",
  async ({ body, set }) => {
    const spec = body as ProjectSpec;

    const outDir = `/tmp/${crypto.randomUUID()}`;
    await generateProject(spec, outDir);

    const zipPath = `${outDir}.zip`;
    await zipDir(outDir, zipPath);

    set.headers["Content-Type"] = "application/zip";
    set.headers["Content-Disposition"] =
      `attachment; filename=${spec.name}.zip`;

    return Bun.file(zipPath);
  },
);
