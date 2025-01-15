// import React, { useState, useEffect } from 'react';
// import { FaSearch, FaTimes } from 'react-icons/fa';
// import { Spin } from 'antd';

// // Mock data
// const companiesData = [
//   {
//     id: 1,
//     name: "megashop",
//     username: "@megashoppc4",
//     email: "megashop@gmail.com",
//     url: "https://megashopltd.com/",
//     category: "Cars",
//     status: "Pending",
//     createDate: "2024-12-12 04:12 PM"
//   },
//   {
//     id: 2,
//     name: "idijasid",
//     username: "@orlandourdaneta",
//     email: "admin2@gmail.com",
//     url: "http://localhost.com",
//     category: "Bank",
//     status: "Pending"
//   },
//   {
//     id: 3,
//     name: "Freeman Sosa Traders",
//     username: "@username",
//     email: "xekowejufo@mailinator.com",
//     url: "https://www.zeboburuburehud.ws",
//     category: "Travel Agency",
//     status: "Pending"
//   },
//   {
//     id: 4,
//     name: "Company Name",
//     username: "@orlandourdaneta",
//     email: "mail@mail.com",
//     url: "https://instagram.com",
//     category: "Bank",
//     status: "Pending"
//   },
//   {
//     id: 5,
//     name: "Cars45",
//     username: "@leooooo",
//     email: "leooooo@gmail.com",
//     url: "https://script.viserlab.com/ratelab/user/company/create",
//     category: "Cars",
//     status: "Pending"
//   }
// ];

// const AllCompanyManagement = () => {
//   const [companies, setCompanies] = useState([]);
//   const [filteredCompanies, setFilteredCompanies] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCompany, setSelectedCompany] = useState(null);
//   const [showDetails, setShowDetails] = useState(false);
//   const [showApprovalModal, setShowApprovalModal] = useState(false);
//   const [showRejectionModal, setShowRejectionModal] = useState(false);
//   const [modalDetails, setModalDetails] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         setLoading(true);
//         // Simulating API call
//         await new Promise(resolve => setTimeout(resolve, 10));
//         setCompanies(companiesData);
//         setFilteredCompanies(companiesData);
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

//   const handleApprove = () => {
//     setShowApprovalModal(true);
//   };

//   const handleReject = () => {
//     setShowRejectionModal(true);
//   };

//   const handleModalSubmit = async (type) => {
//     try {
//       // Simulating API call
//       await new Promise(resolve => setTimeout(resolve, 10));
      
//       // Update company status
//       const updatedCompanies = companies.map(company => {
//         if (company.id === selectedCompany.id) {
//           return {
//             ...company,
//             status: type === 'approval' ? 'Approved' : 'Rejected'
//           };
//         }
//         return company;
//       });

//       setCompanies(updatedCompanies);
//       setModalDetails('');
//       setShowApprovalModal(false);
//       setShowRejectionModal(false);
//       setShowDetails(false);
      
//     } catch (err) {
//       console.error('Error updating status:', err);
//     }
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
//           All Companies
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
//               <div className="font-semibold text-gray-700">Status</div>
//               <span className="inline-block px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-600">
//                 {company.status}
//               </span>
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
//               <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
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
//                   <span className="px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-600">
//                     {company.status}
//                   </span>
//                 </td>
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
//             <div className="relative p-4 sm:p-6">
//               <button
//                 onClick={handleCloseDetails}
//                 className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
//               >
//                 <FaTimes size={20} />
//               </button>
              
//               <h2 className="text-lg sm:text-xl font-semibold mb-4">
//                 Details of {selectedCompany.name}
//               </h2>
              
//               <div className="space-y-4">
//                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
//                   <span className="text-sm sm:text-base text-gray-600">Create Date</span>
//                   <span className="text-sm sm:text-base text-gray-900 mt-1 sm:mt-0">
//                     {selectedCompany.createDate || "N/A"}
//                   </span>
//                 </div>
                
