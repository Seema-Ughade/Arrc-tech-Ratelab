import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('userToken');
      if (token) {
        try {
          const { data } = await axios.get('/api/users/profile', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    const fetchReviews = async () => {
      try {
        const { data } = await axios.get('/api/reviews');
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchUserData();
    fetchReviews();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>
      {user && (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Welcome, {user.username}!</h2>
          <p>Email: {user.email}</p>
        </div>
      )}
      <h2 className="text-2xl font-bold mb-4">Recent Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review._id} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">{review.company}</h3>
            <p className="text-gray-600 mb-2">Rating: {review.rating}/5</p>
            <p className="text-gray-800">{review.text}</p>
            <p className="text-sm text-gray-500 mt-2">By: {review.user.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;

