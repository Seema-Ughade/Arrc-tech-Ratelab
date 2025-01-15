// import React, { useState, useEffect } from 'react';
// import { FaSearch, FaTimes } from 'react-icons/fa';
// import { Spin } from 'antd';

// // Mock data for approved companies
// const approvedCompaniesData = [
//   {
//     id: 1,
//     name: "Ford 2",
//     username: "@testuser123",
//     email: "dcum7322ff38@gmail.com",
//     url: "https://laravel222.com/",
//     category: "Travel Agency",
//     status: "Approved",
//     createDate: "2022-11-16 09:04 AM",
//     adminFeedback: "asdsvbdnfgmh"
//   },
//   {
//     id: 2,
//     name: "ATLAS",
//     username: "@nirobuser",
//     email: "nirobuser1111@fgmail.com",
//     url: "https://www.clementsfuel.com/",
//     category: "Airline",
//     status: "Approved",
//     createDate: "2022-11-15 02:30 PM",
//     adminFeedback: "Approved after verification"
//   }
// ];

// const ApprovedCompanies = () => {
//   const [companies, setCompanies] = useState([]);
//   const [filteredCompanies, setFilteredCompanies] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCompany, setSelectedCompany] = useState(null);
//   const [showDetails, setShowDetails] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         setLoading(true);
//         // Simulating API call
//         await new Promise(resolve => setTimeout(resolve, 10));
//         setCompanies(approvedCompaniesData);
//         setFilteredCompanies(approvedCompaniesData);
//       } catch (err) {
//         setError('Failed to fetch companies');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCompanies();
//   }, []);

//   useEffect(() => {
//     const filtered = companies.filter(company => 
//       company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       company.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       company.category.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredCompanies(filtered);
//   }, [searchTerm, companies]);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleDetails = (company) => {
//     setSelectedCompany(company);
//     setShowDetails(true);
//   };

//   const handleCloseDetails = () => {
//     setSelectedCompany(null);
//     setShowDetails(false);
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <Spin size="large" />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-red-600">
//         {error}
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 p-4">
//       {/* Header */}
//       <div className="mb-6">
//         <h1 className="text-2xl font-semibold text-gray-800 mb-4">
//           Approved Companies
//         </h1>
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//           <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-lg">
//             <FaSearch className="w-4 h-4" />
//           </button>
//         </div>
//       </div>

//       {/* Mobile View */}
//       <div className="md:hidden space-y-4">
//         {filteredCompanies.map((company) => (
//           <div key={company.id} className="bg-white rounded-lg shadow p-4 space-y-4">
//             <div className="space-y-2">
//               <div className="font-semibold text-gray-700">User</div>
//               <div>
//                 <div className="text-gray-900">{company.name}</div>
//                 <div className="text-indigo-600 text-sm">{company.username}</div>
//               </div>
//             </div>

//             <div className="space-y-2">
//               <div className="font-semibold text-gray-700">Email-URL</div>
//               <div>
//                 <div className="text-gray-900">{company.email}</div>
//                 <div className="text-indigo-600 text-sm truncate">{company.url}</div>
//               </div>
//             </div>

//             <div className="space-y-2">
//               <div className="font-semibold text-gray-700">Category</div>
//               <div className="text-gray-900">{company.category}</div>
//             </div>

//             <div className="space-y-2">
//               <div className="font-semibold text-gray-700">Action</div>
//               <button
//                 onClick={() => handleDetails(company)}
//                 className="inline-flex items-center justify-center px-4 py-2 border border-indigo-600 rounded-lg text-indigo-600 hover:bg-indigo-50"
//               >
//                 Details
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Desktop View */}
//       <div className="hidden md:block bg-white rounded-lg shadow overflow-hidden">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead>
//             <tr className="bg-indigo-600 text-white">
//               <th className="px-6 py-3 text-left text-sm font-medium">User</th>
//               <th className="px-6 py-3 text-left text-sm font-medium">Email-URL</th>
//               <th className="px-6 py-3 text-left text-sm font-medium">Category</th>
//               <th className="px-6 py-3 text-left text-sm font-medium">Action</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {filteredCompanies.map((company) => (
//               <tr key={company.id} className="hover:bg-gray-50">
//                 <td className="px-6 py-4">
//                   <div>
//                     <div className="text-gray-900">{company.name}</div>
//                     <div className="text-indigo-600 text-sm">{company.username}</div>
//                   </div>
//                 </td>
//                 <td className="px-6 py-4">
//                   <div>
//                     <div className="text-gray-900">{company.email}</div>
//                     <div className="text-indigo-600 text-sm truncate max-w-[200px]">{company.url}</div>
//                   </div>
//                 </td>
//                 <td className="px-6 py-4 text-gray-900">{company.category}</td>
//                 <td className="px-6 py-4">
//                   <button
//                     onClick={() => handleDetails(company)}
//                     className="text-indigo-600 hover:text-indigo-900 border border-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50"
//                   >
//                     Details
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Details Modal */}
//       {showDetails && selectedCompany && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
//             <div className="relative p-6">
//               <button
//                 onClick={handleCloseDetails}
//                 className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
//               >
//                 <FaTimes size={20} />
//               </button>
              
//               <h2 className="text-xl font-semibold text-gray-800 mb-6">
//                 Details of {selectedCompany.name}
//               </h2>
              
//               <div className="space-y-4">
//                 <div className="flex flex-col space-y-1">
//                   <span className="text-gray-600">Create Date</span>
//                   <span className="text-gray-900">{selectedCompany.createDate}</span>
//                 </div>
                
