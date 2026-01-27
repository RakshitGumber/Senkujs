import { ThemeToggle } from "@/components/controller/theme-toggle";
import { authClient } from "@/libs/better-auth/client";
import Button from "../ui/button";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const signIn = async () => {
    await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <nav className="flex items-center justify-between w-screen h-24 border-b border-slate-800 p-8">
      <div className="cursor-pointer px-4 py-2 rounded-sm hover:bg-slate-900">
        <h1 className="font-heading font-bold text-3xl">Senku JS</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-end gap-4">
          <a href="https://github.com/RakshitGumber/Senkujs" target="_blank">
            <Icon icon="fa:github" className="text-2xl" />
          </a>
          <ThemeToggle />
        </div>
        <Button
          className="bg-accent text-background font-body font-bold uppercase px-4 py-2 rounded-xl"
          onClick={() => signIn()}
        >
          Log In
        </Button>
      </div>
    </nav>
  );
};
export default Navbar;
