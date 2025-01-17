// 'use client'

// import React, { useState } from 'react'

// const initialCompanies = [
//   {
//     id: 1,
//     name: 'Janata',
//     username: '@username',
//     email: 'a@gmail.com',
//     url: 'https://laravel.com/',
//     category: 'Bank',
//     status: 'Pending',
//     createDate: '2022-11-16 09:04 AM',
//     adminFeedback: 'okey !~'
//   },
//   {
//     id: 2,
//     name: 'Ford',
//     username: '@testuser123',
//     email: 'jdkjkdf@email.com',
//     url: 'https://laravel22.com/',
//     category: 'Travel Agency',
//     status: 'Pending',
//     createDate: '2022-11-16 10:15 AM',
//     adminFeedback: ''
//   },
//   {
//     id: 3,
//     name: 'SpaceX',
//     username: '@allenmusk',
//     email: 'testtetuuiugjgjgjhj@test.com',
//     url: 'https://www.spacex.com/',
//     category: 'Airline',
//     status: 'Pending',
//     createDate: '2022-11-16 11:30 AM',
//     adminFeedback: ''
//   },
//   {
//     id: 4,
//     name: 'USA',
//     username: '@nirobuser',
//     email: 'nirobuser@gmail.com',
//     url: 'https://www.clements.com/',
//     category: 'Travel Agency',
//     status: 'Pending',
//     createDate: '2022-11-16 12:45 PM',
//     adminFeedback: ''
//   }
// ]

// export default function PendingCompanies() {
//   const [companies, setCompanies] = useState(initialCompanies)
//   const [searchQuery, setSearchQuery] = useState('')
//   const [selectedCompany, setSelectedCompany] = useState(null)
//   const [showDetails, setShowDetails] = useState(false)
//   const [showApprovalModal, setShowApprovalModal] = useState(false)
//   const [showRejectionModal, setShowRejectionModal] = useState(false)
//   const [approvalDetails, setApprovalDetails] = useState('')
//   const [rejectionDetails, setRejectionDetails] = useState('')

//   const filteredCompanies = companies.filter(company =>
//     company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     company.email.toLowerCase().includes(searchQuery.toLowerCase())
//   )

//   const handleApprove = () => {
//     if (!approvalDetails.trim()) return
//     const updatedCompanies = companies.map(company =>
//       company.id === selectedCompany.id
//         ? { ...company, status: 'Approved', adminFeedback: approvalDetails }
//         : company
//     )
//     setCompanies(updatedCompanies)
//     setShowApprovalModal(false)
//     setApprovalDetails('')
//     setShowDetails(false)
//   }

//   const handleReject = () => {
//     if (!rejectionDetails.trim()) return
//     const updatedCompanies = companies.map(company =>
//       company.id === selectedCompany.id
//         ? { ...company, status: 'Rejected', adminFeedback: rejectionDetails }
//         : company
//     )
//     setCompanies(updatedCompanies)
//     setShowRejectionModal(false)
//     setRejectionDetails('')
//     setShowDetails(false)
//   }

//   return (
//     <div className="min-h-screen bg-[#F8F9FC] p-4 md:p-8">
//       {!showDetails ? (
//         <>
//           <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8">
//             <h1 className="text-[#2B3674] text-lg md:text-2xl font-semibold">Pending Companies</h1>
//             <div className="flex mt-4 md:mt-0">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full md:w-[300px] px-4 py-2 rounded-l-lg border border-r-0 border-gray-200 focus:outline-none"
//               />
//               <button className="px-4 bg-[#4318FF] text-white rounded-r-lg">
//                 <i className="fas fa-search"></i>
//               </button>
//             </div>
//           </div>

//           <div className="bg-white rounded-xl shadow-sm overflow-hidden">
//             <div className="hidden md:grid grid-cols-4 gap-4 p-4 bg-[#4318FF] text-white rounded-t-xl">
//               <div className="font-medium">User</div>
//               <div className="font-medium">Email-URL</div>
//               <div className="font-medium">Category</div>
//               <div className="text-right font-medium">Action</div>
//             </div>
            
