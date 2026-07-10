import { useSettingsStore } from "../../stores/settingsStore.js";

export default function MediaSettings() {
  const { settings, updateSettings } = useSettingsStore();
  const m = settings.media;

  return (
    <div className="space-y-8">
      {/* Auto-download */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-900 dark:text-white">
          Auto-download Media
        </h3>
        <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">
          Automatically download images and videos
        </p>
        <div className="flex gap-3">
          {[
            { value: "wifi", label: "WiFi Only" },
            { value: "always", label: "Always" },
            { value: "never", label: "Never" },
          ].map((opt) => (
            <button
              key={opt.value}
              onClick={() =>
                updateSettings({ media: { ...m, autoDownload: opt.value } })
              }
              className={`flex flex-1 items-center justify-center rounded-xl border-2 px-4 py-3 text-sm font-medium transition ${
                m.autoDownload === opt.value
                  ? "border-blue-500 bg-blue-50 text-blue-700 dark:border-blue-400 dark:bg-blue-900/30 dark:text-blue-300"
                  : "border-gray-200 text-gray-600 hover:border-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:border-gray-600"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Image Quality */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-900 dark:text-white">
          Image Quality
        </h3>
        <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">
          Higher quality uses more data
        </p>
        <div className="flex gap-3">
          {[
            { value: "standard", label: "Standard" },
            { value: "high", label: "High" },
          ].map((opt) => (
            <button
              key={opt.value}
              onClick={() =>
                updateSettings({ media: { ...m, imageQuality: opt.value } })
              }
              className={`flex flex-1 items-center justify-center rounded-xl border-2 px-4 py-3 text-sm font-medium transition ${
                m.imageQuality === opt.value
                  ? "border-blue-500 bg-blue-50 text-blue-700 dark:border-blue-400 dark:bg-blue-900/30 dark:text-blue-300"
                  : "border-gray-200 text-gray-600 hover:border-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:border-gray-600"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