//                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
//                   <span className="text-sm sm:text-base text-gray-600">Website Link</span>
//                   <a 
//                     href={selectedCompany.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-sm sm:text-base text-indigo-600 hover:underline truncate max-w-[250px] mt-1 sm:mt-0"
//                   >
//                     {selectedCompany.url}
//                   </a>
//                 </div>
                
//                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
//                   <span className="text-sm sm:text-base text-gray-600">E-mail</span>
//                   <span className="text-sm sm:text-base text-gray-900 mt-1 sm:mt-0">
//                     {selectedCompany.email}
//                   </span>
//                 </div>
                
//                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
//                   <span className="text-sm sm:text-base text-gray-600">Username</span>
//                   <span className="text-sm sm:text-base text-indigo-600 mt-1 sm:mt-0">
//                     {selectedCompany.username}
//                   </span>
//                 </div>
                
//                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
//                   <span className="text-sm sm:text-base text-gray-600">Status</span>
//                   <span className={`px-3 py-1 rounded-full text-sm ${
//                     selectedCompany.status === 'Approved' ? 'bg-green-100 text-green-600' :
//                     selectedCompany.status === 'Rejected' ? 'bg-red-100 text-red-600' :
//                     'bg-orange-100 text-orange-600'
//                   } mt-1 sm:mt-0`}>
//                     {selectedCompany.status}
//                   </span>
//                 </div>
//               </div>

//               <div className="mt-6 grid grid-cols-2 gap-4">
//                 <button
//                   onClick={handleApprove}
//                   className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors text-sm sm:text-base"
//                 >
//                   Approve
//                 </button>
//                 <button
//                   onClick={handleReject}
//                   className="border border-red-600 text-red-600 px-4 py-2 rounded-md hover:bg-red-50 transition-colors text-sm sm:text-base"
//                 >
//                   Reject
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Approval Modal */}
//       {showApprovalModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
//             <div className="p-4 sm:p-6">
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-lg sm:text-xl font-semibold">Approval Confirmation!</h2>
//                 <button
//                   onClick={() => setShowApprovalModal(false)}
//                   className="text-gray-400 hover:text-gray-600"
//                 >
//                   <FaTimes size={20} />
//                 </button>
//               </div>
              
//               <h3 className="text-sm sm:text-base mb-4">Have you sent approval info?</h3>
              
//               <textarea
//                 className="w-full border rounded-md p-2 mb-4 text-sm sm:text-base"
//                 rows="4"
//                 placeholder="Provide the details..."
//                 value={modalDetails}
//                 onChange={(e) => setModalDetails(e.target.value)}
//               />
              
//               <div className="flex justify-end gap-4">
//                 <button
//                   onClick={() => setShowApprovalModal(false)}
//                   className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-sm sm:text-base"
//                 >
//                   Close
//                 </button>
//                 <button
//                   onClick={() => handleModalSubmit('approval')}
//                   className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm sm:text-base"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Rejection Modal */}
//       {showRejectionModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
//             <div className="p-4 sm:p-6">
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-lg sm:text-xl font-semibold">Rejection Confirmation!</h2>
//                 <button
//                   onClick={() => setShowRejectionModal(false)}
//                   className="text-gray-400 hover:text-gray-600"
//                 >
//                   <FaTimes size={20} />
//                 </button>
//               </div>
              
//               <h3 className="text-sm sm:text-base mb-4">Have you sent rejection info?</h3>
              
//               <textarea
//                 className="w-full border rounded-md p-2 mb-4 text-sm sm:text-base"
//                 rows="4"
//                 placeholder="Provide the details..."
//                 value={modalDetails}
//                 onChange={(e) => setModalDetails(e.target.value)}
//               />
              
//               <div className="flex justify-end gap-4">
//                 <button
//                   onClick={() => setShowRejectionModal(false)}
//                   className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-sm sm:text-base"
//                 >
//                   Close
//                 </button>
//                 <button
//                   onClick={() => handleModalSubmit('rejection')}
//                   className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm sm:text-base"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllCompanyManagement;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaSearch, FaTimes } from 'react-icons/fa';
// import { Spin, message } from 'antd';

