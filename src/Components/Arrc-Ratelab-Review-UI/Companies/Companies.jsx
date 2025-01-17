// // import React from "react";

// // const Companies = () => {
// //   const categories = [
// //     { name: "All", count: 2 },
// //     { name: "Airline", count: 1 },
// //     { name: "Travel Agency", count: 1 },
// //     { name: "Bank", count: 0 },
// //     { name: "Jewellery", count: 0 },
// //   ];

// //   const companies = [
// //     {
// //       name: "Ford 2",
// //       category: "Travel Agency",
// //       location: "Dhaka",
// //       date: "16 Nov 2022",
// //       tags: ["CAR", "car2", "good"],
// //       rating: 4.13,
// //       reviews: 46,
// //     },
// //     {
// //       name: "ATLAS",
// //       category: "Airline",
// //       location: "Dhaka, Uttara",
// //       date: "16 Nov 2022",
// //       tags: ["ATLAS", "FUEL", "oil", "corporation of oil"],
// //       rating: 4.12,
// //       reviews: 33,
// //     },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       {/* Top Image Section */}
// //       <div className="w-full mt-16 h-60 bg-cover bg-center" style={{ backgroundImage: 'url("https://script.viserlab.com/ratelab/assets/images/frontend/breadcrumb/6354d380899a21666503552.jpg")' }}>
// //         <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
// //           <h1 className="text-white text-4xl font-semibold">Company Listings</h1>
// //         </div>
// //       </div>

// //       {/* Main Content */}
// //       <div className="flex flex-col lg:flex-row gap-6 p-6 mt-2">
// //         {/* Filter Sidebar */}
// //         <div className="w-full lg:w-64 bg-white p-6 rounded-lg shadow-md mb-6 lg:mb-0">
// //           <h3 className="text-orange-500 font-bold flex items-center mb-6">
// //             <span className="mr-2">Filter</span>
// //             <i className="fas fa-sliders-h"></i>
// //           </h3>
// //           <div>
// //             {/* Search Section */}
// //             <div className="mb-6">
// //               <h4 className="text-gray-800 font-semibold mb-2">Company or Tag</h4>
// //               <div className="relative">
// //                 <input
// //                   type="text"
// //                   placeholder="Search here..."
// //                   className="w-full border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-orange-400"
// //                 />
// //                 <i className="fas fa-search absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"></i>
// //               </div>
// //             </div>

// //             {/* Categories Section */}
// //             <div className="mb-6">
// //               <h4 className="text-gray-800 font-semibold mb-2">By Categories</h4>
// //               <ul className="text-sm">
// //                 {categories.map((category, index) => (
// //                   <li
// //                     key={index}
// //                     className={`flex justify-between items-center py-1 ${category.name === "All" ? "text-orange-500 font-bold" : ""}`}
// //                   >
// //                     <span>{category.name}</span>
// //                     <span>({category.count})</span>
// //                   </li>
// //                 ))}
// //               </ul>
// //               <button className="mt-2 text-sm text-orange-500">See More...</button>
// //             </div>

// //             {/* Ratings Section */}
// //             <div>
// //               <h4 className="text-gray-800 font-semibold mb-2">By Rating</h4>
// //               <ul className="text-sm">
// //                 <li className="flex items-center py-1 text-orange-500">
// //                   <input
// //                     type="radio"
// //                     name="rating"
// //                     className="mr-2"
// //                     defaultChecked
// //                   />
// //                   <span>All</span>
// //                 </li>
// //                 {[5, 4].map((stars) => (
// //                   <li key={stars} className="flex items-center py-1">
// //                     <input type="radio" name="rating" className="mr-2" />
// //                     <span>
// //                       {stars} <i className="fas fa-star text-orange-500"></i>
// //                     </span>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>

// //             {/* Review Time Section */}
// //             <div>
// //               <h4 className="text-gray-800 font-semibold mb-2">By Review Time</h4>
// //               <ul className="text-sm">
// //                 <li className="flex items-center py-1">All</li>
// //                 <li className="flex items-center py-1">Last month</li>
// //                 <li className="flex items-center py-1">Last 2 months</li>
// //                 <li className="flex items-center py-1">Last 3 months</li>
// //                 <li className="flex items-center py-1">Last 6 months</li>
// //                 <li className="flex items-center py-1">Last year</li>
// //               </ul>
// //             </div>

