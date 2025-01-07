import React from "react";

const ApplicationInfo = () => {
  const data = [
    { label: "Ratelab Version", value: "3.0" },
    { label: "ViserAdmin Version", value: "5.0.2" },
    { label: "Laravel Version", value: "11.7.0" },
    { label: "Timezone", value: "Asia/Dhaka" },
  ];

  return (
    <div className="flex justify-center  min-h-screen bg-gray-50">
      <div className="bg-white shadow-md rounded-lg w-full  p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Application Information
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

export default ApplicationInfo;
