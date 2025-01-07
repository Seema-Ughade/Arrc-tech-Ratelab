import React, { useState } from 'react';
import { MapPin, Star, Mail, Upload, Camera } from 'lucide-react';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    firstName: 'Jose',
    lastName: 'Gordillo',
    email: '[Email is Protected for the demo]',
    mobile: '03804713485',
    address: '',
    country: 'Argentina',
    state: '',
    city: '',
    zipCode: '',
    about: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-blue-900 to-[#1a1b3a] h-64 relative">
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-4">
            <div className="flex items-end space-x-6 pb-8">
              <div className="w-32 h-32 bg-white rounded-full border-4 border-white overflow-hidden relative">
                <img
                  src="/placeholder.svg?height=128&width=128"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <label htmlFor="profile-image" className="absolute bottom-0 right-0 bg-[#FFA500] p-2 rounded-full cursor-pointer">
                  <Camera className="h-4 w-4 text-white" />
                  <input id="profile-image" type="file" className="hidden" />
                </label>
              </div>
              <div className="text-white pb-4">
                <h1 className="text-3xl font-bold">{`${formData.firstName} ${formData.lastName}`}</h1>
                <div className="flex items-center mt-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{formData.country}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs and Content */}
      <div className="container mt mx-auto px-4 py-8">
        <div className="bg-white shadow-sm rounded-lg -mt-16">
          <div className="flex border-b">
            <button
              className={`flex-1 py-4 px-6 text-center ${
                activeTab === 'reviews'
                  ? 'border-b-2 border-[#FFA500] text-[#FFA500] font-semibold'
                  : 'text-gray-600 hover:text-[#FFA500]'
              }`}
              onClick={() => setActiveTab('reviews')}
            >
              <Star className="inline-block mr-2 h-4 w-4" />
              Reviews
            </button>
            <button
              className={`flex-1 py-4 px-6 text-center ${
                activeTab === 'profile'
                  ? 'border-b-2 border-[#FFA500] text-[#FFA500] font-semibold'
                  : 'text-gray-600 hover:text-[#FFA500]'
              }`}
              onClick={() => setActiveTab('profile')}
            >
              Profile
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'profile' ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFA500] focus:ring-[#FFA500] sm:text-sm"
                      required
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFA500] focus:ring-[#FFA500] sm:text-sm"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFA500] focus:ring-[#FFA500] sm:text-sm bg-gray-100"
                      disabled
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFA500] focus:ring-[#FFA500] sm:text-sm"
                    />
                  </div>

                  {/* Country */}
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFA500] focus:ring-[#FFA500] sm:text-sm"
                    />
                  </div>

                  {/* State */}
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFA500] focus:ring-[#FFA500] sm:text-sm"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFA500] focus:ring-[#FFA500] sm:text-sm"
                    />
                  </div>

                  {/* Zip Code */}
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFA500] focus:ring-[#FFA500] sm:text-sm"
                    />
                  </div>

                  {/* About */}
                  <div className="col-span-full">
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700 mb-2">
                      About
                    </label>
                    <textarea
                      id="about"
                      name="about"
                      value={formData.about}
                      onChange={handleInputChange}
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFA500] focus:ring-[#FFA500] sm:text-sm"
                      placeholder="Write about yourself..."
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#FFA500] hover:bg-[#FF8C00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFA500]"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-8">
                <h3 className="text-xl font-medium text-gray-900">No reviews yet</h3>
                <p className="mt-2 text-gray-600">You haven't received any reviews.</p>
              </div>
            )}
          </div>
        </div>

        {/* Profile Overview Card */}
        <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold border-b pb-2">Profile Overview</h3>
          <div className="mt-4 space-y-2">
            <p className="text-gray-600 flex items-center">
              <span className="mr-2">📅</span> Member since 2022
            </p>
            <p className="text-gray-600 flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              [Email is Protected for the demo]
            </p>
            <p className="text-gray-600 flex items-center">
              <Star className="h-4 w-4 mr-2" />
              Total Reviews: 0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

