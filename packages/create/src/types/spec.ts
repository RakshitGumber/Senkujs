export interface ProjectSpec {
  name: string;

  runtime: "browser";
  // framework: "vanilla" | "react";
  framework: "vanilla";
  language: "js" | "ts";

  styling: {
    // type: "css" | "scss" | "tailwind";
    type: "css" | "tailwind";
  };

  // features: {
  //   externalApi?: {
  //     client: "fetch" | "axios";
  //     envKeyName: string;
  //   };

  //   state?: "none" | "zustand";
  // };
}
