import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: (() => {
    try {
      const stored = localStorage.getItem("shiftwire-theme");
      if (stored === "light" || stored === "dark" || stored === "system")
        return stored;
    } catch {}
    return "system";
  })(),

  setTheme: (theme) => {
    try {
      localStorage.setItem("shiftwire-theme", theme);
    } catch {}
    set({ theme });
  },
}));
