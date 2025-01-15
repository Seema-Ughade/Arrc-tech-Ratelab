

// import React, { useState } from 'react';

// const StarRating = ({ rating }) => {
//   return (
//     <div className="flex gap-1">
//       {Array(5).fill(0).map((_, index) => (
//         <i 
//           key={index}
//           className={`fas fa-star ${index < rating ? 'text-[#FFB547]' : 'text-gray-300'} text-sm`}
//         />
//       ))}
//     </div>
//   );
// };

// const initialReviews = [
//   {
//     id: 1,
//     sn: 1,
//     reviewer: 'Raja Patel',
//     username: '@creative',
//     company: 'Ford 2',
//     review: 'फोर्ड एक प्रमुख अमेरीकी ऑटोमोटिव क...',
//     fullReview: `फोर्ड एक प्रमुख अमेरीकी ऑटोमोटिव कंपनी है, जिसे अपनी स्टाइलिश, टिकाऊ और भरोसेमंद गाड़ियों के लिए जाना जाता है। भारत में भी फोर्ड के कई मॉडल्स ने ग्राहकों का ध्यान आकर्षित किया है। कंपनी की कार्स का डिज़ाइन और तकनीक दोनों ही उच्च गुणवत्ता के होते हैं, जो उन्हें उनके प्रतिस्पर्धियों से अलग बनाते हैं। डिज़ाइन और इंटीरियर्स: फोर्ड की गाड़ियों का डिज़ाइन बहुत आकर्षक और आधुनिक है। इंटीरियर्स में प्रीमियम मैटेरियल का उपयोग किया गया है, जिससे कार की ड्राइविंग अनुभव और आराम बढ़ता है। विशेषकर फोर्ड के एसयूवी और हैचबैक मॉडल्स के इंटीरियर्स बहुत ही स्पेशियस और आरामदायक होते हैं। परफॉर्मेंस: फोर्ड की गाड़ियों का इंजन पावरफुल और स्मूथ होता है। चाहे वह सिटी ड्राइव हो या हाइवे पर लंबी यात्रा, फोर्ड की कार्स हर परिस्थिति में बेहतरीन परफॉर्मेंस देती हैं। खासकर फोर्ड फिगो और फोर्ड इकोस्पोर्ट जैसे मॉडल्स की राइड क्वालिटी शानदार है।`,
//     rating: 5
//   },
//   {
//     id: 2,
//     sn: 2,
//     reviewer: 'orlando urdaneta',
//     username: '@orlandourdaneta',
//     company: 'ATLAS',
//     review: 'Tst',
//     fullReview: 'Tst',
//     rating: 5
//   },
//   {
//     id: 3,
//     sn: 3,
//     reviewer: 'TEST TEST',
//     username: '@PORTO32',
//     company: 'Ford 2',
//     review: 'YOUE',
//     fullReview: 'YOUE',
//     rating: 5
//   },
//   {
//     id: 4,
//     sn: 4,
//     reviewer: 'orlando urdaneta',
//     username: '@orlandourdaneta',
//     company: 'Ford 2',
//     review: 'Maecenas nisi libero, gravida eget...',
//     fullReview: 'Maecenas nisi libero, gravida eget consectetur vel, pretium at nisi.',
//     rating: 1
//   },
//   {
//     id: 5,
//     sn: 5,
//     reviewer: 'test test',
//     username: '@testasdasdasd',
//     company: 'Ford 2',
//     review: 'bedrbedred',
//     fullReview: 'bedrbedred',
//     rating: 5
//   },
//   {
//     id: 6,
//     sn: 6,
//     reviewer: 'Eduardo Santos',
//     username: '@schabo1',
//     company: 'ATLAS',
//     review: 'Top gostei muito disso',
//     fullReview: 'Top gostei muito disso',
//     rating: 4
//   },
//   {
//     id: 7,
//     sn: 7,
//     reviewer: 'jon biss jon biss',
//     username: '@admin777',
//     company: 'Ford 2',
//     review: 'Maecenas nisi libero, gravida eget...',
//     fullReview: 'Maecenas nisi libero, gravida eget consectetur vel, pretium at nisi.',
//     rating: 5
//   }
// ];

// export default function Reviews() {
//   const [reviews, setReviews] = useState(initialReviews);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedReview, setSelectedReview] = useState(null);
//   const [showReviewModal, setShowReviewModal] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);

//   const filteredReviews = reviews.filter(review =>
//     review.reviewer.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     review.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     review.review.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleDelete = (confirmed) => {
//     if (confirmed) {
//       setReviews(reviews.filter(review => review.id !== selectedReview.id));
//     }
//     setShowDeleteModal(false);
//     setSelectedReview(null);
//   };

//   return (
//     <div className="min-h-screen bg-[#F8F9FC] p-4 sm:p-6 md:p-8">
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
//         <h1 className="text-[#2B3674] text-2xl font-semibold">All Reviews</h1>
//         <div className="flex w-full sm:w-auto">
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full sm:w-[300px] px-4 py-2 rounded-l-lg border border-r-0 border-gray-200 focus:outline-none"
//           />
//           <button className="px-4 bg-[#4318FF] text-white rounded-r-lg">
//             <i className="fas fa-search"></i>
//           </button>
//         </div>
//       </div>

