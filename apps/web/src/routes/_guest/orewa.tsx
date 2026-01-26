import Navbar from "@/components/core/navbar";

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_guest/orewa")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col w-screen items-center gap-16 p-16">
        <section id="hero" className="flex justify-center items-center w-full">
          <h1 className="text-2xl font-bold">
            Create your next website in few CLICKS...
          </h1>
        </section>
      </main>
    </div>
  );
}
