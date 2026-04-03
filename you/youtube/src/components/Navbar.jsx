// Navbar: displays top bar with logo, search bar, and user icons

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-white border-b sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-1">
        <span className="text-2xl font-bold text-red-600">▶</span>
        <span className="text-xl font-semibold hidden sm:block">YouTube</span>
      </div>

      {/* Search bar */}
      <div className="flex items-center border rounded-full overflow-hidden w-1/2 max-w-md">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-1.5 w-full outline-none text-sm"
        />
        <button className="px-4 py-1.5 bg-gray-100 border-l text-sm hover:bg-gray-200">
          🔍
        </button>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-3 text-xl">
        <button title="Upload" className="hover:text-red-600">⊕</button>
        <button title="Notifications" className="hover:text-red-600">🔔</button>
        <img
          src="https://i.pravatar.cc/32?img=5"
          alt="User avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </nav>
  );
}