// const AllCompanyManagement = () => {
//   const [companies, setCompanies] = useState([]);
//   const [filteredCompanies, setFilteredCompanies] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCompany, setSelectedCompany] = useState(null);
//   const [showDetails, setShowDetails] = useState(false);
//   const [showApprovalModal, setShowApprovalModal] = useState(false);
//   const [showRejectionModal, setShowRejectionModal] = useState(false);
//   const [modalDetails, setModalDetails] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get('https://arrc-tech-ratelab-backend-project.onrender.com/api/companies');
//         setCompanies(response.data);
//         setFilteredCompanies(response.data);
//       } catch (err) {
//         setError('Failed to fetch companies');
//         console.error('Error fetching companies:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCompanies();
//   }, []);

//   useEffect(() => {
//     if (companies.length > 0) {
//       const filtered = companies.filter(company => 
//         (company.companyName && company.companyName.toLowerCase().includes(searchTerm.toLowerCase())) ||
//         (company.email && company.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
//         (company.category && company.category.toLowerCase().includes(searchTerm.toLowerCase()))
//       );
//       setFilteredCompanies(filtered);
//     }
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

//   const handleApprove = () => {
//     setShowApprovalModal(true);
//   };

//   const handleReject = () => {
//     setShowRejectionModal(true);
//   };

//   const handleModalSubmit = async (type) => {
//     try {
//       const response = await axios.post(`https://arrc-tech-ratelab-backend-project.onrender.com/api/companies/${selectedCompany._id}/${type}`, {
//         details: modalDetails
//       });
      
//       // Update company status
//       const updatedCompanies = companies.map(company => {
//         if (company._id === selectedCompany._id) {
//           return {
//             ...company,
//             status: type === 'approval' ? 'Approved' : 'Rejected'
//           };
//         }
//         return company;
//       });

//       setCompanies(updatedCompanies);
//       setModalDetails('');
//       setShowApprovalModal(false);
//       setShowRejectionModal(false);
//       setShowDetails(false);
      
//       message.success(response.data.message);
//     } catch (err) {
//       console.error('Error updating status:', err);
//       message.error('Failed to update company status');
//     }
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
//           All Companies
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
//           <div key={company._id} className="bg-white rounded-lg shadow p-4 space-y-4">
//             <div className="space-y-2">
//               <div className="font-semibold text-gray-700">Company</div>
//               <div>
//                 <div className="text-gray-900">{company.companyName}</div>
//                 <div className="text-indigo-600 text-sm">{company.userName}</div>
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
//               <div className="font-semibold text-gray-700">Status</div>
//               <span className={`px-2 py-1 rounded-full text-xs ${
//                 company.status === 'Approved' ? 'bg-green-100 text-green-800' :
//                 company.status === 'Rejected' ? 'bg-red-100 text-red-800' :
//                 'bg-yellow-100 text-yellow-800'
//               }`}>
//                 {company.status}
//               </span>
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
//               <th className="px-6 py-3 text-left text-sm font-medium">Company</th>
//               <th className="px-6 py-3 text-left text-sm font-medium">Email-URL</th>
//               <th className="px-6 py-3 text-left text-sm font-medium">Category</th>
//               <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
//               <th className="px-6 py-3 text-left text-sm font-medium">Action</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {filteredCompanies.map((company) => (
//               <tr key={company._id} className="hover:bg-gray-50">
//                 <td className="px-6 py-4">
//                   <div>
//                     <div className="text-gray-900">{company.companyName}</div>
//                     <div className="text-indigo-600 text-sm">{company.userName}</div>
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
//                   <span className={`px-2 py-1 rounded-full text-xs ${
//                     company.status === 'Approved' ? 'bg-green-100 text-green-800' :
//                     company.status === 'Rejected' ? 'bg-red-100 text-red-800' :
//                     'bg-yellow-100 text-yellow-800'
//                   }`}>
//                     {company.status}
//                   </span>
//                 </td>
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
//             <div className="relative p-4 sm:p-6">
//               <button
//                 onClick={handleCloseDetails}
//                 className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
//               >
//                 <FaTimes size={20} />
//               </button>
              
