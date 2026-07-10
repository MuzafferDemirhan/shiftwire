import { useMemo } from "react";
import { useChatStore } from "../stores/chatStore.js";
import Avatar from "./Avatar.jsx";

export default function ChatHeader() {
  const { selectedUserId, conversations, onlineUsers } = useChatStore();

  const otherUser = useMemo(
    () => conversations.find((u) => u._id === selectedUserId) ?? null,
    [selectedUserId, conversations],
  );

  if (!otherUser) return null;

  const isOnline = onlineUsers.includes(otherUser._id);

  return (
    <div className="flex items-center gap-3 border-b border-gray-200 px-6 py-3 dark:border-gray-700">
      <Avatar
        src={otherUser.profilePic}
        alt={otherUser.fullName}
        className="h-10 w-10 rounded-full object-cover"
      />
      <div>
        <p className="text-sm font-semibold text-gray-900 dark:text-white">
          {otherUser.fullName}
        </p>
        <p className={`text-xs ${isOnline ? "text-green-600 dark:text-green-400" : "text-gray-400 dark:text-gray-500"}`}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </div>
  );
}
