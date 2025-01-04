'use client'

import React, { useState } from 'react'

const initialCategories = [
  { id: 1, name: 'Airline', icon: 'plane', status: 'Enable' },
  { id: 2, name: 'Bank', icon: 'Building', status: 'Enable' },
  { id: 3, name: 'Cars', icon: 'car', status: 'Enable' },
  { id: 4, name: 'Education', icon: 'graduation-cap', status: 'Enable' },
  { id: 5, name: 'Jewellry', icon: 'gem', status: 'Enable' },
  { id: 6, name: 'Travel Agency', icon: 'globe', status: 'Enable' },
]

const icons = [
  { id: 1, name: 'plane', label: 'Plane' },
  { id: 2, name: 'Building', label: 'Bank' },
  { id: 3, name: 'car', label: 'Car' },
  { id: 4, name: 'graduation-cap', label: 'Education' },
  { id: 5, name: 'gem', label: 'Jewellry' },
  { id: 6, name: 'globe', label: 'Globe' },
  { id: 7, name: 'building', label: 'Building' },
  { id: 8, name: 'phone', label: 'Phone' },
  { id: 9, name: 'envelope', label: 'Mail' },
  { id: 10, name: 'user', label: 'User' },
  { id: 11, name: 'users', label: 'Users' },
  { id: 12, name: 'cog', label: 'Settings' },
  { id: 13, name: 'chart-bar', label: 'Chart' },
  { id: 14, name: 'calendar', label: 'Calendar' },
  { id: 15, name: 'image', label: 'Image' },
  { id: 16, name: 'video', label: 'Video' }
]

