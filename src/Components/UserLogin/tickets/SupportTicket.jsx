import React from 'react';

const SupportTicket = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-4 flex mt-16 justify-center">
      <div className="max-w-5xl w-full">
        {/* Table Container */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-white uppercase bg-gray-900">
              <tr>
                <th scope="col" className="px-6 py-3">Subject</th>
                <th scope="col" className="px-6 py-3">Status</th>
                <th scope="col" className="px-6 py-3">Priority</th>
                <th scope="col" className="px-6 py-3">Last Reply</th>
                <th scope="col" className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td colSpan="5" className="px-6 py-4 text-center text-gray-400">Data not found</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SupportTicket;
