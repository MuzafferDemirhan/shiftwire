import { useClerk } from "@clerk/react";
import { useAuthStore } from "../../stores/authStore.js";
import avatarPlaceholder from "../../assets/avatar-placeholder.svg";

export default function AccountSettings() {
  const { user } = useAuthStore();
  const { signOut } = useClerk();

  return (
    <div className="space-y-8">
      {/* Profile Info */}
      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">
          Profile Information
        </h3>
        <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
          <img
            src={user?.profilePic || avatarPlaceholder}
            alt={user?.fullName}
            className="h-16 w-16 rounded-full object-cover"
          />
          <div>
            <p className="text-base font-semibold text-gray-900 dark:text-white">
              {user?.fullName}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {user?.email}
            </p>
          </div>
        </div>
      </div>

      {/* Sign Out */}
      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">
          Sign Out
        </h3>
        <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">
          You will be signed out of all devices.
        </p>
        <button
          onClick={() => signOut()}
          className="rounded-xl bg-red-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
