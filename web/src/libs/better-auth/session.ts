import { authClient } from "./client";

export async function getSessionFn(): Promise<any | null> {
  const session = await authClient.getSession();
  return session.data;
}
