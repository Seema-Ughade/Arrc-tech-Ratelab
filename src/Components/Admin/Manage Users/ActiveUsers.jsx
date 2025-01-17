// // // import React, { useState, useEffect } from 'react';
// // // import { FaSearch, FaTimes, FaKey, FaBell, FaBan } from 'react-icons/fa';
// // // import { Spin } from 'antd';

// // // // Mock data for active users
// // // const activeUsersData = [
// // //   {
// // //     id: 1,
// // //     firstName: "sam",
// // //     lastName: "kumar",
// // //     username: "@sam9279",
// // //     email: "[Email is Protected for the demo]",
// // //     mobile: "[Mobile is protected for the demo]",
// // //     country: "IN",
// // //     joinedAt: "2025-01-05 03:09 PM",
// // //     joinedAgo: "23 hours ago",
// // //     hasCompanies: false,
// // //     address: "a",
// // //     city: "a",
// // //     state: "a",
// // //     zipCode: "a",
// // //     emailVerified: true,
// // //     mobileVerified: true
// // //   },
// // //   {
// // //     id: 2,
// // //     firstName: "Dmomanu",
// // //     lastName: "Hahag",
// // //     username: "@Visagbsbe",
// // //     email: "[Email is Protected for the demo]",
// // //     mobile: "[Mobile is protected for the demo]",
// // //     country: "IN",
// // //     joinedAt: "2025-01-05 12:05 PM",
// // //     joinedAgo: "1 day ago",
// // //     hasCompanies: false
// // //   },
// // //   // ... more users
// // // ];

// // // const ActiveUsers = () => {
// // //   const [users, setUsers] = useState([]);
// // //   const [filteredUsers, setFilteredUsers] = useState([]);
// // //   const [searchTerm, setSearchTerm] = useState('');
// // //   const [selectedUser, setSelectedUser] = useState(null);
// // //   const [showDetails, setShowDetails] = useState(false);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     const fetchUsers = async () => {
// // //       try {
// // //         setLoading(true);
// // //         // Simulating API call
// // //         await new Promise(resolve => setTimeout(resolve, 10));
// // //         setUsers(activeUsersData);
// // //         setFilteredUsers(activeUsersData);
// // //       } catch (err) {
// // //         setError('Failed to fetch users');
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchUsers();
// // //   }, []);

// // //   useEffect(() => {
// // //     const filtered = users.filter(user => 
// // //       user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //       user.email.toLowerCase().includes(searchTerm.toLowerCase())
// // //     );
// // //     setFilteredUsers(filtered);
// // //   }, [searchTerm, users]);

// // //   const handleSearch = (e) => {
// // //     setSearchTerm(e.target.value);
// // //   };

// // //   const handleDetails = (user) => {
// // //     setSelectedUser(user);
// // //     setShowDetails(true);
// // //   };

// // //   const handleCloseDetails = () => {
// // //     setSelectedUser(null);
// // //     setShowDetails(false);
// // //   };

// // //   if (loading) {
// // //     return (
// // //       <div className="min-h-screen flex items-center justify-center">
// // //         <Spin size="large" />
// // //       </div>
// // //     );
// // //   }

// // //   if (error) {
// // //     return (
// // //       <div className="min-h-screen flex items-center justify-center text-red-600">
// // //         {error}
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-gray-50 p-4">
// // //       {/* Header */}
// // //       <div className="mb-6">
// // //         <h1 className="text-2xl font-semibold text-gray-800 mb-4">
// // //           Active Users
// // //         </h1>
// // //         <div className="relative">
// // //           <input
// // //             type="text"
// // //             placeholder="Username / Email"
// // //             className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
// // //             value={searchTerm}
// // //             onChange={handleSearch}
// // //           />
// // //           <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-lg">
// // //             <FaSearch className="w-4 h-4" />
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Mobile View */}
// // //       <div className="md:hidden space-y-4">
// // //         {filteredUsers.map((user) => (
// // //           <div key={user.id} className="bg-white rounded-lg shadow p-4 space-y-4">
// // //             <div className="space-y-2">
// // //               <div className="font-semibold text-gray-700">User</div>
// // //               <div>
// // //                 <div className="text-gray-900">{user.firstName} {user.lastName}</div>
// // //                 <div className="text-indigo-600 text-sm">{user.username}</div>
// // //               </div>
// // //             </div>

// // //             <div className="space-y-2">
// // //               <div className="font-semibold text-gray-700">Email-Mobile</div>
// // //               <div>
// // //                 <div className="text-gray-900">{user.email}</div>
// // //                 <div className="text-gray-600 text-sm">{user.mobile}</div>
// // //               </div>
// // //             </div>

// // //             <div className="space-y-2">
// // //               <div className="font-semibold text-gray-700">Country</div>
// // //               <div className="text-gray-900">{user.country}</div>
// // //             </div>

// // //             <div className="space-y-2">
// // //               <div className="font-semibold text-gray-700">Joined At</div>
// // //               <div>
// // //                 <div className="text-gray-900">{user.joinedAt}</div>
// // //                 <div className="text-gray-600 text-sm">{user.joinedAgo}</div>
// // //               </div>
// // //             </div>

// // //             <div className="space-y-2">
// // //               <div className="font-semibold text-gray-700">Companies</div>
// // //               <span className="inline-block px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-600">
// // //                 {user.hasCompanies ? 'Yes' : 'No'}
// // //               </span>
// // //             </div>

// // //             <div className="space-y-2">
// // //               <div className="font-semibold text-gray-700">Action</div>
// // //               <button
// // //                 onClick={() => handleDetails(user)}
// // //                 className="inline-flex items-center justify-center px-4 py-2 border border-indigo-600 rounded-lg text-indigo-600 hover:bg-indigo-50"
// // //               >
// // //                 Details
// // //               </button>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {/* Desktop View */}
// // //       <div className="hidden md:block bg-white rounded-lg shadow overflow-hidden">
// // //         <table className="min-w-full divide-y divide-gray-200">
// // //           <thead>
// // //             <tr className="bg-indigo-600 text-white">
// // //               <th className="px-6 py-3 text-left text-sm font-medium">User</th>
// // //               <th className="px-6 py-3 text-left text-sm font-medium">Email-Mobile</th>
// // //               <th className="px-6 py-3 text-left text-sm font-medium">Country</th>
// // //               <th className="px-6 py-3 text-left text-sm font-medium">Joined At</th>
// // //               <th className="px-6 py-3 text-left text-sm font-medium">Companies</th>
// // //               <th className="px-6 py-3 text-left text-sm font-medium">Action</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody className="divide-y divide-gray-200">
// // //             {filteredUsers.map((user) => (
// // //               <tr key={user.id} className="hover:bg-gray-50">
// // //                 <td className="px-6 py-4">
// // //                   <div>
// // //                     <div className="text-gray-900">{user.firstName} {user.lastName}</div>
// // //                     <div className="text-indigo-600 text-sm">{user.username}</div>
// // //                   </div>
// // //                 </td>
// // //                 <td className="px-6 py-4">
// // //                   <div>
// // //                     <div className="text-gray-900">{user.email}</div>
// // //                     <div className="text-gray-600 text-sm">{user.mobile}</div>
// // //                   </div>
// // //                 </td>
// // //                 <td className="px-6 py-4 text-gray-900">{user.country}</td>
// // //                 <td className="px-6 py-4">
// // //                   <div>
// // //                     <div className="text-gray-900">{user.joinedAt}</div>
// // //                     <div className="text-gray-600 text-sm">{user.joinedAgo}</div>
// // //                   </div>
// // //                 </td>
// // //                 <td className="px-6 py-4">
// // //                   <span className="px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-600">
// // //                     {user.hasCompanies ? 'Yes' : 'No'}
// // //                   </span>
// // //                 </td>
// // //                 <td className="px-6 py-4">
// // //                   <button
// // //                     onClick={() => handleDetails(user)}
// // //                     className="text-indigo-600 hover:text-indigo-900 border border-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50"
// // //                   >
// // //                     Details
// // //                   </button>
// // //                 </td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       </div>

