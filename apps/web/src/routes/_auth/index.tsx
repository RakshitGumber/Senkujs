import Profile from "@/components/core/profile";
import Button from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/_auth/")({
  component: RouteComponent,
});

interface ProjectConfigs {
  scope?: "frontend" | "backend" | "fullstack";
  framework?: "vanilla" | "react";
  language?: "ts" | "js";
  style?: "css" | "tailwind";
}

function RouteComponent() {
  const [projectSpecs, setProjectSpecs] = useState<ProjectConfigs>();

  const createProject = async () => {
    console.log(projectSpecs);

    // const res = await fetch("http://localhost:3000/create", {
    //   method: "GET",
    // });
    // if (!res.ok) {
    //   throw new Error("Failed to download project");
    // }
    // const blob = await res.blob();
    // const url = URL.createObjectURL(blob);
    // const a = document.createElement("a");
    // a.href = url;
    // a.download = `$first.zip`;
    // a.click();
    // URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col p-2 gap-4">
      <h1 className="text-3xl font-bold font-heading text-center py-4">
        Senku JS
      </h1>
      <Profile />
      <section
        className="h-[70vh] w-4/5 mx-auto overflow-y-scroll flex flex-col items-center justify-start
      "
      >
        {/* <div className="w-full flex flex-col gap-2 border-b border-gray-400 pb-4 pt-2">
          <h1 className="font-bold font-heading">Scope</h1>
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <input
                type="radio"
                name="scope"
                value="frontend"
                onChange={() =>
                  setProjectSpecs({ ...projectSpecs, scope: "frontend" })
                }
              />
              <span>Frontend</span>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="radio"
                name="scope"
                value="backend"
                onChange={() =>
                  setProjectSpecs({ ...projectSpecs, scope: "backend" })
                }
              />
              <span>Backend</span>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="radio"
                name="scope"
                value="fullstack"
                onChange={() =>
                  setProjectSpecs({ ...projectSpecs, scope: "fullstack" })
                }
              />
              <span>Fullstack</span>
            </div>
          </div>
        </div> */}
        <div className="w-full flex flex-col gap-2 border-b border-gray-400 pb-4 pt-2">
          <h1 className="font-bold font-heading">Frontend Framework</h1>
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <input
                type="radio"
                name="scope"
                value="vanilla"
                onChange={() =>
                  setProjectSpecs({
                    ...projectSpecs,
                    framework: "vanilla",
                  })
                }
              />
              <span>Vanilla</span>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="radio"
                name="scope"
                value="react"
                onChange={() =>
                  setProjectSpecs({
                    ...projectSpecs,
                    framework: "react",
                  })
                }
              />
              <span>React</span>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 border-b border-gray-400 pb-4 pt-2">
          <h1 className="font-bold font-heading">Scripting Language</h1>
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <input
                type="radio"
                name="scope"
                value="ts"
                onChange={() =>
                  setProjectSpecs({
                    ...projectSpecs,
                    language: "ts",
                  })
                }
              />
              <span>TypeScript</span>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="radio"
                name="scope"
                value="js"
                onChange={() =>
                  setProjectSpecs({
                    ...projectSpecs,
                    language: "js",
                  })
                }
              />
              <span>JavaScript</span>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 border-b border-gray-400 pb-4 pt-2">
          <h1 className="font-bold font-heading">Style</h1>
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <input
                type="radio"
                name="scope"
                value="ts"
                onChange={() =>
                  setProjectSpecs({
                    ...projectSpecs,
                    style: "css",
                  })
                }
              />
              <span>CSS</span>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="radio"
                name="scope"
                value="tailwind"
                onChange={() =>
                  setProjectSpecs({
                    ...projectSpecs,
                    style: "tailwind",
                  })
                }
              />
              <span>TailwindCSS</span>
            </div>
          </div>
        </div>
      </section>
      <Button
        className="bg-red-700 text-red-50 cursor-pointer"
        onClick={createProject}
      >
        Create
      </Button>
    </div>
  );
}
