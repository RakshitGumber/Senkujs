import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  beforeLoad: () => {},
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Outlet />
    </>
  );
}
