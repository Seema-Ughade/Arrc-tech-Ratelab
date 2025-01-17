

import { useState } from 'react'
import { Upload, AlertCircle } from 'lucide-react'

export default function LogoFaviconSettings() {
  const [files, setFiles] = useState({
    logo: null,
    favicon: null
  })

  const handleFileChange = (type, e) => {
    const file = e.target.files[0]
    if (file) {
      setFiles(prev => ({
        ...prev,
        [type]: URL.createObjectURL(file)
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Files submitted:', files)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-700 mb-6">Logo & Favicon</h1>

        {/* Info Alert */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <div className="flex">
            <AlertCircle className="h-5 w-5 text-blue-500 mr-2" />
            <p className="text-blue-700">
              If the logo and favicon are not changed after you update from this page, please{' '}
              <a href="#" className="text-blue-600 underline">clear the cache</a> from your browser. 
              As we keep the filename the same after the update, it may show the old image for the cache. 
              usually, it works after clear the cache but if you still see the old logo or favicon, 
              it may be caused by server level or network level caching. Please clear them too.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Logo Upload */}
            <div className="space-y-2">
              <label className="text-gray-700">Logo</label>
              <div className="border rounded-lg p-4 bg-white">
                <div className="aspect-video relative flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                  {files.logo ? (
                    <img src={files.logo || "/placeholder.svg"} alt="Logo preview" className="max-h-full object-contain" />
                  ) : (
                    <div className="text-center">
                      <img 
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZbNArgEr3lTvBkttzW347lYzzaCMLU.png" 
                        alt="Default logo" 
                        className="w-24 h-24 mx-auto"
                      />
                      <div className="mt-2 text-orange-500 text-xl">Lab</div>
                    </div>
                  )}
                  <div className="absolute bottom-2 right-2">
                    <label className="cursor-pointer">
                      <input
                        type="file"
                        className="hidden"
                        accept=".png,.jpg,.jpeg"
                        onChange={(e) => handleFileChange('logo', e)}
                      />
                      <div className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
                        <Upload className="h-5 w-5" />
                      </div>
                    </label>
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  Supported Files: .png, .jpg, .jpeg
                </div>
              </div>
            </div>

            {/* Favicon Upload */}
            <div className="space-y-2">
              <label className="text-gray-700">Favicon</label>
              <div className="border rounded-lg p-4 bg-white">
                <div className="aspect-video relative flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                  {files.favicon ? (
                    <img src={files.favicon || "/placeholder.svg"} alt="Favicon preview" className="max-h-full object-contain" />
                  ) : (
                    <div className="text-center">
                      <img 
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZbNArgEr3lTvBkttzW347lYzzaCMLU.png" 
                        alt="Default favicon" 
                        className="w-24 h-24 mx-auto"
                      />
                    </div>
                  )}
                  <div className="absolute bottom-2 right-2">
                    <label className="cursor-pointer">
                      <input
                        type="file"
                        className="hidden"
                        accept=".png,.jpg,.jpeg"
                        onChange={(e) => handleFileChange('favicon', e)}
                      />
                      <div className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
                        <Upload className="h-5 w-5" />
                      </div>
                    </label>
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  Supported Files: .png, .jpg, .jpeg
                </div>
              </div>
            </div>
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

