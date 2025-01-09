// 'use client'

// import React, { useState } from 'react'

// const initialCategories = [
//   { id: 1, name: 'Airline', icon: 'plane', status: 'Enable' },
//   { id: 2, name: 'Bank', icon: 'Building', status: 'Enable' },
//   { id: 3, name: 'Cars', icon: 'car', status: 'Enable' },
//   { id: 4, name: 'Education', icon: 'graduation-cap', status: 'Enable' },
//   { id: 5, name: 'Jewellry', icon: 'gem', status: 'Enable' },
//   { id: 6, name: 'Travel Agency', icon: 'globe', status: 'Enable' },
// ]

// const icons = [
//   { id: 1, name: 'plane', label: 'Plane' },
//   { id: 2, name: 'Building', label: 'Bank' },
//   { id: 3, name: 'car', label: 'Car' },
//   { id: 4, name: 'graduation-cap', label: 'Education' },
//   { id: 5, name: 'gem', label: 'Jewellry' },
//   { id: 6, name: 'globe', label: 'Globe' },
//   { id: 7, name: 'building', label: 'Building' },
//   { id: 8, name: 'phone', label: 'Phone' },
//   { id: 9, name: 'envelope', label: 'Mail' },
//   { id: 10, name: 'user', label: 'User' },
//   { id: 11, name: 'users', label: 'Users' },
//   { id: 12, name: 'cog', label: 'Settings' },
//   { id: 13, name: 'chart-bar', label: 'Chart' },
//   { id: 14, name: 'calendar', label: 'Calendar' },
//   { id: 15, name: 'image', label: 'Image' },
//   { id: 16, name: 'video', label: 'Video' }
// ]

// export default function Categories() {
//   const [categories, setCategories] = useState(initialCategories)
//   const [searchQuery, setSearchQuery] = useState('')
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false)
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false)
//   const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
//   const [selectedCategory, setSelectedCategory] = useState(null)
//   const [newCategory, setNewCategory] = useState({ name: '', icon: '' })
//   const [editCategory, setEditCategory] = useState({ name: '', icon: '' })
//   const [errors, setErrors] = useState({})

//   const filteredCategories = categories.filter(category =>
//     category.name.toLowerCase().includes(searchQuery.toLowerCase())
//   )

//   const handleAdd = (e) => {
//     e.preventDefault()
//     const { name, icon } = newCategory
//     if (!name || !icon) {
//       setErrors({ 
//         name: !name ? 'Name is required' : '', 
//         icon: !icon ? 'Icon is required' : '' 
//       })
//       return
//     }
//     setCategories([...categories, { id: categories.length + 1, ...newCategory, status: 'Enable' }])
//     setNewCategory({ name: '', icon: '' })
//     setIsAddModalOpen(false)
//     setErrors({})
//   }

//   const handleEdit = (e) => {
//     e.preventDefault()
//     const { name, icon } = editCategory
//     if (!name || !icon) {
//       setErrors({ 
//         name: !name ? 'Name is required' : '', 
//         icon: !icon ? 'Icon is required' : '' 
//       })
//       return
//     }
//     setCategories(categories.map(cat => 
//       cat.id === selectedCategory.id ? { ...cat, ...editCategory } : cat
//     ))
//     setIsEditModalOpen(false)
//     setErrors({})
//   }

//   const handleDisable = (confirmed) => {
//     if (confirmed && selectedCategory) {
//       setCategories(categories.map(cat =>
//         cat.id === selectedCategory.id ? { ...cat, status: 'Disable' } : cat
//       ))
//     }
//     setIsConfirmModalOpen(false)
//   }

