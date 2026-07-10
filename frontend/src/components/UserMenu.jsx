import { useClerk } from "@clerk/react";
import { useAuthStore } from "../stores/authStore.js";
import avatarPlaceholder from "../assets/avatar-placeholder.svg";

export default function UserMenu() {
  const { user } = useAuthStore();
  const { signOut } = useClerk();

  return (
    <div className="flex items-center gap-3 border-b border-gray-200 p-4">
      <img
        src={user?.profilePic || avatarPlaceholder}
        alt={user?.fullName}
        className="h-10 w-10 rounded-full object-cover"
      />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-gray-900">
          {user?.fullName}
        </p>
        <p className="truncate text-xs text-gray-500">{user?.email}</p>
      </div>
      <button
        onClick={() => signOut()}
        className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
        title="Sign out"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
      </button>
    </div>
  );
}
