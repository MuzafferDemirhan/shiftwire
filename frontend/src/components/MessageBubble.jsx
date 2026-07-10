import { useAuthStore } from "../stores/authStore.js";

export default function MessageBubble({ message }) {
  const { user } = useAuthStore();
  const isOwn = message.senderId === user._id;

  return (
    <div className={`flex ${isOwn ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] rounded-2xl px-4 py-2 ${
          isOwn
            ? "rounded-br-sm bg-blue-600 text-white"
            : "rounded-bl-sm bg-gray-200 text-gray-900"
        }`}
      >
        {message.text && <p className="text-sm">{message.text}</p>}
        {message.image && (
          <img
            src={message.image}
            alt="Image"
            className="mt-1 max-w-full rounded-lg object-cover"
          />
        )}
        {message.video && (
          <video
            src={message.video}
            controls
            className="mt-1 max-w-full rounded-lg"
          />
        )}
        <p className={`mt-1 text-[10px] ${isOwn ? "text-blue-200" : "text-gray-400"}`}>
          {new Date(message.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
}
