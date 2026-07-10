import { create } from "zustand";

function getSystemTheme() {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getInitialTheme() {
  try {
    const stored = localStorage.getItem("shiftwire-theme");
    if (stored === "light" || stored === "dark" || stored === "system")
      return stored;
  } catch {
    // localStorage unavailable
  }
  return "system";
}

function applyTheme(theme) {
  const resolved = theme === "system" ? getSystemTheme() : theme;
  document.documentElement.classList.toggle("dark", resolved === "dark");
}

export const useThemeStore = create((set, get) => {
  const initial = getInitialTheme();
  applyTheme(initial);

  if (initial === "system") {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", () => {
      if (get().theme === "system") applyTheme("system");
    });
  }

  return {
    theme: initial,
    setTheme: (theme) => {
      applyTheme(theme);
      try {
        localStorage.setItem("shiftwire-theme", theme);
      } catch {
        // localStorage unavailable
      }
      set({ theme });
    },
  };
});
