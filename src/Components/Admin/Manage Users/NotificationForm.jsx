import React, { useState } from 'react';
import { Mail, Smartphone, Bell } from 'lucide-react';

const NotificationForm = () => {
  const [notificationType, setNotificationType] = useState('email');
  const [formData, setFormData] = useState({
    sendTo: 'all',
    subject: '',
    message: '',
    startFrom: '',
    perBatch: '',
    coolingPeriod: '',
  });

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 text-center sm:text-left">
        Notification to Verified Users
      </h1>

      <div className="bg-white rounded-lg shadow p-4 sm:p-6">
        {/* Notification Type Buttons */}
        <div className="flex flex-wrap gap-4 mb-6">
          <button
            className={`flex items-center gap-2 p-3 rounded-lg border w-full sm:w-auto ${
              notificationType === 'email' ? 'border-indigo-600 text-indigo-600' : 'border-gray-300'
            }`}
            onClick={() => setNotificationType('email')}
          >
            <Mail className="w-5 h-5" />
            Send Via Email
          </button>
          <button
            className={`flex items-center gap-2 p-3 rounded-lg border w-full sm:w-auto ${
              notificationType === 'sms' ? 'border-indigo-600 text-indigo-600' : 'border-gray-300'
            }`}
            onClick={() => setNotificationType('sms')}
          >
            <Smartphone className="w-5 h-5" />
            Send Via SMS
          </button>
          <button
            className={`flex items-center gap-2 p-3 rounded-lg border w-full sm:w-auto ${
              notificationType === 'firebase' ? 'border-indigo-600 text-indigo-600' : 'border-gray-300'
            }`}
            onClick={() => setNotificationType('firebase')}
          >
            <Bell className="w-5 h-5" />
            Send Via Firebase
          </button>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Send To */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Being Sent To <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.sendTo}
              onChange={(e) => setFormData({ ...formData, sendTo: e.target.value })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              <option value="all">All Users</option>
              <option value="selected">Selected Users</option>
            </select>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder="Subject / Title"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Write your message here..."
              className="w-full p-3 border rounded-lg min-h-[150px] focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          {/* Grid Layout for Start From, Per Batch, and Cooling Period */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Start From */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start From <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.startFrom}
                onChange={(e) => setFormData({ ...formData, startFrom: e.target.value })}
                placeholder="Start form user ID. e.g., 1"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            {/* Per Batch */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Per Batch <span className="text-red-500">*</span>
              </label>
              <div className="flex">
                <input
                  type="text"
                  value={formData.perBatch}
                  onChange={(e) => setFormData({ ...formData, perBatch: e.target.value })}
                  placeholder="Number of users"
                  className="w-full p-3 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
                <span className="p-3 border border-l-0 rounded-r-lg bg-gray-50">
                  Users
                </span>
              </div>
            </div>

            {/* Cooling Period */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cooling Period <span className="text-red-500">*</span>
              </label>
              <div className="flex">
                <input
                  type="text"
                  value={formData.coolingPeriod}
                  onChange={(e) => setFormData({ ...formData, coolingPeriod: e.target.value })}
                  placeholder="Waiting time"
                  className="w-full p-3 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
                <span className="p-3 border border-l-0 rounded-r-lg bg-gray-50">
                  Seconds
                </span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NotificationForm;
