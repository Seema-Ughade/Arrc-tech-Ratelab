// App.jsx
import React from 'react';

const Systemupdates = () => {
  return (
    <div className="min-h-screen flex  justify-center bg-gray-50">
      <div className=" w-full mx-auto p-6 bg-white shadow-md rounded-lg border border-green-500">
        <h1 className="text-6xl font-bold text-orange-500 text-center">3.0</h1>
        <p className="text-xl font-semibold text-center mt-2 text-gray-700">Your Version</p>
        <div className="mt-4 text-center text-gray-600">
          <p className="flex items-center justify-center">
            <span className="mr-2 text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7zm-7 4a4 4 0 100-8 4 4 0 000 8z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="font-medium">You are currently using the latest version of the system.</span>
          </p>
          <p className="mt-2">
            We are committed to continuous improvement and are actively developing the next version. Stay tuned for exciting new features and enhancements to be released soon!
          </p>
        </div>
        <button
          className="mt-6 w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Update Log
        </button>
      </div>
    </div>
  );
};

export default Systemupdates;
