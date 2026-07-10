import { useChatStore } from "../stores/chatStore.js";
import ChatHeader from "./ChatHeader.jsx";
import MessageList from "./MessageList.jsx";
import MessageInput from "./MessageInput.jsx";
import EmptyState from "./EmptyState.jsx";

export default function ChatPanel() {
  const { selectedUserId } = useChatStore();

  if (!selectedUserId) {
    return (
      <div className="flex flex-1 items-center justify-center bg-gray-50">
        <EmptyState />
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col bg-gray-50">
      <ChatHeader />
      <MessageList />
      <MessageInput />
    </div>
  );
}
