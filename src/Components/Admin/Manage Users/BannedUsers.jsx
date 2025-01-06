import React, { useState, useEffect } from 'react';
import { FaSearch, FaTimes, FaKey, FaBell, FaBan } from 'react-icons/fa';
import { Spin } from 'antd';

// Mock data structure for banned users (empty for demonstration)
const bannedUsersData = [];

const BannedUsers = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        // Simulating API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setUsers(bannedUsersData);
        setFilteredUsers(bannedUsersData);
      } catch (err) {
        setError('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter(user => 
      user.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDetails = (user) => {
    setSelectedUser(user);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setSelectedUser(null);
    setShowDetails(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Banned Users
        </h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Username / Email"
            className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-lg">
            <FaSearch className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        {filteredUsers.length > 0 ? (
          <div className="space-y-4">
            {filteredUsers.map((user) => (
              <div key={user.id} className="bg-white rounded-lg shadow p-4 space-y-4">
                <div className="space-y-2">
                  <div className="font-semibold text-gray-700">User</div>
                  <div>
                    <div className="text-gray-900">{user.firstName} {user.lastName}</div>
                    <div className="text-indigo-600 text-sm">{user.username}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="font-semibold text-gray-700">Email-Mobile</div>
                  <div>
                    <div className="text-gray-900">{user.email}</div>
                    <div className="text-gray-600 text-sm">{user.mobile}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="font-semibold text-gray-700">Country</div>
                  <div className="text-gray-900">{user.country}</div>
                </div>

                <div className="space-y-2">
                  <div className="font-semibold text-gray-700">Joined At</div>
                  <div>
                    <div className="text-gray-900">{user.joinedAt}</div>
                    <div className="text-gray-600 text-sm">{user.joinedAgo}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="font-semibold text-gray-700">Companies</div>
                  <span className="inline-block px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-600">
                    {user.hasCompanies ? 'Yes' : 'No'}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="font-semibold text-gray-700">Action</div>
                  <button
                    onClick={() => handleDetails(user)}
                    className="inline-flex items-center justify-center px-4 py-2 border border-indigo-600 rounded-lg text-indigo-600 hover:bg-indigo-50"
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
            Data not found
          </div>
        )}
      </div>

      {/* Desktop View */}
      <div className="hidden md:block bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="px-6 py-3 text-left text-sm font-medium">User</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Email-Mobile</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Country</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Joined At</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Companies</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-gray-900">{user.firstName} {user.lastName}</div>
                      <div className="text-indigo-600 text-sm">{user.username}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-gray-900">{user.email}</div>
                      <div className="text-gray-600 text-sm">{user.mobile}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-900">{user.country}</td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-gray-900">{user.joinedAt}</div>
                      <div className="text-gray-600 text-sm">{user.joinedAgo}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-600">
                      {user.hasCompanies ? 'Yes' : 'No'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDetails(user)}
                      className="text-indigo-600 hover:text-indigo-900 border border-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50"
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                  Data not found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* User Details Modal */}
      {showDetails && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  User Detail - {selectedUser.username}
                </h2>
                <button
                  onClick={handleCloseDetails}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <button className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-3 rounded-lg hover:bg-indigo-700">
                  <FaKey className="w-5 h-5" />
                  Logins
                </button>
                <button className="flex items-center justify-center gap-2 bg-gray-500 text-white px-4 py-3 rounded-lg hover:bg-gray-600">
                  <FaBell className="w-5 h-5" />
                  Notifications
                </button>
                <button className="flex items-center justify-center gap-2 bg-orange-500 text-white px-4 py-3 rounded-lg hover:bg-orange-600">
                  <FaBan className="w-5 h-5" />
                  Unban User
                </button>
              </div>

              {/* User Information Form */}
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-6">Information of {selectedUser.firstName} {selectedUser.lastName}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={selectedUser.firstName}
                      readOnly
                      className="w-full px-4 py-2 border rounded-lg bg-gray-50"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={selectedUser.lastName}
                      readOnly
                      className="w-full px-4 py-2 border rounded-lg bg-gray-50"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={selectedUser.email}
                      readOnly
                      className="w-full px-4 py-2 border rounded-lg bg-gray-50"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-4 py-2 border border-r-0 rounded-l-lg bg-gray-50 text-gray-500">
                        +91
                      </span>
                      <input
                        type="text"
                        value={selectedUser.mobile}
                        readOnly
                        className="w-full px-4 py-2 border rounded-r-lg bg-gray-50"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      value={selectedUser.address || ''}
                      readOnly
                      className="w-full px-4 py-2 border rounded-lg bg-gray-50"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      value={selectedUser.city || ''}
                      readOnly
                      className="w-full px-4 py-2 border rounded-lg bg-gray-50"
                    />
                  </div>

                  {/* State */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      value={selectedUser.state || ''}
                      readOnly
                      className="w-full px-4 py-2 border rounded-lg bg-gray-50"
                    />
                  </div>

                  {/* Zip/Postal */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Zip/Postal
                    </label>
                    <input
                      type="text"
                      value={selectedUser.zipCode || ''}
                      readOnly
                      className="w-full px-4 py-2 border rounded-lg bg-gray-50"
                    />
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={selectedUser.country}
                      readOnly
                      className="w-full px-4 py-2 border rounded-lg bg-gray-50"
                    />
                  </div>

                  {/* Ban Status */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Ban Status
                    </label>
                    <div className="flex items-center justify-between px-4 py-2 bg-red-500 text-white rounded-lg">
                      <span>Banned</span>
                      <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                    </div>
                  </div>

                  {/* Ban Reason */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Ban Reason
                    </label>
                    <textarea
                      value={selectedUser.banReason || ''}
                      readOnly
                      rows={3}
                      className="w-full px-4 py-2 border rounded-lg bg-gray-50 resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                  <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BannedUsers;

