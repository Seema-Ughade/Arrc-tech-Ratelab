import { Plane, FileText, Building2, Diamond, Car, GraduationCap } from 'lucide-react'

const categories = [
  {
    icon: Plane,
    label: 'Airline',
    href: '#'
  },
  {
    icon: FileText,
    label: 'Travel Agency',
    href: '#'
  },
  {
    icon: Building2,
    label: 'Bank',
    href: '#'
  },
  {
    icon: Diamond,
    label: 'Jewellry',
    href: '#'
  },
  {
    icon: Car,
    label: 'Cars',
    href: '#'
  },
  {
    icon: GraduationCap,
    label: 'Education',
    href: '#'
  }
]

const CategoryButton = ({ icon: Icon, label, href }) => {
  return (
    <a
      href={href}
      className="flex items-center gap-2 hover:bg-orange-500 rounded-full bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-sm transition-all hover:-translate-y-0.5 hover:text-white hover:shadow-md"
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </a>
  )
}

export default function CategorySection() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-yellow-50 to-blue-50 opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(149,239,174,0.15)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,228,132,0.13)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(129,209,247,0.13)_0%,transparent_50%)]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Browse Super Companies by Category
          </h2>
          <div className="flex flex-wrap items-center  justify-center gap-4">
            {categories.map((category) => (
              <CategoryButton key={category.label} {...category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