// //             {/* Registered Time Section */}
// //             <div>
// //               <h4 className="text-gray-800 font-semibold mb-2">By Registered</h4>
// //               <ul className="text-sm">
// //                 <li className="flex items-center py-1">All</li>
// //                 <li className="flex items-center py-1">Below 1 year</li>
// //                 <li className="flex items-center py-1">1 - 3 years</li>
// //                 <li className="flex items-center py-1">3 - 6 years</li>
// //                 <li className="flex items-center py-1">6 - 10 years</li>
// //                 <li className="flex items-center py-1">Over 10 years</li>
// //               </ul>
// //             </div>

// //             {/* Want to give a review Section */}
// //             <div className="mt-6 text-center">
// //               <p className="text-sm text-gray-500 mb-2">
// //                 Want to give a review?{" "}
// //                 <a
// //                   href="/joinus"
// //                   className="text-orange-500 font-semibold hover:underline"
// //                 >
// //                   Join Us
// //                 </a>
// //               </p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Companies Grid */}
// //         <div className="flex-1 grid grid-cols-1 lg:h-[200px] sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {companies.map((company, index) => (
// //             <div
// //               key={index}
// //               className="bg-white rounded-lg shadow-md p-6 flex flex-col"
// //             >
// //               {/* Image Placeholder */}
// //               <div className="bg-gray-200 w-full h-32 mb-4 flex items-center justify-center rounded">
// //                 <span className="text-gray-400">400×300</span>
// //               </div>

// //               {/* Company Details */}
// //               <div className="flex-1">
// //                 <h3 className="font-bold text-lg text-navy-900">{company.name}</h3>
// //                 <p className="text-sm text-gray-500">{company.category}</p>
// //                 <p className="text-sm text-gray-500 mb-4">{company.location}</p>
// //                 <p className="text-sm text-gray-500">
// //                   Registered On: {company.date}
// //                 </p>
// //                 <div className="mt-2 text-sm text-gray-500">
// //                   {company.tags.map((tag, idx) => (
// //                     <span key={idx} className="mr-2">
// //                       {tag}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* Rating Section */}
// //               <div className="mt-4 flex items-center">
// //                 <div className="flex items-center text-orange-500">
// //                   {[...Array(5)].map((_, starIdx) => (
// //                     <i
// //                       key={starIdx}
// //                       className={`fas fa-star ${
// //                         company.rating > starIdx
// //                           ? "text-orange-500"
// //                           : "text-gray-300"
// //                       }`}
// //                     ></i>
// //                   ))}
// //                 </div>
// //                 <span className="ml-2 text-sm text-gray-500">
// //                   {company.rating} ({company.reviews} ratings)
// //                 </span>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Companies;


// import { useState } from "react";
// export default function CompanyListing() {
//   const [isFilterOpen, setIsFilterOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState(0);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedRating, setSelectedRating] = useState('');
//   const [selectedTime, setSelectedTime] = useState('');
//   const [selectedAge, setSelectedAge] = useState('');

//   const categories = [
//     { id: 0, name: 'All', count: 2 },
//     { id: 1, name: 'Airline', count: 1 },
//     { id: 2, name: 'Travel Agency', count: 1 },
//     { id: 3, name: 'Bank', count: 0 },
//     { id: 4, name: 'Jewellry', count: 0 },
//     { id: 5, name: 'Cars', count: 0 },
//     { id: 8, name: 'Education', count: 0 },
//   ];

//   const companies = [
//     {
//       id: 7,
//       name: 'Ford 2',
//       category: 'Travel Agency',
//       rating: 4.09,
//       reviews: 47,
//       location: 'Dhaka',
//       registeredDate: '16 Nov 2022',
//       tags: ['CAR', 'car2', 'good'],
//       image: 'https://script.viserlab.com/ratelab/placeholder-image/400x300'
//     },
//     {
//       id: 9,
//       name: 'ATLAS',
//       category: 'Airline',
//       rating: 4.12,
//       reviews: 33,
//       location: 'Dhaka, Uttara',
//       registeredDate: '16 Nov 2022',
//       tags: ['ATLAS', 'FUEL', 'oil', 'corporation of oil'],
//       image: 'https://script.viserlab.com/ratelab/placeholder-image/400x300'
//     }
//   ];

