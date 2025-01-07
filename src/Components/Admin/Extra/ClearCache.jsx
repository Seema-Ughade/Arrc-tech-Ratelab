import React from "react";

const ClearCache = () => {
  const tasks = [
    "Compiled views will be cleared",
    "Application cache will be cleared",
    "Route cache will be cleared",
    "Configuration cache will be cleared",
    "Compiled services and packages files will be removed",
    "Caches will be cleared",
  ];

  return (
    <div className="flex justify-center  min-h-screen bg-gray-50">
      <div className="bg-white shadow-md rounded-lg w-full p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Clear System Cache
        </h2>
        <div className="space-y-4">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="flex items-center justify-between text-gray-700"
            >
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{task}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
            Click to clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClearCache;
