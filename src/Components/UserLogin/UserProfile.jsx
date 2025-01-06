import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('userToken');
      if (token) {
        try {
          const { data } = await axios.get('/api/users/profile', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(data);
        } catch (error) {
          console.error('Error fetching user profile:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">{user.username}</h2>
        <p className="mb-2">Email: {user.email}</p>
        <p>Account Type: {user.isAdmin ? 'Admin' : 'User'}</p>
      </div>
    </div>
  );
};

export default UserProfile;

