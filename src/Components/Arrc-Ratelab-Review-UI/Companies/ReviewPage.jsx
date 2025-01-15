// // // import React, { useState, useEffect } from 'react';
// // // import { useNavigate, useParams } from 'react-router-dom';
// // // import axios from 'axios';
// // // import { toast } from 'react-hot-toast';
// // // import { MapPinIcon, BuildingOffice2Icon, TagIcon, CalendarDaysIcon, LinkIcon } from '@heroicons/react/24/outline';

// // // const StarRating = ({ rating, onRatingChange = null }) => {
// // //   const fullStars = Math.floor(rating);
// // //   const hasHalfStar = rating % 1 >= 0.5;

// // //   return (
// // //     <div className="flex gap-1">
// // //       {[1, 2, 3, 4, 5].map((star) => (
// // //         <svg
// // //           key={star}
// // //           className={`w-5 h-5 ${
// // //             star <= fullStars
// // //               ? 'text-[#FFB23F]'
// // //               : star === fullStars + 1 && hasHalfStar
// // //               ? 'text-[#FFB23F]'
// // //               : 'text-gray-300'
// // //           } ${onRatingChange ? 'cursor-pointer' : ''}`}
// // //           fill={star <= fullStars ? 'currentColor' : 'none'}
// // //           stroke="currentColor"
// // //           viewBox="0 0 24 24"
// // //           onClick={() => onRatingChange && onRatingChange(star)}
// // //         >
// // //           <path
// // //             strokeLinecap="round"
// // //             strokeLinejoin="round"
// // //             strokeWidth={2}
// // //             d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
// // //           />
// // //           {star === fullStars + 1 && hasHalfStar && (
// // //             <path
// // //               fill="currentColor"
// // //               d="M12 2.24l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69L12 2.24z"
// // //               clipPath="inset(0 50% 0 0)"
// // //             />
// // //           )}
// // //         </svg>
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // const ReviewPage = () => {
// // //   const { id } = useParams();
// // //   const navigate = useNavigate();
// // //   const [company, setCompany] = useState(null);
// // //   const [reviews, setReviews] = useState([]);
// // //   const [newReview, setNewReview] = useState({ rating: 0, comment: '' });
// // //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// // //   const [isLoading, setIsLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     checkAuthStatus();
// // //     fetchCompanyAndReviews();
// // //   }, [id]);

// // //   const checkAuthStatus = () => {
// // //     const token = localStorage.getItem('token');
// // //     setIsLoggedIn(!!token);
// // //   };

// // //   const fetchCompanyAndReviews = async () => {
// // //     try {
// // //       setIsLoading(true);
// // //       setError(null);
      
// // //       const [companyRes, reviewsRes] = await Promise.all([
// // //         axios.get(`https://arrc-tech-ratelab-backend-project.onrender.com/api/companies/${id}`),
// // //         axios.get(`https://arrc-tech-ratelab-backend-project.onrender.com/api/reviews/${id}`)
// // //       ]);

