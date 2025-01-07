import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

const NotificationHistory = () => {
  const [searchUsername, setSearchUsername] = useState('');
  const [dateRange, setDateRange] = useState('');
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [notifications] = useState([
    {
      user: 'test test',
      username: '@test22',
      sent: '2024-12-24 10:54 AM',
      timeAgo: '2 weeks ago',
      sender: 'Email',
      senderDetail: 'via php',
      subject: 'Password Reset',
      details: {
        email: '[Email is Protected for the demo]',
        timestamp: '2024-12-24 10:54:18 AM',
        ip: '103.93.198.149',
        browser: 'Chrome',
        os: 'Windows 10',
        recoveryCode: '137281'
      }
    },
    // Add more notification data as needed
  ]);

  const handleDetailClick = (notification) => {
    setSelectedNotification(notification);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fe] p-4 sm:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-[#364a63] mb-6">Notification History</h1>
        
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
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Sent</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Sender</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Subject</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {notifications.map((notification, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-gray-900">{notification.user}</div>
                      <div className="text-[#6c5ce7] text-sm">{notification.username}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-gray-900">{notification.sent}</div>
                      <div className="text-gray-500 text-sm">{notification.timeAgo}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-gray-900">{notification.sender}</div>
                      <div className="text-gray-500 text-sm">{notification.senderDetail}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-gray-900">{notification.subject}</div>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDetailClick(notification)}
                      className="inline-flex items-center px-3 py-1 border border-[#6c5ce7] text-[#6c5ce7] rounded hover:bg-[#6c5ce7] hover:text-white transition-colors"
                    >
                      <span className="text-sm">Detail</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Notification Details Modal */}
      {selectedNotification && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Notification Details</h2>
                <button
                  onClick={() => setSelectedNotification(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    To: {selectedNotification.details.email}
                  </p>
                  
                  <img
                    src="/placeholder.svg?height=60&width=200"
                    alt="Viserlab Logo"
                    className="mx-auto mb-6"
                  />

                  <h3 className="text-xl font-medium mb-2">
                    Hello {selectedNotification.user} ({selectedNotification.username})
                  </h3>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-600">
                    We have received a request to reset the password for your account
                    on {selectedNotification.details.timestamp}.
                  </p>

                  <p className="text-gray-600">
                    Requested From IP: {selectedNotification.details.ip} using{' '}
                    {selectedNotification.details.browser} on {selectedNotification.details.os}.
                  </p>

                  <div className="text-center">
                    <p className="text-gray-600 mb-2">Your account recovery code is:</p>
                    <p className="text-3xl font-semibold text-gray-800">
                      {selectedNotification.details.recoveryCode}
                    </p>
                  </div>

                  <p className="text-red-600 text-center">
                    If you do not wish to reset your password, please disregard this
                    message.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationHistory;