// // //       {/* User Details Modal */}
// // //       {showDetails && selectedUser && (
// // //         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
// // //           <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
// // //             <div className="p-6">
// // //               <div className="flex justify-between items-center mb-6">
// // //                 <h2 className="text-xl font-semibold text-gray-800">
// // //                   User Detail - {selectedUser.username}
// // //                 </h2>
// // //                 <button
// // //                   onClick={handleCloseDetails}
// // //                   className="text-gray-400 hover:text-gray-600"
// // //                 >
// // //                   <FaTimes size={20} />
// // //                 </button>
// // //               </div>

// // //               {/* Action Buttons */}
// // //               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
// // //                 <button className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-3 rounded-lg hover:bg-indigo-700">
// // //                   <FaKey className="w-5 h-5" />
// // //                   Logins
// // //                 </button>
// // //                 <button className="flex items-center justify-center gap-2 bg-gray-500 text-white px-4 py-3 rounded-lg hover:bg-gray-600">
// // //                   <FaBell className="w-5 h-5" />
// // //                   Notifications
// // //                 </button>
// // //                 <button className="flex items-center justify-center gap-2 bg-orange-500 text-white px-4 py-3 rounded-lg hover:bg-orange-600">
// // //                   <FaBan className="w-5 h-5" />
// // //                   Ban User
// // //                 </button>
// // //               </div>

// // //               {/* User Information Form */}
// // //               <div className="bg-white rounded-lg p-6">
// // //                 <h3 className="text-lg font-semibold mb-6">Information of {selectedUser.firstName} {selectedUser.lastName}</h3>
                
// // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //                   {/* First Name */}
// // //                   <div>
// // //                     <label className="block text-sm font-medium text-gray-700 mb-1">
// // //                       First Name <span className="text-red-500">*</span>
// // //                     </label>
// // //                     <input
// // //                       type="text"
// // //                       value={selectedUser.firstName}
// // //                       readOnly
// // //                       className="w-full px-4 py-2 border rounded-lg bg-gray-50"
// // //                     />
// // //                   </div>

// // //                   {/* Last Name */}
// // //                   <div>
// // //                     <label className="block text-sm font-medium text-gray-700 mb-1">
// // //                       Last Name <span className="text-red-500">*</span>
// // //                     </label>
// // //                     <input
// // //                       type="text"
// // //                       value={selectedUser.lastName}
// // //                       readOnly
// // //                       className="w-full px-4 py-2 border rounded-lg bg-gray-50"
// // //                     />
// // //                   </div>

// // //                   {/* Email */}
// // //                   <div>
// // //                     <label className="block text-sm font-medium text-gray-700 mb-1">
// // //                       Email <span className="text-red-500">*</span>
// // //                     </label>
// // //                     <input
// // //                       type="email"
// // //                       value={selectedUser.email}
// // //                       readOnly
// // //                       className="w-full px-4 py-2 border rounded-lg bg-gray-50"
// // //                     />
// // //                   </div>

// // //                   {/* Mobile Number */}
// // //                   <div>
// // //                     <label className="block text-sm font-medium text-gray-700 mb-1">
// // //                       Mobile Number <span className="text-red-500">*</span>
// // //                     </label>
// // //                     <div className="flex">
// // //                       <span className="inline-flex items-center px-4 py-2 border border-r-0 rounded-l-lg bg-gray-50 text-gray-500">
// // //                         +91
// // //                       </span>
// // //                       <input
// // //                         type="text"
// // //                         value={selectedUser.mobile}
// // //                         readOnly
// // //                         className="w-full px-4 py-2 border rounded-r-lg bg-gray-50"
// // //                       />
// // //                     </div>
// // //                   </div>

// // //                   {/* Address */}
// // //                   <div className="md:col-span-2">
// // //                     <label className="block text-sm font-medium text-gray-700 mb-1">
// // //                       Address
// // //                     </label>
// // //                     <input
// // //                       type="text"
// // //                       value={selectedUser.address || ''}
// // //                       readOnly
// // //                       className="w-full px-4 py-2 border rounded-lg bg-gray-50"
// // //                     />
// // //                   </div>

// // //                   {/* City */}
// // //                   <div>
// // //                     <label className="block text-sm font-medium text-gray-700 mb-1">
// // //                       City
// // //                     </label>
// // //                     <input
// // //                       type="text"
// // //                       value={selectedUser.city || ''}
// // //                       readOnly
// // //                       className="w-full px-4 py-2 border rounded-lg bg-gray-50"
// // //                     />
// // //                   </div>

// // //                   {/* State */}
// // //                   <div>
// // //                     <label className="block text-sm font-medium text-gray-700 mb-1">
// // //                       State
// // //                     </label>
// // //                     <input
// // //                       type="text"
// // //                       value={selectedUser.state || ''}
// // //                       readOnly
// // //                       className="w-full px-4 py-2 border rounded-lg bg-gray-50"
// // //                     />
// // //                   </div>

// // //                   {/* Zip/Postal */}
// // //                   <div>
// // //                     <label className="block text-sm font-medium text-gray-700 mb-1">
// // //                       Zip/Postal
// // //                     </label>
// // //                     <input
// // //                       type="text"
// // //                       value={selectedUser.zipCode || ''}
// // //                       readOnly
// // //                       className="w-full px-4 py-2 border rounded-lg bg-gray-50"
// // //                     />
// // //                   </div>

// // //                   {/* Country */}
// // //                   <div>
// // //                     <label className="block text-sm font-medium text-gray-700 mb-1">
// // //                       Country <span className="text-red-500">*</span>
// // //                     </label>
// // //                     <input
// // //                       type="text"
// // //                       value={selectedUser.country}
// // //                       readOnly
// // //                       className="w-full px-4 py-2 border rounded-lg bg-gray-50"
// // //                     />
// // //                   </div>

// // //                   {/* Email Verification */}
// // //                   <div>
// // //                     <label className="block text-sm font-medium text-gray-700 mb-1">
// // //                       Email Verification
// // //                     </label>
// // //                     <div className="flex items-center justify-between px-4 py-2 bg-green-500 text-white rounded-lg">
// // //                       <span>Verified</span>
// // //                       <div className="w-4 h-4 bg-green-600 rounded-full"></div>
// // //                     </div>
// // //                   </div>

// // //                   {/* Mobile Verification */}
// // //                   <div>
// // //                     <label className="block text-sm font-medium text-gray-700 mb-1">
// // //                       Mobile Verification
// // //                     </label>
// // //                     <div className="flex items-center justify-between px-4 py-2 bg-green-500 text-white rounded-lg">
// // //                       <span>Verified</span>
// // //                       <div className="w-4 h-4 bg-green-600 rounded-full"></div>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 {/* Submit Button */}
// // //                 <div className="mt-6">
// // //                   <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
// // //                     Submit
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default ActiveUsers;