//             {filteredCompanies.map((company) => (
//               <div key={company.id} className="flex flex-col md:grid md:grid-cols-4 gap-4 p-4 border-b border-gray-100 items-start md:items-center">
//                 <div>
//                   <div className="text-[#2B3674] font-medium">{company.name}</div>
//                   <div className="text-[#4318FF]">{company.username}</div>
//                 </div>
//                 <div>
//                   <div className="text-gray-600">{company.email}</div>
//                   <a href={company.url} className="text-[#4318FF] hover:underline" target="_blank" rel="noopener noreferrer">
//                     {company.url}
//                   </a>
//                 </div>
//                 <div className="text-gray-600">{company.category}</div>
//                 <div className="flex justify-start md:justify-end w-full">
//                   <button
//                     onClick={() => {
//                       setSelectedCompany(company)
//                       setShowDetails(true)
//                     }}
//                     className="flex items-center gap-1 px-4 py-1.5 text-[#4318FF] border border-[#4318FF] rounded-lg hover:bg-[#4318FF] hover:text-white transition-colors"
//                   >
//                     <i className="fas fa-eye"></i>
//                     Details
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </>
//       ) : (
//         <div className="max-w-3xl mx-auto">
//           <h1 className="text-[#2B3674] text-xl md:text-2xl font-semibold mb-4 md:mb-8">Pending Company Details</h1>
//           <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
//             <h2 className="text-lg md:text-xl text-[#2B3674] font-medium mb-4">Details of {selectedCompany.name}</h2>
//             <div className="space-y-4">
//               <div className="flex flex-col md:flex-row justify-between py-2 border-b border-gray-100">
//                 <span className="text-gray-600">Create Date</span>
//                 <span className="text-[#2B3674]">{selectedCompany.createDate}</span>
//               </div>
//               <div className="flex flex-col md:flex-row justify-between py-2 border-b border-gray-100">
//                 <span className="text-gray-600">Website Link</span>
//                 <a href={selectedCompany.url} className="text-[#4318FF] hover:underline" target="_blank" rel="noopener noreferrer">
//                   {selectedCompany.url}
//                 </a>
//               </div>
//               <div className="flex flex-col md:flex-row justify-between py-2 border-b border-gray-100">
//                 <span className="text-gray-600">E-mail</span>
//                 <span className="text-[#2B3674]">{selectedCompany.email}</span>
//               </div>
//               <div className="flex flex-col md:flex-row justify-between py-2 border-b border-gray-100">
//                 <span className="text-gray-600">Username</span>
//                 <span className="text-[#4318FF]">{selectedCompany.username}</span>
//               </div>
//               <div className="flex flex-col md:flex-row justify-between py-2 border-b border-gray-100">
//                 <span className="text-gray-600">Status</span>
//                 <span className="px-3 py-1 rounded-full text-sm bg-[#FFF5E9] text-[#FFAC31]">
//                   {selectedCompany.status}
//                 </span>
//               </div>
//               <div className="flex flex-col md:flex-row justify-between py-2 border-b border-gray-100">
//                 <span className="text-gray-600">Admin Feedback</span>
//                 <span className="text-[#2B3674]">{selectedCompany.adminFeedback || '-'}</span>
//               </div>
//             </div>
//             <div className="flex flex-col md:flex-row justify-end gap-3 mt-6">
//               <button
//                 onClick={() => setShowApprovalModal(true)}
//                 className="flex items-center gap-2 px-4 py-2 text-[#4318FF] border border-[#4318FF] rounded-lg hover:bg-[#4318FF] hover:text-white transition-colors"
//               >
//                 <i className="fas fa-check"></i>
//                 Approve
//               </button>
//               <button
//                 onClick={() => setShowRejectionModal(true)}
//                 className="flex items-center gap-2 px-4 py-2 text-red-500 border border-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors"
//               >
//                 <i className="fas fa-times"></i>
//                 Reject
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

