import { create } from "zustand";
import api from "../lib/axios.js";

export const useAuthStore = create((set) => ({
  user: null,
  loading: true,

  fetchUser: async () => {
    try {
      const { data } = await api.get("/api/auth/check");
      set({ user: data, loading: false });
    } catch {
      set({ user: null, loading: false });
    }
  },

  retryFetchUser: async () => {
    set({ loading: true });
    try {
      const { data } = await api.get("/api/auth/check");
      set({ user: data, loading: false });
    } catch {
      set({ user: null, loading: false });
    }
  },

  clearUser: () => set({ user: null }),
}));