// // import React, { useState, useEffect } from 'react';
// // import { FaSearch, FaTimes, FaKey, FaBell, FaBan } from 'react-icons/fa';
// // import { Spin } from 'antd';
// // import axios from 'axios';
// // import { auth } from './firebase';
// // import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// // // Mock data for active users
// // const activeUsersData = [
// //   {
// //     id: 1,
// //     firstName: "sam",
// //     lastName: "kumar",
// //     username: "@sam9279",
// //     email: "[Email is Protected for the demo]",
// //     mobile: "[Mobile is protected for the demo]",
// //     country: "IN",
// //     joinedAt: "2025-01-05 03:09 PM",
// //     joinedAgo: "23 hours ago",
// //     hasCompanies: false,
// //     address: "a",
// //     city: "a",
// //     state: "a",
// //     zipCode: "a",
// //     emailVerified: true,
// //     mobileVerified: true
// //   },
// //   {
// //     id: 2,
// //     firstName: "Dmomanu",
// //     lastName: "Hahag",
// //     username: "@Visagbsbe",
// //     email: "[Email is Protected for the demo]",
// //     mobile: "[Mobile is protected for the demo]",
// //     country: "IN",
// //     joinedAt: "2025-01-05 12:05 PM",
// //     joinedAgo: "1 day ago",
// //     hasCompanies: false
// //   },
// //   // ... more users
// // ];

// // const ActiveUsers = () => {
// //   const [users, setUsers] = useState([]);
// //   const [filteredUsers, setFilteredUsers] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [selectedUser, setSelectedUser] = useState(null);
// //   const [showDetails, setShowDetails] = useState(false);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchUsers = async () => {
// //       try {
// //         setLoading(true);
// //         const response = await axios.get('http://127.0.0.1:5000/api/users');
// //         setUsers(response.data);
// //         setFilteredUsers(response.data);
// //       } catch (err) {
// //         setError('Failed to fetch users');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchUsers();
// //   }, []);

// //   useEffect(() => {
// //     const filtered = users.filter(user => 
// //       (user.firstName && user.firstName.toLowerCase().includes(searchTerm.toLowerCase())) ||
// //       (user.lastName && user.lastName.toLowerCase().includes(searchTerm.toLowerCase())) ||
// //       (user.email && user.email.toLowerCase().includes(searchTerm.toLowerCase()))
// //     );
// //     setFilteredUsers(filtered);
// //   }, [searchTerm, users]);

// //   const handleSearch = (e) => {
// //     setSearchTerm(e.target.value);
// //   };

// //   const handleDetails = (user) => {
// //     setSelectedUser(user);
// //     setShowDetails(true);
// //   };

// //   const handleCloseDetails = () => {
// //     setSelectedUser(null);
// //     setShowDetails(false);
// //   };

// //   const sendEmailVerification = async (userId) => {
// //     try {
// //       await axios.post(`http://127.0.0.1:5000/api/users/${userId}/send-email-verification`);
// //       alert('Verification email sent!');
// //     } catch (error) {
// //       console.error('Error sending verification email:', error);
// //       alert('Failed to send verification email');
// //     }
// //   };

// //   const setupRecaptcha = (phoneNumber) => {
// //     const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
// //     recaptchaVerifier.render();
// //     return signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
// //   };

// //   const sendMobileVerification = async (userId, phoneNumber) => {
// //     try {
// //       const confirmationResult = await setupRecaptcha(phoneNumber);
// //       const verificationCode = prompt('Enter the verification code sent to your phone:');
// //       if (verificationCode) {
// //         await confirmationResult.confirm(verificationCode);
// //         await axios.post(`http://127.0.0.1:5000/api/users/${userId}/verify-mobile`);
// //         alert('Mobile number verified successfully!');
// //       }
// //     } catch (error) {
// //       console.error('Error verifying mobile number:', error);
// //       alert('Failed to verify mobile number');
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center">
// //         <Spin size="large" />
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center text-red-600">
// //         {error}
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-50 p-4">
// //       {/* Header */}
// //       <div className="mb-6">
// //         <h1 className="text-2xl font-semibold text-gray-800 mb-4">
// //           Active Users
// //         </h1>
// //         <div className="relative">
// //           <input
// //             type="text"
// //             placeholder="Username / Email"
// //             className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
// //             value={searchTerm}
// //             onChange={handleSearch}
// //           />
// //           <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-lg">
// //             <FaSearch className="w-4 h-4" />
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile View */}
// //       <div className="md:hidden space-y-4">
// //         {filteredUsers && filteredUsers.map((user) => (
// //           <div key={user.id} className="bg-white rounded-lg shadow p-4 space-y-4">
// //             <div className="space-y-2">
// //               <div className="font-semibold text-gray-700">User</div>
// //               <div>
// //                 <div className="text-gray-900">{user.firstName} {user.lastName}</div>
// //                 <div className="text-indigo-600 text-sm">{user.email}</div>
// //               </div>
// //             </div>

// //             <div className="space-y-2">
// //               <div className="font-semibold text-gray-700">Email-Mobile</div>
// //               <div>
// //                 <div className="text-gray-900">{user.email}</div>
// //                 <div className="text-gray-600 text-sm">{user.mobile}</div>
// //               </div>
// //             </div>

// //             <div className="space-y-2">
// //               <div className="font-semibold text-gray-700">Country</div>
// //               <div className="text-gray-900">{user.country}</div>
// //             </div>

// //             <div className="space-y-2">
// //               <div className="font-semibold text-gray-700">Joined At</div>
// //               <div>
// //                 <div className="text-gray-900">{user.joinedAt}</div>
// //                 <div className="text-gray-600 text-sm">{user.joinedAgo}</div>
// //               </div>
// //             </div>

// //             <div className="space-y-2">
// //               <div className="font-semibold text-gray-700">Companies</div>
// //               <span className="inline-block px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-600">
// //                 {user.hasCompanies ? 'Yes' : 'No'}
// //               </span>
// //             </div>

