import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';

const AdminLoginForm = () => {
    const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://arrc-tech-ratelab-backend.onrender.com/api/auth/login', formData);
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));

        if (response.data.user.role === 'admin') {
          navigate('/Admin');
        } else {
          navigate('/user');
        }
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="w-full max-w-md p-8 rounded-2xl bg-[#1a1f6c]/30 backdrop-blur-sm">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome to Ratelab</h1>
          <p className="text-gray-300">Admin Login to Ratelab Dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#2a2f8c]/50 border border-blue-400/30 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              placeholder="admin"
              required
            />
          </div>

          <div className="relative">
            <div className="flex justify-between mb-2">
              <label className="text-gray-300">
                Password <span className="text-red-500">*</span>
              </label>
              <a href="/forgot-password" className="text-blue-400 hover:text-blue-300 text-sm">
                Forgot Password?
              </a>
            </div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#2a2f8c]/50 border border-blue-400/30 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              placeholder="••••••••"
              required
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginForm;