// {/* Approval Modal */}
// {showApprovalModal && (
//   <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//     <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4 sm:mx-0">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-xl font-semibold text-[#2B3674]">Approval Confirmation!</h2>
//         <button
//           onClick={() => {
//             setShowApprovalModal(false);
//             setApprovalDetails('');
//           }}
//           className="text-gray-400 hover:text-gray-600"
//         >
//           <i className="fas fa-times"></i>
//         </button>
//       </div>
//       <div className="mb-6">
//         <h3 className="text-gray-700 mb-2">Have you sent approval info?</h3>
//         <textarea
//           value={approvalDetails}
//           onChange={(e) => setApprovalDetails(e.target.value)}
//           placeholder="Provide the details..."
//           className="w-full h-32 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#4318FF]"
//         />
//       </div>
//       <div className="flex flex-col sm:flex-row justify-end gap-3">
//         <button
//           onClick={() => {
//             setShowApprovalModal(false);
//             setApprovalDetails('');
//           }}
//           className="px-4 py-2 text-gray-700 bg-[#0B1437] text-white rounded-lg hover:bg-opacity-90"
//         >
//           Close
//         </button>
//         <button
//           onClick={handleApprove}
//           className="px-4 py-2 bg-[#4318FF] text-white rounded-lg hover:bg-[#3A16E0]"
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   </div>
// )}

// {/* Rejection Modal */}
// {showRejectionModal && (
//   <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//     <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4 sm:mx-0">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-xl font-semibold text-[#2B3674]">Rejection Confirmation!</h2>
//         <button
//           onClick={() => {
//             setShowRejectionModal(false);
//             setRejectionDetails('');
//           }}
//           className="text-gray-400 hover:text-gray-600"
//         >
//           <i className="fas fa-times"></i>
//         </button>
//       </div>
//       <div className="mb-6">
//         <h3 className="text-gray-700 mb-2">Have you sent rejection info?</h3>
//         <textarea
//           value={rejectionDetails}
//           onChange={(e) => setRejectionDetails(e.target.value)}
//           placeholder="Provide the details..."
//           className="w-full h-32 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#4318FF]"
//         />
//       </div>
//       <div className="flex flex-col sm:flex-row justify-end gap-3">
//         <button
//           onClick={() => {
//             setShowRejectionModal(false);
//             setRejectionDetails('');
//           }}
//           className="px-4 py-2 text-gray-700 bg-[#0B1437] text-white rounded-lg hover:bg-opacity-90"
//         >
//           Close
//         </button>
//         <button
//           onClick={handleReject}
//           className="px-4 py-2 bg-[#4318FF] text-white rounded-lg hover:bg-[#3A16E0]"
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   </div>
// )}
//     </div>
//   )
// }


'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FaSearch, FaTimes } from 'react-icons/fa'
import { Spin } from 'antd';

