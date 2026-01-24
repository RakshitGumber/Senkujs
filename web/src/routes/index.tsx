import Navbar from "@/components/core/navbar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Navbar />
      <main className="flex w-screen">
        <section
          id="hero"
          className="flex justify-center items-center h-125 w-full"
        >
          <h1 className="text-2xl font-bold">
            Create your next website in few CLICKS...
          </h1>
        </section>
      </main>
    </div>
  );
}
