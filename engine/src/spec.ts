export interface ProjectSpec {
  name: string;

  runtime: "browser";
  framework: "vanilla" | "react";
  language: "js" | "ts";

  styling: {
    type: "css" | "scss" | "tailwind";
  };

  features: {
    externalApi?: {
      client: "fetch" | "axios";
      envKeyName: string;
    };

    state?: "none" | "zustand";
  };
}
