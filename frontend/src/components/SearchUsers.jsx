import { useState, useRef, useEffect } from "react";
import { useChatStore } from "../stores/chatStore.js";
import avatarPlaceholder from "../assets/avatar-placeholder.svg";

export default function SearchUsers() {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const { sidebarUsers, selectUser, fetchSidebarUsers } = useChatStore();
  const wrapperRef = useRef(null);

  useEffect(() => {
    fetchSidebarUsers();
  }, [fetchSidebarUsers]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowResults(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = sidebarUsers.filter((u) =>
    u.fullName?.toLowerCase().includes(query.toLowerCase()),
  );

  function handleSelect(userId) {
    selectUser(userId);
    setQuery("");
    setShowResults(false);
  }

  return (
    <div ref={wrapperRef} className="relative px-4 pb-2">
      <input
        type="text"
        placeholder="Search users..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setShowResults(true);
        }}
        onFocus={() => setShowResults(true)}
        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
      {showResults && query && (
        <div className="absolute left-4 right-4 top-full z-10 mt-1 max-h-48 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg">
          {filtered.length === 0 ? (
            <p className="p-3 text-sm text-gray-400">No users found.</p>
          ) : (
            filtered.map((u) => (
              <button
                key={u._id}
                onClick={() => handleSelect(u._id)}
                className="flex w-full items-center gap-3 px-3 py-2 text-left hover:bg-gray-50"
              >
                <img
                  src={u.profilePic || avatarPlaceholder}
                  alt={u.fullName}
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="text-sm font-medium text-gray-700">
                  {u.fullName}
                </span>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}
