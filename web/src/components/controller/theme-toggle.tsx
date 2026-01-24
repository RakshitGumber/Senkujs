import { Icon } from "@iconify/react";
import { useTheme } from "@/hooks/useTheme";
import Button from "../ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="inline-flex items-center justify-center rounded-md border border-input bg-background p-2 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
    >
      <Icon
        icon="fa:sun-o"
        className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Icon
        icon="fa:moon-o"
        className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
    </Button>
  );
}