//   const StarRating = ({ rating }) => {
//     return (
//       <div className="flex text-[#FFB23F]">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <i 
//             key={star}
//             className={`las ${star <= Math.floor(rating) ? 'la-star' : star <= rating ? 'la-star-half-alt' : 'la-star'}`}
//           />
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-[calc(100vh-533px)]">
//       {/* Hero Section */}
//       <section 
//         className="relative py-20 bg-cover bg-center text-white"
//         style={{
//           backgroundImage: `url('https://script.viserlab.com/ratelab/assets/images/frontend/breadcrumb/6354d380899a21666503552.jpg')`
//         }}
//       >
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="text-center">
//             <h2 className="text-4xl font-bold">All Companies</h2>
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col lg:flex-row gap-8">
//             {/* Sidebar Filter */}
//             <div className="lg:w-1/4">
//               <button
//                 onClick={() => setIsFilterOpen(!isFilterOpen)}
//                 className="lg:hidden w-full flex justify-between items-center p-4 bg-white rounded-lg shadow mb-4"
//               >
//                 Filter
//                 <i className="las la-sliders-h" />
//               </button>

//               <div className={`lg:block ${isFilterOpen ? 'block' : 'hidden'}`}>
//                 {/* Search Widget */}
//                 <div className="bg-white rounded-lg shadow p-6 mb-6">
//                   <h4 className="text-lg font-semibold mb-4">Company or Tag</h4>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       className="w-full p-3 border rounded-lg pr-10"
//                       placeholder="Search here..."
//                       value={searchQuery}
//                       onChange={(e) => setSearchQuery(e.target.value)}
//                     />
//                     <button className="absolute right-3 top-1/2 -translate-y-1/2">
//                       <i className="las la-search" />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Categories Widget */}
//                 <div className="bg-white rounded-lg shadow p-6 mb-6">
//                   <h4 className="text-lg font-semibold mb-4">By Categories</h4>
//                   <ul className="space-y-2">
//                     {categories.map((category) => (
//                       <li 
//                         key={category.id}
//                         className={`flex justify-between items-center p-2 rounded cursor-pointer hover:bg-gray-50
//                           ${selectedCategory === category.id ? 'bg-gray-50' : ''}`}
//                         onClick={() => setSelectedCategory(category.id)}
//                       >
//                         <span>{category.name}</span>
//                         <span className="text-gray-500">{category.count}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Rating Widget */}
//                 <div className="bg-white rounded-lg shadow p-6 mb-6">
//                   <h4 className="text-lg font-semibold mb-4">By Rating</h4>
//                   {[5, 4, 3, 2, 1].map((rating) => (
//                     <div key={rating} className="flex items-center mb-3">
//                       <input
//                         type="radio"
//                         id={`rating-${rating}`}
//                         name="rating"
//                         value={rating}
//                         checked={selectedRating === rating}
//                         onChange={(e) => setSelectedRating(Number(e.target.value))}
//                         className="mr-3"
//                       />
//                       <label htmlFor={`rating-${rating}`} className="flex items-center">
//                         {rating} <StarRating rating={rating} />
//                       </label>
//                     </div>
//                   ))}
//                 </div>