// //             <div className="space-y-2">
// //               <div className="font-semibold text-gray-700">Action</div>
// //               <button
// //                 onClick={() => handleDetails(user)}
// //                 className="inline-flex items-center justify-center px-4 py-2 border border-indigo-600 rounded-lg text-indigo-600 hover:bg-indigo-50"
// //               >
// //                 Details
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Desktop View */}
// //       <div className="hidden md:block bg-white rounded-lg shadow overflow-hidden">
// //         <table className="min-w-full divide-y divide-gray-200">
// //           <thead>
// //             <tr className="bg-indigo-600 text-white">
// //               <th className="px-6 py-3 text-left text-sm font-medium">User</th>
// //               <th className="px-6 py-3 text-left text-sm font-medium">Email-Mobile</th>
// //               <th className="px-6 py-3 text-left text-sm font-medium">Country</th>
// //               <th className="px-6 py-3 text-left text-sm font-medium">Joined At</th>
// //               <th className="px-6 py-3 text-left text-sm font-medium">Companies</th>
// //               <th className="px-6 py-3 text-left text-sm font-medium">Action</th>
// //             </tr>
// //           </thead>
// //           <tbody className="divide-y divide-gray-200">
// //             {filteredUsers && filteredUsers.map((user) => (
// //               <tr key={user.id} className="hover:bg-gray-50">
// //                 <td className="px-6 py-4">
// //                   <div>
// //                     <div className="text-gray-900">{user.firstName} {user.lastName}</div>
// //                     <div className="text-indigo-600 text-sm">{user.email}</div>
// //                   </div>
// //                 </td>
// //                 <td className="px-6 py-4">
// //                   <div>
// //                     <div className="text-gray-900">{user.email}</div>
// //                     <div className="text-gray-600 text-sm">{user.mobile}</div>
// //                   </div>
// //                 </td>
// //                 <td className="px-6 py-4 text-gray-900">{user.country}</td>
// //                 <td className="px-6 py-4">
// //                   <div>
// //                     <div className="text-gray-900">{user.joinedAt}</div>
// //                     <div className="text-gray-600 text-sm">{user.joinedAgo}</div>
// //                   </div>
// //                 </td>
// //                 <td className="px-6 py-4">
// //                   <span className="px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-600">
// //                     {user.hasCompanies ? 'Yes' : 'No'}
// //                   </span>
// //                 </td>
// //                 <td className="px-6 py-4">
// //                   <button
// //                     onClick={() => handleDetails(user)}
// //                     className="text-indigo-600 hover:text-indigo-900 border border-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50"
// //                   >
// //                     Details
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>

// //       {/* User Details Modal */}
// //       {showDetails && selectedUser && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
// //           <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
// //             <div className="p-6">
// //               <div className="flex justify-between items-center mb-6">
// //                 <h2 className="text-xl font-semibold text-gray-800">
// //                   User Detail - {selectedUser.email}
// //                 </h2>
// //                 <button
// //                   onClick={handleCloseDetails}
// //                   className="text-gray-400 hover:text-gray-600"
// //                 >
// //                   <FaTimes size={20} />
// //                 </button>
// //               </div>

// //               {/* Action Buttons */}
// //               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
// //                 <button className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-3 rounded-lg hover:bg-indigo-700">
// //                   <FaKey className="w-5 h-5" />
// //                   Logins
// //                 </button>
// //                 <button className="flex items-center justify-center gap-2 bg-gray-500 text-white px-4 py-3 rounded-lg hover:bg-gray-600">
// //                   <FaBell className="w-5 h-5" />
// //                   Notifications
// //                 </button>
// //                 <button className="flex items-center justify-center gap-2 bg-orange-500 text-white px-4 py-3 rounded-lg hover:bg-orange-600">
// //                   <FaBan className="w-5 h-5" />
// //                   Ban User
// //                 </button>
// //               </div>

// //               {/* User Information Form */}
// //               <div className="bg-white rounded-lg p-6">
// //                 <h3 className="text-lg font-semibold mb-6">Information of {selectedUser.firstName} {selectedUser.lastName}</h3>
                
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                   {/* First Name */}
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-1">
// //                       First Name <span className="text-red-500">*</span>
// //                     </label>
// //                     <input
// //                       type="text"
// //                       value={selectedUser.firstName}
// //                       readOnly
// //                       className="w-full px-4 py-2 border rounded-lg bg-gray-50"
// //                     />
// //                   </div>

// //                   {/* Last Name */}
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-1">
// //                       Last Name <span className="text-red-500">*</span>
// //                     </label>
// //                     <input
// //                       type="text"
// //                       value={selectedUser.lastName}
// //                       readOnly
// //                       className="w-full px-4 py-2 border rounded-lg bg-gray-50"
// //                     />
// //                   </div>

// //                   {/* Email */}
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-1">
// //                       Email <span className="text-red-500">*</span>
// //                     </label>
// //                     <input
// //                       type="email"
// //                       value={selectedUser.email}
// //                       readOnly
// //                       className="w-full px-4 py-2 border rounded-lg bg-gray-50"
// //                     />
// //                   </div>

// //                   {/* Mobile Number */}
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-1">
// //                       Mobile Number <span className="text-red-500">*</span>
// //                     </label>
// //                     <div className="flex">
// //                       <span className="inline-flex items-center px-4 py-2 border border-r-0 rounded-l-lg bg-gray-50 text-gray-500">
// //                         +91
// //                       </span>
// //                       <input
// //                         type="text"
// //                         value={selectedUser.mobile}
// //                         readOnly
// //                         className="w-full px-4 py-2 border rounded-r-lg bg-gray-50"
// //                       />
// //                     </div>
// //                   </div>

// //                   {/* Address */}
// //                   <div className="md:col-span-2">
// //                     <label className="block text-sm font-medium text-gray-700 mb-1">
// //                       Address
// //                     </label>
// //                     <input
// //                       type="text"
// //                       value={selectedUser.address || ''}
// //                       readOnly
// //                       className="w-full px-4 py-2 border rounded-lg bg-gray-50"
// //                     />
// //                   </div>

// //                   {/* City */}
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-1">
// //                       City
// //                     </label>
// //                     <input
// //                       type="text"
// //                       value={selectedUser.city || ''}
// //                       readOnly
// //                       className="w-full px-4 py-2 border rounded-lg bg-gray-50"
// //                     />
// //                   </div>

// //                   {/* State */}
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-1">
// //                       State
// //                     </label>
// //                     <input
// //                       type="text"
// //                       value={selectedUser.state || ''}
// //                       readOnly
// //                       className="w-full px-4 py-2 border rounded-lg bg-gray-50"
// //                     />
// //                   </div>

// //                   {/* Zip/Postal */}
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-1">
// //                       Zip/Postal
// //                     </label>
// //                     <input
// //                       type="text"
// //                       value={selectedUser.zipCode || ''}
// //                       readOnly
// //                       className="w-full px-4 py-2 border rounded-lg bg-gray-50"
// //                     />
// //                   </div>

// //                   {/* Country */}
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-1">
// //                       Country <span className="text-red-500">*</span>
// //                     </label>
// //                     <input
// //                       type="text"
// //                       value={selectedUser.country}
// //                       readOnly
// //                       className="w-full px-4 py-2 border rounded-lg bg-gray-50"
// //                     />
// //                   </div>

// //                   {/* Email Verification */}
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-1">
// //                       Email Verification
// //                     </label>
// //                     <div className="flex items-center justify-between px-4 py-2 bg-green-500 text-white rounded-lg">
// //                       <span>{selectedUser.emailVerified ? 'Verified' : 'Not Verified'}</span>
// //                       <div className="w-4 h-4 bg-green-600 rounded-full"></div>
// //                     </div>
// //                     {!selectedUser.emailVerified && (
// //                       <button
// //                         onClick={() => sendEmailVerification(selectedUser._id)}
// //                         className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
// //                       >
// //                         Send Verification Email
// //                       </button>
// //                     )}
// //                   </div>

// //                   {/* Mobile Verification */}
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-1">
// //                       Mobile Verification
// //                     </label>
// //                     <div className="flex items-center justify-between px-4 py-2 bg-green-500 text-white rounded-lg">
// //                       <span>{selectedUser.mobileVerified ? 'Verified' : 'Not Verified'}</span>
// //                       <div className="w-4 h-4 bg-green-600 rounded-full"></div>
// //                     </div>
// //                     {!selectedUser.mobileVerified && (
// //                       <button
// //                         onClick={() => sendMobileVerification(selectedUser._id, selectedUser.mobile)}
// //                         className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
// //                       >
// //                         Verify Mobile Number
// //                       </button>
// //                     )}
// //                   </div>
// //                 </div>

