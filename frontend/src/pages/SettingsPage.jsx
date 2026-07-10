import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSettingsStore } from "../stores/settingsStore.js";
import SettingsSidebar from "../components/settings/SettingsSidebar.jsx";
import AppearanceSettings from "../components/settings/AppearanceSettings.jsx";
import NotificationSettings from "../components/settings/NotificationSettings.jsx";
import PrivacySettings from "../components/settings/PrivacySettings.jsx";
import MediaSettings from "../components/settings/MediaSettings.jsx";
import AccountSettings from "../components/settings/AccountSettings.jsx";
import AboutSettings from "../components/settings/AboutSettings.jsx";

const sections = {
  appearance: { label: "Appearance", component: AppearanceSettings },
  notifications: { label: "Notifications", component: NotificationSettings },
  privacy: { label: "Privacy", component: PrivacySettings },
  media: { label: "Media & Storage", component: MediaSettings },
  account: { label: "Account", component: AccountSettings },
  about: { label: "About", component: AboutSettings },
};

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("appearance");
  const { fetchSettings } = useSettingsStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  const SectionComponent = sections[activeTab]?.component;

  if (!SectionComponent) {
    return (
      <div className="flex min-h-svh items-center justify-center bg-gray-50 dark:bg-gray-900">
        <p className="text-gray-500 dark:text-gray-400">Select a section from the sidebar.</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-svh bg-gray-50 dark:bg-gray-900">
      {/* Mobile header */}
      <div className="fixed left-0 right-0 top-0 z-10 flex items-center gap-3 border-b border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-800 md:hidden">
        <button
          onClick={() => navigate("/chat")}
          className="rounded p-1 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
          Settings
        </h1>
        <select
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className="ml-auto rounded-lg border border-gray-300 bg-gray-50 px-3 py-1.5 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        >
          {Object.entries(sections).map(([key, section]) => (
            <option key={key} value={key}>
              {section.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex w-full pt-14 md:pt-0">
        {/* Desktop sidebar */}
        <aside className="hidden border-r border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800 md:flex md:w-72 md:flex-col">
          <div className="mb-6 flex items-center gap-3">
            <button
              onClick={() => navigate("/chat")}
              className="rounded p-1.5 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
              Settings
            </h1>
          </div>
          <SettingsSidebar activeTab={activeTab} onTabChange={setActiveTab} />
        </aside>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mx-auto max-w-2xl">
            <SectionComponent />
          </div>
        </main>
      </div>
    </div>
  );
}