//                 {/* CTA Widget */}
//                 <div className="bg-[#FFB23F] rounded-lg p-6 text-center text-white">
//                   <h4 className="text-lg font-semibold mb-4">Want to give a review?</h4>
//                   <button className="bg-white text-[#FFB23F] px-6 py-2 rounded-lg font-medium hover:bg-gray-100">
//                     Join Us
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Company Listings */}
//             <div className="lg:w-3/4">
//               <div className="grid md:grid-cols-2 gap-6">
//                 {companies.map((company) => (
//                   <div key={company.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
//                     <div className="relative">
//                       <img 
//                         src={company.image} 
//                         alt={company.name}
//                         className="w-full h-48 object-cover"
//                       />
//                       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
//                         <h3 className="text-white text-xl font-semibold">{company.name}</h3>
//                         <p className="text-white/80 text-sm">
//                           <i className="las la-certificate mr-1" />
//                           {company.category}
//                         </p>
//                       </div>
//                     </div>
//                     <div className="p-4">
//                       <div className="flex justify-between items-start mb-4">
//                         <div>
//                           <p className="text-sm text-gray-600">
//                             <i className="las la-map-marker mr-1" />
//                             {company.location}
//                           </p>
//                         </div>
//                         <div className="text-right">
//                           <StarRating rating={company.rating} />
//                           <p className="text-sm text-gray-500">
//                             {company.rating} ({company.reviews} ratings)
//                           </p>
//                         </div>
//                       </div>
//                       <div className="flex flex-wrap gap-2 mt-4">
//                         {company.tags.map((tag) => (
//                           <span 
//                             key={tag}
//                             className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                       <p className="text-sm text-gray-500 mt-4">
//                         Registered On: {company.registeredDate}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function CompanyListing() {
  const [companies, setCompanies] = useState([])
  const [categories, setCategories] = useState([])
  const [advertisement, setAdvertisement] = useState(null)
  const [loading, setLoading] = useState(true)
  const [categoryLoading, setCategoryLoading] = useState(true)
  const [adLoading, setAdLoading] = useState(true)
  const [filters, setFilters] = useState({
    search: '',
    category: 'all',
    rating: 'all',
    reviewTime: 'all',
    registered: 'all'
  })
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [expandedCategories, setExpandedCategories] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories()
    fetchCompanies()
    fetchAdvertisement()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await axios.get('https://arrc-tech-ratelab-backend-project.onrender.com/api/categories')
      setCategories(response.data || [])
    } catch (error) {
      console.error('Error fetching categories:', error)
      setCategories([])
    } finally {
      setCategoryLoading(false)
    }
  }

  // const fetchCompanies = async () => {
  //   try {
  //     const response = await axios.get('https://arrc-tech-ratelab-backend-project.onrender.com/api/companies')
  //     setCompanies(Array.isArray(response.data) ? response.data : [])
  //   } catch (error) {
  //     console.error('Error fetching companies:', error)
  //     setCompanies([])
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  // const fetchCompanies = async () => {
  //   try {
  //     const response = await axios.get('https://arrc-tech-ratelab-backend-project.onrender.com/api/companies')
  //     const approvedCompanies = response.data.filter(company => company.status === 'Approved');
  //     setCompanies(Array.isArray(approvedCompanies) ? approvedCompanies : [])
  //   } catch (error) {
  //     console.error('Error fetching companies:', error)
  //     setCompanies([])
  //   } finally {
  //     setLoading(false)
  //   }
  // }




  const fetchCompanies = async () => {
    try {
      const [companiesResponse, reviewsResponse] = await Promise.all([
        axios.get('https://arrc-tech-ratelab-backend-project.onrender.com/api/companies'),
        axios.get('https://arrc-tech-ratelab-backend-project.onrender.com/api/reviews')
      ]);
  
      const approvedCompanies = companiesResponse.data.filter(company => company.status === 'Approved');
      const reviews = reviewsResponse.data;
  
      const companiesWithReviews = approvedCompanies.map(company => {
        const companyReviews = reviews.filter(review => review.company === company.companyName);
        const averageRating = companyReviews.length > 0
          ? companyReviews.reduce((sum, review) => sum + review.rating, 0) / companyReviews.length
          : 0;
  
        return {
          ...company,
          reviews: companyReviews,
          rating: averageRating
        };
      });
  
      setCompanies(companiesWithReviews);
    } catch (error) {
      console.error('Error fetching companies and reviews:', error);
      setCompanies([]);
    } finally {
      setLoading(false);
    }
  };
  
  



  const fetchAdvertisement = async () => {
    try {
      const response = await axios.get('https://arrc-tech-ratelab-backend-project.onrender.com/api/advertisements')
      const ad = response.data.find(ad => ad._id === '677f92162964d216f0acb0f7')
      setAdvertisement(ad)
    } catch (error) {
      console.error('Error fetching advertisement:', error)
      setAdvertisement(null)
    } finally {
      setAdLoading(false)
    }
  }

  const filterCompanies = () => {
    if (!Array.isArray(companies)) return []
    
    return companies.filter(company => {
      const matchesSearch = company.companyName.toLowerCase().includes(filters.search.toLowerCase()) ||
                            (Array.isArray(company.tags) && company.tags.some(tag => tag.toLowerCase().includes(filters.search.toLowerCase())))
      const matchesCategory = filters.category === 'all' || company.category === filters.category
      const matchesRating = filters.rating === 'all' || (company.rating && company.rating >= parseInt(filters.rating))
      const matchesReviewTime = filters.reviewTime === 'all' || 
                                (new Date() - new Date(company.createdAt)) / (30 * 24 * 60 * 60 * 1000) <= parseInt(filters.reviewTime)
      const matchesRegistered = filters.registered === 'all' || 
                                getRegistrationPeriod(company.createdAt) === filters.registered

      return matchesSearch && matchesCategory && matchesRating && matchesReviewTime && matchesRegistered
    })
  }

  const getRegistrationPeriod = (createdAt) => {
    if (!createdAt) return 'unknown'
    const monthsSinceRegistration = (new Date() - new Date(createdAt)) / (30 * 24 * 60 * 60 * 1000)
    if (monthsSinceRegistration < 12) return 'below1year'
    if (monthsSinceRegistration < 36) return '1-3years'
    if (monthsSinceRegistration < 72) return '3-6years'
    if (monthsSinceRegistration < 120) return '6-10years'
    return 'over10years'
  }

  const StarRating = ({ rating }) => (
    <div className="flex text-[#FFB23F]">
      {[1, 2, 3, 4, 5].map((star) => (
        <i
          key={star}
          className={`las ${
            star <= Math.floor(rating) 
              ? 'la-star' 
              : star <= rating 
              ? 'la-star-half-alt' 
              : 'la-star'
          }`}
        />
      ))}
    </div>
  )

  const FilterSection = ({ title, children }) => (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h4 className="text-[#505050] text-lg font-medium mb-4">{title}</h4>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  )

  const CompanyCard = ({ company }) => (
    <div
    onClick={() => navigate(`/company/${company._id}`)}

     className="bg-white p-2   shadow-sm overflow-hidden">
      <div className="aspect-[6/3]   relative">
        <img
          src={company.imageUrl || '/placeholder.svg?height=400&width=300'}
          alt={company.companyName}
          className="w-full p-4 bg-gray-200  h-full object-fill"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-medium text-orange-500">
              {company.companyName}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
            <i className="las la-certificate text-blue-600  mr-2"></i>
            {company.category}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              <i className="las la-map-marker mr-1" />
              {company.address}
            </p>
          </div>
          <div className="text-right">
            <StarRating rating={company.rating || 0} />
            <p className="text-sm text-gray-500 mt-1">
              {company.rating || 0} ({company.reviews?.length || 0} ratings)
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {Array.isArray(company.tags) && company.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-teal-100 rounded-full text-sm text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Registered On: {new Date(company.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })}
        </p>
      </div>
    </div>
  )

  return (
    <div className="min-h-[calc(100vh-533px)] bg-gray-100 font-['Roboto'] text-[#505050]">
      {/* Hero Section */}
      <div className="relative h-72 bg-cover bg-center" style={{
        backgroundImage: `url('https://script.viserlab.com/ratelab/assets/images/frontend/breadcrumb/6354d380899a21666503552.jpg')`
      }}>
        <div className="absolute inset-0 " />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-black">All Companies</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl bg-gray-100 mx-auto px-4 py-8">
        <div className="flex  flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className=" lg:w-1/4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden w-full flex items-center justify-between p-4 bg-[#FFB23F] text-white rounded-lg mb-4"
            >
              <span>Filter</span>
              <i className="las la-sliders-h " />
            </button>

            <div className={`space-y-6  ${isFilterOpen ? 'block' : 'lg:block hidden'}`}>
              {/* Search */}
              <FilterSection title="Company or Tag">
                <div className="relative ">
                  <input
                    type="text"
                    placeholder="Search here..."
                    value={filters.search}
                    onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                    className="w-full p-3 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB23F]"
                  />
                  <i className="las la-search absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </FilterSection>

              {/* Categories */}
              <FilterSection title="By Categories">
                {categoryLoading ? (
                  <div className="text-center py-4">Loading categories...</div>
                ) : (
                  <>
                    <div
                      onClick={() => setFilters({ ...filters, category: 'all' })}
                      className={`flex justify-between items-center p-2 rounded cursor-pointer hover:bg-gray-50 ${
                        filters.category === 'all' ? 'bg-gray-50' : ''
                      }`}
                    >
                      <span>All</span>
                      <span className="text-gray-500">({companies.length})</span>
                    </div>
                    {categories.slice(0, expandedCategories ? categories.length : 5).map((category) => (
                      <div
                        key={category._id}
                        onClick={() => setFilters({ ...filters, category: category.name })}
                        className={`flex justify-between items-center p-2 rounded cursor-pointer hover:bg-gray-50 ${
                          filters.category === category.name ? 'bg-gray-50' : ''
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className="text-gray-500">
                          ({companies.filter(c => c.category === category.name).length})
                        </span>
                      </div>
                    ))}
                    {categories.length > 5 && (
                      <button
                        onClick={() => setExpandedCategories(!expandedCategories)}
                        className="text-[#FFB23F] hover:underline mt-2"
                      >
                        {expandedCategories ? 'See Less...' : 'See More...'}
                      </button>
                    )}
                  </>
                )}
              </FilterSection>

              {/* Rating Filter */}
              <FilterSection title="By Rating">
                <div
                  onClick={() => setFilters({ ...filters, rating: 'all' })}
                  className={`flex items-center space-x-3 cursor-pointer ${
                    filters.rating === 'all' ? 'font-bold' : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="rating"
                    checked={filters.rating === 'all'}
                    onChange={() => {}}
                    className="w-4 h-4 text-[#FFB23F] border-gray-300 focus:ring-[#FFB23F]"
                  />
                  <span>All</span>
                </div>
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div
                    key={rating}
                    onClick={() => setFilters({ ...filters, rating: rating.toString() })}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="rating"
                      checked={filters.rating === rating.toString()}
                      onChange={() => {}}
                      className="w-4 h-4 text-[#FFB23F] border-gray-300 focus:ring-[#FFB23F]"
                    />
                    <span className="flex items-center space-x-2">
                      <span>{rating}</span>
                      <StarRating rating={rating} />
                    </span>
                  </div>
                ))}
              </FilterSection>

              {/* Review Time Filter */}
              <FilterSection title="By Review Time">
                {[
                  { label: 'All', value: 'all' },
                  { label: 'Last month', value: '1' },
                  { label: 'Last 2 months', value: '2' },
                  { label: 'Last 3 months', value: '3' },
                  { label: 'Last 6 months', value: '6' },
                  { label: 'Last year', value: '12' }
                ].map((option) => (
                  <div
                    key={option.value}
                    onClick={() => setFilters({ ...filters, reviewTime: option.value })}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="reviewTime"
                      checked={filters.reviewTime === option.value}
                      onChange={() => {}}
                      className="w-4 h-4 text-[#FFB23F] border-gray-300 focus:ring-[#FFB23F]"
                    />
                    <span>{option.label}</span>
                  </div>
                ))}
              </FilterSection>

              {/* Registered Filter */}
              <FilterSection title="By Registered">
                {[
                  { label: 'All', value: 'all' },
                  { label: 'Below 1 year', value: 'below1year' },
                  { label: '1 - 3 years', value: '1-3years' },
                  { label: '3 - 6 years', value: '3-6years' },
                  { label: '6 - 10 years', value: '6-10years' },
                  { label: 'Over 10 years', value: 'over10years' }
                ].map((option) => (
                  <div
                    key={option.value}
                    onClick={() => setFilters({ ...filters, registered: option.value })}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="registered"
                      checked={filters.registered === option.value}
                      onChange={() => {}}
                      className="w-4 h-4 text-[#FFB23F] border-gray-300 focus:ring-[#FFB23F]"
                    />
                    <span>{option.label}</span>
                  </div>
                ))}
              </FilterSection>

              {/* Advertisement */}
              {adLoading ? (
                <div className="text-center py-4">Loading advertisement...</div>
              ) : advertisement ? (
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                  <a href={advertisement.redirectUrl} target="_blank" rel="noopener noreferrer">
                    <img
                      src={advertisement.imageUrl}
                      alt="Advertisement"
                      className="w-full h-auto"
                      style={{ maxWidth: '300px', maxHeight: '600px' }}
                    />
                  </a>
                </div>
              ) : null}

              {/* CTA */}
              <div className="bg-[#FFB23F] rounded-lg p-6 text-center text-white">
                <h4 className="text-lg font-medium mb-4">Want to give a review?</h4>
                <button className="bg-white px-6 py-2 rounded-lg font-medium text-[#FFB23F] hover:bg-gray-50 transition-colors">
                  Join Us
                </button>
              </div>
            </div>
          </div>

          {/* Company Grid */}
          <div className="lg:w-3/4">
            {loading ? (
              <div className="text-center py-12">Loading companies...</div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                {filterCompanies().map((company) => (
                  <CompanyCard key={company._id} company={company} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