// //                 {/* Submit Button */}
// //                 <div className="mt-6">
// //                   <button
// //                     onClick={async () => {
// //                       try {
// //                         await axios.put(`http://127.0.0.1:5000/api/users/${selectedUser._id}`, selectedUser);
// //                         alert('User information updated successfully!');
// //                       } catch (error) {
// //                         console.error('Error updating user:', error);
// //                         alert('Failed to update user information');
// //                       }
// //                     }}
// //                     className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
// //                   >
// //                     Update User Information
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //       {/* Recaptcha container */}
// //       <div id="recaptcha-container"></div>
// //     </div>
// //   );
// // };

// // export default ActiveUsers;

// import React, { useState, useEffect } from 'react';
// import { FaSearch, FaTimes, FaKey, FaBell, FaBan, FaEnvelope } from 'react-icons/fa';
// import { Spin } from 'antd';
// import axios from 'axios';
// import { auth } from './firebase';
// import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { useParams, useNavigate } from 'react-router-dom';

// // Mock data for active users
// const activeUsersData = [
//   {
//     id: 1,
//     firstName: "sam",
//     lastName: "kumar",
//     username: "@sam9279",
//     email: "[Email is Protected for the demo]",
//     mobile: "[Mobile is protected for the demo]",
//     country: "IN",
//     joinedAt: "2025-01-05 03:09 PM",
//     joinedAgo: "23 hours ago",
//     hasCompanies: false,
//     address: "a",
//     city: "a",
//     state: "a",
//     zipCode: "a",
//     emailVerified: true,
//     mobileVerified: true
//   },
//   {
//     id: 2,
//     firstName: "Dmomanu",
//     lastName: "Hahag",
//     username: "@Visagbsbe",
//     email: "[Email is Protected for the demo]",
//     mobile: "[Mobile is protected for the demo]",
//     country: "IN",
//     joinedAt: "2025-01-05 12:05 PM",
//     joinedAgo: "1 day ago",
//     hasCompanies: false
//   },
//   // ... more users
// ];

// const ActiveUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [showDetails, setShowDetails] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { token } = useParams();
//   const navigate = useNavigate();
//   const [verificationStatus, setVerificationStatus] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get('http://127.0.0.1:5000/api/users');
//         setUsers(response.data);
//         setFilteredUsers(response.data);
//       } catch (err) {
//         setError('Failed to fetch users');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   useEffect(() => {
//     const filtered = users.filter(user => 
//       (user.firstName && user.firstName.toLowerCase().includes(searchTerm.toLowerCase())) ||
//       (user.lastName && user.lastName.toLowerCase().includes(searchTerm.toLowerCase())) ||
//       (user.email && user.email.toLowerCase().includes(searchTerm.toLowerCase()))
//     );
//     setFilteredUsers(filtered);
//   }, [searchTerm, users]);

//   useEffect(() => {
//     if (token) {
//       verifyEmail(token);
//     }
//   }, [token]);

