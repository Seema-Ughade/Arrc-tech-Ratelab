import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Home, Users, Building2, MessageSquare, LayoutGrid, Settings, FileText, ChevronDown, ChevronUp, Ticket, PieChart, Plus, X } from 'lucide-react'

const MenuItem = ({ icon: Icon, label, count, isActive, onClick, children, isOpen }) => {
  const hasChildren = children && children.length > 0
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

  const toggleSubmenu = (e) => {
    e.preventDefault()
    setIsSubmenuOpen(!isSubmenuOpen)
  }

  return (
    <div className="relative">
      <Link
        to="#"
        className={`flex items-center px-4 py-3 text-sm transition-colors ${
          isActive
            ? 'bg-indigo-600 text-white'
            : 'text-gray-200 hover:bg-[#1a1b3a] hover:text-white'
        }`}
        onClick={hasChildren ? toggleSubmenu : onClick}
      >
        <Icon className="h-5 w-5 mr-3" />
        <span className="flex-1">{label}</span>
        {count && (
          <span className="ml-2 rounded-md bg-[#00B8D9] px-2 py-0.5 text-xs">
            {count}
          </span>
        )}
        {hasChildren && (
          <span className="ml-2">
            {isSubmenuOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </span>
        )}
      </Link>
      {hasChildren && isSubmenuOpen && (
        <div className="ml-4 mt-1 space-y-1">
          {children.map((child, index) => (
            <Link
              key={index}
              to={child.path}
              className="flex items-center px-4 py-2 text-sm text-gray-200 hover:bg-[#1a1b3a] hover:text-white"
            >
              <span className="mr-3">•</span>
              {child.label}
              {child.count && (
                <span className="ml-auto rounded-md bg-[#00B8D9] px-2 py-0.5 text-xs">
                  {child.count}
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Sidebar({ isOpen, onClose }) {
  const menuItems = [
    {
      icon: Home,
      label: 'Dashboard',
      path: '/dashboard'
    },
    {
      icon: Building2,
      label: 'Category',
      path: '/category'
    },
    {
      icon: Building2,
      label: 'Companies',
      children: [
        { label: 'All Companies', path: '/companies' },
        { label: 'Approved', path: '/companies/approved' },
        { label: 'Pending', path: '/companies/pending', count: '134' },
        { label: 'Rejected', path: '/companies/rejected' }
      ]
    },
    {
      icon: MessageSquare,
      label: 'Review',
      path: '/review'
    },
    {
      icon: LayoutGrid,
      label: 'Advertisement',
      path: '/advertisement'
    },
    {
      icon: Users,
      label: 'Manage Users',
      count: '!',
      children: [
        { label: 'Active Users', path: '/users/active' },
        { label: 'Banned Users', path: '/users/banned' },
        { label: 'Email Unverified', path: '/users/email-unverified', count: '186' },
        { label: 'Mobile Unverified', path: '/users/mobile-unverified' },
        { label: 'All Users', path: '/users/all' },
        { label: 'Send Notification', path: '/users/notifications' }
      ]
    },
    {
      icon: Ticket,
      label: 'Support Ticket',
      count: '!',
      children: [
        { label: 'Pending Ticket', path: '/tickets/pending', count: '20' },
        { label: 'Closed Ticket', path: '/tickets/closed' },
        { label: 'Answered Ticket', path: '/tickets/answered' },
        { label: 'All Ticket', path: '/tickets/all' }
      ]
    },
    {
      icon: PieChart,
      label: 'Report',
      path: '/report'
    },
    {
      icon: Settings,
      label: 'System Setting',
      path: '/settings'
    },
    {
      icon: FileText,
      label: 'Extra',
      path: '/extra'
    }
  ]

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 z-50 h-full w-64 transform bg-[#0D0F35] transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo section */}
        <div className="flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/ratelab-logo.png"
              alt="RateLab"
              className="h-10 w-10"
            />
            <div>
              <span className="text-xl font-bold text-white">
                Rate<span className="text-orange-500">Lab</span>
              </span>
            </div>
          </Link>
          <button
            onClick={onClose}
            className="lg:hidden text-white hover:text-gray-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="space-y-1 px-2">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              label={item.label}
              count={item.count}
              path={item.path}
              children={item.children}
            />
          ))}
        </nav>

        {/* Version */}
        <div className="absolute bottom-4 left-0 right-0 text-center text-sm font-medium text-indigo-500">
          RATELAB V3.0
        </div>
      </div>
    </>
  )
}

