import { useChatStore } from "../stores/chatStore.js";
import avatarPlaceholder from "../assets/avatar-placeholder.svg";

export default function ConversationItem({ user }) {
  const { selectedUserId, selectUser, onlineUsers } = useChatStore();
  const isOnline = onlineUsers.includes(user._id);
  const isActive = selectedUserId === user._id;

  return (
    <button
      onClick={() => selectUser(user._id)}
      className={`flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-gray-50 dark:hover:bg-gray-800 ${
        isActive ? "bg-blue-50 dark:bg-blue-900/30" : ""
      }`}
    >
      <div className="relative shrink-0">
        <img
          src={user.profilePic || avatarPlaceholder}
          alt={user.fullName}
          className="h-10 w-10 rounded-full object-cover"
        />
        {isOnline && (
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500 dark:border-gray-900" />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
          {user.fullName}
        </p>
        <p className="truncate text-xs text-gray-500">
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </button>
  );
}
