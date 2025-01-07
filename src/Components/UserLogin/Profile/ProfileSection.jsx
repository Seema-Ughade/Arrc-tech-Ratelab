// import React from 'react';
// import { Link } from 'react-router-dom';

// const ProfileSection = () => {
//   const user = JSON.parse(localStorage.getItem('user'));

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-semibold">Profile Information</h2>
//         <Link
//           to="/change-password"
//           className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
//         >
//           Change Password
//         </Link>
//       </div>

//       <div className="grid md:grid-cols-2 gap-6">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Name
//           </label>
//           <input
//             type="text"
//             value={user?.name || 'Sam Kumar'}
//             disabled
//             className="w-full px-4 py-2 border rounded-md bg-gray-50"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Email
//           </label>
//           <input
//             type="email"
//             value="[Email is Protected for the demo]"
//             disabled
//             className="w-full px-4 py-2 border rounded-md bg-gray-50"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Country
//           </label>
//           <input
//             type="text"
//             value="India"
//             disabled
//             className="w-full px-4 py-2 border rounded-md bg-gray-50"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             City
//           </label>
//           <input
//             type="text"
//             value="A"
//             disabled
//             className="w-full px-4 py-2 border rounded-md bg-gray-50"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileSection;



import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Globe, Building, Hash, FileEdit, Camera } from 'lucide-react';

const ProfileSection = () => {
  const [formData, setFormData] = useState({
    firstName: 'sam',
    lastName: 'kumar',
    email: '[Email is Protected for the demo]',
    mobile: '123456789',
    address: 'a',
    country: 'India',
    state: 'a',
    city: 'a',
    zipCode: 'a',
    about: '',
    image: null
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-[#1a1b3a] text-white p-6 rounded-t-lg">
          <h1 className="text-2xl font-bold">Profile Setting</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-b-lg shadow-md">
          {/* Image Upload Section */}
          <div className="mb-8">
            <label className="block text-gray-700 mb-2">Image</label>
            <div className="relative w-32 h-32 mx-auto md:mx-0">
              <div className="w-full h-full rounded-lg border-2 border-orange-400 overflow-hidden">
                {imagePreview ? (
                  <img 
                    src={imagePreview} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <User className="w-16 h-16 text-gray-400" />
                  </div>
                )}
              </div>
              <label 
                htmlFor="image-upload" 
                className="absolute bottom-0 right-0 bg-orange-400 p-2 rounded-full cursor-pointer hover:bg-orange-500 transition-colors"
              >
                <Camera className="w-5 h-5 text-white" />
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
          </div>

          {/* Form Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label className="block text-gray-700 mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                  required
                />
              </div>
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-gray-700 mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={formData.email}
                  disabled
                  className="w-full pl-10 pr-4 py-2 border rounded-lg bg-gray-50"
                />
              </div>
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-gray-700 mb-2">Mobile Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                />
              </div>
            </div>

            {/* Address - Full Width */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                />
              </div>
            </div>

            {/* Country */}
            <div>
              <label className="block text-gray-700 mb-2">Country</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Globe className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                />
              </div>
            </div>

            {/* State */}
            <div>
              <label className="block text-gray-700 mb-2">State</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                />
              </div>
            </div>

            {/* City */}
            <div>
              <label className="block text-gray-700 mb-2">City</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Building className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                />
              </div>
            </div>

            {/* Zip Code */}
            <div>
              <label className="block text-gray-700 mb-2">Zip Code</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Hash className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={formData.zipCode}
                  onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                />
              </div>
            </div>

            {/* About - Full Width */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">About</label>
              <div className="relative">
                <div className="absolute top-3 left-3 pointer-events-none">
                  <FileEdit className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  value={formData.about}
                  onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                  placeholder="Write about...."
                  rows={4}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-orange-400 text-white py-3 rounded-lg text-lg font-semibold hover:bg-orange-500 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSection;