// // //       setCompany(companyRes.data);
// // //       setReviews(reviewsRes.data);
// // //     } catch (error) {
// // //       console.error('Error fetching data:', error);
// // //       setError('Failed to load data. Please try again later.');
// // //       toast.error('Error loading company data');
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   const handleReviewSubmit = async (e) => {
// // //     e.preventDefault();

// // //     if (!isLoggedIn) {
// // //       toast.error('Please login to submit a review');
// // //       navigate('/user/login', { state: { returnUrl: `/company/${id}` } });
// // //       return;
// // //     }

// // //     if (newReview.rating === 0) {
// // //       toast.error('Please select a rating');
// // //       return;
// // //     }

// // //     if (!newReview.comment.trim()) {
// // //       toast.error('Please write a review');
// // //       return;
// // //     }

// // //     try {
// // //       const token = localStorage.getItem('token');
// // //       const response = await axios.post(
// // //         `https://arrc-tech-ratelab-backend-project.onrender.com/api/reviews/${id}`,
// // //         {
// // //           rating: newReview.rating,
// // //           comment: newReview.comment
// // //         },
// // //         {
// // //           headers: { Authorization: `Bearer ${token}` },
// // //         }
// // //       );

// // //       if (response.data) {
// // //         setReviews(prevReviews => [response.data, ...prevReviews]);
// // //         setNewReview({ rating: 0, comment: '' });
// // //         toast.success('Review submitted successfully!');
// // //       } else {
// // //         throw new Error('Invalid response from server');
// // //       }
// // //     } catch (error) {
// // //       console.error('Error submitting review:', error);
// // //       if (error.response?.status === 401) {
// // //         toast.error('Please login again to submit your review');
// // //         navigate('/user/login');
// // //       } else {
// // //         toast.error('Failed to submit review. Please try again.');
// // //       }
// // //     }
// // //   };

// // //   const handleDeleteReview = async (reviewId) => {
// // //     try {
// // //       const token = localStorage.getItem('token');
// // //       await axios.delete(`https://arrc-tech-ratelab-backend-project.onrender.com/api/reviews/${reviewId}`, {
// // //         headers: { Authorization: `Bearer ${token}` },
// // //       });
// // //       setReviews(prevReviews => prevReviews.filter(review => review._id !== reviewId));
// // //       toast.success('Review deleted successfully!');
// // //     } catch (error) {
// // //       console.error('Error deleting review:', error);
// // //       toast.error('Failed to delete review. Please try again.');
// // //     }
// // //   };

// // //   if (isLoading) {
// // //     return (
// // //       <div className="flex justify-center items-center h-screen">
// // //         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#FFB23F]"></div>
// // //       </div>
// // //     );
// // //   }

// // //   if (error) {
// // //     return (
// // //       <div className="flex justify-center items-center h-screen">
// // //         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
// // //           <strong className="font-bold">Error: </strong>
// // //           <span className="block sm:inline">{error}</span>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   if (!company) {
// // //     return (
// // //       <div className="flex justify-center items-center h-screen">
// // //         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
// // //           <strong className="font-bold">Error: </strong>
// // //           <span className="block sm:inline">Company not found.</span>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-[#FAF7F5]">
// // //       {/* Header Background */}
// // //       <div className="relative w-full h-80">
// // //         <div 
// // //           className="absolute inset-0 bg-cover bg-center"
// // //           style={{
// // //             backgroundImage: `url('https://script.viserlab.com/ratelab/assets/images/frontend/breadcrumb/6354d380899a21666503552.jpg')`
// // //           }}
// // //         />
// // //         <div className="absolute inset-0 bg-[#1a1b3a]/80" />
// // //       </div>

// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
// // //         <div className="grid md:grid-cols-12 gap-8">
// // //           {/* Left Sidebar */}
// // //           <div className="md:col-span-4">
// // //             <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
// // //               <div className="mb-6">
// // //                 <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
// // //                   {company.imageUrl ? (
// // //                     <img 
// // //                       src={company.imageUrl}
// // //                       alt={company.companyName}
// // //                       className="w-full h-full object-cover"
// // //                     />
// // //                   ) : (
// // //                     <div className="w-full h-full flex items-center justify-center text-gray-400">
// // //                       400×300
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //               </div>

// // //               <div className="space-y-6">
// // //                 <div>
// // //                   <h3 className="text-xl font-bold text-gray-900 mb-4">About {company.companyName}</h3>
// // //                   <p className="text-gray-600 leading-relaxed">{company.description}</p>
// // //                 </div>

// // //                 <div className="space-y-4">
// // //                   <div className="flex items-center gap-3 text-gray-600">
// // //                     <BuildingOffice2Icon className="w-5 h-5" />
// // //                     <span>Travel Agency</span>
// // //                   </div>
// // //                   <div className="flex items-center gap-3 text-gray-600">
// // //                     <MapPinIcon className="w-5 h-5" />
// // //                     <span>Dhaka</span>
// // //                   </div>
// // //                   <div className="flex items-center gap-3 text-gray-600">
// // //                     <LinkIcon className="w-5 h-5" />
// // //                     <a href={company.website} className="text-blue-600 hover:underline">{company.website}</a>
// // //                   </div>
// // //                   <div className="flex items-center gap-3 text-gray-600">
// // //                     <CalendarDaysIcon className="w-5 h-5" />
// // //                     <span>Registered on: 16 Nov 2022</span>
// // //                   </div>
// // //                 </div>

// // //                 <div>
// // //                   <h3 className="text-xl font-bold text-gray-900 mb-4">Tags</h3>
// // //                   <div className="flex flex-wrap gap-2">
// // //                     {['CAR', 'car2', 'good'].map((tag, index) => (
// // //                       <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
// // //                         {tag}
// // //                       </span>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Main Content */}
// // //           <div className="md:col-span-8">
// // //             <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
// // //               {/* Review Form */}
// // //               <div className="mb-8">
// // //                 <div className="flex items-center gap-4 mb-6">
// // //                   <img 
// // //                     src="https://script.viserlab.com/ratelab/assets/images/default.png"
// // //                     alt="User Avatar"
// // //                     className="w-12 h-12 rounded-full"
// // //                   />
// // //                   <div>
// // //                     <h3 className="font-semibold text-gray-900">Write a Review</h3>
// // //                     <StarRating 
// // //                       rating={newReview.rating} 
// // //                       onRatingChange={(rating) => setNewReview(prev => ({ ...prev, rating }))}
// // //                     />
// // //                   </div>
// // //                 </div>

// // //                 <form onSubmit={handleReviewSubmit} className="space-y-4">
// // //                   <textarea
// // //                     placeholder="Write your review here..."
// // //                     value={newReview.comment}
// // //                     onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
// // //                     className="w-full min-h-[150px] p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB23F]/50"
// // //                   />
// // //                   <div className="flex justify-end">
// // //                     <button
// // //                       type="submit"
// // //                       className="px-6 py-2 bg-[#FFB23F] text-white rounded-lg hover:bg-[#FFB23F]/90 transition-colors"
// // //                     >
// // //                       {isLoggedIn ? 'Submit Review' : 'Login to Review'}
// // //                     </button>
// // //                   </div>
// // //                 </form>
// // //               </div>

// // //               {/* Reviews List */}
// // //               <div className="space-y-6">
// // //                 <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Reviews</h3>
                
// // //                 {reviews.length > 0 ? (
// // //                   reviews.map((review) => (
// // //                     <div key={review._id} className="bg-gray-50 rounded-lg p-6">
// // //                       <div className="flex items-start gap-4">
// // //                         <img 
// // //                           src="https://script.viserlab.com/ratelab/assets/images/default.png"
// // //                           alt="Reviewer Avatar"
// // //                           className="w-12 h-12 rounded-full"
// // //                         />
// // //                         <div className="flex-1">
// // //                           <div className="flex justify-between items-start">
// // //                             <div>
// // //                               <h4 className="font-semibold text-gray-900">{review.user.username}</h4>
// // //                               <StarRating rating={review.rating} />
// // //                             </div>
// // //                             <span className="text-sm text-gray-500">
// // //                               {new Date(review.createdAt).toLocaleDateString()}
// // //                             </span>
// // //                           </div>
// // //                           <p className="mt-4 text-gray-600 leading-relaxed">{review.comment}</p>
// // //                           {isLoggedIn && review.user._id === localStorage.getItem('userId') && (
// // //                             <button
// // //                               onClick={() => handleDeleteReview(review._id)}
// // //                               className="mt-2 text-red-600 hover:text-red-800"
// // //                             >
// // //                               Delete Review
// // //                             </button>
// // //                           )}
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   ))
// // //                 ) : (
// // //                   <div className="text-center text-gray-500 py-8">
// // //                     No reviews yet. Be the first to review this company!
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ReviewPage;

