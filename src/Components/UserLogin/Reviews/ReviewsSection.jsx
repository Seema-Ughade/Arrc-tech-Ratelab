// import React from 'react';
// import { MapPin, Edit, Trash2, Star } from 'lucide-react';

// const ReviewsSection = () => {
//   // Sample review data - in production this would come from an API
//   const reviews = [
//     {
//       id: 1,
//       companyName: 'ATLAS',
//       reviewerName: 'Naved Ahamad',
//       location: 'India',
//       rating: 5,
//       review: 'яапявапфвапфвап',
//       image: '/placeholder.svg?height=300&width=400'
//     },
//     {
//       id: 2,
//       companyName: 'Ford',
//       reviewerName: 'Naved Ahamad',
//       location: 'India',
//       rating: 5,
//       review: 'good',
//       image: '/placeholder.svg?height=300&width=400'
//     }
//   ];

//   const StarRating = ({ rating }) => {
//     return (
//       <div className="flex gap-1">
//         {[...Array(5)].map((_, index) => (
//           <Star
//             key={index}
//             className={`w-5 h-5 ${
//               index < rating 
//                 ? 'fill-orange-400 text-orange-400' 
//                 : 'fill-gray-200 text-gray-200'
//             }`}
//           />
//         ))}
//       </div>
//     );
//   };

//   const handleEdit = (reviewId) => {
//     console.log('Edit review:', reviewId);
//     // Handle edit functionality
//   };

//   const handleDelete = (reviewId) => {
//     console.log('Delete review:', reviewId);
//     // Handle delete functionality
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-4 md:p-6 space-y-6">
//       {reviews.map((review) => (
//         <div key={review.id} className="bg-white rounded-lg shadow-md overflow-hidden">
//           <div className="p-6">
//             <h2 className="text-xl font-semibold mb-4">
//               Review of{' '}
//               <span className="text-orange-400">{review.companyName}</span>
//             </h2>
            
//             <div className="grid md:grid-cols-[400px,1fr] gap-6">
//               {/* Image Section */}
//               <div className="bg-gray-100 rounded-lg overflow-hidden">
//                 <img
//                   src={review.image}
//                   alt={`${review.companyName} review`}
//                   className="w-full h-[200px] object-cover"
//                 />
//               </div>

//               {/* Review Content */}
//               <div className="space-y-4">
//                 <div className="flex flex-wrap items-start justify-between gap-4">
//                   <div>
//                     <h3 className="text-lg font-semibold">{review.reviewerName}</h3>
//                     <div className="flex items-center text-gray-600 mt-1">
//                       <MapPin className="w-4 h-4 mr-1" />
//                       <span>{review.location}</span>
//                     </div>
//                   </div>
//                   <StarRating rating={review.rating} />
//                 </div>

//                 <p className="text-gray-700">{review.review}</p>

//                 <div className="flex items-center justify-between pt-4">
//                   <button
//                     onClick={() => handleEdit(review.id)}
//                     className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
//                   >
//                     <Edit className="w-4 h-4 mr-2" />
//                     Edit Review
//                   </button>
//                   <button
//                     onClick={() => handleDelete(review.id)}
//                     className="flex items-center text-red-600 hover:text-red-800 transition-colors"
//                   >
//                     <Trash2 className="w-4 h-4 mr-2" />
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}

//       {reviews.length === 0 && (
//         <div className="text-center py-12 bg-white rounded-lg shadow-md">
//           <p className="text-gray-500">No reviews found</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ReviewsSection;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapPin, Edit, Trash2, Star } from 'lucide-react';

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const [usersResponse, reviewsResponse] = await Promise.all([
          axios.get('http://127.0.0.1:5000/api/users'),
          axios.get('https://arrc-tech-ratelab-backend-project.onrender.com/api/reviews')
        ]);

        const users = usersResponse.data;
        const reviewsData = reviewsResponse.data;

        const reviewsWithUserInfo = reviewsData.map(review => {
          const user = users.find(u => u._id === review.userId);
          return {
            ...review,
            reviewerName: user ? `${user.firstName} ${user.lastName}` : 'Unknown User',
            location: user ? user.address : 'Unknown Location'
          };
        });

        setReviews(reviewsWithUserInfo);
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setError('Failed to load reviews. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating 
                ? 'fill-orange-400 text-orange-400' 
                : 'fill-gray-200 text-gray-200'
            }`}
          />
        ))}
      </div>
    );
  };

  const handleEdit = (reviewId) => {
    console.log('Edit review:', reviewId);
    // Handle edit functionality
  };

  const handleDelete = async (reviewId) => {
    try {
      await axios.delete(`https://arrc-tech-ratelab-backend-project.onrender.com/api/reviews/${reviewId}`);
      setReviews(reviews.filter(review => review._id !== reviewId));
      console.log('Review deleted successfully');
    } catch (error) {
      console.error('Error deleting review:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow-md">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 space-y-6">
      {reviews.map((review) => (
        <div key={review._id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">
              Review of{' '}
              <span className="text-orange-400">{review.company}</span>
            </h2>
            
            <div className="grid md:grid-cols-[400px,1fr] gap-6">
              {/* Image Section */}
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={review.imageUrl || '/placeholder.svg?height=300&width=400'}
                  alt={`${review.company} review`}
                  className="w-full h-[200px] object-cover"
                />
              </div>

              {/* Review Content */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{review.reviewerName}</h3>
                    <div className="flex items-center text-gray-600 mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{review.location}</span>
                    </div>
                  </div>
                  <StarRating rating={review.rating} />
                </div>

                <p className="text-gray-700">{review.fullReview || review.review}</p>

                <div className="flex items-center justify-between pt-4">
                  <button
                    onClick={() => handleEdit(review._id)}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Review
                  </button>
                  <button
                    onClick={() => handleDelete(review._id)}
                    className="flex items-center text-red-600 hover:text-red-800 transition-colors"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {reviews.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <p className="text-gray-500">No reviews found</p>
        </div>
      )}
    </div>
  );
};

export default ReviewsSection;

