import Profile from "@/components/core/profile";
import Button from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/")({
  component: RouteComponent,
});

function RouteComponent() {
  const createProject = async () => {
    const res = await fetch("http://localhost:3000/create", {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error("Failed to download project");
    }

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `$first.zip`;
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col p-4">
      <h1 className="text-3xl font-bold uppercase text-center py-4">
        Senku JS
      </h1>
      <Profile />
      <Button
        className="bg-red-700 text-red-50 cursor-pointer"
        onClick={createProject}
      >
        Create
      </Button>
    </div>
  );
}
