import { ThemeToggle } from "@/components/controller/theme-toggle";
import Button from "@/components/ui/button";
import { useAuthStore } from "@/store/useAuthStore";
import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, fetchUser } = useAuthStore();

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <nav className="h-16 w-full border-b border-gray-400 flex items-center justify-between px-8">
      <ul className="flex"></ul>
      <div className="flex gap-4">
        {!user ? (
          <Button
            className="bg-green-300 py-1 px-4 rounded font-bold text-green-800 shadow-lg hover:bg-green-200 cursor-pointer hover:text-green-600 hover:shadow-sm"
            onClick={() => navigate({ to: "/auth/login" })}
          >
            Login
          </Button>
        ) : (
          <div>
            <img src={user.avatarUrl} />
            <h2>{user.username}</h2>
          </div>
        )}
        <ThemeToggle />
      </div>
    </nav>
  );
};
export default Navbar;
