declare module "bun" {
  interface Env {
    DB_FILE_NAME: string;
    GITHUB_CLIENT_ID: string;
    GITHUB_CLIENT_SECRET: string;
  }
}
