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

export default function PrivacySettings() {
  const { settings, updateSettings } = useSettingsStore();
  const p = settings.privacy;

  const statusOptions = [
    { value: "everyone", label: "Everyone" },
    { value: "contacts", label: "My Contacts" },
    { value: "nobody", label: "Nobody" },
  ];

  return (
    <div className="space-y-8">
      {/* Online Status */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-900 dark:text-white">
          Online Status
        </h3>
        <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">
          Who can see when you're online
        </p>
        <div className="flex gap-3">
          {statusOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() =>
                updateSettings({
                  privacy: { ...p, onlineStatus: opt.value },
                })
              }
              className={`flex flex-1 items-center justify-center rounded-xl border-2 px-4 py-3 text-sm font-medium transition ${
                p.onlineStatus === opt.value
                  ? "border-blue-500 bg-blue-50 text-blue-700 dark:border-blue-400 dark:bg-blue-900/30 dark:text-blue-300"
                  : "border-gray-200 text-gray-600 hover:border-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:border-gray-600"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Toggles */}
      <Toggle
        label="Read Receipts"
        description="Let others know when you've read their messages"
        checked={p.readReceipts}
        onChange={() =>
          updateSettings({
            privacy: { ...p, readReceipts: !p.readReceipts },
          })
        }
      />
      <Toggle
        label="Typing Indicator"
        description="Show when you're typing a message"
        checked={p.typingIndicator}
        onChange={() =>
          updateSettings({
            privacy: { ...p, typingIndicator: !p.typingIndicator },
          })
        }
      />
    </div>
  );
}
