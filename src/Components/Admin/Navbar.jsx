import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineBell, AiOutlineSetting } from 'react-icons/ai';
import { BiGlobe } from 'react-icons/bi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import mainlogo from '../../assets/mainlogo.png';

export function Navbar({ toggleSidebar, onLogout, collapsed, toggleSidebarCollapse }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-[#0a0b35] px-4">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleSidebar}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg"
          >
            <RxHamburgerMenu className="h-6 w-6" />
          </button>
          <button
            onClick={toggleSidebarCollapse}
            className="hidden lg:block text-white p-2 hover:bg-white/10 rounded-lg"
          >
            {collapsed ? (
              <RxHamburgerMenu className="h-5 w-5" />
            ) : (
              <RxHamburgerMenu className="h-5 w-5" />
            )}
          </button>
          <div className="flex h-12 w-12 items-center overflow-hidden  rounded-full bg-white gap-2">
            <img 
              src={mainlogo}
              alt="RateLab Logo" 
                            className="h-full w-full object-contain"
            />
            <span className="hidden text-xl font-bold text-white sm:inline-block">
              RateLab
            </span>
          </div>
          <div className="flex flex-col">
                <span className="text-xl font-semibold text-white leading-none">
                  Rate<span className="text-orange-500">Lab</span>
                </span>
                <span className="mt-0.5 text-[13px] leading-none">
                  <span className="text-white">Arrc</span>{" "}
                  <span className="text-orange-500">Technology</span>
                </span>
              </div>

                        {/* <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white p-2">
                          <img
                            src={mainlogo}
                            alt="RateLab Logo"
                            className="h-full w-full object-contain"
                          />
                        </div> */}
          
        </div>

        <div className="flex flex-1 items-center justify-center px-4">
          <div className="w-full max-w-lg">
            <div className="relative">
              <AiOutlineSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <input
                type="search"
                placeholder="Search here..."
                className="w-full rounded-md border border-white/10 bg-[#1a1b4b] py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-white p-2 hover:bg-white/10 rounded-lg">
            <BiGlobe className="h-5 w-5" />
          </button>
          <button className="text-white p-2 hover:bg-white/10 rounded-lg relative">
            <AiOutlineBell className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs">
              6
            </span>
          </button>
          <button className="text-white p-2 hover:bg-white/10 rounded-lg">
            <AiOutlineSetting className="h-5 w-5" />
          </button>
          
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="relative h-8 w-8 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <img
                src={"https://script.viserlab.com/ratelab/assets/admin/images/profile/63747a0a5f9291668577802.jpeg"}
                alt="Admin"
                className="h-full w-full object-cover"
              />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                <button 
                  className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Profile
                </button>
                <button 
                  className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Settings
                </button>
                <button 
                  className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    setIsDropdownOpen(false);
                    onLogout();
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

