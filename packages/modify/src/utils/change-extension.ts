import path from "path";
import fs from "fs/promises";

export const changeExtension = async (filePath: string, to: string) => {
  const absolutePath = path.resolve(filePath);

  const dir = path.dirname(absolutePath);
  const base = path.basename(absolutePath, path.extname(absolutePath));
  const ext = to.startsWith(".") ? to : `.${to}`;

  const newPath = path.join(dir, `${base}${ext}`);

  await fs.rename(absolutePath, newPath);
  return newPath;
};
