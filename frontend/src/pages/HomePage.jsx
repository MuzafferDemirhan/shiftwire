import { useEffect } from "react";
import { SignInButton, SignUpButton, useAuth } from "@clerk/react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

function FeatureCard({ icon, title, description }) {
  return (
    <div className="animate-fade-in-up rounded-2xl border border-gray-200 bg-white/60 p-6 text-center backdrop-blur dark:border-gray-700 dark:bg-gray-800/60">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
}

export default function HomePage() {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) navigate("/chat", { replace: true });
  }, [isSignedIn, navigate]);

  return (
    <div className="flex min-h-svh flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Nav */}
      <header className="flex items-center justify-between px-6 py-4 md:px-12">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Shiftwire" className="h-8" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            Shiftwire
          </span>
        </div>
        <div className="flex items-center gap-3">
          <SignInButton mode="modal">
            <button className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
              Sign Up
            </button>
          </SignUpButton>
        </div>
      </header>

      {/* Hero */}
      <section className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center md:px-12">
        <div className="animate-fade-in-up max-w-3xl">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-6xl">
            Secure, Real-time{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Messaging
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-lg text-gray-500 dark:text-gray-400">
            Connect instantly with anyone, anywhere. Share messages, images, and
            videos with end-to-end encryption.
          </p>
          <div className="flex items-center justify-center gap-4">
            <SignUpButton mode="modal">
              <button className="rounded-xl bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700">
                Get Started Free
              </button>
            </SignUpButton>
          </div>
        </div>

        {/* Illustration */}
        <div className="mt-16 animate-fade-in-up">
          <div className="relative mx-auto h-64 w-full max-w-2xl rounded-2xl border border-gray-200 bg-white/40 p-4 shadow-xl backdrop-blur dark:border-gray-700 dark:bg-gray-800/40 md:h-80">
            <div className="flex h-full items-center justify-center gap-4">
              <div className="h-3/4 w-1/3 rounded-xl bg-gradient-to-b from-blue-400 to-blue-600 opacity-70" />
              <div className="h-3/4 w-1/3 translate-y-4 rounded-xl bg-gradient-to-b from-purple-400 to-purple-600 opacity-70" />
              <div className="h-3/4 w-1/3 rounded-xl bg-gradient-to-b from-pink-400 to-pink-600 opacity-70" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20 md:px-12">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
          Why Shiftwire?
        </h2>
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          <FeatureCard
            icon={
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            title="Lightning Fast"
            description="Messages delivered instantly with real-time Socket.IO technology."
          />
          <FeatureCard
            icon={
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
            title="Media Sharing"
            description="Share images and videos seamlessly within your conversations."
          />
          <FeatureCard
            icon={
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            }
            title="Private & Secure"
            description="Your conversations are protected with industry-standard encryption."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-8 dark:border-gray-700">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Shiftwire" className="h-6" />
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              Shiftwire
            </span>
          </div>
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Shiftwire. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