//               <h2 className="text-lg sm:text-xl font-semibold mb-4">
//                 Details of {selectedCompany.companyName}
//               </h2>
              
//               <div className="space-y-4">
//                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
//                   <span className="text-sm sm:text-base text-gray-600">Create Date</span>
//                   <span className="text-sm sm:text-base text-gray-900 mt-1 sm:mt-0">
//                     {new Date(selectedCompany.createdAt).toLocaleString()}
//                   </span>
//                 </div>
                
//                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
//                   <span className="text-sm sm:text-base text-gray-600">Website Link</span>
//                   <a 
//                     href={selectedCompany.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-sm sm:text-base text-indigo-600 hover:underline truncate max-w-[250px] mt-1 sm:mt-0"
//                   >
//                     {selectedCompany.url}
//                   </a>
//                 </div>
                
//                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
//                   <span className="text-sm sm:text-base text-gray-600">E-mail</span>
//                   <span className="text-sm sm:text-base text-gray-900 mt-1 sm:mt-0">
//                     {selectedCompany.email}
//                   </span>
//                 </div>
                
//                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
//                   <span className="text-sm sm:text-base text-gray-600">User Name</span>
//                   <span className="text-sm sm:text-base text-indigo-600 mt-1 sm:mt-0">
//                     {selectedCompany.userName}
//                   </span>
//                 </div>
                
//                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
//                   <span className="text-sm sm:text-base text-gray-600">Address</span>
//                   <span className="text-sm sm:text-base text-gray-900 mt-1 sm:mt-0">
//                     {selectedCompany.address}
//                   </span>
//                 </div>

//                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
//                   <span className="text-sm sm:text-base text-gray-600">Tags</span>
//                   <div className="flex flex-wrap gap-2 mt-1 sm:mt-0">
//                     {selectedCompany.tags.map((tag, index) => (
//                       <span key={index} className="px-2 py-1 bg-gray-200 rounded-full text-xs">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <span className="text-sm sm:text-base text-gray-600">Description</span>
//                   <p className="text-sm sm:text-base text-gray-900">
//                     {selectedCompany.description}
//                   </p>
//                 </div>

//                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
//                   <span className="text-sm sm:text-base text-gray-600">Image</span>
//                   <img 
//                     src={selectedCompany.imageUrl} 
//                     alt={selectedCompany.companyName} 
//                     className="w-full sm:w-32 h-32 object-cover rounded-lg mt-1 sm:mt-0"
//                   />
//                 </div>

//                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
//                   <span className="text-sm sm:text-base text-gray-600">Status</span>
//                   <span className={`px-2 py-1 rounded-full text-xs ${
//                     selectedCompany.status === 'Approved' ? 'bg-green-100 text-green-800' :
//                     selectedCompany.status === 'Rejected' ? 'bg-red-100 text-red-800' :
//                     'bg-yellow-100 text-yellow-800'
//                   }`}>
//                     {selectedCompany.status}
//                   </span>
//                 </div>
//               </div>

//               <div className="mt-6 grid grid-cols-2 gap-4">
//                 <button
//                   onClick={handleApprove}
//                   className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors text-sm sm:text-base"
//                   disabled={selectedCompany.status === 'Approved'}
//                 >
//                   Approve
//                 </button>
//                 <button
//                   onClick={handleReject}
//                   className="border border-red-600 text-red-600 px-4 py-2 rounded-md hover:bg-red-50 transition-colors text-sm sm:text-base"
//                   disabled={selectedCompany.status === 'Rejected'}
//                 >
//                   Reject
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Approval Modal */}
//       {showApprovalModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
//             <div className="p-4 sm:p-6">
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-lg sm:text-xl font-semibold">Approval Confirmation</h2>
//                 <button
//                   onClick={() => setShowApprovalModal(false)}
//                   className="text-gray-400 hover:text-gray-600"
//                 >
//                   <FaTimes size={20} />
//                 </button>
//               </div>
              
