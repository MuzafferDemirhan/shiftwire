import { useThemeStore } from "../../stores/themeStore.js";
import { useSettingsStore } from "../../stores/settingsStore.js";

export default function AppearanceSettings() {
  const { theme, setTheme } = useThemeStore();
  const { settings, updateSettings } = useSettingsStore();

  const themeOptions = [
    { value: "light", label: "Light", icon: "☀️" },
    { value: "dark", label: "Dark", icon: "🌙" },
    { value: "system", label: "System", icon: "💻" },
  ];

  return (
    <div className="space-y-8">
      {/* Theme */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-900 dark:text-white">
          Theme
        </h3>
        <div className="flex gap-3">
          {themeOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                setTheme(opt.value);
                updateSettings({ theme: opt.value });
              }}
              className={`flex flex-1 items-center justify-center gap-2 rounded-xl border-2 px-4 py-3 text-sm font-medium transition ${
                theme === opt.value
                  ? "border-blue-500 bg-blue-50 text-blue-700 dark:border-blue-400 dark:bg-blue-900/30 dark:text-blue-300"
                  : "border-gray-200 text-gray-600 hover:border-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:border-gray-600"
              }`}
            >
              <span className="text-lg">{opt.icon}</span>
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Font Size */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-900 dark:text-white">
          Font Size
        </h3>
        <div className="flex gap-3">
          {["sm", "md", "lg"].map((size) => (
            <button
              key={size}
              onClick={() => updateSettings({ fontSize: size })}
              className={`flex flex-1 items-center justify-center rounded-xl border-2 px-4 py-3 text-sm font-medium transition ${
                settings.fontSize === size
                  ? "border-blue-500 bg-blue-50 text-blue-700 dark:border-blue-400 dark:bg-blue-900/30 dark:text-blue-300"
                  : "border-gray-200 text-gray-600 hover:border-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:border-gray-600"
              }`}
            >
              {size === "sm" ? "Small" : size === "md" ? "Medium" : "Large"}
            </button>
          ))}
        </div>
        <div className="mt-4 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
          <p
            className={`${
              settings.fontSize === "sm"
                ? "text-sm"
                : settings.fontSize === "lg"
                  ? "text-lg"
                  : "text-base"
            } text-gray-700 dark:text-gray-300`}
          >
            This is a preview of how messages will appear.
          </p>
        </div>
      </div>

      {/* Bubble Style */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-900 dark:text-white">
          Message Bubble Style
        </h3>
        <div className="flex gap-3">
          {[
            { value: "rounded", label: "Rounded" },
            { value: "compact", label: "Compact" },
          ].map((style) => (
            <button
              key={style.value}
              onClick={() => updateSettings({ bubbleStyle: style.value })}
              className={`flex flex-1 items-center justify-center rounded-xl border-2 px-4 py-3 text-sm font-medium transition ${
                settings.bubbleStyle === style.value
                  ? "border-blue-500 bg-blue-50 text-blue-700 dark:border-blue-400 dark:bg-blue-900/30 dark:text-blue-300"
                  : "border-gray-200 text-gray-600 hover:border-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:border-gray-600"
              }`}
            >
              {style.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
