import React from "react";

const ServerInfo = () => {
  const data = [
    { label: "PHP Version", value: "8.3.14" },
    { label: "Server Software", value: "LiteSpeed" },
    { label: "Server IP Address", value: "216.158.71.218" },
    { label: "Server Protocol", value: "HTTP/1.1" },
    { label: "HTTP Host", value: "script.viserlab.com" },
    { label: "Server Port", value: "443" },
  ];

  return (
    <div className="flex justify-center  min-h-screen bg-gray-50">
      <div className="bg-white shadow-md rounded-lg w-full  p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Server Information
        </h2>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center text-gray-700"
            >
              <span className="font-medium">{item.label}</span>
              <span className="text-gray-600">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServerInfo;
