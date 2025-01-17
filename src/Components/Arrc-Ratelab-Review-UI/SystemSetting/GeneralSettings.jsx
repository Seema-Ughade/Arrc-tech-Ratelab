'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function GeneralSettings() {
  const [settings, setSettings] = useState({
    siteTitle: 'Ratelab',
    baseColor: '#e8be20',
    timezone: 'Asia/Dhaka',
    recordsPerPage: '20'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Settings submitted:', settings)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-700 mb-6">General Setting</h1>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Site Title */}
            <div className="space-y-2">
              <label className="block">
                <span className="text-gray-700">
                  Site Title
                  <span className="text-red-500 ml-1">*</span>
                </span>
                <input
                  type="text"
                  value={settings.siteTitle}
                  onChange={(e) => setSettings({ ...settings, siteTitle: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </label>
            </div>

            {/* Timezone */}
            <div className="space-y-2">
              <label className="block">
                <span className="text-gray-700">Timezone</span>
                <div className="relative">
                  <select
                    value={settings.timezone}
                    onChange={(e) => setSettings({ ...settings, timezone: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 appearance-none"
                  >
                    <option value="Asia/Dhaka">Asia/Dhaka</option>
                    <option value="America/New_York">America/New_York</option>
                    <option value="Europe/London">Europe/London</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </label>
            </div>

            {/* Site Base Color */}
            <div className="space-y-2">
              <label className="block">
                <span className="text-gray-700">Site Base Color</span>
                <div className="flex mt-1">
                  <input
                    type="color"
                    value={settings.baseColor}
                    onChange={(e) => setSettings({ ...settings, baseColor: e.target.value })}
                    className="h-10 w-20 rounded-l-md border-gray-300"
                  />
                  <input
                    type="text"
                    value={settings.baseColor}
                    onChange={(e) => setSettings({ ...settings, baseColor: e.target.value })}
                    className="flex-1 rounded-r-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </label>
            </div>

            {/* Records per page */}
            <div className="space-y-2">
              <label className="block">
                <span className="text-gray-700">Record to Display Per page</span>
                <div className="relative">
                  <select
                    value={settings.recordsPerPage}
                    onChange={(e) => setSettings({ ...settings, recordsPerPage: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 appearance-none"
                  >
                    <option value="10">10 items per page</option>
                    <option value="20">20 items per page</option>
                    <option value="50">50 items per page</option>
                    <option value="100">100 items per page</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

