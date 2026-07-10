import emptyChatSvg from "../assets/empty-chat.svg";

export default function EmptyState() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
      <img src={emptyChatSvg} alt="No conversation selected" className="w-60" />
      <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Select a conversation</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Choose a conversation from the sidebar to start messaging.
      </p>
    </div>
  );
}
