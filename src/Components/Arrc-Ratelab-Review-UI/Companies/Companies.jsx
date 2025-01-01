// import React from 'react'

// const Companies = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Companies


import React from "react";

const Companies = () => {
  const categories = [
    { name: "All", count: 2 },
    { name: "Airline", count: 1 },
    { name: "Travel Agency", count: 1 },
    { name: "Bank", count: 0 },
    { name: "Jewellery", count: 0 },
  ];

  const companies = [
    {
      name: "Ford 2",
      category: "Travel Agency",
      location: "Dhaka",
      date: "16 Nov 2022",
      tags: ["CAR", "car2", "good"],
      rating: 4.13,
      reviews: 46,
    },
    {
      name: "ATLAS",
      category: "Airline",
      location: "Dhaka, Uttara",
      date: "16 Nov 2022",
      tags: ["ATLAS", "FUEL", "oil", "corporatio of oil"],
      rating: 4.12,
      reviews: 33,
    },
  ];

  return (
    <div className="flex gap-6 p-6 mt-16 bg-gray-50 min-h-screen">
      {/* Filter Sidebar */}
      <div className="w-64 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-orange-500 font-bold flex items-center mb-6">
          <span className="mr-2">Filter</span>
          <i className="fas fa-sliders-h"></i>
        </h3>
        <div>
          {/* Search Section */}
          <div className="mb-6">
            <h4 className="text-gray-800 font-semibold mb-2">Company or Tag</h4>
            <div className="relative">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-orange-400"
              />
              <i className="fas fa-search absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>
          {/* Categories Section */}
          <div className="mb-6">
            <h4 className="text-gray-800 font-semibold mb-2">By Categories</h4>
            <ul className="text-sm">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className={`flex justify-between items-center py-1 ${
                    category.name === "All" ? "text-orange-500 font-bold" : ""
                  }`}
                >
                  <span>{category.name}</span>
                  <span>({category.count})</span>
                </li>
              ))}
            </ul>
            <button className="mt-2 text-sm text-orange-500">See More...</button>
          </div>
          {/* Ratings Section */}
          <div>
            <h4 className="text-gray-800 font-semibold mb-2">By Rating</h4>
            <ul className="text-sm">
              <li className="flex items-center py-1 text-orange-500">
                <input
                  type="radio"
                  name="rating"
                  className="mr-2"
                  defaultChecked
                />
                <span>All</span>
              </li>
              {[5, 4].map((stars) => (
                <li key={stars} className="flex items-center py-1">
                  <input type="radio" name="rating" className="mr-2" />
                  <span>
                    {stars} <i className="fas fa-star text-orange-500"></i>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Companies Grid */}
      <div className="flex-1 grid h-44 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col"
          >
            {/* Image Placeholder */}
            <div className="bg-gray-200 w-full h-32 mb-4 flex items-center justify-center rounded">
              <span className="text-gray-400">400×300</span>
            </div>
            {/* Company Details */}
            <div className="flex-1">
              <h3 className="font-bold text-lg text-navy-900">{company.name}</h3>
              <p className="text-sm text-gray-500">{company.category}</p>
              <p className="text-sm text-gray-500 mb-4">{company.location}</p>
              <p className="text-sm text-gray-500">
                Registered On: {company.date}
              </p>
              <div className="mt-2 text-sm text-gray-500">
                {company.tags.map((tag, idx) => (
                  <span key={idx} className="mr-2">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Rating Section */}
            <div className="mt-4 flex items-center">
              <div className="flex items-center text-orange-500">
                {[...Array(5)].map((_, starIdx) => (
                  <i
                    key={starIdx}
                    className={`fas fa-star ${
                      company.rating > starIdx
                        ? "text-orange-500"
                        : "text-gray-300"
                    }`}
                  ></i>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500">
                {company.rating} ({company.reviews} ratings)
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
