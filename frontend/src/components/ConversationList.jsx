import { useEffect } from "react";
import { useChatStore } from "../stores/chatStore.js";
import ConversationItem from "./ConversationItem.jsx";
import emptyInboxSvg from "../assets/empty-inbox.svg";

export default function ConversationList() {
  const { conversations, fetchConversations } = useChatStore();

  useEffect(() => {
    fetchConversations();
  }, [fetchConversations]);

  if (conversations.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 px-4 py-8 text-center">
        <img src={emptyInboxSvg} alt="No conversations" className="w-32" />
        <p className="text-sm text-gray-500">No conversations yet.</p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto">
      {conversations.map((u) => (
        <ConversationItem key={u._id} user={u} />
      ))}
    </div>
  );
}
