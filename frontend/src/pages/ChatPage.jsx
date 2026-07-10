import { useEffect } from "react";
import { useChatStore } from "../stores/chatStore.js";
import { useAuthStore } from "../stores/authStore.js";
import { connectSocket, disconnectSocket } from "../lib/socket.js";
import Sidebar from "../components/Sidebar.jsx";
import ChatPanel from "../components/ChatPanel.jsx";

export default function ChatPage() {
  const { user } = useAuthStore();
  const { setOnlineUsers, addMessage, fetchConversations } = useChatStore();

  useEffect(() => {
    if (!user) return;

    const socket = connectSocket(user._id);

    socket.on("getOnlineUsers", (userIds) => {
      setOnlineUsers(userIds);
    });

    socket.on("newMessage", (message) => {
      addMessage(message);
      fetchConversations();
    });

    return () => {
      socket.off("getOnlineUsers");
      socket.off("newMessage");
      disconnectSocket();
    };
  }, [user, setOnlineUsers, addMessage, fetchConversations]);

  return (
    <div className="flex h-svh overflow-hidden bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <ChatPanel />
    </div>
  );
}