//   const verifyEmail = async (token) => {
//     try {
//       const response = await axios.get(`http://127.0.0.1:5000/api/users/verify-email/${token}`);
//       setVerificationStatus({ success: true, message: response.data.message });
//     } catch (error) {
//       setVerificationStatus({ success: false, message: error.response?.data?.message || 'Verification failed' });
//     }
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleDetails = (user) => {
//     setSelectedUser(user);
//     setShowDetails(true);
//   };

//   const handleCloseDetails = () => {
//     setSelectedUser(null);
//     setShowDetails(false);
//   };

//   // const sendEmailVerification = async (userId) => {
//   //   try {
//   //     await axios.post(`http://127.0.0.1:5000/api/users/${userId}/send-email-verification`);
//   //     alert('Verification email sent!');
//   //   } catch (error) {
//   //     console.error('Error sending verification email:', error);
//   //     alert('Failed to send verification email');
//   //   }
//   // };

//   // const setupRecaptcha = (phoneNumber) => {
//   //   const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
//   //   recaptchaVerifier.render();
//   //   return signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
//   // };

//   // const sendMobileVerification = async (userId, phoneNumber) => {
//   //   try {
//   //     const confirmationResult = await setupRecaptcha(phoneNumber);
//   //     const verificationCode = prompt('Enter the verification code sent to your phone:');
//   //     if (verificationCode) {
//   //       await confirmationResult.confirm(verificationCode);
//   //       await axios.post(`http://127.0.0.1:5000/api/users/${userId}/verify-mobile`);
//   //       alert('Mobile number verified successfully!');
//   //     }
//   //   } catch (error) {
//   //     console.error('Error verifying mobile number:', error);
//   //     alert('Failed to verify mobile number');
//   //   }
//   // };
//   const sendEmailVerification = async (userId) => {
//     try {
//       await axios.post(`http://127.0.0.1:5000/api/users/${userId}/send-email-verification`);
//       alert('Verification email sent!');
//     } catch (error) {
//       console.error('Error sending verification email:', error);
//       alert('Failed to send verification email');
//     }
//   };

//   const sendMobileVerification = async (userId, mobile) => {
//     try {
//       const response = await axios.post(`http://127.0.0.1:5000/api/users/${userId}/send-mobile-verification`, { mobile });
      
//       if (response.data.success) {
//         const verificationCode = prompt('Enter the verification code sent to your phone:');
//         if (verificationCode) {
//           const verifyResponse = await axios.post(`http://127.0.0.1:5000/api/users/${userId}/verify-mobile`, { verificationCode });
          
//           if (verifyResponse.data.success) {
//             alert('Mobile number verified successfully!');
//             const updatedUser = { ...selectedUser, mobileVerified: true };
//             setSelectedUser(updatedUser);
//             setUsers(users.map(user => user._id === userId ? updatedUser : user));
//           } else {
//             alert('Invalid verification code. Please try again.');
//           }
//         }
//       } else {
//         alert('Failed to send verification code. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error verifying mobile number:', error);
//       alert('Failed to verify mobile number: ' + error.response?.data?.message || error.message);
//     }
//   };

  
//   if (token) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <div className="bg-white p-8 rounded-lg shadow-md w-96">
//           <h2 className="text-2xl font-bold mb-4 text-center">Email Verification</h2>
//           {verificationStatus ? (
//             <div className={`text-center ${verificationStatus.success ? 'text-green-600' : 'text-red-600'}`}>
//               <p>{verificationStatus.message}</p>
//               {verificationStatus.success && (
//                 <FaEnvelope className="mx-auto mt-4 text-5xl text-green-500" />
//               )}
//             </div>
//           ) : (
//             <Spin size="large" />
//           )}
//           <button
//             onClick={() => navigate('/')}
//             className="mt-6 w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
//           >
//             Back to Users
//           </button>
//         </div>
//       </div>
//     );
//   }

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
//           Active Users
//         </h1>
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Username / Email"
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
//         {filteredUsers && filteredUsers.map((user) => (
//           <div key={user.id} className="bg-white rounded-lg shadow p-4 space-y-4">
//             <div className="space-y-2">
//               <div className="font-semibold text-gray-700">User</div>
//               <div>
//                 <div className="text-gray-900">{user.firstName} {user.lastName}</div>
//                 <div className="text-indigo-600 text-sm">{user.email}</div>
//               </div>
//             </div>

//             <div className="space-y-2">
//               <div className="font-semibold text-gray-700">Email-Mobile</div>
//               <div>
//                 <div className="text-gray-900">{user.email}</div>
//                 <div className="text-gray-600 text-sm">{user.mobile}</div>
//               </div>
//             </div>

//             <div className="space-y-2">
//               <div className="font-semibold text-gray-700">Country</div>
//               <div className="text-gray-900">{user.country}</div>
//             </div>

//             <div className="space-y-2">
//               <div className="font-semibold text-gray-700">Joined At</div>
//               <div>
//                 <div className="text-gray-900">{user.joinedAt}</div>
//                 <div className="text-gray-600 text-sm">{user.joinedAgo}</div>
//               </div>
//             </div>

//             <div className="space-y-2">
//               <div className="font-semibold text-gray-700">Companies</div>
//               <span className="inline-block px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-600">
//                 {user.hasCompanies ? 'Yes' : 'No'}
//               </span>
//             </div>

//             <div className="space-y-2">
//               <div className="font-semibold text-gray-700">Action</div>
//               <button
//                 onClick={() => handleDetails(user)}
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
//               <th className="px-6 py-3 text-left text-sm font-medium">Email-Mobile</th>
//               <th className="px-6 py-3 text-left text-sm font-medium">Country</th>
//               <th className="px-6 py-3 text-left text-sm font-medium">Joined At</th>
//               <th className="px-6 py-3 text-left text-sm font-medium">Companies</th>
//               <th className="px-6 py-3 text-left text-sm font-medium">Action</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {filteredUsers && filteredUsers.map((user) => (
//               <tr key={user.id} className="hover:bg-gray-50">
//                 <td className="px-6 py-4">
//                   <div>
//                     <div className="text-gray-900">{user.firstName} {user.lastName}</div>
//                     <div className="text-indigo-600 text-sm">{user.email}</div>
//                   </div>
//                 </td>
//                 <td className="px-6 py-4">
//                   <div>
//                     <div className="text-gray-900">{user.email}</div>
//                     <div className="text-gray-600 text-sm">{user.mobile}</div>
//                   </div>
//                 </td>
//                 <td className="px-6 py-4 text-gray-900">{user.country}</td>
//                 <td className="px-6 py-4">
//                   <div>
//                     <div className="text-gray-900">{user.joinedAt}</div>
//                     <div className="text-gray-600 text-sm">{user.joinedAgo}</div>
//                   </div>
//                 </td>
//                 <td className="px-6 py-4">
//                   <span className="px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-600">
//                     {user.hasCompanies ? 'Yes' : 'No'}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4">
//                   <button
//                     onClick={() => handleDetails(user)}
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

//       {/* User Details Modal */}
//       {showDetails && selectedUser && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
//             <div className="p-6">
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-xl font-semibold text-gray-800">
//                   User Detail - {selectedUser.email}
//                 </h2>
//                 <button
//                   onClick={handleCloseDetails}
//                   className="text-gray-400 hover:text-gray-600"
//                 >
//                   <FaTimes size={20} />
//                 </button>
//               </div>

//               {/* Action Buttons */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//                 <button className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-3 rounded-lg hover:bg-indigo-700">
//                   <FaKey className="w-5 h-5" />
//                   Logins
//                 </button>
//                 <button className="flex items-center justify-center gap-2 bg-gray-500 text-white px-4 py-3 rounded-lg hover:bg-gray-600">
//                   <FaBell className="w-5 h-5" />
//                   Notifications
//                 </button>
//                 <button className="flex items-center justify-center gap-2 bg-orange-500 text-white px-4 py-3 rounded-lg hover:bg-orange-600">
//                   <FaBan className="w-5 h-5" />
//                   Ban User
//                 </button>
//               </div>

//               {/* User Information Form */}
//               <div className="bg-white rounded-lg p-6">
//                 <h3 className="text-lg font-semibold mb-6">Information of {selectedUser.firstName} {selectedUser.lastName}</h3>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {/* First Name */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       First Name <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       value={selectedUser.firstName}
//                       readOnly
//                       className="w-full px-4 py-2 border rounded-lg bg-gray-50"
//                     />
//                   </div>

//                   {/* Last Name */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Last Name <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       value={selectedUser.lastName}
//                       readOnly
//                       className="w-full px-4 py-2 border rounded-lg bg-gray-50"
//                     />
//                   </div>

//                   {/* Email */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Email <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="email"
//                       value={selectedUser.email}
//                       readOnly
//                       className="w-full px-4 py-2 border rounded-lg bg-gray-50"
//                     />
//                   </div>

//                   {/* Mobile Number */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Mobile Number <span className="text-red-500">*</span>
//                     </label>
//                     <div className="flex">
//                       <span className="inline-flex items-center px-4 py-2 border border-r-0 rounded-l-lg bg-gray-50 text-gray-500">
//                         +91
//                       </span>
//                       <input
//                         type="text"
//                         value={selectedUser.mobile}
//                         readOnly
//                         className="w-full px-4 py-2 border rounded-r-lg bg-gray-50"
//                       />
//                     </div>
//                   </div>

//                   {/* Address */}
//                   <div className="md:col-span-2">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Address
//                     </label>
//                     <input
//                       type="text"
//                       value={selectedUser.address || ''}
//                       readOnly
//                       className="w-full px-4 py-2 border rounded-lg bg-gray-50"
//                     />
//                   </div>

//                   {/* City */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       City
//                     </label>
//                     <input
//                       type="text"
//                       value={selectedUser.city || ''}
//                       readOnly
//                       className="w-full px-4 py-2 border rounded-lg bg-gray-50"
//                     />
//                   </div>

//                   {/* State */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       State
//                     </label>
//                     <input
//                       type="text"
//                       value={selectedUser.state || ''}
//                       readOnly
//                       className="w-full px-4 py-2 border rounded-lg bg-gray-50"
//                     />
//                   </div>

//                   {/* Zip/Postal */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Zip/Postal
//                     </label>
//                     <input
//                       type="text"
//                       value={selectedUser.zipCode || ''}
//                       readOnly
//                       className="w-full px-4 py-2 border rounded-lg bg-gray-50"
//                     />
//                   </div>

//                   {/* Country */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Country <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       value={selectedUser.country}
//                       readOnly
//                       className="w-full px-4 py-2 border rounded-lg bg-gray-50"
//                     />
//                   </div>

//                   {/* Email Verification */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Email Verification
//                     </label>
//                     <div className="flex items-center justify-between px-4 py-2 bg-green-500 text-white rounded-lg">
//                       <span>{selectedUser.emailVerified ? 'Verified' : 'Not Verified'}</span>
//                       <div className="w-4 h-4 bg-green-600 rounded-full"></div>
//                     </div>
//                     {!selectedUser.emailVerified && (
//                       <button
//                         onClick={() => sendEmailVerification(selectedUser._id)}
//                         className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//                       >
//                         Send Verification Email
//                       </button>
//                     )}
//                   </div>

//                   {/* Mobile Verification */}
//                   <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Mobile Verification
//                 </label>
//                 <div className="flex items-center justify-between px-4 py-2 bg-green-500 text-white rounded-lg">
//                   <span>{selectedUser.mobileVerified ? 'Verified' : 'Not Verified'}</span>
//                   <div className="w-4 h-4 bg-green-600 rounded-full"></div>
//                 </div>
//                 {!selectedUser.mobileVerified && (
//                   <button
//                     onClick={() => sendMobileVerification(selectedUser._id, selectedUser.mobile)}
//                     className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//                   >
//                     Verify Mobile Number
//                   </button>
//                 )}
//               </div>
//                 </div>

//                 {/* Submit Button */}
//                 <div className="mt-6">
//                   <button
//                     onClick={async () => {
//                       try {
//                         await axios.put(`http://127.0.0.1:5000/api/users/${selectedUser._id}`, selectedUser);
//                         alert('User information updated successfully!');
//                       } catch (error) {
//                         console.error('Error updating user:', error);
//                         alert('Failed to update user information');
//                       }
//                     }}
//                     className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
//                   >
//                     Update User Information
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//       {/* Recaptcha container */}
//       <div id="recaptcha-container"></div>
//     </div>
//   );
// };

// export default ActiveUsers;


import React, { useState, useEffect } from 'react';
import { FaSearch, FaTimes, FaKey, FaBell, FaBan, FaEnvelope } from 'react-icons/fa';
import { Spin, message } from 'antd';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ActiveUsers = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useParams();
  const navigate = useNavigate();
  const [verificationStatus, setVerificationStatus] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://127.0.0.1:5000/api/users');
        setUsers(response.data);
        setFilteredUsers(response.data);
      } catch (err) {
        setError('Failed to fetch users');
        console.error('Error fetching users:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter(user => 
      (user.firstName && user.firstName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (user.lastName && user.lastName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (user.email && user.email.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  useEffect(() => {
    if (token) {
      verifyEmail(token);
    }
  }, [token]);

  const verifyEmail = async (token) => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/api/users/verify-email/${token}`);
      setVerificationStatus({ success: true, message: response.data.message });
    } catch (error) {
      setVerificationStatus({ success: false, message: error.response?.data?.message || 'Verification failed' });
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDetails = (user) => {
    setSelectedUser(user);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setSelectedUser(null);
    setShowDetails(false);
  };

  const sendEmailVerification = async (userId) => {
    try {
      await axios.post(`http://127.0.0.1:5000/api/users/${userId}/send-email-verification`);
      message.success('Verification email sent!');
    } catch (error) {
      console.error('Error sending verification email:', error);
      message.error('Failed to send verification email');
    }
  };

  const sendMobileVerification = async (userId, mobile) => {
    try {
      const response = await axios.post(`http://127.0.0.1:5000/api/users/${userId}/send-mobile-verification`, { mobile });
      
      if (response.data.success) {
        const verificationCode = prompt('Enter the verification code sent to your phone:');
        if (verificationCode) {
          await verifyMobile(userId, verificationCode);
        }
      } else {
        message.error('Failed to send verification code. Please try again.');
      }
    } catch (error) {
      console.error('Error sending mobile verification:', error);
      message.error('Failed to send verification code: ' + error.response?.data?.message || error.message);
    }
  };
  
  const verifyMobile = async (userId, verificationCode) => {
    try {
      const response = await axios.post(`http://127.0.0.1:5000/api/users/${userId}/verify-mobile`, { verificationCode });
      
      if (response.data.success) {
        message.success('Mobile number verified successfully!');
        const updatedUser = { ...selectedUser, mobileVerified: true };
        setSelectedUser(updatedUser);
        setUsers(users.map(user => user._id === userId ? updatedUser : user));
      } else {
        message.error('Invalid verification code. Please try again.');
      }
    } catch (error) {
      console.error('Error verifying mobile number:', error);
      message.error('Failed to verify mobile number: ' + error.response?.data?.message || error.message);
    }
  };
// import React, { useState, useEffect } from 'react';
// import { FaSearch, FaTimes, FaKey, FaBell, FaBan, FaEnvelope } from 'react-icons/fa';
// import { Spin } from 'antd';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';

// const ActiveUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [showDetails, setShowDetails] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { token } = useParams();
//   const navigate = useNavigate();
//   const [verificationStatus, setVerificationStatus] = useState(null);
//   const [verificationCode, setVerificationCode] = useState('');
//   const [customToken, setCustomToken] = useState('');

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get('http://127.0.0.1:5000/api/users');
//         setUsers(response.data);
//         setFilteredUsers(response.data);
//       } catch (err) {
//         setError('Failed to fetch users');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   useEffect(() => {
//     const filtered = users.filter(user => 
//       (user.firstName && user.firstName.toLowerCase().includes(searchTerm.toLowerCase())) ||
//       (user.lastName && user.lastName.toLowerCase().includes(searchTerm.toLowerCase())) ||
//       (user.email && user.email.toLowerCase().includes(searchTerm.toLowerCase()))
//     );
//     setFilteredUsers(filtered);
//   }, [searchTerm, users]);

//   useEffect(() => {
//     if (token) {
//       verifyEmail(token);
//     }
//   }, [token]);

//   const verifyEmail = async (token) => {
//     try {
//       const response = await axios.get(`http://127.0.0.1:5000/api/users/verify-email/${token}`);
//       setVerificationStatus({ success: true, message: response.data.message });
//     } catch (error) {
//       setVerificationStatus({ success: false, message: error.response?.data?.message || 'Verification failed' });
//     }
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleDetails = (user) => {
//     setSelectedUser(user);
//     setShowDetails(true);
//   };

//   const handleCloseDetails = () => {
//     setSelectedUser(null);
//     setShowDetails(false);
//   };

//   const sendEmailVerification = async (userId) => {
//     try {
//       await axios.post(`http://127.0.0.1:5000/api/users/${userId}/send-email-verification`);
//       alert('Verification email sent!');
//     } catch (error) {
//       console.error('Error sending verification email:', error);
//       alert('Failed to send verification email');
//     }
//   };

//   // const sendMobileVerification = async (userId, mobile) => {
//   //   try {
//   //     const response = await axios.post(`http://127.0.0.1:5000/api/users/${userId}/send-mobile-verification`, { mobile });
      
//   //     if (response.data.success) {
//   //       const verificationCode = prompt('Enter the verification code sent to your phone:');
//   //       if (verificationCode) {
//   //         const verifyResponse = await axios.post(`http://127.0.0.1:5000/api/users/${userId}/verify-mobile`, { verificationCode });
          
//   //         if (verifyResponse.data.success) {
//   //           alert('Mobile number verified successfully!');
//   //           const updatedUser = { ...selectedUser, mobileVerified: true };
//   //           setSelectedUser(updatedUser);
//   //           setUsers(users.map(user => user._id === userId ? updatedUser : user));
//   //         } else {
//   //           alert('Invalid verification code. Please try again.');
//   //         }
//   //       }
//   //     } else {
//   //       alert('Failed to send verification code. Please try again.');
//   //     }
//   //   } catch (error) {
//   //     console.error('Error verifying mobile number:', error);
//   //     alert('Failed to verify mobile number: ' + error.response?.data?.message || error.message);
//   //   }
//   // };
//   const sendMobileVerification = async (userId, mobile) => {
//     try {
//       const response = await axios.post(`http://127.0.0.1:5000/users/${userId}/send-mobile-verification`, { mobile });
      
//       if (response.data.success) {
//         setCustomToken(response.data.customToken);
//         const verificationCode = prompt('Enter the verification code sent to your phone:');
//         if (verificationCode) {
//           await verifyMobile(userId, verificationCode, response.data.customToken);
//         }
//       } else {
//         alert('Failed to send verification code. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error sending mobile verification:', error);
//       alert('Failed to send verification code: ' + error.response?.data?.message || error.message);
//     }
//   };
  
//   const verifyMobile = async (userId, verificationCode, customToken) => {
//     try {
//       const response = await axios.post(`http://127.0.0.1:5000/users/${userId}/verify-mobile`, { verificationCode, customToken });
      
//       if (response.data.success) {
//         alert('Mobile number verified successfully!');
//         const updatedUser = { ...selectedUser, mobileVerified: true };
//         setSelectedUser(updatedUser);
//         setUsers(users.map(user => user._id === userId ? updatedUser : user));
//       } else {
//         alert('Invalid verification code. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error verifying mobile number:', error);
//       alert('Failed to verify mobile number: ' + error.response?.data?.message || error.message);
//     }
//   };
  

  if (token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-4 text-center">Email Verification</h2>
          {verificationStatus ? (
            <div className={`text-center ${verificationStatus.success ? 'text-green-600' : 'text-red-600'}`}>
              <p>{verificationStatus.message}</p>
              {verificationStatus.success && (
                <FaEnvelope className="mx-auto mt-4 text-5xl text-green-500" />
              )}
            </div>
          ) : (
            <Spin size="large" />
          )}
          <button
            onClick={() => navigate('/')}
            className="mt-6 w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            Back to Users
          </button>
        </div>
      </div>
    );
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
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Active Users
        </h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Username / Email"
            className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-lg">
            <FaSearch className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="md:hidden space-y-4">
        {filteredUsers && filteredUsers.map((user) => (
          <div key={user.id} className="bg-white rounded-lg shadow p-4 space-y-4">
            <div className="space-y-2">
              <div className="font-semibold text-gray-700">User</div>
              <div>
                <div className="text-gray-900">{user.firstName} {user.lastName}</div>
                <div className="text-indigo-600 text-sm">{user.email}</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-semibold text-gray-700">Email-Mobile</div>
              <div>
                <div className="text-gray-900">{user.email}</div>
                <div className="text-gray-600 text-sm">{user.mobile}</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-semibold text-gray-700">Country</div>
              <div className="text-gray-900">{user.country}</div>
            </div>

            <div className="space-y-2">
              <div className="font-semibold text-gray-700">Joined At</div>
              <div>
                <div className="text-gray-900">{user.joinedAt}</div>
                <div className="text-gray-600 text-sm">{user.joinedAgo}</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-semibold text-gray-700">Companies</div>
              <span className="inline-block px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-600">
                {user.hasCompanies ? 'Yes' : 'No'}
              </span>
            </div>

            <div className="space-y-2">
              <div className="font-semibold text-gray-700">Action</div>
              <button
                onClick={() => handleDetails(user)}
                className="inline-flex items-center justify-center px-4 py-2 border border-indigo-600 rounded-lg text-indigo-600 hover:bg-indigo-50"
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:block bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="px-6 py-3 text-left text-sm font-medium">User</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Email-Mobile</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Country</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Joined At</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Companies</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredUsers && filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div>
                    <div className="text-gray-900">{user.firstName} {user.lastName}</div>
                    <div className="text-indigo-600 text-sm">{user.email}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <div className="text-gray-900">{user.email}</div>
                    <div className="text-gray-600 text-sm">{user.mobile}</div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-900">{user.country}</td>
                <td className="px-6 py-4">
                  <div>
                    <div className="text-gray-900">{user.joinedAt}</div>
                    <div className="text-gray-600 text-sm">{user.joinedAgo}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-600">
                    {user.hasCompanies ? 'Yes' : 'No'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDetails(user)}
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

      {showDetails && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  User Detail - {selectedUser.email}
                </h2>
                <button
                  onClick={handleCloseDetails}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <button className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-3 rounded-lg hover:bg-indigo-700">
                  <FaKey className="w-5 h-5" />
                  Logins
                </button>
                <button className="flex items-center justify-center gap-2 bg-gray-500 text-white px-4 py-3 rounded-lg hover:bg-gray-600">
                  <FaBell className="w-5 h-5" />
                  Notifications
                </button>
                <button className="flex items-center justify-center gap-2 bg-orange-500 text-white px-4 py-3 rounded-lg hover:bg-orange-600">
                  <FaBan className="w-5 h-5" />
                  Ban User
                </button>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-6">Information of {selectedUser.firstName} {selectedUser.lastName}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={selectedUser.firstName}
                      readOnly
                      className="w-full px-4 py-2 border rounded-lg bg-gray-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={selectedUser.lastName}
                      readOnly
                      className="w-full px-4 py-2 border rounded-lg bg-gray-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={selectedUser.email}
                      readOnly
                      className="w-full px-4 py-2 border rounded-lg bg-gray-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-4 py-2 border border-r-0 rounded-l-lg bg-gray-50 text-gray-500">
                        +91
                      </span>
                      <input
                        type="text"
                        value={selectedUser.mobile}
                        readOnly
                        className="w-full px-4 py-2 border rounded-r-lg bg-gray-50"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      value={selectedUser.address || ''}
                      readOnly
                      className="w-full px-4 py-2 border rounded-lg bg-gray-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      value={selectedUser.city || ''}
                      readOnly
                      className="w-full px-4 py-2 border rounded-lg bg-gray-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      value={selectedUser.state || ''}
                      readOnly
                      className="w-full px-4 py-2 border rounded-lg bg-gray-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Zip/Postal
                    </label>
                    <input
                      type="text"
                      value={selectedUser.zipCode || ''}
                      readOnly
                      className="w-full px-4 py-2 border rounded-lg bg-gray-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={selectedUser.country}
                      readOnly
                      className="w-full px-4 py-2 border rounded-lg bg-gray-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Verification
                    </label>
                    <div className="flex items-center justify-between px-4 py-2 bg-green-500 text-white rounded-lg">
                      <span>{selectedUser.emailVerified ? 'Verified' : 'Not Verified'}</span>
                      <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                    </div>
                    {!selectedUser.emailVerified && (
                      <button
                        onClick={() => sendEmailVerification(selectedUser._id)}
                        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                      >
                        Send Verification Email
                      </button>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mobile Verification
                    </label>
                    <div className="flex items-center justify-between px-4 py-2 bg-green-500 text-white rounded-lg">
                      <span>{selectedUser.mobileVerified ? 'Verified' : 'Not Verified'}</span>
                      <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                    </div>
                    {!selectedUser.mobileVerified && (
                      <button
                      
                        onClick={() => sendMobileVerification(selectedUser._id, selectedUser.mobile)}
                        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                      >
                        Verify Mobile Number
                      </button>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    onClick={async () => {
                      try {
                        await axios.put(`http://127.0.0.1:5000/api/users/${selectedUser._id}`, selectedUser);
                        alert('User information updated successfully!');
                      } catch (error) {
                        console.error('Error updating user:', error);
                        alert('Failed to update user information');
                      }
                    }}
                    className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                  >
                    Update User Information
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default ActiveUsers;

