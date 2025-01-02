import { useState } from 'react'
import { Menu, Search, Globe, Bell, Settings } from 'lucide-react'

export default function Navbar({ onMenuClick }) {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="sticky top-0 z-30 flex h-16 items-center justify-between bg-[#0D0F35] px-4 lg:px-6">
      {/* Left section */}
      <div className="flex items-center space-x-4">
        <button
          onClick={onMenuClick}
          className="text-white hover:text-gray-200 lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
        <div className="relative hidden lg:block w-96">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-10 w-full rounded-md bg-[#1a1b3a] pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-4">
        <button className="text-white hover:text-gray-200">
          <Globe className="h-5 w-5" />
        </button>
        <button className="relative text-white hover:text-gray-200">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs">
            2
          </span>
        </button>
        <button className="text-white hover:text-gray-200">
          <Settings className="h-5 w-5" />
        </button>
        <div className="flex items-center space-x-2">
          <img
            src="/admin-avatar.png"
            alt="Admin"
            className="h-8 w-8 rounded-full"
          />
          <span className="hidden text-sm font-medium text-white lg:block">
            admin
          </span>
        </div>
      </div>
    </div>
  )
}