// // import React, { useState, useEffect } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import { toast } from 'react-hot-toast';

// // const ReviewPage = () => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const [company, setCompany] = useState(null);
// //   const [reviews, setReviews] = useState([]);
// //   const [newReview, setNewReview] = useState({ rating: 0, comment: '' });
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     fetchCompanyAndReviews();
// //     checkLoginStatus();
// //   }, [id]);

// //   const fetchCompanyAndReviews = async () => {
// //     try {
// //       setIsLoading(true);
// //       setError(null);
// //       const companyRes = await axios.get(`https://arrc-tech-ratelab-backend-project.onrender.com/api/companies/${id}`);
// //       setCompany(companyRes.data);
      
// //       // Fetch reviews separately and handle potential errors
// //       try {
// //         const reviewsRes = await axios.get(`https://arrc-tech-ratelab-backend-project.onrender.com/api/reviews/${id}`);
// //         setReviews(reviewsRes.data);
// //       } catch (reviewError) {
// //         console.error('Error fetching reviews:', reviewError);
// //         setReviews([]);
// //         toast.error('Unable to load reviews. They may not be available for this company.');
// //       }
// //     } catch (error) {
// //       console.error('Error fetching data:', error);
// //       setError('Failed to load company data. Please try again later.');
// //       toast.error('Error fetching company data');
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const checkLoginStatus = () => {
// //     const token = localStorage.getItem('token');
// //     setIsLoggedIn(!!token);
// //   };

   
// //   const handleReviewSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!isLoggedIn) {
// //       toast.error('Please login to submit a review');
// //       navigate('/user/login', { state: { returnUrl: `/company/${id}` } });
// //       return;
// //     }

// //     if (newReview.rating === 0) {
// //       toast.error('Please select a rating');
// //       return;
// //     }

// //     if (!newReview.fullReview.trim()) {
// //       toast.error('Please write a review');
// //       return;
// //     }

// //     try {
// //       const token = localStorage.getItem('token');
// //       const reviewData = [{
// //         excelId: Date.now(), // Use timestamp as a unique excelId
// //         reviewer: username,
// //         username: username,
// //         company: company.companyName,
// //         review: newReview.fullReview.substring(0, 100), // Short version for 'review' field
// //         fullReview: newReview.fullReview,
// //         rating: newReview.rating
// //       }];

// //       const response = await axios.post(
// //         'https://arrc-tech-ratelab-backend-project.onrender.com/api/reviews',
// //         reviewData,
// //         {
// //           headers: { Authorization: `Bearer ${token}` },
// //         }
// //       );

// //       if (response.data) {
// //         const newReviews = response.data.filter(review => review.company === company.companyName);
// //         setReviews(newReviews);
// //         setNewReview({ rating: 0, fullReview: '' });
// //         toast.success('Review submitted successfully!');
// //       } else {
// //         throw new Error('Invalid response from server');
// //       }
// //     } catch (error) {
// //       console.error('Error submitting review:', error);
// //       if (error.response?.status === 401) {
// //         toast.error('Please login again to submit your review');
// //         navigate('/user/login');
// //       } else {
// //         toast.error('Failed to submit review. Please try again.');
// //       }
// //     }
// //   };

// //   const Button = ({ children, className, ...props }) => (
// //     <button 
// //       className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${className}`} 
// //       {...props}
// //     >
// //       {children}
// //     </button>
// //   );
  
// //    const Textarea = ({ className, ...props }) => (
// //     <textarea 
// //       className={`w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB23F]/50 ${className}`}
// //       {...props}
// //     />
// //   );
  
// //  const StarRating = ({ rating, onChange, size = "sm" }) => {
// //     const starSize = size === "sm" ? "w-4 h-4" : "w-5 h-5";
// //     return (
// //       <div className="flex">
// //         {[1, 2, 3, 4, 5].map((star) => (
// //           <svg
// //             key={star}
// //             className={`${starSize} ${star <= rating ? "text-[#FFB23F]" : "text-gray-200"} cursor-pointer`}
// //             fill="currentColor"
// //             viewBox="0 0 20 20"
// //             onClick={() => onChange && onChange(star)}
// //           >
// //             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// //           </svg>
// //         ))}
// //       </div>
// //     );
// //   };
  
// //  const ProgressBar = ({ percentage }) => (
// //     <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
// //       <div
// //         className="h-full bg-[#FFB23F] transition-all duration-300"
// //         style={{ width: `${percentage}%` }}
// //       />
// //     </div>
// //   );
  
// //   if (isLoading) {
// //     return (
// //       <div className="flex justify-center items-center h-screen">
// //         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#FFB23F]"></div>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="flex justify-center items-center h-screen">
// //         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
// //           <strong className="font-bold">Error: </strong>
// //           <span className="block sm:inline">{error}</span>
// //         </div>
// //       </div>
// //     );
// //   }

// //   if (!company) {
// //     return (
// //       <div className="flex justify-center items-center h-screen">
// //         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
// //           <strong className="font-bold">Error: </strong>
// //           <span className="block sm:inline">Company not found.</span>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-[#FAF7F5]">
// //       {/* Header Background */}
// //       <div className="relative w-full h-48">
// //         <div 
// //           className="absolute inset-0 bg-cover bg-center"
// //           style={{
// //             backgroundImage: `url('https://script.viserlab.com/ratelab/assets/images/frontend/breadcrumb/6354d380899a21666503552.jpg')`
// //           }}
// //         />
// //         <div className="absolute inset-0 bg-black/20" />
// //       </div>

// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
// //         <div className="grid md:grid-cols-12 gap-8">
// //           {/* Left Sidebar */}
// //           <div className="md:col-span-4">
// //             <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
// //               <div className="mb-6">
// //                 <img 
// //                   src={company.imageUrl || "https://script.viserlab.com/ratelab/assets/images/default.png"}
// //                   alt={company.companyName}
// //                   className="w-full h-auto rounded-lg"
// //                 />
// //               </div>

// //               <div className="mb-8">
// //                 <div className="flex items-baseline mb-6">
// //                   <h2 className="text-6xl font-bold text-gray-900">{company.rating ? company.rating.toFixed(2) : 'N/A'}</h2>
// //                   <div className="ml-4">
// //                     <StarRating rating={company.rating || 0} size="lg" />
// //                     <p className="text-sm text-gray-500 mt-1">Based on {reviews.length} Reviews</p>
// //                   </div>
// //                 </div>

// //                 {/* Rating Bars */}
// //                 <div className="space-y-3">
// //                   {[5, 4, 3, 2, 1].map((stars) => {
// //                     const count = reviews.filter(review => Math.floor(review.rating) === stars).length;
// //                     const percentage = (count / reviews.length) * 100 || 0;
// //                     return (
// //                       <div key={stars} className="flex items-center gap-3">
// //                         <span className="w-3 text-sm font-medium">{stars}</span>
// //                         <StarRating rating={stars} size="sm" />
// //                         <ProgressBar percentage={percentage} />
// //                         <span className="w-16 text-right text-sm text-gray-500">
// //                           {percentage.toFixed(2)}%
// //                         </span>
// //                       </div>
// //                     );
// //                   })}
// //                 </div>
// //               </div>

// //               <div className="space-y-6">
// //                 <div>
// //                   <h3 className="text-xl font-bold text-gray-900 mb-4">About {company.companyName}</h3>
// //                   <p className="text-gray-600 leading-relaxed">{company.description}</p>
// //                 </div>

// //                 <div>
// //                   <h3 className="text-xl font-bold text-gray-900 mb-4">Tags</h3>
// //                   <div className="flex flex-wrap gap-2">
// //                     {company.tags && company.tags.map((tag, index) => (
// //                       <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">{tag}</span>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 <div>
// //                   <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Info</h3>
// //                   <ul className="space-y-3">
// //                     <li className="flex items-center gap-3">
// //                       <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
// //                       </svg>
// //                       <a href={company.url} className="text-blue-600 hover:underline">{company.url}</a>
// //                     </li>
// //                     <li className="flex items-center gap-3">
// //                       <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
// //                       </svg>
// //                       <span className="text-gray-600">{company.address}</span>
// //                     </li>
// //                   </ul>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Main Content */}
// //           <div className="md:col-span-8">
// //             <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
// //               {/* Company Header */}
// //               <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
// //                 <div>
// //                   <h1 className="text-3xl font-bold text-gray-900">{company.companyName}</h1>
// //                   <div className="flex items-center mt-2">
// //                     <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
// //                     </svg>
// //                     <span className="text-gray-600">{company.address}</span>
// //                   </div>
// //                 </div>
// //                 <Button className="mt-4 md:mt-0 bg-[#14142B] text-white hover:bg-[#14142B]/90">
// //                   Visit this site
// //                 </Button>
// //               </div>

// //               {/* Review Form */}
// //               <div className="mb-8">
// //                 <div className="flex items-center gap-4 mb-6">
// //                   <img 
// //                     src="https://script.viserlab.com/ratelab/assets/images/default.png"
// //                     alt="User Avatar"
// //                     className="w-12 h-12 rounded-full"
// //                   />
// //                   <div>
// //                     <h3 className="font-semibold text-gray-900">Write a Review</h3>
// //                     <StarRating 
// //                       rating={newReview.rating} 
// //                       onChange={(rating) => setNewReview({ ...newReview, rating })}
// //                     />
// //                   </div>
// //                 </div>
// //                 <Textarea
// //                   placeholder="Write review"
// //                   className="min-h-[150px] mb-4"
// //                   value={newReview.comment}
// //                   onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
// //                 />
// //                 <div className="flex justify-end">
// //                   <Button 
// //                     className="bg-[#FFB23F] text-white hover:bg-[#FFB23F]/90"
// //                     onClick={handleReviewSubmit}
// //                     disabled={!isLoggedIn}
// //                   >
// //                     {isLoggedIn ? 'Submit' : 'Login to Submit'}
// //                   </Button>
// //                 </div>
// //               </div>

// //               {/* Reviews List */}
// //               <div className="space-y-6">
// //                 {reviews.length > 0 ? (
// //                   reviews.map((review) => (
// //                     <div key={review._id} className="bg-gray-50 rounded-lg p-6">
// //                       <div className="flex items-start gap-4">
// //                         <img 
// //                           src={review.user.avatar || "https://script.viserlab.com/ratelab/assets/images/default.png"}
// //                           alt={`${review.user.name}'s Avatar`}
// //                           className="w-12 h-12 rounded-full"
// //                         />
// //                         <div className="flex-1">
// //                           <div className="flex justify-between items-start">
// //                             <div>
// //                               <h3 className="font-semibold text-gray-900">{review.user.name}</h3>
// //                               <StarRating rating={review.rating} />
// //                             </div>
// //                             <span className="text-sm text-gray-500">
// //                               {new Date(review.createdAt).toLocaleDateString()}
// //                             </span>
// //                           </div>
// //                           <p className="mt-4 text-gray-600 leading-relaxed">{review.comment}</p>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   ))
// //                 ) : (
// //                   <div className="text-center text-gray-500">
// //                     No reviews available for this company yet. Be the first to leave a review!
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ReviewPage;


























// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// import { MapPinIcon, BuildingOffice2Icon, TagIcon, CalendarDaysIcon, LinkIcon } from '@heroicons/react/24/outline';
// import { jwtDecode } from 'jwt-decode';

// const StarRating = ({ rating, onRatingChange = null }) => {
//   const fullStars = Math.floor(rating);
//   const hasHalfStar = rating % 1 >= 0.5;

//   return (
//     <div className="flex gap-1">
//       {[1, 2, 3, 4, 5].map((star) => (
//         <svg
//           key={star}
//           className={`w-5 h-5 ${
//             star <= fullStars
//               ? 'text-[#FFB23F]'
//               : star === fullStars + 1 && hasHalfStar
//               ? 'text-[#FFB23F]'
//               : 'text-gray-300'
//           } ${onRatingChange ? 'cursor-pointer' : ''}`}
//           fill={star <= fullStars ? 'currentColor' : 'none'}
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           onClick={() => onRatingChange && onRatingChange(star)}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
//           />
//           {star === fullStars + 1 && hasHalfStar && (
//             <path
//               fill="currentColor"
//               d="M12 2.24l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69L12 2.24z"
//               clipPath="inset(0 50% 0 0)"
//             />
//           )}
//         </svg>
//       ))}
//     </div>
//   );
// };

// const ReviewPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [company, setCompany] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [newReview, setNewReview] = useState({ rating: 0, fullReview: '' });
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [username, setUsername] = useState('');

//   useEffect(() => {
//     checkAuthStatus();
//     fetchCompanyAndReviews();
//   }, [id]);

//   const checkAuthStatus = () => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsLoggedIn(true);
//       try {
//         const decodedToken = jwtDecode(token);
//         setUsername(decodedToken.username);
//       } catch (error) {
//         console.error('Error decoding token:', error);
//       }
//     } else {
//       setIsLoggedIn(false);
//     }
//   };

//   const fetchCompanyAndReviews = async () => {
//     try {
//       setIsLoading(true);
//       setError(null);
      
//       const [companyRes, reviewsRes] = await Promise.all([
//         axios.get(`https://arrc-tech-ratelab-backend-project.onrender.com/api/companies/${id}`),
//         axios.get(`https://arrc-tech-ratelab-backend-project.onrender.com/api/reviews`)
//       ]);

//       setCompany(companyRes.data);
//       const companyReviews = reviewsRes.data.filter(review => review.company === companyRes.data.companyName);
//       setReviews(companyReviews);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setError('Failed to load data. Please try again later.');
//       toast.error('Error loading company data');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleReviewSubmit = async (e) => {
//     e.preventDefault();

//     if (!isLoggedIn) {
//       toast.error('Please login to submit a review');
//       navigate('/user/login', { state: { returnUrl: `/company/${id}` } });
//       return;
//     }

//     if (newReview.rating === 0) {
//       toast.error('Please select a rating');
//       return;
//     }

//     if (!newReview.fullReview.trim()) {
//       toast.error('Please write a review');
//       return;
//     }

//     try {
//       const token = localStorage.getItem('token');
//       const reviewData = [{
//         excelId: Date.now(), // Use timestamp as a unique excelId
//         reviewer: username,
//         username: username,
//         company: company.companyName,
//         review: newReview.fullReview.substring(0, 100), // Short version for 'review' field
//         fullReview: newReview.fullReview,
//         rating: newReview.rating
//       }];

//       const response = await axios.post(
//         'https://arrc-tech-ratelab-backend-project.onrender.com/api/reviews',
//         reviewData,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       if (response.data) {
//         const newReviews = response.data.filter(review => review.company === company.companyName);
//         setReviews(newReviews);
//         setNewReview({ rating: 0, fullReview: '' });
//         toast.success('Review submitted successfully!');
//       } else {
//         throw new Error('Invalid response from server');
//       }
//     } catch (error) {
//       console.error('Error submitting review:', error);
//       if (error.response?.status === 401) {
//         toast.error('Please login again to submit your review');
//         navigate('/user/login');
//       } else {
//         toast.error('Failed to submit review. Please try again.');
//       }
//     }
//   };

//   const handleDeleteReview = async (reviewId) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.delete(`https://arrc-tech-ratelab-backend-project.onrender.com/api/reviews/${reviewId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setReviews(prevReviews => prevReviews.filter(review => review._id !== reviewId));
//       toast.success('Review deleted successfully!');
//     } catch (error) {
//       console.error('Error deleting review:', error);
//       toast.error('Failed to delete review. Please try again.');
//     }
//   };
  
  // const ProgressBar = ({ percentage }) => (
  //   <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
  //     <div
  //       className="h-full bg-[#FFB23F] transition-all duration-300"
  //       style={{ width: `${percentage}%` }}
  //     />
  //   </div>
  // );
  // const Button = ({ children, className, ...props }) => (
  //   <button 
  //     className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${className}`} 
  //     {...props}
  //   >
  //     {children}
  //   </button>
  // );


//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#FFB23F]"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
//           <strong className="font-bold">Error: </strong>
//           <span className="block sm:inline">{error}</span>
//         </div>
//       </div>
//     );
//   }

//   if (!company) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
//           <strong className="font-bold">Error: </strong>
//           <span className="block sm:inline">Company not found.</span>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#FAF7F5]">
//       <div className="relative w-full h-80">
//         <div 
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: `url('https://script.viserlab.com/ratelab/assets/images/frontend/breadcrumb/6354d380899a21666503552.jpg')`
//           }}
//         />
//         <div className="absolute inset-0 bg-[#1a1b3a]/80" />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
//         <div className="grid md:grid-cols-12 gap-8">
//           {/* <div className="md:col-span-4">
//             <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//               <div className="mb-6">
//                 <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
//                   {company.imageUrl ? (
//                     <img 
//                       src={company.imageUrl}
//                       alt={company.companyName}
//                       className="w-full h-full object-cover"
//                     />
//                   ) : (
//                     <div className="w-full h-full flex items-center justify-center text-gray-400">
//                       400×300
//                     </div>
//                   )}
//                 </div>
//               </div>

//               <div className="space-y-6">
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-4">About {company.companyName}</h3>
//                   <p className="text-gray-600 leading-relaxed">{company.description}</p>
//                 </div>

//                 <div className="space-y-4">
//                   <div className="flex items-center gap-3 text-gray-600">
//                     <BuildingOffice2Icon className="w-5 h-5" />
//                     <span>Travel Agency</span>
//                   </div>
//                   <div className="flex items-center gap-3 text-gray-600">
//                     <MapPinIcon className="w-5 h-5" />
//                     <span>Dhaka</span>
//                   </div>
//                   <div className="flex items-center gap-3 text-gray-600">
//                     <LinkIcon className="w-5 h-5" />
//                     <a href={company.website} className="text-blue-600 hover:underline">{company.website}</a>
//                   </div>
//                   <div className="flex items-center gap-3 text-gray-600">
//                     <CalendarDaysIcon className="w-5 h-5" />
//                     <span>Registered on: 16 Nov 2022</span>
//                   </div>
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-4">Tags</h3>
//                   <div className="flex flex-wrap gap-2">
//                     {['CAR', 'car2', 'good'].map((tag, index) => (
//                       <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div> */}
// <div className="md:col-span-4">
// <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//   <div className="mb-6">
//     <img 
//       src={company.imageUrl || "https://script.viserlab.com/ratelab/assets/images/default.png"}
//       alt={company.companyName}
//       className="w-full h-auto rounded-lg"
//     />
//   </div>

//   <div className="mb-8">
//     <div className="flex items-baseline mb-6">
//       <h2 className="text-6xl font-bold text-gray-900">{company.rating ? company.rating.toFixed(2) : 'N/A'}</h2>
//       <div className="ml-4">
//         <StarRating rating={company.rating || 0} size="lg" />
//         <p className="text-sm text-gray-500 mt-1">Based on {reviews.length} Reviews</p>
//       </div>
//     </div>

//     {/* Rating Bars */}
//     <div className="space-y-3">
//       {[5, 4, 3, 2, 1].map((stars) => {
//         const count = reviews.filter(review => Math.floor(review.rating) === stars).length;
//         const percentage = (count / reviews.length) * 100 || 0;
//         return (
//           <div key={stars} className="flex items-center gap-3">
//             <span className="w-3 text-sm font-medium">{stars}</span>
//             <StarRating rating={stars} size="sm" />
//             <ProgressBar percentage={percentage} />
//             <span className="w-16 text-right text-sm text-gray-500">
//               {percentage.toFixed(2)}%
//             </span>
//           </div>
//         );
//       })}
//     </div>
//   </div>

//   <div className="space-y-6">
//     <div>
//       <h3 className="text-xl font-bold text-gray-900 mb-4">About {company.companyName}</h3>
//       <p className="text-gray-600 leading-relaxed">{company.description}</p>
//     </div>

//     <div>
//       <h3 className="text-xl font-bold text-gray-900 mb-4">Tags</h3>
//       <div className="flex flex-wrap gap-2">
//         {company.tags && company.tags.map((tag, index) => (
//           <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">{tag}</span>
//         ))}
//       </div>
//     </div>

//     <div>
//       <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Info</h3>
//       <ul className="space-y-3">
//         <li className="flex items-center gap-3">
//           <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
//           </svg>
//           <a href={company.url} className="text-blue-600 hover:underline">{company.url}</a>
//         </li>
//         <li className="flex items-center gap-3">
//           <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//           </svg>
//           <span className="text-gray-600">{company.address}</span>
//         </li>
//       </ul>
//     </div>
//   </div>
// </div>
// </div>

//           <div className="md:col-span-8">
//             <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//               {/* Company Header */}
//               <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//                 <div>
//                   <h1 className="text-3xl font-bold text-gray-900">{company.companyName}</h1>
//                   <div className="flex items-center mt-2">
//                     <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                     </svg>
//                     <span className="text-gray-600">{company.address}</span>
//                   </div>
//                 </div>
//                 <Button className="mt-4 md:mt-0 bg-[#14142B] text-white hover:bg-[#14142B]/90">
//                   Visit this site
//                 </Button>
//               </div>

//               <div className="mb-8">
//                 <div className="flex items-center gap-4 mb-6">
//                   <img 
//                     src="https://script.viserlab.com/ratelab/assets/images/default.png"
//                     alt="User Avatar"
//                     className="w-12 h-12 rounded-full"
//                   />
//                   <div>
//                     <h3 className="font-semibold text-gray-900">Write a Review</h3>
//                     <StarRating 
//                       rating={newReview.rating} 
//                       onRatingChange={(rating) => setNewReview(prev => ({ ...prev, rating }))}
//                     />
//                   </div>
//                 </div>

//                 <form onSubmit={handleReviewSubmit} className="space-y-4">
//                   <textarea
//                     placeholder="Write your review here..."
//                     value={newReview.fullReview}
//                     onChange={(e) => setNewReview(prev => ({ ...prev, fullReview: e.target.value }))}
//                     className="w-full min-h-[150px] p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB23F]/50"
//                   />
//                   <div className="flex justify-end">
//                     <button
//                       type="submit"
//                       className="px-6 py-2 bg-[#FFB23F] text-white rounded-lg hover:bg-[#FFB23F]/90 transition-colors"
//                     >
//                       {isLoggedIn ? 'Submit Review' : 'Login to Review'}
//                     </button>
//                   </div>
//                 </form>
//               </div>

//               <div className="space-y-6">
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Reviews</h3>
                
//                 {reviews.length > 0 ? (
//                   reviews.map((review) => (
//                     <div key={review._id} className="bg-gray-50 rounded-lg p-6">
//                       <div className="flex items-start gap-4">
//                         <img 
//                           src="https://script.viserlab.com/ratelab/assets/images/default.png"
//                           alt="Reviewer Avatar"
//                           className="w-12 h-12 rounded-full"
//                         />
//                         <div className="flex-1">
//                           <div className="flex justify-between items-start">
//                             <div>
//                               <h4 className="font-semibold text-gray-900">{review.reviewer}</h4>
//                               <StarRating rating={review.rating} />
//                             </div>
//                             <span className="text-sm text-gray-500">
//                               {new Date(review.createdAt).toLocaleDateString()}
//                             </span>
//                           </div>
//                           <p className="mt-4 text-gray-600 leading-relaxed">{review.fullReview}</p>
//                           {isLoggedIn && review.reviewer === username && (
//                             <button
//                               onClick={() => handleDeleteReview(review._id)}
//                               className="mt-2 text-red-600 hover:text-red-800"
//                             >
//                               Delete Review
//                             </button>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <div className="text-center text-gray-500 py-8">
//                     No reviews yet. Be the first to review this company!
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewPage;

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { MapPinIcon, BuildingOffice2Icon, TagIcon, CalendarDaysIcon, LinkIcon } from '@heroicons/react/24/outline';
import { jwtDecode } from 'jwt-decode';

const StarRating = ({ rating, onRatingChange = null }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${
            star <= fullStars
              ? 'text-[#FFB23F]'
              : star === fullStars + 1 && hasHalfStar
              ? 'text-[#FFB23F]'
              : 'text-gray-300'
          } ${onRatingChange ? 'cursor-pointer' : ''}`}
          fill={star <= fullStars ? 'currentColor' : 'none'}
          stroke="currentColor"
          viewBox="0 0 24 24"
          onClick={() => onRatingChange && onRatingChange(star)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
          {star === fullStars + 1 && hasHalfStar && (
            <path
              fill="currentColor"
              d="M12 2.24l1.519 4.674a1 1 0 00.95.69h4.914a1 1 0 00.951-.69L12 2.24z"
              clipPath="inset(0 50% 0 0)"
            />
          )}
        </svg>
      ))}
    </div>
  );
};

const ReviewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [company, setCompany] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 0, fullReview: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [editingReview, setEditingReview] = useState(null); // Added state for editing

  useEffect(() => {
    checkAuthStatus();
    fetchCompanyAndReviews();
  }, [id]);

  const checkAuthStatus = () => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    if (token && storedUser) {
      setIsLoggedIn(true);
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setUsername(parsedUser.firstName + ' ' + parsedUser.lastName);
    } else {
      setIsLoggedIn(false);
      setUser(null);
      setUsername('');
    }
  };

  const fetchCompanyAndReviews = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const [companyRes, reviewsRes] = await Promise.all([
        axios.get(`https://arrc-tech-ratelab-backend-project.onrender.com/api/companies/${id}`),
        axios.get(`https://arrc-tech-ratelab-backend-project.onrender.com/api/reviews`)
      ]);

      setCompany(companyRes.data);
      const companyReviews = reviewsRes.data.filter(review => review.company === companyRes.data.companyName);
      setReviews(companyReviews);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to load data. Please try again later.');
      toast.error('Error loading company data');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      toast.error('Please login to submit a review');
      navigate('/user/login', { state: { returnUrl: `/company/${id}` } });
      return;
    }

    if (newReview.rating === 0) {
      toast.error('Please select a rating');
      return;
    }

    if (!newReview.fullReview.trim()) {
      toast.error('Please write a review');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      let response;

      if (editingReview) {
        // Update existing review
        response = await axios.put(
          `https://arrc-tech-ratelab-backend-project.onrender.com/api/reviews/${editingReview._id}`,
          {
            rating: newReview.rating,
            fullReview: newReview.fullReview,
            review: newReview.fullReview.substring(0, 100)
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      } else {
        // Create new review
        const reviewData = [{
          excelId: Date.now().toString(),
          reviewer: username,
          username: username,
          company: company.companyName,
          review: newReview.fullReview.substring(0, 100),
          fullReview: newReview.fullReview,
          rating: newReview.rating,
          userId: user.id
        }];

        response = await axios.post(
          'https://arrc-tech-ratelab-backend-project.onrender.com/api/reviews',
          reviewData,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      }

      if (response.data) {
        await fetchCompanyAndReviews();
        setNewReview({ rating: 0, fullReview: '' });
        setEditingReview(null);
        toast.success(editingReview ? 'Review updated successfully!' : 'Review submitted successfully!');
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      if (error.response?.status === 401) {
        toast.error('Please login again to submit your review');
        navigate('/user/login');
      } else {
        toast.error('Failed to submit review. Please try again.');
      }
    }
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`https://arrc-tech-ratelab-backend-project.onrender.com/api/reviews/${reviewId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setReviews(prevReviews => prevReviews.filter(review => review._id !== reviewId));
      toast.success('Review deleted successfully!');
    } catch (error) {
      console.error('Error deleting review:', error);
      toast.error('Failed to delete review. Please try again.');
    }
  };

  const handleEditReview = (review) => { // Added function to handle edit mode
    setEditingReview(review);
    setNewReview({
      rating: review.rating,
      fullReview: review.fullReview
    });
  };
  const ProgressBar = ({ percentage }) => (
    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
      <div
        className="h-full bg-[#FFB23F] transition-all duration-300"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
  const Button = ({ children, className, ...props }) => (
    <button 
      className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${className}`} 
      {...props}
    >
      {children}
    </button>
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#FFB23F]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      </div>
    );
  }

  if (!company) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">Company not found.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF7F5]">
      <div className="relative w-full h-80">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://script.viserlab.com/ratelab/assets/images/frontend/breadcrumb/6354d380899a21666503552.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-[#1a1b3a]/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
<div className="bg-white rounded-xl shadow-lg p-6 mb-8">
  <div className="mb-6">
    <img 
      src={company.imageUrl || "https://script.viserlab.com/ratelab/assets/images/default.png"}
      alt={company.companyName}
      className="w-full h-auto rounded-lg"
    />
  </div>

  <div className="mb-8">
    <div className="flex items-baseline mb-6">
      <h2 className="text-6xl font-bold text-gray-900">{company.rating ? company.rating.toFixed(2) : 'N/A'}</h2>
      <div className="ml-4">
        <StarRating rating={company.rating || 0} size="lg" />
        <p className="text-sm text-gray-500 mt-1">Based on {reviews.length} Reviews</p>
      </div>
    </div>

    {/* Rating Bars */}
    <div className="space-y-3">
      {[5, 4, 3, 2, 1].map((stars) => {
        const count = reviews.filter(review => Math.floor(review.rating) === stars).length;
        const percentage = (count / reviews.length) * 100 || 0;
        return (
          <div key={stars} className="flex items-center gap-3">
            <span className="w-3 text-sm font-medium">{stars}</span>
            <StarRating rating={stars} size="sm" />
            <ProgressBar percentage={percentage} />
            <span className="w-16 text-right text-sm text-gray-500">
              {percentage.toFixed(2)}%
            </span>
          </div>
        );
      })}
    </div>
  </div>

  <div className="space-y-6">
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">About {company.companyName}</h3>
      <p className="text-gray-600 leading-relaxed">{company.description}</p>
    </div>

    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">Tags</h3>
      <div className="flex flex-wrap gap-2">
        {company.tags && company.tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">{tag}</span>
        ))}
      </div>
    </div>

    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Info</h3>
      <ul className="space-y-3">
        <li className="flex items-center gap-3">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          <a href={company.url} className="text-blue-600 hover:underline">{company.url}</a>
        </li>
        <li className="flex items-center gap-3">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-gray-600">{company.address}</span>
        </li>
      </ul>
    </div>
  </div>
