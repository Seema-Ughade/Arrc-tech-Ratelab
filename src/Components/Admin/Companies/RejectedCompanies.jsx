// import React, { useState, useEffect } from 'react';
// import { FaSearch, FaTimes } from 'react-icons/fa';
// import { Spin } from 'antd';

// // Mock data structure (empty for rejected companies)
// const rejectedCompaniesData = [];

// const RejectedCompanies = () => {
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
//         setCompanies(rejectedCompaniesData);
//         setFilteredCompanies(rejectedCompaniesData);
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
//       company.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       company.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       company.category?.toLowerCase().includes(searchTerm.toLowerCase())
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
//           Rejected Companies
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
//       <div className="md:hidden">
//         {filteredCompanies.length > 0 ? (
//           <div className="space-y-4">
//             {filteredCompanies.map((company) => (
//               <div key={company.id} className="bg-white rounded-lg shadow p-4 space-y-4">
//                 <div className="space-y-2">
//                   <div className="font-semibold text-gray-700">User</div>
//                   <div>
//                     <div className="text-gray-900">{company.name}</div>
//                     <div className="text-indigo-600 text-sm">{company.username}</div>
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <div className="font-semibold text-gray-700">Email-URL</div>
//                   <div>
//                     <div className="text-gray-900">{company.email}</div>
//                     <div className="text-indigo-600 text-sm truncate">{company.url}</div>
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <div className="font-semibold text-gray-700">Category</div>
//                   <div className="text-gray-900">{company.category}</div>
//                 </div>

//                 <div className="space-y-2">
//                   <div className="font-semibold text-gray-700">Action</div>
//                   <button
//                     onClick={() => handleDetails(company)}
//                     className="inline-flex items-center justify-center px-4 py-2 border border-indigo-600 rounded-lg text-indigo-600 hover:bg-indigo-50"
//                   >
//                     Details
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
//             Data not found
//           </div>
//         )}
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
//             {filteredCompanies.length > 0 ? (
//               filteredCompanies.map((company) => (
//                 <tr key={company.id} className="hover:bg-gray-50">
//                   <td className="px-6 py-4">
//                     <div>
//                       <div className="text-gray-900">{company.name}</div>
//                       <div className="text-indigo-600 text-sm">{company.username}</div>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4">
//                     <div>
//                       <div className="text-gray-900">{company.email}</div>
//                       <div className="text-indigo-600 text-sm truncate max-w-[200px]">{company.url}</div>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 text-gray-900">{company.category}</td>
//                   <td className="px-6 py-4">
//                     <button
//                       onClick={() => handleDetails(company)}
//                       className="text-indigo-600 hover:text-indigo-900 border border-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50"
//                     >
//                       Details
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="px-6 py-8 text-center text-gray-500">
//                   Data not found
//                 </td>
//               </tr>
//             )}
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
//                   <span className="inline-flex px-3 py-1 rounded-full text-sm bg-red-100 text-red-600 w-fit">
//                     Rejected
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

// export default RejectedCompanies;


'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FaSearch, FaTimes } from 'react-icons/fa'
import { Spin } from 'antd';

const RejectedCompanies = () => {
  const [companies, setCompanies] = useState([])
  const [filteredCompanies, setFilteredCompanies] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [showDetails, setShowDetails] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading(true)
        const response = await axios.get('https://arrc-tech-ratelab-backend-project.onrender.com/api/companies')
        const rejectedCompanies = response.data.filter(company => company.status === 'Rejected')
        setCompanies(rejectedCompanies)
        setFilteredCompanies(rejectedCompanies)
      } catch (err) {
        setError('Failed to fetch companies')
        console.error('Error fetching companies:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchCompanies()
  }, [])

  useEffect(() => {
    const filtered = companies.filter(company =>
      company.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.email.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredCompanies(filtered)
  }, [searchQuery, companies])

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
    <div className="min-h-screen bg-[#F8F9FC] p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8">
        <h1 className="text-[#2B3674] text-lg md:text-2xl font-semibold mb-4 md:mb-0">Rejected Companies</h1>
        <div className="w-full md:w-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-[300px] px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="hidden md:grid grid-cols-4 gap-4 p-4 bg-[#4318FF] text-white rounded-t-xl">
          <div className="font-medium">User</div>
          <div className="font-medium">Email-URL</div>
          <div className="font-medium">Category</div>
          <div className="text-right font-medium">Action</div>
        </div>
        
        {filteredCompanies.length > 0 ? (
          filteredCompanies.map((company) => (
            <div key={company._id} className="flex flex-col md:grid md:grid-cols-4 gap-4 p-4 border-b border-gray-100 items-start md:items-center">
              <div>
                <div className="text-[#2B3674] font-medium">{company.companyName}</div>
                <div className="text-[#4318FF]">{company.userName}</div>
              </div>
              <div>
                <div className="text-gray-600">{company.email}</div>
                <a href={company.url} className="text-[#4318FF] hover:underline" target="_blank" rel="noopener noreferrer">
                  {company.url}
                </a>
              </div>
              <div className="text-gray-600">{company.category}</div>
              <div className="flex justify-start md:justify-end w-full">
                <button
                  onClick={() => {
                    setSelectedCompany(company)
                    setShowDetails(true)
                  }}
                  className="flex items-center gap-1 px-4 py-1.5 text-[#4318FF] border border-[#4318FF] rounded-lg hover:bg-[#4318FF] hover:text-white transition-colors"
                >
                  <i className="fas fa-eye"></i>
                  Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-gray-500">No rejected companies found</div>
        )}
      </div>

      {/* Details Modal */}
      {showDetails && selectedCompany && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="relative p-6">
              <button
                onClick={() => setShowDetails(false)}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
              >
                <FaTimes size={24} />
              </button>
              
              <h2 className="text-xl font-semibold mb-4 text-[#2B3674]">
                Details of {selectedCompany.companyName}
              </h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Create Date</span>
                  <span className="text-[#2B3674]">{new Date(selectedCompany.createdAt).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Website Link</span>
                  <a href={selectedCompany.url} className="text-[#4318FF] hover:underline" target="_blank" rel="noopener noreferrer">
                    {selectedCompany.url}
                  </a>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">E-mail</span>
                  <span className="text-[#2B3674]">{selectedCompany.email}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Username</span>
                  <span className="text-[#4318FF]">{selectedCompany.userName}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Address</span>
                  <span className="text-[#2B3674]">{selectedCompany.address}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Category</span>
                  <span className="text-[#2B3674]">{selectedCompany.category}</span>
                </div>
                <div className="py-2 border-b border-gray-100">
                  <span className="text-gray-600">Tags</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedCompany.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-200 rounded-full text-xs text-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="py-2 border-b border-gray-100">
                  <span className="text-gray-600">Description</span>
                  <p className="mt-2 text-[#2B3674]">{selectedCompany.description}</p>
                </div>
                <div className="py-2 border-b border-gray-100">
                  <span className="text-gray-600">Image</span>
                  <img 
                    src={selectedCompany.imageUrl} 
                    alt={selectedCompany.companyName} 
                    className="mt-2 w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Status</span>
                  <span className="px-3 py-1 rounded-full text-sm bg-red-100 text-red-600">
                    {selectedCompany.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default RejectedCompanies

