import logo from "../../assets/logo.svg";

export default function AboutSettings() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center gap-4 rounded-xl border border-gray-200 bg-white p-8 text-center dark:border-gray-700 dark:bg-gray-800">
        <img src={logo} alt="Shiftwire" className="h-12" />
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Shiftwire
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Version 1.0.0
          </p>
        </div>
        <p className="max-w-xs text-sm text-gray-500 dark:text-gray-400">
          Secure, real-time messaging built with React, Socket.IO, Clerk, and
          MongoDB.
        </p>
      </div>

      <div className="space-y-3 rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          Tech Stack
        </h3>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li>• React 19 + Vite 8</li>
          <li>• Socket.IO (real-time messaging)</li>
          <li>• Clerk (authentication)</li>
          <li>• MongoDB + Mongoose</li>
          <li>• Tailwind CSS</li>
          <li>• Express + Node.js</li>
        </ul>
      </div>
    </div>
  );
}
