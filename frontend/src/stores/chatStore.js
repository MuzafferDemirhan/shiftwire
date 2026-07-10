import { create } from "zustand";
import api from "../lib/axios.js";

export const useChatStore = create((set, get) => ({
  conversations: [],
  selectedUserId: null,
  messages: [],
  onlineUsers: [],
  sidebarUsers: [],
  loading: false,

  fetchConversations: async () => {
    try {
      const { data } = await api.get("/api/messages/conversations");
      set({ conversations: data });
    } catch {
      // silently fail
    }
  },

  fetchSidebarUsers: async () => {
    try {
      const { data } = await api.get("/api/messages/users");
      set({ sidebarUsers: data });
    } catch {
      // silently fail
    }
  },

  selectUser: async (userId) => {
    set({ selectedUserId: userId, messages: [], loading: true });
    try {
      const { data } = await api.get(`/api/messages/${userId}`);
      set({ messages: data, loading: false });
    } catch {
      set({ loading: false });
    }
  },

  sendMessage: async (receiverId, text, file) => {
    const formData = new FormData();
    formData.append("text", text);
    if (file) formData.append("media", file);
    try {
      const { data } = await api.post(`/api/messages/send/${receiverId}`, formData);
      set((state) => ({ messages: [...state.messages, data] }));
      return data;
    } catch {
      return null;
    }
  },

  setOnlineUsers: (userIds) => set({ onlineUsers: userIds }),

  addMessage: (message) =>
    set((state) => {
      const { selectedUserId } = state;
      if (
        message.senderId === selectedUserId ||
        message.receiverId === selectedUserId
      ) {
        return { messages: [...state.messages, message] };
      }
      return state;
    }),
}));
