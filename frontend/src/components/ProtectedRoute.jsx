import { useEffect, useRef } from "react";
import { useAuth, SignInButton, SignUpButton } from "@clerk/react";
import { useAuthStore } from "../stores/authStore.js";

export default function ProtectedRoute({ children }) {
  const { isLoaded, isSignedIn } = useAuth();
  const { user, loading, fetchUser, retryFetchUser } = useAuthStore();
  const hasRetried = useRef(false);

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      fetchUser();
    } else if (isLoaded && !isSignedIn && !hasRetried.current) {
      hasRetried.current = true;
      retryFetchUser();
    }
  }, [isLoaded, isSignedIn, fetchUser, retryFetchUser]);

  if (loading) {
    return (
      <div className="flex min-h-svh items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-svh flex-col items-center justify-center gap-4 bg-gray-100 dark:bg-gray-900">
        <p className="text-gray-500 dark:text-gray-400">Please sign in to continue.</p>
        <div className="flex gap-3">
          <SignInButton mode="modal">
            <button className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="rounded-lg border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
              Sign Up
            </button>
          </SignUpButton>
        </div>
      </div>
    );
  }

  return children;
}