//   return (
//     <div style={{ padding: '24px', fontFamily: 'Arial, sans-serif' }}>
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
//         <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Categories</h1>
//         <div style={{ display: 'flex', gap: '16px' }}>
//           <div style={{ position: 'relative' }}>
//             <input
//               type="text"
//               placeholder="Search..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               style={{
//                 padding: '8px 8px 8px 40px',
//                 width: '300px',
//                 borderRadius: '4px',
//                 border: '1px solid #d1d5db'
//               }}
//             />
//             <i className="fas fa-search" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }}></i>
//           </div>
//           <button
//             onClick={() => setIsAddModalOpen(true)}
//             style={{
//               padding: '8px 16px',
//               backgroundColor: '#4f46e5',
//               color: 'white',
//               border: 'none',
//               borderRadius: '4px',
//               cursor: 'pointer'
//             }}
//           >
//             <i className="fas fa-plus" style={{ marginRight: '8px' }}></i>
//             Add New
//           </button>
//         </div>
//       </div>

//       <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' }}>
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', padding: '16px', backgroundColor: '#4f46e5', color: 'white', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}>
//           <div>Name</div>
//           <div>Icon</div>
//           <div>Status</div>
//           <div style={{ textAlign: 'right' }}>Action</div>
//         </div>
        
