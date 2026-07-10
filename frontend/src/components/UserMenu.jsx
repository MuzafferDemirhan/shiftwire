import { useState, useRef, useEffect } from "react";
import { useClerk } from "@clerk/react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore.js";
import Avatar from "./Avatar.jsx";

export default function UserMenu() {
  const [showDropdown, setShowDropdown] = useState(false);
  const { user } = useAuthStore();
  const { signOut } = useClerk();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative border-b border-gray-200 p-4 dark:border-gray-700">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex w-full items-center gap-3"
      >
        <Avatar
          src={user?.profilePic}
          alt={user?.fullName}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="min-w-0 flex-1 text-left">
          <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
            {user?.fullName}
          </p>
          <p className="truncate text-xs text-gray-500 dark:text-gray-400">
            {user?.email}
          </p>
        </div>
      </button>

      {showDropdown && (
        <div className="absolute bottom-full left-0 right-0 mb-1 rounded-lg border border-gray-200 bg-white py-1 shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <button
            onClick={() => {
              setShowDropdown(false);
              navigate("/settings");
            }}
            className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Settings
          </button>
          <button
            onClick={() => signOut()}
            className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/30"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
