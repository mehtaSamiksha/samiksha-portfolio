
import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
      className="
        rounded-full p-2
        transition-colors duration-300
        bg-transparent hover:bg-accent/40 focus:outline-none
        border border-transparent hover:border-portfolio-primary
        flex items-center justify-center
        "
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-gray-900" />
      )}
      <span className="sr-only">Toggle dark mode</span>
    </button>
  );
}
