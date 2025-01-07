import { Star, Edit, Trash2 } from 'lucide-react'

export default function CompanyList() {
  // Sample data - in a real app this would come from an API or props
  const companies = [
    {
      id: 1,
      name: "Tech Solutions Inc",
      address: "123 Tech Valley, CA",
      rating: 4,
      status: "active"
    },
    {
      id: 2,
      name: "Digital Dynamics",
      address: "456 Innovation Ave, NY",
      rating: 5,
      status: "pending"
    }
  ]

  const renderRating = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'
        }`}
      />
    ))
  }

  const renderStatus = (status) => {
    const statusStyles = {
      active: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      inactive: 'bg-red-100 text-red-800'
    }

    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    )
  }

  return (
    <div className="w-full bg-white shadow-sm rounded-lg overflow-hidden">
      {/* Background Image */}
      {/* <div
        className="w-full h-[300px]"
        style={{
          backgroundImage: 'url(https://script.viserlab.com/ratelab/assets/images/frontend/breadcrumb/6354d380899a21666503552.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      /> */}

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 z-10 mt-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Companies List
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="bg-[#1a1b3a] text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">S.N.</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">NAME</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">ADDRESS</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">RATING</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">STATUS</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {companies.length > 0 ? (
                companies.map((company, index) => (
                  <tr key={company.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-500">{index + 1}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{company.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{company.address}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        {renderRating(company.rating)}
                      </div>
                    </td>
                    <td className="px-6 py-4">{renderStatus(company.status)}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <button
                          className="text-blue-600 hover:text-blue-800"
                          onClick={() => console.log('Edit', company.id)}
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          className="text-red-600 hover:text-red-800"
                          onClick={() => console.log('Delete', company.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                    Data not found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
