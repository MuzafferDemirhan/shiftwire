const tabs = [
  { key: "appearance", label: "Appearance", icon: "🌙" },
  { key: "notifications", label: "Notifications", icon: "🔔" },
  { key: "privacy", label: "Privacy", icon: "🔒" },
  { key: "media", label: "Media & Storage", icon: "📁" },
  { key: "account", label: "Account", icon: "👤" },
  { key: "about", label: "About", icon: "ℹ️" },
];

export default function SettingsSidebar({ activeTab, onTabChange }) {
  return (
    <nav className="w-full space-y-1 md:w-56">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          className={`flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-left text-sm font-medium transition ${
            activeTab === tab.key
              ? "bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
              : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
          }`}
        >
          <span className="text-base">{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
