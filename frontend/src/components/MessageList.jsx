import { useEffect, useRef } from "react";
import { useChatStore } from "../stores/chatStore.js";
import MessageBubble from "./MessageBubble.jsx";

export default function MessageList() {
  const { messages, loading } = useChatStore();
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (loading) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-3 overflow-y-auto px-6 py-4">
      {messages.length === 0 ? (
        <p className="pt-8 text-center text-sm text-gray-400">
          No messages yet. Say hello!
        </p>
      ) : (
        messages.map((msg) => (
          <MessageBubble key={msg._id} message={msg} />
        ))
      )}
      <div ref={bottomRef} />
    </div>
  );
}
