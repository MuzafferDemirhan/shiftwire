import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-gray-50 px-6 dark:bg-gray-900">
      <img src={logo} alt="Shiftwire" className="h-12" />
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">404</h1>
      <p className="text-gray-500 dark:text-gray-400">
        Page not found.
      </p>
      <Link
        to="/"
        className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  );
}
