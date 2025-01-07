import React from 'react';
import { NavLink } from 'react-router-dom';
import { Star, User } from 'lucide-react';

const UserNavbar = () => {
  const navLinkClasses = ({ isActive }) =>
    `flex items-center gap-2 px-6 py-3 text-lg font-semibold ${
      isActive 
        ? 'bg-[#1a1b3a] text-white' 
        : 'text-gray-700 hover:bg-gray-100'
    }`;

  return (
    <nav className="flex bg-white  h-16 rounded-lg shadow-md overflow-hidden">
      <NavLink to="/user/reviews" className={navLinkClasses}>
        <Star className="w-4 h-4 text-yellow-600 " />
        Reviews
      </NavLink>
      <NavLink to="/user/profile" className={navLinkClasses}>
        <User className="w-4 h-4" />
        Profile
      </NavLink>
    </nav>
  );
};

export default UserNavbar;

