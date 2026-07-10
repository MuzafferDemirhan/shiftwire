import { useState, useRef } from "react";
import { useChatStore } from "../stores/chatStore.js";

export default function MessageInput() {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const fileRef = useRef(null);
  const { selectedUserId, sendMessage } = useChatStore();
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if ((!text.trim() && !file) || !selectedUserId || sending) return;

    setSending(true);
    await sendMessage(selectedUserId, text, file);
    setText("");
    setFile(null);
    setSending(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 border-t border-gray-200 px-6 py-3 dark:border-gray-700"
    >
      {file && (
        <span className="text-xs text-gray-500">
          {file.name.length > 20 ? file.name.slice(0, 20) + "..." : file.name}
        </span>
      )}
      <button
        type="button"
        onClick={() => fileRef.current?.click()}
        className="rounded p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
        </svg>
      </button>
      <input
        type="file"
        ref={fileRef}
        accept="image/*,video/*"
        className="hidden"
        onChange={(e) => setFile(e.target.files[0] || null)}
      />
      <input
        type="text"
        placeholder="Type a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
      />
      <button
        type="submit"
        disabled={(!text.trim() && !file) || sending}
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
      >
        Send
      </button>
    </form>
  );
}
