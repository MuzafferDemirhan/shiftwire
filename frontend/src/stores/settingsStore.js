import { create } from "zustand";
import api from "../lib/axios.js";

const defaultSettings = {
  theme: "system",
  fontSize: "md",
  bubbleStyle: "rounded",
  notifications: { messages: true, sound: true, preview: true },
  privacy: {
    onlineStatus: "everyone",
    readReceipts: true,
    typingIndicator: true,
  },
  media: { autoDownload: "wifi", imageQuality: "standard" },
  language: "en",
};

export const useSettingsStore = create((set) => ({
  settings: defaultSettings,
  loaded: false,

  fetchSettings: async () => {
    try {
      const { data } = await api.get("/api/settings");
      set({ settings: data, loaded: true });
    } catch {
      set({ loaded: true });
    }
  },

  updateSettings: async (partial) => {
    set((state) => ({
      settings: { ...state.settings, ...partial },
    }));
    try {
      const { data } = await api.put("/api/settings", partial);
      set({ settings: data });
    } catch {
      // revert handled by re-fetch on next mount
    }
  },
}));
