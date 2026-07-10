import { useSettingsStore } from "../../stores/settingsStore.js";

function Toggle({ label, description, checked, onChange }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-900 dark:text-white">
          {label}
        </p>
        {description && (
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {description}
          </p>
        )}
      </div>
      <button
        onClick={onChange}
        className={`relative h-6 w-11 rounded-full transition ${
          checked ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-600"
        }`}
      >
        <span
          className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition ${
            checked ? "translate-x-5" : ""
          }`}
        />
      </button>
    </div>
  );
}

export default function NotificationSettings() {
  const { settings, updateSettings } = useSettingsStore();
  const n = settings.notifications;

  return (
    <div className="space-y-6">
      <Toggle
        label="Message Notifications"
        description="Get notified when you receive a new message"
        checked={n.messages}
        onChange={() =>
          updateSettings({
            notifications: { ...n, messages: !n.messages },
          })
        }
      />
      <Toggle
        label="Sound"
        description="Play a sound for incoming messages"
        checked={n.sound}
        onChange={() =>
          updateSettings({ notifications: { ...n, sound: !n.sound } })
        }
      />
      <Toggle
        label="Message Preview"
        description="Show message content in notifications"
        checked={n.preview}
        onChange={() =>
          updateSettings({ notifications: { ...n, preview: !n.preview } })
        }
      />
    </div>
  );
}
