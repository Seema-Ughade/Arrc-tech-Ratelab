import React from 'react';

const ReportRequest = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Your Listed Report & Request</h1>
          <div className="flex space-x-4">
            <button className="px-4 py-2 border border-orange-500 text-orange-500 font-medium rounded-md hover:bg-orange-500 hover:text-white">
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8.257 3.099c.366-1.276 2.12-1.276 2.486 0a1.007 1.007 0 00.95.692h3.8c1.007 0 1.415 1.221.678 1.88l-3.086 2.686a1.007 1.007 0 00-.321 1.095l1.18 4.07c.366 1.276-.994 2.318-2.028 1.544l-3.437-2.488a1.007 1.007 0 00-1.164 0l-3.437 2.488c-1.034.774-2.394-.268-2.028-1.544l1.18-4.07a1.007 1.007 0 00-.321-1.095L1.486 5.67c-.737-.659-.329-1.88.678-1.88h3.8a1.007 1.007 0 00.95-.692z" />
                </svg>
                Report a bug
              </span>
            </button>
            <button className="px-4 py-2 border border-green-500 text-green-500 font-medium rounded-md hover:bg-green-500 hover:text-white">
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l.518 1.59a1.007 1.007 0 00.95.692h1.67c.969 0 1.371 1.24.588 1.81l-1.35.98a1.007 1.007 0 00-.364 1.118l.518 1.59c.3.921-.755 1.688-1.54 1.118l-1.35-.98a1.007 1.007 0 00-1.176 0l-1.35.98c-.784.57-1.839-.197-1.54-1.118l.518-1.59a1.007 1.007 0 00-.364-1.118l-1.35-.98c-.784-.57-.381-1.81.588-1.81h1.67a1.007 1.007 0 00.95-.692l.518-1.59z" />
                  <path d="M11 8a1 1 0 10-2 0 1 1 0 002 0z" />
                </svg>
                Request for Support
              </span>
            </button>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white text-left">
                <th className="px-6 py-3 text-sm font-medium">Type</th>
                <th className="px-6 py-3 text-sm font-medium">Message</th>
                <th className="px-6 py-3 text-sm font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white text-gray-700">
                <td className="px-6 py-4 text-sm">-</td>
                <td className="px-6 py-4 text-sm">Data not found</td>
                <td className="px-6 py-4 text-sm">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReportRequest;
