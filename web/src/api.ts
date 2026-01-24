import { treaty } from "@elysiajs/eden";
import type { App } from "../../server/src";

// @ts-ignore
export const api = treaty<App>("localhost:3000");