</div>
</div>

          <div className="md:col-span-8">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{company.companyName}</h1>
                  <div className="flex items-center mt-2">
                    <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-600">{company.address}</span>
                  </div>
                </div>
                <Button className="mt-4 md:mt-0 bg-[#14142B] text-white hover:bg-[#14142B]/90">
                  Visit this site
                </Button>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={user?.avatar || "https://script.viserlab.com/ratelab/assets/images/default.png"}
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {isLoggedIn 
                        ? editingReview 
                          ? `Edit Your Review for ${company.companyName}`
                          : `Write a Review as ${username}` 
                        : 'Write a Review'}
                    </h3>
                    <StarRating 
                      rating={newReview.rating} 
                      onRatingChange={(rating) => setNewReview(prev => ({ ...prev, rating }))}
                    />
                  </div>
                </div>

                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <textarea
                    placeholder="Write your review here..."
                    value={newReview.fullReview}
                    onChange={(e) => setNewReview(prev => ({ ...prev, fullReview: e.target.value }))}
                    className="w-full min-h-[150px] p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB23F]/50"
                  />
                  <div className="flex justify-end gap-2">
                    {editingReview && (
                      <button
                        type="button"
                        onClick={() => {
                          setEditingReview(null);
                          setNewReview({ rating: 0, fullReview: '' });
                        }}
                        className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                      >
                        Cancel
                      </button>
                    )}
                    <button
                      type="submit"
                      className="px-6 py-2 bg-[#FFB23F] text-white rounded-lg hover:bg-[#FFB23F]/90 transition-colors"
                    >
                      {isLoggedIn 
                        ? editingReview 
                          ? 'Update Review' 
                          : 'Submit Review' 
                        : 'Login to Review'}
                    </button>
                  </div>
                </form>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Reviews</h3>
                
                {reviews.length > 0 ? (
                  reviews.map((review) => (
                    <div key={review._id} className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-start gap-4">
                        <img 
                          src="https://script.viserlab.com/ratelab/assets/images/default.png"
                          alt="Reviewer Avatar"
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold text-gray-900">{review.reviewer}</h4>
                              <StarRating rating={review.rating} />
                            </div>
                            <span className="text-sm text-gray-500">
                              {new Date(review.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="mt-4 text-gray-600 leading-relaxed">{review.fullReview}</p>
                          {isLoggedIn && review.reviewer === username && (
                            <div className="mt-2 space-x-2">
                              <button
                                onClick={() => handleEditReview(review)}
                                className="text-blue-600 hover:text-blue-800"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteReview(review._id)}
                                className="text-red-600 hover:text-red-800"
                              >
                                Delete
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-gray-500 py-8">
                    No reviews yet. Be the first to review this company!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;

