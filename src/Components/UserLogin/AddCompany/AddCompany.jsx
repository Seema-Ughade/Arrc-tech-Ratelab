// // import React, { useState } from 'react';
// // import { Camera } from 'lucide-react';

// // const AddCompany = () => {
// //   const [formData, setFormData] = useState({
// //     companyName: '',
// //     category: '',
// //     url: '',
// //     email: '',
// //     address: '',
// //     tags: '',
// //     description: '',
// //     image: null
// //   });

// //   const [imagePreview, setImagePreview] = useState(null);

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(prev => ({
// //       ...prev,
// //       [name]: value
// //     }));
// //   };

// //   const handleImageChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       setFormData(prev => ({
// //         ...prev,
// //         image: file
// //       }));
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         setImagePreview(reader.result);
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
    
// //     const formDataToSend = new FormData();
// //     Object.keys(formData).forEach(key => {
// //       formDataToSend.append(key, formData[key]);
// //     });

// //     try {
// //       const response = await fetch('/api/companies', {
// //         method: 'POST',
// //         body: formDataToSend,
// //       });
      
// //       if (response.ok) {
// //         // Handle success
// //         alert('Company added successfully!');
// //       } else {
// //         // Handle error
// //         alert('Failed to add company');
// //       }
// //     } catch (error) {
// //       console.error('Error:', error);
// //       alert('An error occurred');
// //     }
// //   };

// //   const categories = [
// //     'Technology',
// //     'Healthcare',
// //     'Finance',
// //     'Education',
// //     'Retail',
// //     'Manufacturing',
// //     'Services'
// //   ];

// //   return (

// //     <div className="w-full bg-white shadow-sm rounded-lg overflow-hidden">

// //     {/* <div
// //     className="w-full h-[300px]"
// //     style={{
// //       backgroundImage: 'url(https://script.viserlab.com/ratelab/assets/images/frontend/breadcrumb/6354d380899a21666503552.jpg)',
// //       backgroundSize: 'cover',
// //       backgroundPosition: 'center',
// //     }}
// //   /> */}



// //     <div className="min-h-screen mt-20 bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-3xl mx-auto">
// //         <div className="bg-white rounded-lg shadow">
// //           <div className="bg-[#1a1b3a] text-white py-4 px-6 rounded-t-lg">
// //             <h2 className="text-xl font-semibold">Provide Your Company Information</h2>
// //           </div>

// //           <form onSubmit={handleSubmit} className="p-6 space-y-6">
// //             {/* Image Upload */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 Image
// //               </label>
// //               <div className="relative w-[400px] h-[300px] border-2 border-dashed border-gray-300 rounded-lg overflow-hidden">
// //                 {imagePreview ? (
// //                   <img
// //                     src={imagePreview}
// //                     alt="Preview"
// //                     className="w-full h-full object-cover"
// //                   />
// //                 ) : (
// //                   <div className="w-full h-full bg-gray-50 flex items-center justify-center">
// //                     <span className="text-gray-400">400 × 300</span>
// //                   </div>
// //                 )}
// //                 <label className="absolute bottom-4 right-4 bg-orange-500 p-2 rounded-full cursor-pointer hover:bg-orange-600 transition-colors">
// //                   <Camera className="h-5 w-5 text-white" />
// //                   <input
// //                     type="file"
// //                     className="hidden"
// //                     accept="image/*"
// //                     onChange={handleImageChange}
// //                   />
// //                 </label>
// //               </div>
// //             </div>

// //             {/* Company Name */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 Company Name <span className="text-red-500">*</span>
// //               </label>
// //               <input
// //                 type="text"
// //                 name="companyName"
// //                 value={formData.companyName}
// //                 onChange={handleInputChange}
// //                 required
// //                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
// //               />
// //             </div>

// //             {/* Category */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 Category <span className="text-red-500">*</span>
// //               </label>
// //               <select
// //                 name="category"
// //                 value={formData.category}
// //                 onChange={handleInputChange}
// //                 required
// //                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
// //               >
// //                 <option value="">Select One</option>
// //                 {categories.map(category => (
// //                   <option key={category} value={category}>
// //                     {category}
// //                   </option>
// //                 ))}
// //               </select>
// //             </div>

// //             {/* URL */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 URL <span className="text-red-500">*</span>
// //               </label>
// //               <input
// //                 type="url"
// //                 name="url"
// //                 value={formData.url}
// //                 onChange={handleInputChange}
// //                 required
// //                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
// //               />
// //             </div>

// //             {/* Email */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 Email <span className="text-red-500">*</span>
// //               </label>
// //               <input
// //                 type="email"
// //                 name="email"
// //                 value={formData.email}
// //                 onChange={handleInputChange}
// //                 required
// //                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
// //               />
// //             </div>

// //             {/* Address */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 Address <span className="text-red-500">*</span>
// //               </label>
// //               <input
// //                 type="text"
// //                 name="address"
// //                 value={formData.address}
// //                 onChange={handleInputChange}
// //                 required
// //                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
// //               />
// //             </div>

// //             {/* Tags */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 Tags <span className="text-red-500">*</span>
// //               </label>
// //               <input
// //                 type="text"
// //                 name="tags"
// //                 value={formData.tags}
// //                 onChange={handleInputChange}
// //                 required
// //                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
// //               />
// //               <p className="mt-1 text-sm text-gray-500">
// //                 Separate multiple keywords by <span className="font-medium">,</span>(comma) or{' '}
// //                 <span className="text-pink-500 font-medium">enter</span> key
// //               </p>
// //             </div>

// //             {/* Description */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 Description <span className="text-red-500">*</span>
// //               </label>
// //               <textarea
// //                 name="description"
// //                 value={formData.description}
// //                 onChange={handleInputChange}
// //                 required
// //                 rows={4}
// //                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
// //               />
// //             </div>

// //             {/* Submit Button */}
// //             <div>
// //               <button
// //                 type="submit"
// //                 className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
// //               >
// //                 Submit
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //     </div>

// //   );
// // };

// // export default AddCompany;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Upload, Loader2 } from 'lucide-react';
// import { toast } from 'react-hot-toast';

// const AddCompany = () => {
//   const [formData, setFormData] = useState({
//     companyName: '',
//     category: '',
//     url: '',
//     email: '',
//     address: '',
//     tags: '',
//     description: '',
//     image: null,
//   });

//   const [imagePreview, setImagePreview] = useState(null);
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [submitting, setSubmitting] = useState(false);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get('https://arrc-tech-ratelab-backend.onrender.com/api/categories');
//         setCategories(response.data);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//         toast.error('Failed to load categories');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       if (file.size > 5 * 1024 * 1024) {
//         toast.error('Image size should be less than 5MB');
//         return;
//       }
//       setFormData((prev) => ({
//         ...prev,
//         image: file,
//       }));
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);

//     const formDataToSend = new FormData();
//     Object.keys(formData).forEach((key) => {
//       formDataToSend.append(key, formData[key]);
//     });

//     try {
//       const response = await axios.post('https://arrc-tech-ratelab-backend.onrender.com/api/companies', formDataToSend, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });

//       if (response.status === 201) {
//         toast.success('Company added successfully!');
//         // Reset form
//         setFormData({
//           companyName: '',
//           category: '',
//           url: '',
//           email: '',
//           address: '',
//           tags: '',
//           description: '',
//           image: null,
//         });
//         setImagePreview(null);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       toast.error('Failed to add company');
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const inputClassName = "mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6";

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto">
//         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//           <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-6 px-6 rounded-t-lg">
//             <h2 className="text-2xl font-bold">Add Your Company</h2>
//             <p className="mt-1 text-sm opacity-80">Provide your company information to get started</p>
//           </div>

//           <form onSubmit={handleSubmit} className="p-6 space-y-6">
//             {/* Image Upload */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Company Logo
//               </label>
//               <div 
//                 className="relative w-full h-[200px] border-2 border-dashed border-gray-300 rounded-lg overflow-hidden cursor-pointer"
//                 onClick={() => document.getElementById('company-logo').click()}
//               >
//                 {imagePreview ? (
//                   <img
//                     src={imagePreview}
//                     alt="Preview"
//                     className="w-full h-full object-cover"
//                   />
//                 ) : (
//                   <div className="w-full h-full bg-gray-50 flex flex-col items-center justify-center">
//                     <Upload className="h-12 w-12 text-gray-400" />
//                     <span className="mt-2 text-sm text-gray-500">Click to upload company logo</span>
//                   </div>
//                 )}
//                 <input
//                   id="company-logo"
//                   type="file"
//                   className="hidden"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {/* Company Name */}
//               <div>
//                 <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
//                   Company Name <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="companyName"
//                   name="companyName"
//                   value={formData.companyName}
//                   onChange={handleInputChange}
//                   required
//                   className={inputClassName}
//                 />
//               </div>

//               {/* Category */}
//               <div>
//                 <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
//                   Category <span className="text-red-500">*</span>
//                 </label>
//                 {loading ? (
//                   <div className="mt-1 flex items-center">
//                     <Loader2 className="h-5 w-5 text-orange-500 animate-spin mr-2" />
//                     <span className="text-sm text-gray-500">Loading categories...</span>
//                   </div>
//                 ) : (
//                   <select
//                     id="category"
//                     name="category"
//                     value={formData.category}
//                     onChange={handleInputChange}
//                     required
//                     className={inputClassName}
//                   >
//                     <option value="">Select a category</option>
//                     {categories.map((category) => (
//                       <option key={category._id} value={category.name}>
//                         {category.name}
//                       </option>
//                     ))}
//                   </select>
//                 )}
//               </div>

//               {/* URL */}
//               <div>
//                 <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
//                   Website URL <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="url"
//                   id="url"
//                   name="url"
//                   value={formData.url}
//                   onChange={handleInputChange}
//                   required
//                   className={inputClassName}
//                 />
//               </div>

//               {/* Email */}
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                   Email <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   required
//                   className={inputClassName}
//                 />
//               </div>

//               {/* Address */}
//               <div className="sm:col-span-2">
//                 <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
//                   Address <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="address"
//                   name="address"
//                   value={formData.address}
//                   onChange={handleInputChange}
//                   required
//                   className={inputClassName}
//                 />
//               </div>

//               {/* Tags */}
//               <div className="sm:col-span-2">
//                 <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">
//                   Tags <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="tags"
//                   name="tags"
//                   value={formData.tags}
//                   onChange={handleInputChange}
//                   required
//                   className={inputClassName}
//                 />
//                 <p className="mt-1 text-xs text-gray-500">
//                   Separate multiple tags with commas (e.g., IT, Software, Consulting)
//                 </p>
//               </div>

//               {/* Description */}
//               <div className="sm:col-span-2">
//                 <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
//                   Description <span className="text-red-500">*</span>
//                 </label>
//                 <textarea
//                   id="description"
//                   name="description"
//                   value={formData.description}
//                   onChange={handleInputChange}
//                   required
//                   rows={4}
//                   className={inputClassName}
//                 />
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div>
//               <button
//                 type="submit"
//                 disabled={submitting}
//                 className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {submitting ? (
//                   <>
//                     <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
//                     Submitting...
//                   </>
//                 ) : (
//                   'Add Company'
//                 )}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddCompany;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Upload, Loader2 } from 'lucide-react';
import { toast } from 'react-hot-toast';

const AddCompany = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    category: '',
    url: '',
    email: '',
    address: '',
    tags: '',
    description: '',
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
        toast.error('Failed to load categories');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image size should be less than 5MB');
        return;
      }
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    // Get user information from localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.id) {
      formDataToSend.append('userId', user.id);
      formDataToSend.append('userName', `${user.firstName} ${user.lastName}`);
    } else {
      toast.error('User information not found. Please log in again.');
      setSubmitting(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/companies', formDataToSend, {
        headers: { 
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      });

      if (response.status === 201) {
        toast.success('Company added successfully!');
        // Reset form
        setFormData({
          companyName: '',
          category: '',
          url: '',
          email: '',
          address: '',
          tags: '',
          description: '',
          image: null,
        });
        setImagePreview(null);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error(error.response?.data?.message || 'Failed to add company');
    } finally {
      setSubmitting(false);
    }
  };

  const inputClassName = "mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6";

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-6 px-6 rounded-t-lg">
            <h2 className="text-2xl font-bold">Add Your Company</h2>
            <p className="mt-1 text-sm opacity-80">Provide your company information to get started</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Logo
              </label>
              <div 
                className="relative w-full h-[200px] border-2 border-dashed border-gray-300 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => document.getElementById('company-logo').click()}
              >
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-50 flex flex-col items-center justify-center">
                    <Upload className="h-12 w-12 text-gray-400" />
                    <span className="mt-2 text-sm text-gray-500">Click to upload company logo</span>
                  </div>
                )}
                <input
                  id="company-logo"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className={inputClassName}
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category <span className="text-red-500">*</span>
                </label>
                {loading ? (
                  <div className="mt-1 flex items-center">
                    <Loader2 className="h-5 w-5 text-orange-500 animate-spin mr-2" />
                    <span className="text-sm text-gray-500">Loading categories...</span>
                  </div>
                ) : (
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className={inputClassName}
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category._id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              {/* URL */}
              <div>
                <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
                  Website URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  id="url"
                  name="url"
                  value={formData.url}
                  onChange={handleInputChange}
                  required
                  className={inputClassName}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={inputClassName}
                />
              </div>

              {/* Address */}
              <div className="sm:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className={inputClassName}
                />
              </div>

              {/* Tags */}
              <div className="sm:col-span-2">
                <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">
                  Tags <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  required
                  className={inputClassName}
                />
                <p className="mt-1 text-xs text-gray-500">
                  Separate multiple tags with commas (e.g., IT, Software, Consulting)
                </p>
              </div>

              {/* Description */}
              <div className="sm:col-span-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className={inputClassName}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                    Submitting...
                  </>
                ) : (
                  'Add Company'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCompany;