//               <h3 className="text-sm sm:text-base mb-4">Are you sure you want to approve this company?</h3>
              
//               <textarea
//                 className="w-full border rounded-md p-2 mb-4 text-sm sm:text-base"
//                 rows="4"
//                 placeholder="Provide any additional details..."
//                 value={modalDetails}
//                 onChange={(e) => setModalDetails(e.target.value)}
//               />
              
//               <div className="flex justify-end gap-4">
//                 <button
//                   onClick={() => setShowApprovalModal(false)}
//                   className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-sm sm:text-base"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={() => handleModalSubmit('approval')}
//                   className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm sm:text-base"
//                 >
//                   Confirm Approval
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Rejection Modal */}
//       {showRejectionModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
//             <div className="p-4 sm:p-6">
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-lg sm:text-xl font-semibold">Rejection Confirmation</h2>
//                 <button
//                   onClick={() => setShowRejectionModal(false)}
//                   className="text-gray-400 hover:text-gray-600"
//                 >
//                   <FaTimes size={20} />
//                 </button>
//               </div>
              
//               <h3 className="text-sm sm:text-base mb-4">Are you sure you want to reject this company?</h3>
              
//               <textarea
//                 className="w-full border rounded-md p-2 mb-4 text-sm sm:text-base"
//                 rows="4"
//                 placeholder="Provide reasons for rejection..."
//                 value={modalDetails}
//                 onChange={(e) => setModalDetails(e.target.value)}
//               />
              
//               <div className="flex justify-end gap-4">
//                 <button
//                   onClick={() => setShowRejectionModal(false)}
//                   className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-sm sm:text-base"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={() => handleModalSubmit('rejection')}
//                   className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm sm:text-base"
//                 >
//                   Confirm Rejection
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllCompanyManagement;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { Spin, message } from 'antd';

