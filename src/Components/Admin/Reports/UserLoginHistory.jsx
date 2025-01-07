import React, { useState } from 'react';
import { Search } from 'lucide-react';

const UserLoginHistory = () => {
  const [searchUsername, setSearchUsername] = useState('');
  const [dateRange, setDateRange] = useState('');
  const [users] = useState([
    {
      name: 'Gopal pm',
      username: '@pmgopal247',
      loginAt: '2025-01-05 04:18 PM',
      timeAgo: '2 days ago',
      ip: '223.190.83.182',
      location: 'Gurugram',
      browser: 'Chrome',
      os: 'Windows 10'
    },
    {
      name: 'sam kumar',
      username: '@sam9279',
      loginAt: '2025-01-05 03:09 PM',
      timeAgo: '2 days ago',
      ip: '240:1:4900:1cab:90fa:e5ae:afb3:bfe3:b810',
      location: 'Patna, India',
      browser: 'Chrome',
      os: 'Windows 10'
    },
    // Add more user data as needed
  ]);

  return (
    <div className="min-h-screen bg-[#f8f9fe] p-4 sm:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-[#364a63] mb-6">User Login History</h1>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search Username"
              className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6c5ce7]"
              value={searchUsername}
              onChange={(e) => setSearchUsername(e.target.value)}
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#6c5ce7] text-white p-1 rounded-lg">
              <Search className="w-4 h-4" />
            </button>
          </div>
          
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Start Date – End Date"
              className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6c5ce7]"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#6c5ce7] text-white p-1 rounded-lg">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-[#6c5ce7]">
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">User</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Login at</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">IP</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Location</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Browser | OS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-gray-900">{user.name}</div>
                      <div className="text-[#6c5ce7] text-sm">{user.username}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-gray-900">{user.loginAt}</div>
                      <div className="text-gray-500 text-sm">{user.timeAgo}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-[#6c5ce7]">{user.ip}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-gray-900">{user.location}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-gray-900">
                      {user.browser}
                      <br />
                      {user.os}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserLoginHistory;

