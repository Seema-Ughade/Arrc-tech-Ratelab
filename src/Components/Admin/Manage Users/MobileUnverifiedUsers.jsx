import React, { useState } from 'react';
import { Search } from 'lucide-react';

const MobileUnverifiedUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">Mobile Unverified Users</h1>
        <div className="relative w-full sm:w-auto">
          <input
            type="text"
            placeholder="Username / Email"
            className="w-full pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-600">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="hidden sm:grid grid-cols-6 bg-indigo-600 text-white p-4">
          <div className="font-semibold">User</div>
          <div className="font-semibold">Email-Mobile</div>
          <div className="font-semibold">Country</div>
          <div className="font-semibold">Joined At</div>
          <div className="font-semibold">Companies</div>
          <div className="font-semibold">Action</div>
        </div>

        {/* Mobile View */}
        <div className="sm:hidden p-4 bg-indigo-600 text-white font-semibold text-center">
          Unverified Users
        </div>

        <div className="p-4 text-center text-gray-500">
          Data not found
        </div>

        {/* Example of responsive user rows */}
        {/* <div className="sm:grid hidden grid-cols-6 gap-4 p-4 text-gray-800">
          <div>User Name</div>
          <div>email@example.com / +123456789</div>
          <div>Country Name</div>
          <div>2025-01-01</div>
          <div>Company Name</div>
          <div>
            <button className="text-indigo-600 underline">View</button>
          </div>
        </div> */}

        {/* Mobile Layout Example */}
        <div className="sm:hidden p-4 border-b">
          <div className="text-gray-800 font-semibold">User Name</div>
          <div className="text-gray-600 text-sm">email@example.com</div>
          <div className="text-gray-600 text-sm">+123456789</div>
          <div className="text-gray-600 text-sm">Country Name</div>
          <div className="text-gray-600 text-sm">Joined: 2025-01-01</div>
          <div>
            <button className="mt-2 text-indigo-600 underline">View</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileUnverifiedUsers;
