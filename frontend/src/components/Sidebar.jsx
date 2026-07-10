import { useState } from "react";
import UserMenu from "./UserMenu.jsx";
import SearchUsers from "./SearchUsers.jsx";
import ConversationList from "./ConversationList.jsx";
import logo from "../assets/logo.svg";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarContent = (
    <div className="flex h-full flex-col bg-white">
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Shiftwire" className="h-7" />
          <span className="text-lg font-bold text-gray-900">Shiftwire</span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 md:hidden"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <UserMenu />
      <SearchUsers />
      <ConversationList />
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed left-4 top-4 z-30 rounded-lg bg-white p-2 shadow-md md:hidden"
      >
        <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Desktop sidebar */}
      <div className="hidden md:flex md:w-80 md:flex-col md:border-r md:border-gray-200">
        {sidebarContent}
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setIsOpen(false)} />
          <div className="relative h-full w-72 animate-slide-in bg-white shadow-xl">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
