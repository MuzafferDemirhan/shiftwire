import { useState, useEffect } from "react";
import { useChatStore } from "../stores/chatStore.js";
import avatarPlaceholder from "../assets/avatar-placeholder.svg";

export default function ChatHeader() {
  const { selectedUserId, conversations, onlineUsers } = useChatStore();
  const [otherUser, setOtherUser] = useState(null);

  useEffect(() => {
    setOtherUser(
      conversations.find((u) => u._id === selectedUserId) || null,
    );
  }, [selectedUserId, conversations]);

  if (!otherUser) return null;

  const isOnline = onlineUsers.includes(otherUser._id);

  return (
    <div className="flex items-center gap-3 border-b border-gray-200 px-6 py-3">
      <img
        src={otherUser.profilePic || avatarPlaceholder}
        alt={otherUser.fullName}
        className="h-10 w-10 rounded-full object-cover"
      />
      <div>
        <p className="text-sm font-semibold text-gray-900">
          {otherUser.fullName}
        </p>
        <p className={`text-xs ${isOnline ? "text-green-600" : "text-gray-400"}`}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </div>
  );
}