//         {filteredCategories.map((category) => (
//           <div key={category.id} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', padding: '16px', borderBottom: '1px solid #e5e7eb', alignItems: 'center' }}>
//             <div>{category.name}</div>
//             <div>
//               <span style={{ display: 'inline-block', padding: '8px', backgroundColor: '#f3f4f6', borderRadius: '4px' }}>
//                 <i className={`fas fa-${category.icon}`}></i>
//               </span>
//             </div>
//             <div>
//               <span style={{
//                 padding: '4px 12px',
//                 borderRadius: '9999px',
//                 fontSize: '14px',
//                 backgroundColor: category.status === 'Enable' ? '#d1fae5' : '#fee2e2',
//                 color: category.status === 'Enable' ? '#059669' : '#dc2626'
//               }}>
//                 {category.status}
//               </span>
//             </div>
//             <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
//               <button
//                 onClick={() => {
//                   setSelectedCategory(category)
//                   setEditCategory({ name: category.name, icon: category.icon })
//                   setIsEditModalOpen(true)
//                 }}
//                 style={{
//                   padding: '8px 16px',
//                   backgroundColor: 'transparent',
//                   color: '#4f46e5',
//                   border: '1px solid #4f46e5',
//                   borderRadius: '4px',
//                   cursor: 'pointer'
//                 }}
//               >
//                 <i className="fas fa-pen-square" style={{ marginRight: '4px' }}></i>
//                 Edit
//               </button>
//               <button
//                 onClick={() => {
//                   setSelectedCategory(category)
//                   setIsConfirmModalOpen(true)
//                 }}
//                 style={{
//                   padding: '8px 16px',
//                   backgroundColor: 'transparent',
//                   color: '#dc2626',
//                   border: '1px solid #dc2626',
//                   borderRadius: '4px',
//                   cursor: 'pointer'
//                 }}
//               >
//                 <i className="fas fa-ban" style={{ marginRight: '4px' }}></i>
//                 Disable
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {isAddModalOpen && (
//         <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//           <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', width: '400px' }}>
//             <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Add New Category</h2>
//             <form onSubmit={handleAdd}>
//               <div style={{ marginBottom: '16px' }}>
//                 <label style={{ display: 'block', marginBottom: '4px' }}>
//                   Name <span style={{ color: 'red' }}>*</span>
//                 </label>
//                 <input
//                   type="text"
//                   value={newCategory.name}
//                   onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
//                   style={{
//                     width: '100%',
//                     padding: '8px',
//                     border: errors.name ? '1px solid red' : '1px solid #d1d5db',
//                     borderRadius: '4px'
//                   }}
//                 />
//                 {errors.name && <p style={{ color: 'red', fontSize: '14px' }}>{errors.name}</p>}
//               </div>
//               <div style={{ marginBottom: '16px' }}>
//                 <label style={{ display: 'block', marginBottom: '4px' }}>
//                   Icon <span style={{ color: 'red' }}>*</span>
//                 </label>
//                 <select
//                   value={newCategory.icon}
//                   onChange={(e) => setNewCategory({ ...newCategory, icon: e.target.value })}
//                   style={{
//                     width: '100%',
//                     padding: '8px',
//                     border: errors.icon ? '1px solid red' : '1px solid #d1d5db',
//                     borderRadius: '4px'
//                   }}
//                 >
//                   <option value="">Select an icon</option>
//                   {icons.map((icon) => (
//                     <option key={icon.id} value={icon.name}>{icon.label}</option>
//                   ))}
//                 </select>
//                 {errors.icon && <p style={{ color: 'red', fontSize: '14px' }}>{errors.icon}</p>}
//               </div>
//               <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setIsAddModalOpen(false)
//                     setNewCategory({ name: '', icon: '' })
//                     setErrors({})
//                   }}
//                   style={{
//                     padding: '8px 16px',
//                     backgroundColor: 'white',
//                     color: 'black',
//                     border: '1px solid #d1d5db',
//                     borderRadius: '4px',
//                     cursor: 'pointer'
//                   }}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   style={{
//                     padding: '8px 16px',
//                     backgroundColor: '#4f46e5',
//                     color: 'white',
//                     border: 'none',
//                     borderRadius: '4px',
//                     cursor: 'pointer'
//                   }}
//                 >
//                   Add Category
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {isEditModalOpen && (
//         <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//           <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', width: '400px' }}>
//             <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Edit Category</h2>
//             <form onSubmit={handleEdit}>
//               <div style={{ marginBottom: '16px' }}>
//                 <label style={{ display: 'block', marginBottom: '4px' }}>
//                   Name <span style={{ color: 'red' }}>*</span>
//                 </label>
//                 <input
//                   type="text"
//                   value={editCategory.name}
//                   onChange={(e) => setEditCategory({ ...editCategory, name: e.target.value })}
//                   style={{
//                     width: '100%',
//                     padding: '8px',
//                     border: errors.name ? '1px solid red' : '1px solid #d1d5db',
//                     borderRadius: '4px'
//                   }}
//                 />
//                 {errors.name && <p style={{ color: 'red', fontSize: '14px' }}>{errors.name}</p>}
//               </div>
//               <div style={{ marginBottom: '16px' }}>
//                 <label style={{ display: 'block', marginBottom: '4px' }}>
//                   Icon <span style={{ color: 'red' }}>*</span>
//                 </label>
//                 <select
//                   value={editCategory.icon}
//                   onChange={(e) => setEditCategory({ ...editCategory, icon: e.target.value })}
//                   style={{
//                     width: '100%',
//                     padding: '8px',
//                     border: errors.icon ? '1px solid red' : '1px solid #d1d5db',
//                     borderRadius: '4px'
//                   }}
//                 >
//                   <option value="">Select an icon</option>
//                   {icons.map((icon) => (
//                     <option key={icon.id} value={icon.name}>{icon.label}</option>
//                   ))}
//                 </select>
//                 {errors.icon && <p style={{ color: 'red', fontSize: '14px' }}>{errors.icon}</p>}
//               </div>
//               <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setIsEditModalOpen(false)
//                     setEditCategory({ name: '', icon: '' })
//                     setErrors({})
//                   }}
//                   style={{
//                     padding: '8px 16px',
//                     backgroundColor: 'white',
//                     color: 'black',
//                     border: '1px solid #d1d5db',
//                     borderRadius: '4px',
//                     cursor: 'pointer'
//                   }}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   style={{
//                     padding: '8px 16px',
//                     backgroundColor: '#4f46e5',
//                     color: 'white',
//                     border: 'none',
//                     borderRadius: '4px',
//                     cursor: 'pointer'
//                   }}
//                 >
//                   Update Category
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {isConfirmModalOpen && (
//         <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//           <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', width: '400px' }}>
//             <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Confirmation Alert!</h2>
//             <p style={{ marginBottom: '16px' }}>Are you sure to disable this category?</p>
//             <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
//               <button
//                 onClick={() => setIsConfirmModalOpen(false)}
//                 style={{
//                   padding: '8px 16px',
//                   backgroundColor: 'white',
//                   color: 'black',
//                   border: '1px solid #d1d5db',
//                   borderRadius: '4px',
//                   cursor: 'pointer'
//                 }}
//               >
//                 No
//               </button>
//               <button
//                 onClick={() => handleDisable(true)}
//                 style={{
//                   padding: '8px 16px',
//                   backgroundColor: '#4f46e5',
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: '4px',
//                   cursor: 'pointer'
//                 }}
//               >
//                 Yes
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

import React, { useState, useEffect } from 'react'
import axios from 'axios'

const icons = [
  { id: 1, name: 'plane', label: 'Plane' },
  { id: 2, name: 'building', label: 'Building' },
  { id: 3, name: 'car', label: 'Car' },
  { id: 4, name: 'graduation-cap', label: 'Education' },
  { id: 5, name: 'gem', label: 'Jewellry' },
  { id: 6, name: 'globe', label: 'Globe' },
  { id: 7, name: 'phone', label: 'Phone' },
  { id: 8, name: 'envelope', label: 'Mail' },
  { id: 9, name: 'user', label: 'User' },
  { id: 10, name: 'users', label: 'Users' },
  { id: 11, name: 'cog', label: 'Settings' },
  { id: 12, name: 'chart-bar', label: 'Chart' },
  { id: 13, name: 'calendar', label: 'Calendar' },
  { id: 14, name: 'image', label: 'Image' },
  { id: 15, name: 'video', label: 'Video' }
]

export default function Categories() {
  const [categories, setCategories] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [newCategory, setNewCategory] = useState({ name: '', icon: '' })
  const [editCategory, setEditCategory] = useState({ name: '', icon: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/categories')
      setCategories(response.data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching categories:', error)
      setLoading(false)
    }
  }

  const handleAdd = async (e) => {
    e.preventDefault()
    const { name, icon } = newCategory
    if (!name || !icon) {
      setErrors({ 
        name: !name ? 'Name is required' : '', 
        icon: !icon ? 'Icon is required' : '' 
      })
      return
    }
    try {
      const response = await axios.post('http://localhost:5000/api/categories', newCategory)
      setCategories([...categories, response.data])
      setNewCategory({ name: '', icon: '' })
      setIsAddModalOpen(false)
      setErrors({})
    } catch (error) {
      console.error('Error adding category:', error)
    }
  }

  const handleEdit = async (e) => {
    e.preventDefault()
    const { name, icon } = editCategory
    if (!name || !icon) {
      setErrors({ 
        name: !name ? 'Name is required' : '', 
        icon: !icon ? 'Icon is required' : '' 
      })
      return
    }
    try {
      const response = await axios.put(`http://localhost:5000/api/categories/${selectedCategory._id}`, editCategory)
      setCategories(categories.map(cat => 
        cat._id === selectedCategory._id ? response.data : cat
      ))
      setIsEditModalOpen(false)
      setErrors({})
    } catch (error) {
      console.error('Error updating category:', error)
    }
  }

  const handleToggleStatus = async (category) => {
    try {
      const newStatus = category.status === 'Enable' ? 'Disable' : 'Enable'
      const response = await axios.patch(`http://localhost:5000/api/categories/${category._id}/toggle-status`)
      setCategories(categories.map(cat =>
        cat._id === category._id ? response.data : cat
      ))
    } catch (error) {
      console.error('Error toggling category status:', error)
    }
  }

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const IconSelector = ({ value, onChange, error }) => (
    <div className="grid grid-cols-4 gap-2 p-4 border rounded-md max-h-48 overflow-y-auto">
      {icons.map((icon) => (
        <div
          key={icon.id}
          onClick={() => onChange(icon.name)}
          className={`flex flex-col items-center p-2 rounded cursor-pointer hover:bg-gray-100 ${
            value === icon.name ? 'bg-indigo-100 border border-indigo-500' : ''
          }`}
        >
          <i className={`fas fa-${icon.name} text-xl mb-1`}></i>
          <span className="text-xs">{icon.label}</span>
        </div>
      ))}
    </div>
  )

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  return (
    <div className="p-6 font-sans">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Categories</h1>
        <div className="flex gap-4">
          <div className="relative">
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-[300px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center gap-2"
          >
            <i className="fas fa-plus"></i>
            Add New
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="grid grid-cols-4 gap-4 p-4 bg-indigo-600 text-white rounded-t-lg">
          <div>Name</div>
          <div>Icon</div>
          <div>Status</div>
          <div className="text-right">Action</div>
        </div>
        
        {filteredCategories.map((category) => (
          <div key={category._id} className="grid grid-cols-4 gap-4 p-4 border-b items-center">
            <div>{category.name}</div>
            <div className="flex items-center">
              <span className="inline-block p-2 bg-gray-100 rounded mr-2">
                <i className={`fas fa-${category.icon} text-xl`}></i>
              </span>
              <span>{category.icon}</span>
            </div>
            <div>
              <button
                onClick={() => handleToggleStatus(category)}
                className={`px-3 py-1 rounded-full text-sm ${
                  category.status === 'Enable' 
                    ? 'bg-green-100 text-green-600 hover:bg-green-200' 
                    : 'bg-red-100 text-red-600 hover:bg-red-200'
                }`}
              >
                {category.status}
              </button>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  setSelectedCategory(category)
                  setEditCategory({ name: category.name, icon: category.icon })
                  setIsEditModalOpen(true)
                }}
                className="px-4 py-2 text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 flex items-center gap-2"
              >
                <i className="fas fa-pen-square"></i>
                Edit
              </button>
              <button
                onClick={() => handleToggleStatus(category)}
                className={`px-4 py-2 rounded-md flex items-center gap-2 ${
                  category.status === 'Enable'
                    ? 'text-red-600 border border-red-600 hover:bg-red-50'
                    : 'text-green-600 border border-green-600 hover:bg-green-50'
                }`}
              >
                <i className={`fas fa-${category.status === 'Enable' ? 'ban' : 'check'}`}></i>
                {category.status === 'Enable' ? 'Disable' : 'Enable'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-[500px] p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Add New Category</h2>
              <button 
                onClick={() => {
                  setIsAddModalOpen(false)
                  setNewCategory({ name: '', icon: '' })
                  setErrors({})
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <form onSubmit={handleAdd} className="space-y-4">
              <div>
                <label className="block mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={newCategory.name}
                  onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                  className={`w-full px-3 py-2 border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block mb-1">
                  Icon <span className="text-red-500">*</span>
                </label>
                <IconSelector
                  value={newCategory.icon}
                  onChange={(icon) => setNewCategory({ ...newCategory, icon })}
                  error={errors.icon}
                />
                {errors.icon && <p className="text-red-500 text-sm mt-1">{errors.icon}</p>}
              </div>
              <div className="flex justify-between gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsAddModalOpen(false)
                    setNewCategory({ name: '', icon: '' })
                    setErrors({})
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  Add Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-[500px] p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Edit Category</h2>
              <button 
                onClick={() => {
                  setIsEditModalOpen(false)
                  setEditCategory({ name: '', icon: '' })
                  setErrors({})
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <form onSubmit={handleEdit} className="space-y-4">
              <div>
                <label className="block mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={editCategory.name}
                  onChange={(e) => setEditCategory({ ...editCategory, name: e.target.value })}
                  className={`w-full px-3 py-2 border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block mb-1">
                  Icon <span className="text-red-500">*</span>
                </label>
                <IconSelector
                  value={editCategory.icon}
                  onChange={(icon) => setEditCategory({ ...editCategory, icon })}
                  error={errors.icon}
                />
                {errors.icon && <p className="text-red-500 text-sm mt-1">{errors.icon}</p>}
              </div>
              <div className="flex justify-between gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsEditModalOpen(false)
                    setEditCategory({ name: '', icon: '' })
                    setErrors({})
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  Update Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

