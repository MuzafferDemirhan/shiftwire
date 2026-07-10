import { useEffect } from "react";
import { useThemeStore } from "../stores/themeStore.js";

export default function ThemeProvider({ children }) {
  const { theme } = useThemeStore();

  useEffect(() => {
    const isDark =
      theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
        : theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
  }, [theme]);

  useEffect(() => {
    if (theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      document.documentElement.classList.toggle("dark", mq.matches);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [theme]);

  return children;
}