//       <div className="bg-white rounded-xl shadow-sm">
//         <div className="hidden md:grid md:grid-cols-12 gap-4 p-4 bg-[#4318FF] text-white rounded-t-xl">
//           <div className="col-span-1 font-medium">S.N.</div>
//           <div className="col-span-2 font-medium">Reviewer</div>
//           <div className="col-span-2 font-medium">Company</div>
//           <div className="col-span-5 font-medium">Review</div>
//           <div className="col-span-2 text-right font-medium">Action</div>
//         </div>
        
//         {filteredReviews.map((review) => (
//           <div key={review.id} className="flex flex-col md:grid md:grid-cols-12 gap-2 md:gap-4 p-4 border-b border-gray-100 items-start md:items-center">
//             <div className="md:col-span-1 text-[#2B3674] font-medium md:font-normal">
//               <span className="md:hidden font-medium mr-2">S.N.:</span>
//               {review.sn}
//             </div>
//             <div className="md:col-span-2">
//               <div className="text-[#2B3674] font-medium">{review.reviewer}</div>
//               <div className="text-[#4318FF] text-sm">{review.username}</div>
//             </div>
//             <div className="md:col-span-2 text-gray-600">
//               <span className="md:hidden font-medium mr-2">Company:</span>
//               {review.company}
//             </div>
//             <div className="md:col-span-5">
//               <div className="text-gray-600">{review.review}</div>
//               <div className="mt-1">
//                 <StarRating rating={review.rating} />
//               </div>
//             </div>
//             <div className="md:col-span-2 flex justify-start md:justify-end gap-2 w-full">
//               <button
//                 onClick={() => {
//                   setSelectedReview(review);
//                   setShowReviewModal(true);
//                 }}
//                 className="flex-1 md:flex-initial flex items-center justify-center gap-1 px-3 py-1 text-[#4318FF] border border-[#4318FF] rounded-lg hover:bg-[#4318FF] hover:text-white transition-colors text-sm"
//               >
//                 <i className="fas fa-eye"></i>
//                 <span>View</span>
//               </button>
//               <button
//                 onClick={() => {
//                   setSelectedReview(review);
//                   setShowDeleteModal(true);
//                 }}
//                 className="flex-1 md:flex-initial flex items-center justify-center gap-1 px-3 py-1 text-red-500 border border-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors text-sm"
//               >
//                 <i className="fas fa-trash"></i>
//                 <span>Delete</span>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Review Modal */}
//       {showReviewModal && selectedReview && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-xl p-6 w-full max-w-[600px] max-h-[80vh] overflow-y-auto">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-xl font-semibold text-[#2B3674]">
//                 Review & Rating by {selectedReview.reviewer}
//               </h2>
//               <button 
//                 onClick={() => {
//                   setShowReviewModal(false);
//                   setSelectedReview(null);
//                 }}
//                 className="text-gray-400 hover:text-gray-600"
//               >
//                 <i className="fas fa-times"></i>
//               </button>
//             </div>
//             <div className="text-gray-600 mb-6">
//               {selectedReview.fullReview}
//             </div>
//             <div className="flex justify-end">
//               <button
//                 onClick={() => {
//                   setShowReviewModal(false);
//                   setSelectedReview(null);
//                 }}
//                 className="px-4 py-2 bg-[#0B1437] text-white rounded-lg hover:bg-opacity-90"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Delete Confirmation Modal */}
//       {showDeleteModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-xl p-6 w-full max-w-[400px]">
//             <h2 className="text-xl font-semibold text-[#2B3674] mb-4">Confirmation Alert!</h2>
//             <p className="text-gray-600 mb-6">Are you sure to delete the review?</p>
//             <div className="flex justify-end gap-3">
//               <button
//                 onClick={() => {
//                   setShowDeleteModal(false);
//                   setSelectedReview(null);
//                 }}
//                 className="px-4 py-2 bg-[#0B1437] text-white rounded-lg hover:bg-opacity-90"
//               >
//                 No
//               </button>
//               <button
//                 onClick={() => handleDelete(true)}
//                 className="px-4 py-2 bg-[#4318FF] text-white rounded-lg hover:bg-[#3A16E0]"
//               >
//                 Yes
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FaSearch, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <i 
          key={index}
          className={`fas fa-star ${index < rating ? 'text-[#FFB547]' : 'text-gray-300'} text-sm`}
        />
      ))}
    </div>
  )
}