const PendingCompanies = () => {
  const [companies, setCompanies] = useState([])
  const [filteredCompanies, setFilteredCompanies] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [showDetails, setShowDetails] = useState(false)
  const [showApprovalModal, setShowApprovalModal] = useState(false)
  const [showRejectionModal, setShowRejectionModal] = useState(false)
  const [approvalDetails, setApprovalDetails] = useState('')
  const [rejectionDetails, setRejectionDetails] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading(true)
        const response = await axios.get('https://arrc-tech-ratelab-backend-project.onrender.com/api/companies')
        const pendingCompanies = response.data.filter(company => company.status === 'Pending')
        setCompanies(pendingCompanies)
        setFilteredCompanies(pendingCompanies)
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

  const handleApprove = async () => {
    if (!approvalDetails.trim()) return
    try {
      await axios.post(`http://127.0.0.1:5000/api/companies/${selectedCompany._id}/approval`, {
        details: approvalDetails
      })
      const updatedCompanies = companies.filter(company => company._id !== selectedCompany._id)
      setCompanies(updatedCompanies)
      setFilteredCompanies(updatedCompanies)
      setShowApprovalModal(false)
      setApprovalDetails('')
      setShowDetails(false)
    } catch (err) {
      console.error('Error approving company:', err)
      // Handle error (e.g., show error message to user)
    }
  }

  const handleReject = async () => {
    if (!rejectionDetails.trim()) return
    try {
      await axios.post(`https://arrc-tech-ratelab-backend-project.onrender.com/api/companies/${selectedCompany._id}/rejection`, {
        details: rejectionDetails
      })
      const updatedCompanies = companies.filter(company => company._id !== selectedCompany._id)
      setCompanies(updatedCompanies)
      setFilteredCompanies(updatedCompanies)
      setShowRejectionModal(false)
      setRejectionDetails('')
      setShowDetails(false)
    } catch (err) {
      console.error('Error rejecting company:', err)
      // Handle error (e.g., show error message to user)
    }
  }

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
        <h1 className="text-[#2B3674] text-lg md:text-2xl font-semibold mb-4 md:mb-0">Pending Companies</h1>
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
        
        {filteredCompanies.map((company) => (
          <div key={company._id} className="flex flex-col md:grid md:grid-cols-4 gap-4 p-4 border-b border-gray-100 items-start md:items-center">
            <div>
              <div className="text-[#2B3674] font-medium">{company.companyName}</div>
              <div className="text-[#4318FF]">{company.userName}</div>
            </div>
            <div>
              <div className="text-gray-600">{company.email}</div>
              {/* <a href={company.url} className="text-[#4318FF] hover:underline" target="_blank" rel="noopener noreferrer">
                {company.url}
              </a> */}
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
        ))}
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
                  <span className="px-3 py-1 rounded-full text-sm bg-[#FFF5E9] text-[#FFAC31]">
                    {selectedCompany.status}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex justify-between gap-4">
                <button
                  onClick={() => setShowApprovalModal(true)}
                  className="px-4 py-2 bg-[#4318FF] text-white rounded-lg hover:bg-[#3A16E0] transition-colors"
                >
                  Approve
                </button>
                <button
                  onClick={() => setShowRejectionModal(true)}
                  className="px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors"
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
          <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4 sm:mx-0">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-[#2B3674]">Approval Confirmation</h2>
              <button
                onClick={() => {
                  setShowApprovalModal(false)
                  setApprovalDetails('')
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <FaTimes size={24} />
              </button>
            </div>
            <div className="mb-6">
              <h3 className="text-gray-700 mb-2">Provide approval details:</h3>
              <textarea
                value={approvalDetails}
                onChange={(e) => setApprovalDetails(e.target.value)}
                placeholder="Enter approval details..."
                className="w-full h-32 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4318FF]"
              />
            </div>
            <div className="flex justify-between gap-4">
              <button
                onClick={() => {
                  setShowApprovalModal(false)
                  setApprovalDetails('')
                }}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleApprove}
                className="px-4 py-2 bg-[#4318FF] text-white rounded-lg hover:bg-[#3A16E0]"
              >
                Confirm Approval
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Rejection Modal */}
      {showRejectionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4 sm:mx-0">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-[#2B3674]">Rejection Confirmation</h2>
              <button
                onClick={() => {
                  setShowRejectionModal(false)
                  setRejectionDetails('')
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <FaTimes size={24} />
              </button>
            </div>
            <div className="mb-6">
              <h3 className="text-gray-700 mb-2">Provide rejection reasons:</h3>
              <textarea
                value={rejectionDetails}
                onChange={(e) => setRejectionDetails(e.target.value)}
                placeholder="Enter rejection reasons..."
                className="w-full h-32 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4318FF]"
              />
            </div>
            <div className="flex justify-between gap-4">
              <button
                onClick={() => {
                  setShowRejectionModal(false)
                  setRejectionDetails('')
                }}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleReject}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Confirm Rejection
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PendingCompanies

