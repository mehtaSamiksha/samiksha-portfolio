
import { useState, useEffect, useCallback } from "react";

const THEME_KEY = "theme-mode";
type Theme = "light" | "dark";

export function useTheme() {
  const getInitialTheme = (): Theme => {
    // Prefer system if no localStorage preference
    if (typeof window === "undefined") return "light";
    const saved = localStorage.getItem(THEME_KEY) as Theme | null;
    if (saved === "dark" || saved === "light") return saved;
    // System theme
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    // Set the class on the root html element
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    // Save to localStorage
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  // Transition effect on theme change
  const applyTransition = useCallback(() => {
    const root = window.document.documentElement;
    root.classList.add("theme-transition");
    window.setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 300);
  }, []);

  const toggleTheme = () => {
    applyTransition();
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}
