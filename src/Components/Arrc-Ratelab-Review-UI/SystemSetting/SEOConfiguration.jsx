'use client'

import { useState } from 'react'
import { Upload, X } from 'lucide-react'

export default function SEOConfiguration() {
  const [seoData, setSeoData] = useState({
    metaKeywords: ['review', 'rating', 'compnay', 'ltd', 'business review', 'business rating', 'company rating'],
    metaDescription: 'RateLab is a business review platform. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorem itaque laudantium aut, quibusdam amet, nemo quaerat, fuga facere corrupti quos dolorum. Blanditiis, exercitationem quia aliquam sit temporibus enim aspernatur repudiandae inventore, corporis',
    socialTitle: 'RateLab - Business Review Platform',
    socialDescription: 'RateLab is a business review platform. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorem itaque laudantium aut, quibusdam amet, nemo quaerat, fuga facere corrupti quos dolorum. Blanditiis, exercitationem quia aliquam sit temporibus enim aspernatur repudiandae inventore, corporis',
    seoImage: null
  })

  const [newKeyword, setNewKeyword] = useState('')

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSeoData(prev => ({
        ...prev,
        seoImage: URL.createObjectURL(file)
      }))
    }
  }

  const addKeyword = (e) => {
    if ((e.key === 'Enter' || e.key === ',') && newKeyword.trim()) {
      e.preventDefault()
      setSeoData(prev => ({
        ...prev,
        metaKeywords: [...prev.metaKeywords, newKeyword.trim()]
      }))
      setNewKeyword('')
    }
  }

  const removeKeyword = (keywordToRemove) => {
    setSeoData(prev => ({
      ...prev,
      metaKeywords: prev.metaKeywords.filter(keyword => keyword !== keywordToRemove)
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('SEO Data submitted:', seoData)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-700 mb-6">SEO Configuration</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* SEO Image Upload */}
            <div className="space-y-2">
              <label className="text-gray-700">SEO Image</label>
              <div className="border rounded-lg p-4 bg-white">
                <div className="aspect-[1180/600] relative flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                  {seoData.seoImage ? (
                    <img 
                      src={seoData.seoImage || "/placeholder.svg"} 
                      alt="SEO preview" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center">
                      <img 
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WfBVVvvpVopz7a9ENE3S16jqfwH0CL.png" 
                        alt="Default SEO" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="absolute bottom-2 right-2">
                    <label className="cursor-pointer">
                      <input
                        type="file"
                        className="hidden"
                        accept=".png,.jpg,.jpeg"
                        onChange={handleImageChange}
                      />
                      <div className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
                        <Upload className="h-5 w-5" />
                      </div>
                    </label>
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  Supported Files: .png, .jpg, .jpeg. Image will be resized into 1180x600px
                </div>
              </div>
            </div>

            {/* Meta Keywords */}
            <div className="space-y-2">
              <label className="block">
                <span className="text-gray-700">
                  Meta Keywords
                  <span className="text-red-500 ml-1">*</span>
                </span>
                <div className="mt-1 p-2 border rounded-lg focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {seoData.metaKeywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center bg-gray-100 text-gray-800 rounded px-2 py-1 text-sm"
                      >
                        {keyword}
                        <button
                          type="button"
                          onClick={() => removeKeyword(keyword)}
                          className="ml-1 text-gray-500 hover:text-gray-700"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                  <input
                    type="text"
                    value={newKeyword}
                    onChange={(e) => setNewKeyword(e.target.value)}
                    onKeyDown={addKeyword}
                    placeholder="Separate multiple keywords by , (comma) or ENTER key"
                    className="w-full outline-none text-sm"
                  />
                </div>
              </label>
            </div>
          </div>

          {/* Meta Description */}
          <div className="space-y-2">
            <label className="block">
              <span className="text-gray-700">
                Meta Description
                <span className="text-red-500 ml-1">*</span>
              </span>
              <textarea
                value={seoData.metaDescription}
                onChange={(e) => setSeoData(prev => ({ ...prev, metaDescription: e.target.value }))}
                rows={4}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </label>
          </div>

          {/* Social Title */}
          <div className="space-y-2">
            <label className="block">
              <span className="text-gray-700">
                Social Title
                <span className="text-red-500 ml-1">*</span>
              </span>
              <input
                type="text"
                value={seoData.socialTitle}
                onChange={(e) => setSeoData(prev => ({ ...prev, socialTitle: e.target.value }))}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </label>
          </div>

          {/* Social Description */}
          <div className="space-y-2">
            <label className="block">
              <span className="text-gray-700">
                Social Description
                <span className="text-red-500 ml-1">*</span>
              </span>
              <textarea
                value={seoData.socialDescription}
                onChange={(e) => setSeoData(prev => ({ ...prev, socialDescription: e.target.value }))}
                rows={4}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

