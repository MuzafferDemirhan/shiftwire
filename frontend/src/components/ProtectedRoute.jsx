import { useEffect } from "react";
import { SignInButton, SignUpButton } from "@clerk/react";
import { useAuthStore } from "../stores/authStore.js";

export default function ProtectedRoute({ children }) {
  const { user, loading, fetchUser } = useAuthStore();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (loading) {
    return (
      <div className="flex min-h-svh items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="h-10 w-10 animate-pulse rounded-full bg-gray-400 dark:bg-gray-600" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-svh flex-col items-center justify-center gap-4 bg-gray-100 dark:bg-gray-900">
        <p className="text-gray-500 dark:text-gray-400">Please sign in to continue.</p>
        <div className="flex gap-3">
          <SignInButton mode="modal" />
          <SignUpButton mode="modal" />
        </div>
      </div>
    );
  }

  return children;
}