//                 <div className="flex flex-col space-y-1">
//                   <span className="text-gray-600">Website Link</span>
//                   <a 
//                     href={selectedCompany.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-indigo-600 hover:underline truncate"
//                   >
//                     {selectedCompany.url}
//                   </a>
//                 </div>
                
//                 <div className="flex flex-col space-y-1">
//                   <span className="text-gray-600">E-mail</span>
//                   <span className="text-gray-900">{selectedCompany.email}</span>
//                 </div>
                
//                 <div className="flex flex-col space-y-1">
//                   <span className="text-gray-600">Username</span>
//                   <span className="text-indigo-600">{selectedCompany.username}</span>
//                 </div>
                
//                 <div className="flex flex-col space-y-1">
//                   <span className="text-gray-600">Status</span>
//                   <span className="inline-flex px-3 py-1 rounded-full text-sm bg-green-100 text-green-600 w-fit">
//                     {selectedCompany.status}
//                   </span>
//                 </div>

//                 <div className="flex flex-col space-y-1">
//                   <span className="text-gray-600">Admin Feedback</span>
//                   <span className="text-gray-900">{selectedCompany.adminFeedback}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ApprovedCompanies;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { Spin } from 'antd';

const ApprovedCompanies = () => {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://arrc-tech-ratelab-backend-project.onrender.com/api/companies');
        const approvedCompanies = response.data.filter(company => company.status === 'Approved');
        setCompanies(approvedCompanies);
        setFilteredCompanies(approvedCompanies);
      } catch (err) {
        setError('Failed to fetch companies');
        console.error('Error fetching companies:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  useEffect(() => {
    const filtered = companies.filter(company => 
      (company.companyName && company.companyName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (company.email && company.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (company.category && company.category.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredCompanies(filtered);
  }, [searchTerm, companies]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDetails = (company) => {
    setSelectedCompany(company);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setSelectedCompany(null);
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
          Approved Companies
        </h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-lg">
            <FaSearch className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile and Tablet View */}
      <div className="lg:hidden space-y-4">
        {filteredCompanies.map((company) => (
          <div key={company._id} className="bg-white rounded-lg shadow p-4 space-y-4">
            <div className="space-y-2">
              <div className="font-semibold text-gray-700">Company</div>
              <div>
                <div className="text-gray-900">{company.companyName}</div>
                <div className="text-indigo-600 text-sm">{company.userName}</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-semibold text-gray-700">Email-URL</div>
              <div>
                <div className="text-gray-900">{company.email}</div>
                <div className="text-indigo-600 text-sm truncate">{company.url}</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-semibold text-gray-700">Category</div>
              <div className="text-gray-900">{company.category}</div>
            </div>

            <div className="space-y-2">
              <div className="font-semibold text-gray-700">Action</div>
              <button
                onClick={() => handleDetails(company)}
                className="inline-flex items-center justify-center px-4 py-2 border border-indigo-600 rounded-lg text-indigo-600 hover:bg-indigo-50"
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="px-6 py-3 text-left text-sm font-medium">Company</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Email-URL</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Category</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredCompanies.map((company) => (
              <tr key={company._id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div>
                    <div className="text-gray-900">{company.companyName}</div>
                    <div className="text-indigo-600 text-sm">{company.userName}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <div className="text-gray-900">{company.email}</div>
                    <div className="text-indigo-600 text-sm truncate max-w-[200px]">{company.url}</div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-900">{company.category}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDetails(company)}
                    className="text-indigo-600 hover:text-indigo-900 border border-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50"
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Details Modal */}
      {showDetails && selectedCompany && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="relative p-6">
              <button
                onClick={handleCloseDetails}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
              >
                <FaTimes size={20} />
              </button>
              
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Details of {selectedCompany.companyName}
              </h2>
              
              <div className="space-y-4">
                <div className="flex flex-col space-y-1">
                  <span className="text-gray-600">Create Date</span>
                  <span className="text-gray-900">{new Date(selectedCompany.createdAt).toLocaleString()}</span>
                </div>
                
                <div className="flex flex-col space-y-1">
                  <span className="text-gray-600">Website Link</span>
                  <a 
                    href={selectedCompany.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline truncate"
                  >
                    {selectedCompany.url}
                  </a>
                </div>
                
                <div className="flex flex-col space-y-1">
                  <span className="text-gray-600">E-mail</span>
                  <span className="text-gray-900">{selectedCompany.email}</span>
                </div>
                
                <div className="flex flex-col space-y-1">
                  <span className="text-gray-600">Username</span>
                  <span className="text-indigo-600">{selectedCompany.userName}</span>
                </div>
                
                <div className="flex flex-col space-y-1">
                  <span className="text-gray-600">Address</span>
                  <span className="text-gray-900">{selectedCompany.address}</span>
                </div>

                <div className="flex flex-col space-y-1">
                  <span className="text-gray-600">Tags</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedCompany.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-200 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col space-y-1">
                  <span className="text-gray-600">Description</span>
                  <p className="text-gray-900">{selectedCompany.description}</p>
                </div>

                <div className="flex flex-col space-y-1">
                  <span className="text-gray-600">Image</span>
                  <img 
                    src={selectedCompany.imageUrl} 
                    alt={selectedCompany.companyName} 
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <span className="text-gray-600">Status</span>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm bg-green-100 text-green-600 w-fit">
                    {selectedCompany.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApprovedCompanies;

