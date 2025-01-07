import React from 'react';
import { User, Mail, Star } from 'lucide-react';

const UserSidebar = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* Profile Image */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-24 bg-gray-200 rounded-full mb-4">
          <User className="w-full h-full p-4 text-gray-400" />
        </div>
        <h2 className="text-xl font-semibold">{user?.name || 'Sam Kumar'}</h2>
        <p className="text-gray-500 flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-gray-500" />
          A, India
        </p>
      </div>

      {/* Profile Overview */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold border-b border-orange-500 pb-2">
          Profile Overview
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-gray-600">
            <User className="w-4 h-4" />
            <span>Member since 2025</span>
          </div>
          
          <div className="flex items-center gap-3 text-gray-600">
            <Mail className="w-4 h-4" />
            <span>[Email is Protected for the demo]</span>
          </div>
          
          <div className="flex items-center gap-3 text-gray-600">
            <Star className="w-4 h-4" />
            <span>Total Reviews: 0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;

