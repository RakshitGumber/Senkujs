import { ThemeToggle } from "@/components/controller/theme-toggle";
import Button from "@/components/ui/button";
import { authClient } from "@/libs/better-auth/client";

const Navbar = () => {
  const signIn = async () => {
    await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <nav className="h-16 w-full border-b border-gray-400 flex items-center justify-between px-8">
      <ul className="flex"></ul>
      <div className="flex gap-4">
        <Button
          className="bg-green-300 py-1 px-4 rounded font-bold text-green-800 shadow-lg hover:bg-green-200 cursor-pointer hover:text-green-600 hover:shadow-sm"
          onClick={() => signIn()}
        >
          Login
        </Button>

        <ThemeToggle />
      </div>
    </nav>
  );
};
export default Navbar;