const AllCompanyManagement = () => {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [showRejectionModal, setShowRejectionModal] = useState(false);
  const [modalDetails, setModalDetails] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://arrc-tech-ratelab-backend-project.onrender.com/api/companies');
        setCompanies(response.data);
        setFilteredCompanies(response.data);
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
    if (companies.length > 0) {
      const filtered = companies.filter(company => 
        (company.companyName && company.companyName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (company.email && company.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (company.category && company.category.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredCompanies(filtered);
    }
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

  const handleApprove = () => {
    setShowApprovalModal(true);
  };

  const handleReject = () => {
    setShowRejectionModal(true);
  };

  const handleModalSubmit = async (type) => {
    try {
      const response = await axios.post(`https://arrc-tech-ratelab-backend-project.onrender.com/api/companies/${selectedCompany._id}/${type}`, {
        details: modalDetails
      });
      
      // Update company status
      const updatedCompanies = companies.map(company => {
        if (company._id === selectedCompany._id) {
          return {
            ...company,
            status: type === 'approval' ? 'Approved' : 'Rejected'
          };
        }
        return company;
      });

      setCompanies(updatedCompanies);
      setModalDetails('');
      setShowApprovalModal(false);
      setShowRejectionModal(false);
      setShowDetails(false);
      
      message.success(response.data.message);
    } catch (err) {
      console.error('Error updating status:', err);
      message.error('Failed to update company status');
    }
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
          All Companies
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

      {/* Mobile View */}
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
              <div className="font-semibold text-gray-700">Status</div>
              <span className={`px-2 py-1 rounded-full text-xs ${
                company.status === 'Approved' ? 'bg-green-100 text-green-800' :
                company.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {company.status}
              </span>
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
              <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
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
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    company.status === 'Approved' ? 'bg-green-100 text-green-800' :
                    company.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {company.status}
                  </span>
                </td>
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
            <div className="relative p-4 sm:p-6">
              <button
                onClick={handleCloseDetails}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
              >
                <FaTimes size={20} />
              </button>
              
              <h2 className="text-lg sm:text-xl font-semibold mb-4">
                Details of {selectedCompany.companyName}
              </h2>
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <span className="text-sm sm:text-base text-gray-600">Create Date</span>
                  <span className="text-sm sm:text-base text-gray-900 mt-1 sm:mt-0">
                    {new Date(selectedCompany.createdAt).toLocaleString()}
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <span className="text-sm sm:text-base text-gray-600">Website Link</span>
                  <a 
                    href={selectedCompany.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-indigo-600 hover:underline truncate max-w-[250px] mt-1 sm:mt-0"
                  >
                    {selectedCompany.url}
                  </a>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <span className="text-sm sm:text-base text-gray-600">E-mail</span>
                  <span className="text-sm sm:text-base text-gray-900 mt-1 sm:mt-0">
                    {selectedCompany.email}
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <span className="text-sm sm:text-base text-gray-600">User Name</span>
                  <span className="text-sm sm:text-base text-indigo-600 mt-1 sm:mt-0">
                    {selectedCompany.userName}
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <span className="text-sm sm:text-base text-gray-600">Address</span>
                  <span className="text-sm sm:text-base text-gray-900 mt-1 sm:mt-0">
                    {selectedCompany.address}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <span className="text-sm sm:text-base text-gray-600">Tags</span>
                  <div className="flex flex-wrap gap-2 mt-1 sm:mt-0">
                    {selectedCompany.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-200 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-sm sm:text-base text-gray-600">Description</span>
                  <p className="text-sm sm:text-base text-gray-900">
                    {selectedCompany.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <span className="text-sm sm:text-base text-gray-600">Image</span>
                  <img 
                    src={selectedCompany.imageUrl} 
                    alt={selectedCompany.companyName} 
                    className="w-full sm:w-32 h-32 object-cover rounded-lg mt-1 sm:mt-0"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <span className="text-sm sm:text-base text-gray-600">Status</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    selectedCompany.status === 'Approved' ? 'bg-green-100 text-green-800' :
                    selectedCompany.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {selectedCompany.status}
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <button
                  onClick={handleApprove}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors text-sm sm:text-base"
                  disabled={selectedCompany.status === 'Approved'}
                >
                  Approve
                </button>
                <button
                  onClick={handleReject}
                  className="border border-red-600 text-red-600 px-4 py-2 rounded-md hover:bg-red-50 transition-colors text-sm sm:text-base"
                  disabled={selectedCompany.status === 'Rejected'}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Approval Modal */}
      {showApprovalModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg sm:text-xl font-semibold">Approval Confirmation</h2>
                <button
                  onClick={() => setShowApprovalModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              
              <h3 className="text-sm sm:text-base mb-4">Are you sure you want to approve this company?</h3>
              
              <textarea
                className="w-full border rounded-md p-2 mb-4 text-sm sm:text-base"
                rows="4"
                placeholder="Provide any additional details..."
                value={modalDetails}
                onChange={(e) => setModalDetails(e.target.value)}
              />
              
              <div className="flex justify-between gap-4">
                <button
                  onClick={() => setShowApprovalModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleModalSubmit('approval')}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm sm:text-base"
                >
                  Confirm Approval
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Rejection Modal */}
      {showRejectionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg sm:text-xl font-semibold">Rejection Confirmation</h2>
                <button
                  onClick={() => setShowRejectionModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              
              <h3 className="text-sm sm:text-base mb-4">Are you sure you want to reject this company?</h3>
              
              <textarea
                className="w-full border rounded-md p-2 mb-4 text-sm sm:text-base"
                rows="4"
                placeholder="Provide reasons for rejection..."
                value={modalDetails}
                onChange={(e) => setModalDetails(e.target.value)}
              />
              
              <div className="flex justify-between gap-4">
                <button
                  onClick={() => setShowRejectionModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleModalSubmit('rejection')}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm sm:text-base"
                >
                  Confirm Rejection
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllCompanyManagement;

