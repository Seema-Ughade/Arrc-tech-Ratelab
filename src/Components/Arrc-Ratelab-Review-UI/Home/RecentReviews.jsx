// import React from 'react';

// const StarRating = ({ rating }) => {
//   return (
//     <div className="flex gap-1">
//       {[1, 2, 3, 4, 5].map((star) => (
//         <svg
//           key={star}
//           className={`w-5 h-5 ${star <= rating ? 'text-orange-400' : 'text-gray-300'
//             }`}
//           fill="currentColor"
//           viewBox="0 0 20 20"
//         >
//           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//         </svg>
//       ))}
//     </div>
//   );
// };

// const ReviewCard = ({ review }) => {
//   return (
//     <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
//       <div className="flex items-center gap-4 mb-4">
//         <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
//           {review.avatarUrl ? (
//             <img
//               src={review.avatarUrl}
//               alt={`${review.reviewerName}'s avatar`}
//               className="w-full h-full object-cover"
//             />
//           ) : (
//             <div className="w-full h-full flex items-center justify-center bg-gray-300">
//               <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
//               </svg>
//             </div>
//           )}
//         </div>
//         <div>
//           <h3 className="font-semibold text-lg text-navy-900">{review.productName}</h3>
//           <p className="text-sm text-gray-600">
//             Reviewed by{' '}
//             <span className="text-orange-400">{review.reviewerName}</span>
//           </p>
//         </div>
//       </div>
//       <StarRating rating={review.rating} />
//       <p className="mt-4 text-gray-700">"{review.text}"</p>
//     </div>
//   );
// };

// const RecentReviews = () => {
//   const reviews = [
//     {
//       productName: 'Ford 2',
//       reviewerName: 'Raja Patel',
//       rating: 5,
//       text: 'फोर्ड एक प्रमुख और...',
//       avatarUrl: null
//     },
//     {
//       productName: 'Ford 2',
//       reviewerName: 'TEST TEST',
//       rating: 5,
//       text: 'YOUE',
//       avatarUrl: null
//     },
//     {
//       productName: 'Ford 2',
//       reviewerName: 'test test',
//       rating: 5,
//       text: 'bedbedred',
//       avatarUrl: null
//     },
//     {
//       productName: 'Ford 2',
//       reviewerName: 'jon biss jon biss',
//       rating: 5,
//       text: 'Maecenas nisi libero...',
//       avatarUrl: '/path-to-jon-avatar.jpg'
//     },
//     {
//       productName: 'ATLAS',
//       reviewerName: 'orlando urdaneta',
//       rating: 5,
//       text: 'Tst',
//       avatarUrl: null
//     },
//     {
//       productName: 'Ford 2',
//       reviewerName: 'orlando urdaneta',
//       rating: 1,
//       text: 'Maecenas nisi libero...',
//       avatarUrl: null
//     },
//     {
//       productName: 'ATLAS',
//       reviewerName: 'Eduardo Santos',
//       rating: 4,
//       text: 'Top gostei muito dis...',
//       avatarUrl: null
//     },
//     {
//       productName: 'Ford 2',
//       reviewerName: 'rukshan thilakarathna',
//       rating: 3,
//       text: 'ok',
//       avatarUrl: '/path-to-rukshan-avatar.jpg'
//     }
//   ];

//   return (
//     <section className="py-16 px-4 bg-navy-900">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Recent Reviews
//           </h2>
//           <div className="flex justify-center gap-4">
//             <div className="w-16 h-0.5 bg-orange-400"></div>
//             <div className="w-16 h-0.5 bg-orange-400"></div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {reviews.map((review, index) => (
//             <ReviewCard key={index} review={review} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RecentReviews;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center" aria-label={`Rating: ${rating} out of 5 stars`}>
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-6 h-6 transition-colors ${
            index < fullStars
              ? 'text-yellow-400'
              : index === fullStars && hasHalfStar
              ? 'text-yellow-300'
              : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const ReviewCard = ({ review }) => {
  const starCount = review.company.split('').filter((char) => char === '⭐').length;
  const hasHalfStar = review.company.includes('½');
  const rating = starCount + (hasHalfStar ? 0.5 : 0);

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transform transition-transform hover:scale-105 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{review.reviewer}</h3>
            <p className="text-sm text-gray-600">@{review.username}</p>
          </div>
          <div className="flex flex-col items-end">
            <StarRating rating={rating} />
            <span className="text-sm font-medium text-gray-700 mt-1">{review.fullReview}</span>
          </div>
        </div>
        <div className="mb-4">
          <h4 className="text-md font-medium text-gray-700 mb-2">Review:</h4>
          <p className="text-gray-600">{review.review}</p>
        </div>
      </div>
    </div>
  );
};

const RecentReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('https://arrc-tech-ratelab-backend.onrender.com/api/reviews');
        setReviews(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch reviews. Please try again later.');
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-75"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 text-xl mt-10 bg-red-100 p-4 rounded-md max-w-lg mx-auto shadow-md">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-gray-100 mt-8 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-extrabold text-gray-900 text-center mb-8">
          Recent Reviews
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review._id.$oid} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentReviews;
