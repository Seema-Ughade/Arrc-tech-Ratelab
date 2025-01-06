import React, { useState } from 'react';
import { Search, Plus, ExternalLink, Edit, Menu } from 'lucide-react';
import AddAdvertisementModal from './AddAdvertisementModal';
import EditAdvertisementModal from './EditAdvertisementModal';

const AdvertisementList = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedAd, setSelectedAd] = useState(null);
    const [advertisements, setAdvertisements] = useState([
      {
        id: 1,
        type: 'image',
        size: '300x600',
        impression: 8516,
        click: 75,
        redirectUrl: 'https://example.com',
        status: 'enable',
        imageUrl: '/placeholder.svg'
      },
      // Add more sample data as needed
    ]);
    const handleEdit = (ad) => {
        setSelectedAd(ad);
        setShowEditModal(true);
      };
    
      const handleAddNew = () => {
        setShowAddModal(true);
      };
    
      const handleStatusToggle = (id) => {
        setAdvertisements(ads =>
          ads.map(ad =>
            ad.id === id
              ? { ...ad, status: ad.status === 'enable' ? 'disable' : 'enable' }
              : ad
          )
        );
      };
    
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">All Advertisement</h1>
        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4">
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search..."
              className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
          <button
            onClick={handleAddNew}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors w-full sm:w-auto"
          >
            <Plus className="w-5 h-5" />
            <span>Add New</span>
          </button>
        </div>
      </div>

      {/* Mobile View - Card Layout */}
      <div className="block sm:hidden space-y-4">
        {advertisements.map((ad) => (
          <div key={ad.id} className="bg-white rounded-lg shadow p-4 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-sm font-medium text-gray-600">Type:</span>
                <span className="ml-2">{ad.type}</span>
              </div>
              <button
                onClick={() => handleStatusToggle(ad.id)}
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  ad.status === 'enable'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {ad.status === 'enable' ? 'Enable' : 'Disable'}
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="font-medium text-gray-600">Size:</span>
                <span className="ml-2">{ad.size}</span>
              </div>
              <div>
                <span className="font-medium text-gray-600">Impression:</span>
                <span className="ml-2 px-2 py-1 bg-gray-100 rounded-full">{ad.impression}</span>
              </div>
              <div>
                <span className="font-medium text-gray-600">Click:</span>
                <span className="ml-2 px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full">{ad.click}</span>
              </div>
              <div>
                <span className="font-medium text-gray-600">Redirect:</span>
                <ExternalLink className="ml-2 inline w-4 h-4 text-gray-400" />
              </div>
            </div>

            <button
              onClick={() => handleEdit(ad)}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg mt-2"
            >
              <Edit className="w-4 h-4" />
              Edit
            </button>
          </div>
        ))}
      </div>

      {/* Desktop View - Table Layout */}
      <div className="hidden sm:block overflow-hidden bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs sm:text-sm">Type</th>
                <th className="px-6 py-3 text-left text-xs sm:text-sm">Size</th>
                <th className="px-6 py-3 text-left text-xs sm:text-sm">Impression</th>
                <th className="px-6 py-3 text-left text-xs sm:text-sm">Click</th>
                <th className="px-6 py-3 text-left text-xs sm:text-sm">Redirect</th>
                <th className="px-6 py-3 text-left text-xs sm:text-sm">Status</th>
                <th className="px-6 py-3 text-left text-xs sm:text-sm">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {advertisements.map((ad) => (
                <tr key={ad.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">{ad.type}</td>
                  <td className="px-6 py-4 text-sm">{ad.size}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="px-3 py-1 bg-gray-100 rounded-full">
                      {ad.impression}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full">
                      {ad.click}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <ExternalLink className="w-5 h-5 text-gray-400 hover:text-indigo-600 cursor-pointer" />
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button
                      onClick={() => handleStatusToggle(ad.id)}
                      className={`px-4 py-1 rounded-full text-sm font-medium ${
                        ad.status === 'enable'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {ad.status === 'enable' ? 'Enable' : 'Disable'}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button
                      onClick={() => handleEdit(ad)}
                      className="flex items-center gap-2 px-3 py-1 text-indigo-600 hover:bg-indigo-50 rounded-lg"
                    >
                      <Edit className="w-4 h-4" />
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modals */}
      {showAddModal && (
        <AddAdvertisementModal
          isOpen={showAddModal}
          onClose={() => setShowAddModal(false)}
          onSubmit={(newAd) => {
            setAdvertisements([...advertisements, { id: Date.now(), ...newAd }]);
            setShowAddModal(false);
          }}
        />
      )}

      {showEditModal && (
        <EditAdvertisementModal
          isOpen={showEditModal}
          onClose={() => setShowEditModal(false)}
          advertisement={selectedAd}
          onSubmit={(updatedAd) => {
            setAdvertisements(ads =>
              ads.map(ad => (ad.id === updatedAd.id ? updatedAd : ad))
            );
            setShowEditModal(false);
          }}
        />
      )}
    </div>
  );
};

export default AdvertisementList;