export default function Categories() {
  const [categories, setCategories] = useState(initialCategories)
  const [searchQuery, setSearchQuery] = useState('')
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [newCategory, setNewCategory] = useState({ name: '', icon: '' })
  const [editCategory, setEditCategory] = useState({ name: '', icon: '' })
  const [errors, setErrors] = useState({})

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleAdd = (e) => {
    e.preventDefault()
    const { name, icon } = newCategory
    if (!name || !icon) {
      setErrors({ 
        name: !name ? 'Name is required' : '', 
        icon: !icon ? 'Icon is required' : '' 
      })
      return
    }
    setCategories([...categories, { id: categories.length + 1, ...newCategory, status: 'Enable' }])
    setNewCategory({ name: '', icon: '' })
    setIsAddModalOpen(false)
    setErrors({})
  }

  const handleEdit = (e) => {
    e.preventDefault()
    const { name, icon } = editCategory
    if (!name || !icon) {
      setErrors({ 
        name: !name ? 'Name is required' : '', 
        icon: !icon ? 'Icon is required' : '' 
      })
      return
    }
    setCategories(categories.map(cat => 
      cat.id === selectedCategory.id ? { ...cat, ...editCategory } : cat
    ))
    setIsEditModalOpen(false)
    setErrors({})
  }

  const handleDisable = (confirmed) => {
    if (confirmed && selectedCategory) {
      setCategories(categories.map(cat =>
        cat.id === selectedCategory.id ? { ...cat, status: 'Disable' } : cat
      ))
    }
    setIsConfirmModalOpen(false)
  }

  return (
    <div style={{ padding: '24px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Categories</h1>
        <div style={{ display: 'flex', gap: '16px' }}>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                padding: '8px 8px 8px 40px',
                width: '300px',
                borderRadius: '4px',
                border: '1px solid #d1d5db'
              }}
            />
            <i className="fas fa-search" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }}></i>
          </div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#4f46e5',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            <i className="fas fa-plus" style={{ marginRight: '8px' }}></i>
            Add New
          </button>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', padding: '16px', backgroundColor: '#4f46e5', color: 'white', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}>
          <div>Name</div>
          <div>Icon</div>
          <div>Status</div>
          <div style={{ textAlign: 'right' }}>Action</div>
        </div>
        
        {filteredCategories.map((category) => (
          <div key={category.id} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', padding: '16px', borderBottom: '1px solid #e5e7eb', alignItems: 'center' }}>
            <div>{category.name}</div>
            <div>
              <span style={{ display: 'inline-block', padding: '8px', backgroundColor: '#f3f4f6', borderRadius: '4px' }}>
                <i className={`fas fa-${category.icon}`}></i>
              </span>
            </div>
            <div>
              <span style={{
                padding: '4px 12px',
                borderRadius: '9999px',
                fontSize: '14px',
                backgroundColor: category.status === 'Enable' ? '#d1fae5' : '#fee2e2',
                color: category.status === 'Enable' ? '#059669' : '#dc2626'
              }}>
                {category.status}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
              <button
                onClick={() => {
                  setSelectedCategory(category)
                  setEditCategory({ name: category.name, icon: category.icon })
                  setIsEditModalOpen(true)
                }}
                style={{
                  padding: '8px 16px',
                  backgroundColor: 'transparent',
                  color: '#4f46e5',
                  border: '1px solid #4f46e5',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                <i className="fas fa-pen-square" style={{ marginRight: '4px' }}></i>
                Edit
              </button>
              <button
                onClick={() => {
                  setSelectedCategory(category)
                  setIsConfirmModalOpen(true)
                }}
                style={{
                  padding: '8px 16px',
                  backgroundColor: 'transparent',
                  color: '#dc2626',
                  border: '1px solid #dc2626',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                <i className="fas fa-ban" style={{ marginRight: '4px' }}></i>
                Disable
              </button>
            </div>
          </div>
        ))}
      </div>

      {isAddModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', width: '400px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Add New Category</h2>
            <form onSubmit={handleAdd}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '4px' }}>
                  Name <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  type="text"
                  value={newCategory.name}
                  onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: errors.name ? '1px solid red' : '1px solid #d1d5db',
                    borderRadius: '4px'
                  }}
                />
                {errors.name && <p style={{ color: 'red', fontSize: '14px' }}>{errors.name}</p>}
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '4px' }}>
                  Icon <span style={{ color: 'red' }}>*</span>
                </label>
                <select
                  value={newCategory.icon}
                  onChange={(e) => setNewCategory({ ...newCategory, icon: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: errors.icon ? '1px solid red' : '1px solid #d1d5db',
                    borderRadius: '4px'
                  }}
                >
                  <option value="">Select an icon</option>
                  {icons.map((icon) => (
                    <option key={icon.id} value={icon.name}>{icon.label}</option>
                  ))}
                </select>
                {errors.icon && <p style={{ color: 'red', fontSize: '14px' }}>{errors.icon}</p>}
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => {
                    setIsAddModalOpen(false)
                    setNewCategory({ name: '', icon: '' })
                    setErrors({})
                  }}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: 'white',
                    color: 'black',
                    border: '1px solid #d1d5db',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#4f46e5',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Add Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', width: '400px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Edit Category</h2>
            <form onSubmit={handleEdit}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '4px' }}>
                  Name <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  type="text"
                  value={editCategory.name}
                  onChange={(e) => setEditCategory({ ...editCategory, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: errors.name ? '1px solid red' : '1px solid #d1d5db',
                    borderRadius: '4px'
                  }}
                />
                {errors.name && <p style={{ color: 'red', fontSize: '14px' }}>{errors.name}</p>}
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '4px' }}>
                  Icon <span style={{ color: 'red' }}>*</span>
                </label>
                <select
                  value={editCategory.icon}
                  onChange={(e) => setEditCategory({ ...editCategory, icon: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: errors.icon ? '1px solid red' : '1px solid #d1d5db',
                    borderRadius: '4px'
                  }}
                >
                  <option value="">Select an icon</option>
                  {icons.map((icon) => (
                    <option key={icon.id} value={icon.name}>{icon.label}</option>
                  ))}
                </select>
                {errors.icon && <p style={{ color: 'red', fontSize: '14px' }}>{errors.icon}</p>}
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => {
                    setIsEditModalOpen(false)
                    setEditCategory({ name: '', icon: '' })
                    setErrors({})
                  }}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: 'white',
                    color: 'black',
                    border: '1px solid #d1d5db',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#4f46e5',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Update Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isConfirmModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', width: '400px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Confirmation Alert!</h2>
            <p style={{ marginBottom: '16px' }}>Are you sure to disable this category?</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
              <button
                onClick={() => setIsConfirmModalOpen(false)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: 'white',
                  color: 'black',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                No
              </button>
              <button
                onClick={() => handleDisable(true)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#4f46e5',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