const Reviews = () => {
  const [reviews, setReviews] = useState([])
  const [filteredReviews, setFilteredReviews] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedReview, setSelectedReview] = useState(null)
  const [showReviewModal, setShowReviewModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true)
        const response = await axios.get('https://arrc-tech-ratelab-backend-project.onrender.com/api/reviews')
        setReviews(response.data)
        setFilteredReviews(response.data)
      } catch (err) {
        console.error('Error fetching reviews:', err)
        setError('Failed to load reviews')
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [])

  useEffect(() => {
    const filtered = reviews.filter(review =>
      review.reviewer?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.review?.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredReviews(filtered)
    setCurrentPage(1) // Reset to first page when search changes
  }, [searchQuery, reviews])

  const handleDelete = async (confirmed) => {
    if (!confirmed) {
      setShowDeleteModal(false)
      setSelectedReview(null)
      return
    }

    try {
      await axios.delete(`https://arrc-tech-ratelab-backend-project.onrender.com/api/reviews/${selectedReview._id}`)
      setReviews(reviews.filter(review => review._id !== selectedReview._id))
      setShowDeleteModal(false)
      setSelectedReview(null)
    } catch (err) {
      console.error('Error deleting review:', err)
    }
  }

  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredReviews.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredReviews.length / itemsPerPage)

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4318FF]"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8F9FC] p-4 sm:p-6 md:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-[#2B3674] text-2xl font-semibold">All Reviews</h1>
        <div className="w-full sm:w-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-[300px] px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4318FF]"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="hidden md:grid md:grid-cols-12 gap-4 p-4 bg-[#4318FF] text-white rounded-t-xl">
          <div className="col-span-1 font-medium">S.N.</div>
          <div className="col-span-2 font-medium">Reviewer</div>
          <div className="col-span-2 font-medium">Company</div>
          <div className="col-span-5 font-medium">Review</div>
          <div className="col-span-2 text-right font-medium">Action</div>
        </div>
        
        {currentItems.map((review, index) => (
          <div key={review._id} className="flex flex-col md:grid md:grid-cols-12 gap-2 md:gap-4 p-4 border-b border-gray-100 items-start md:items-center">
            <div className="md:col-span-1 text-[#2B3674] font-medium md:font-normal">
              <span className="md:hidden font-medium mr-2">S.N.:</span>
              {indexOfFirstItem + index + 1}
            </div>
            <div className="md:col-span-2">
              <div className="text-[#2B3674] font-medium">{review.reviewer}</div>
              <div className="text-[#4318FF] text-sm">{review.username}</div>
            </div>
            <div className="md:col-span-2 text-gray-600">
              <span className="md:hidden font-medium mr-2">Company:</span>
              {review.company}
            </div>
            <div className="md:col-span-5">
              <div className="text-gray-600">{review.review}</div>
              <div className="mt-1">
                <StarRating rating={review.rating} />
              </div>
            </div>
            <div className="md:col-span-2 flex justify-start md:justify-end gap-2 w-full">
              <button
                onClick={() => {
                  setSelectedReview(review)
                  setShowReviewModal(true)
                }}
                className="flex-1 md:flex-initial flex items-center justify-center gap-1 px-3 py-1 text-[#4318FF] border border-[#4318FF] rounded-lg hover:bg-[#4318FF] hover:text-white transition-colors text-sm"
              >
                <i className="fas fa-eye"></i>
                <span>View</span>
              </button>
              <button
                onClick={() => {
                  setSelectedReview(review)
                  setShowDeleteModal(true)
                }}
                className="flex-1 md:flex-initial flex items-center justify-center gap-1 px-3 py-1 text-red-500 border border-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors text-sm"
              >
                <i className="fas fa-trash"></i>
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}

        {filteredReviews.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            No reviews found
          </div>
        )}

        {/* Pagination */}
        {filteredReviews.length > 0 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 sm:px-6">
            <div className="flex items-center text-sm text-gray-700">
              Showing <span className="font-medium mx-1">{indexOfFirstItem + 1}</span> to{' '}
              <span className="font-medium mx-1">
                {Math.min(indexOfLastItem, filteredReviews.length)}
              </span>{' '}
              of <span className="font-medium mx-1">{filteredReviews.length}</span> results
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaChevronLeft className="w-4 h-4" />
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium ${
                    currentPage === index + 1
                      ? 'bg-[#4318FF] text-white'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Review Modal */}
      {showReviewModal && selectedReview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-[600px] max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-[#2B3674]">
                Review & Rating by {selectedReview.reviewer}
              </h2>
              <button 
                onClick={() => {
                  setShowReviewModal(false)
                  setSelectedReview(null)
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <FaTimes size={24} />
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Rating:</span>
                <StarRating rating={selectedReview.rating} />
              </div>
              <div>
                <span className="text-gray-600">Full Review:</span>
                <p className="mt-2 text-gray-800 whitespace-pre-wrap">
                  {selectedReview.fullReview}
                </p>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    setShowReviewModal(false)
                    setSelectedReview(null)
                  }}
                  className="px-4 py-2 bg-[#0B1437] text-white rounded-lg hover:bg-opacity-90"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-[400px]">
            <h2 className="text-xl font-semibold text-[#2B3674] mb-4">Confirmation Alert!</h2>
            <p className="text-gray-600 mb-6">Are you sure to delete this review?</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => handleDelete(false)}
                className="px-4 py-2 bg-[#0B1437] text-white rounded-lg hover:bg-opacity-90"
              >
                No
              </button>
              <button
                onClick={() => handleDelete(true)}
                className="px-4 py-2 bg-[#4318FF] text-white rounded-lg hover:bg-[#3A16E0]"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Reviews

