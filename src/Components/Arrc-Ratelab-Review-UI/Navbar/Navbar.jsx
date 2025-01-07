

// import { useState, useEffect } from 'react'
// import { Menu, X, ChevronDown } from 'lucide-react'
// import { Link, useNavigate, useLocation } from "react-router-dom"
// import mainlogo from '../../../assets/mainlogo.png';

// const Button = ({ className, children, ...props }) => {
//   return (
//     <button
//       className={`inline-flex items-center justify-center rounded-md bg-orange-500 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   )
// }

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [isLanguageOpen, setIsLanguageOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const navigate = useNavigate()
//   const location = useLocation()

//   const handleClick = () => {
//     // Navigate to the AdminLayout route
//     navigate('/user/login');
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   useEffect(() => {
//     // Scroll to top when the route changes
//     window.scrollTo(0, 0)
//   }, [location.pathname])

//   const toggleMenu = () => {
//     setIsOpen(!isOpen)
//     setIsLanguageOpen(false)
//   }

//   const toggleLanguage = () => {
//     setIsLanguageOpen(!isLanguageOpen)
//   }

//   const handleNavigation = (to) => {
//     navigate(to)
//     setIsOpen(false) // Close mobile menu after navigation
//   }

//   const navLinks = [
//     { to: "/", label: "Home" },
//     { to: "/Companies", label: "Companies" },
//     { to: "/Blog", label: "Blog" },
//     { to: "/Review", label: "Review" },
//     { to: "/contact", label: "Contact" }
//   ]

//   return (
//     <>
//       <nav className={`fixed left-0 right-0 top-0 z-40 bg-[#1a1b3a] text-white transition-shadow ${isScrolled ? 'shadow-lg' : ''}`}>
//         <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center gap-3">
//               <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white p-2">
//                 <img
//                   src={mainlogo}
//                   alt="RateLab Logo"
//                   className="h-full w-full object-contain"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-xl font-semibold leading-none">
//                   Rate<span className="text-orange-500">Lab</span>
//                 </span>
//                 <span className="mt-0.5 text-[13px] leading-none">
//                   <span className="text-white">Arrc</span>{" "}
//                   <span className="text-orange-500">Technology</span>
//                 </span>
//               </div>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden items-center gap-10 lg:flex">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.to}
//                 to={link.to}
//                 className="hover:text-orange-500"
//                 onClick={() => handleNavigation(link.to)}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>

//           {/* Desktop Language & Login */}
//           <div className="hidden items-center gap-6 lg:flex">
//             <div className="relative">
//               <button
//                 onClick={toggleLanguage}
//                 className="flex items-center gap-2 hover:text-orange-500"
//               >
//                 <img
//                   src={'https://script.viserlab.com/ratelab/assets/images/language/664c6885ecc541716283525.png'}
//                   alt="English"
//                   className="h-5 w-5 rounded-sm"
//                 />
//                 English
//                 <ChevronDown className="h-4 w-4" />
//               </button>
//               {isLanguageOpen && (
//                 <div className="absolute right-0 mt-2 w-40 rounded-md bg-white py-1 shadow-lg">
//                   <button className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
//                     <img
//                       src={'https://script.viserlab.com/ratelab/assets/images/language/664c6869b970c1716283497.png'}
//                       alt="Hindi"
//                       className="h-5 w-5 rounded-sm"
//                     />
//                     Hindi
//                   </button>
//                   <button className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
//                     <img
//                       src={'https://script.viserlab.com/ratelab/assets/images/language/664c684f5b7341716283471.png'}
//                       alt="Bangla"
//                       className="h-5 w-5 rounded-sm"
//                     />
//                     Bangla
//                   </button>
//                 </div>
//               )}
//             </div>
//             <Button
//                   onClick={handleClick}
// >
//               <svg
//                 className="mr-2 h-4 w-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M11 16l-4-4m0 0l4-4m-4 4h14"
//                 />
//               </svg>
//               Login
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={toggleMenu}
//             className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-[#2a2b4a] lg:hidden"
//           >
//             {isOpen ? (
//               <X className="h-6 w-6" />
//             ) : (
//               <Menu className="h-6 w-6" />
//             )}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu Overlay */}
//       {isOpen && (
//         <div className="fixed inset-0 z-50 bg-black/50 lg:hidden" onClick={toggleMenu}>
//           {/* Mobile Menu Drawer */}
//           <div 
//             className="fixed inset-y-0 left-0 w-72 bg-[#1a1b3a] transform transition-transform duration-300 ease-in-out"
//             onClick={e => e.stopPropagation()}
//           >
//             <div className="flex h-[72px] items-center justify-between px-4">
//               <Link to="/" className="flex items-center gap-3" onClick={() => handleNavigation('/')}>
//                 <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white p-2">
//                   <img
//                     src={mainlogo}
//                     alt="RateLab Logo"
//                     className="h-full w-full object-contain"
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <span className="text-xl text-white font-semibold leading-none">
//                     Rate<span className="text-orange-500">Lab</span>
//                   </span>
//                   <span className="mt-0.5 text-[13px] leading-none">
//                     <span className="text-white">Arrc</span>{" "}
//                     <span className="text-orange-500">Technology</span>
//                   </span>
//                 </div>
//               </Link>
//               <button
//                 onClick={toggleMenu}
//                 className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-[#2a2b4a]"
//               >
//                 <X className="h-6 w-6" />
//               </button>
//             </div>
//             <div className="px-4 pb-6">
//               <div className="flex items-center justify-between py-4">
//                 <div className="relative text-white">
//                   <button
//                     onClick={toggleLanguage}
//                     className="flex items-center gap-2  text-lg"
//                   >
//                     <img
//                       src={'https://script.viserlab.com/ratelab/assets/images/language/664c6885ecc541716283525.png'}
//                       alt="English"
//                       className="h-5 w-5 rounded-sm"
//                     />
//                     English
//                     <ChevronDown className="h-4 w-4" />
//                   </button>
//                   {isLanguageOpen && (
//                     <div className="absolute left-0 mt-2 w-40 rounded-md bg-[#2a2b4a] py-1 shadow-lg">
//                       <button className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm hover:bg-[#3a3b5a]">
//                         <img
//                           src={'https://script.viserlab.com/ratelab/assets/images/language/664c6885ecc541716283525.png'}
//                           alt="Hindi"
//                           className="h-5 w-5 rounded-sm"
//                         />
//                         Hindi
//                       </button>
//                       <button className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm hover:bg-[#3a3b5a]">
//                         <img
//                           src={'https://script.viserlab.com/ratelab/assets/images/language/664c684f5b7341716283471.png'}
//                           alt="Bangla"
//                           className="h-5 w-5 rounded-sm"
//                         />
//                         Bangla
//                       </button>
//                     </div>
//                   )}
//                 </div>
//                 <Button
//                       onClick={handleClick}
// >
//                   <svg
//                     className="mr-2 h-4 w-4"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M11 16l-4-4m0 0l4-4m-4 4h14"
//                     />
//                   </svg>
//                   Login
//                 </Button>
//               </div>
//               <div className="space-y-0 divide-y divide-gray-800">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.to}
//                     to={link.to}
//                     className="block py-4 text-lg text-orange-500 hover:text-orange-400"
//                     onClick={() => handleNavigation(link.to)}
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }


import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import mainlogo from '../../../assets/mainlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isCompanyMenuOpen, setIsCompanyMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const languageRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsLanguageOpen(false);
    setIsCompanyMenuOpen(false);
    setIsProfileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/user/login');
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/Companies", label: "Companies" },
    { to: "/Blog", label: "Blog" },
    { to: "/Review", label: "Review" },
    { to: "/contact", label: "Contact" }
  ];

  const userMenuLinks = [
    { to: '/user/company/all', label: 'Company List' },
    { to: '/user/company/create', label: 'Add Company' },
  ];

  const profileMenuLinks = [
    { to: '/user/profile', label: 'My Profile' },
    { to: '/user/change-password', label: 'Change Password' },
    { to: 'user/ticket', label: 'My Support Tickets' },
    { to: 'user/ticket', label: 'Open New Ticket' },
  ];

  const languages = [
    {
      code: 'en',
      name: 'English',
      flag: 'https://script.viserlab.com/ratelab/assets/images/language/664c6885ecc541716283525.png'
    },
    {
      code: 'hi',
      name: 'Hindi',
      flag: 'https://script.viserlab.com/ratelab/assets/images/language/664c6869b970c1716283497.png'
    },
    {
      code: 'bn',
      name: 'Bangla',
      flag: 'https://script.viserlab.com/ratelab/assets/images/language/664c684f5b7341716283471.png'
    }
  ];

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <nav 
      className={`fixed left-0 right-0 top-0 z-40 bg-[#1a1b3a] text-white transition-shadow ${
        isScrolled ? 'shadow-lg' : ''
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-3" aria-label="RateLab Home">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white p-2">
              <img
                src={mainlogo}
                alt="RateLab Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-semibold leading-none">
                Rate<span className="text-orange-500">Lab</span>
              </span>
              <span className="mt-0.5 text-[13px] leading-none">
                <span className="text-white">Arrc</span>{" "}
                <span className="text-orange-500">Technology</span>
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="transition-colors hover:text-orange-500"
            >
              {link.label}
            </Link>
          ))}
          {user && (
            <>
              <div className="relative group">
                <button 
                  className="flex items-center gap-2 hover:text-orange-500"
                  aria-expanded={isCompanyMenuOpen}
                  aria-haspopup="true"
                >
                  My Company
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                  {userMenuLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="relative group">
                <button 
                  className="flex items-center gap-2 hover:text-orange-500"
                  aria-expanded={isProfileMenuOpen}
                  aria-haspopup="true"
                >
                  <User className="h-4 w-4" />
                  {user.firstName}
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                  {profileMenuLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Desktop Language & Login/Dashboard */}
        <div className="hidden items-center gap-6 lg:flex">
          <div className="relative" ref={languageRef}>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 hover:text-orange-500"
              aria-expanded={isLanguageOpen}
              aria-haspopup="true"
            >
              <img
                src={languages[0].flag}
                alt={languages[0].name}
                className="h-5 w-5 rounded-sm"
              />
              {languages[0].name}
              <ChevronDown className="h-4 w-4" />
            </button>
            {isLanguageOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-md bg-white py-1 shadow-lg z-50">
                {languages.slice(1).map(lang => (
                  <button
                    key={lang.code}
                    className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <img
                      src={lang.flag}
                      alt={lang.name}
                      className="h-5 w-5 rounded-sm"
                    />
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          {!user ? (
            <Link
              to="/user/login"
              className="inline-flex items-center justify-center rounded-md bg-orange-500 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
            >
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14"
                />
              </svg>
              Login
            </Link>
          ) : (
            <Link
              to="/user"
              className="inline-flex items-center justify-center rounded-md bg-orange-500 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
            >
              <User className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-[#2a2b4a] lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 lg:hidden">
          {/* Mobile Menu Drawer */}
          <div 
            ref={mobileMenuRef}
            id="mobile-menu"
            className="fixed inset-y-0 left-0 w-72 bg-[#1a1b3a] transform transition-transform duration-300 ease-in-out overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex h-[72px] items-center justify-between px-4">
              <Link to="/" className="flex items-center gap-3" onClick={toggleMenu}>
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white p-2">
                  <img
                    src={mainlogo}
                    alt="RateLab Logo"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl text-white font-semibold leading-none">
                    Rate<span className="text-orange-500">Lab</span>
                  </span>
                  <span className="mt-0.5 text-[13px] leading-none">
                    <span className="text-white">Arrc</span>{" "}
                    <span className="text-orange-500">Technology</span>
                  </span>
                </div>
              </Link>
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-[#2a2b4a]"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="px-4 pb-6">
              <div className="flex items-center justify-between py-4">
                <div className="relative text-white">
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center gap-2 text-lg"
                    aria-expanded={isLanguageOpen}
                  >
                    <img
                      src={languages[0].flag}
                      alt={languages[0].name}
                      className="h-5 w-5 rounded-sm"
                    />
                    {languages[0].name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {isLanguageOpen && (
                    <div className="absolute left-0 mt-2 w-40 rounded-md bg-[#2a2b4a] py-1 shadow-lg z-50">
                      {languages.slice(1).map(lang => (
                        <button
                          key={lang.code}
                          className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm hover:bg-[#3a3b5a]"
                        >
                          <img
                            src={lang.flag}
                            alt={lang.name}
                            className="h-5 w-5 rounded-sm"
                          />
                          {lang.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {!user ? (
                  <Link
                    to="/user/login"
                    className="inline-flex items-center justify-center rounded-md bg-orange-500 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                    onClick={toggleMenu}
                  >
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 16l-4-4m0 0l4-4m-4 4h14"
                      />
                    </svg>
                    Login
                  </Link>
                ) : (
                  <Link
                    to="/user/dashboard"
                    className="inline-flex items-center justify-center rounded-md bg-orange-500 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                    onClick={toggleMenu}
                  >
                    <User className="mr-2 h-4 w-4" />
                    Dashboard
                  </Link>
                )}
              </div>
              <div className="space-y-1 divide-y divide-gray-800">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block py-3 text-lg text-orange-500 hover:text-orange-400"
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                ))}
                {user && (
                  <>
                    <div className="py-3">
                      <button 
                        className="flex items-center justify-between w-full text-lg text-orange-500 hover:text-orange-400"
                        onClick={() => setIsCompanyMenuOpen(!isCompanyMenuOpen)}
                        aria-expanded={isCompanyMenuOpen}
                      >
                        My Company
                        <ChevronDown className={`h-4 w-4 transform transition-transform ${isCompanyMenuOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isCompanyMenuOpen && (
                        <div className="mt-2 space-y-1 pl-4">
                          {userMenuLinks.map((link) => (
                            <Link
                              key={link.to}
                              to={link.to}
                              className="block py-2 text-sm text-gray-300 hover:text-orange-400"
                              onClick={toggleMenu}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="py-3">
                      <button 
                        className="flex items-center justify-between w-full text-lg text-orange-500 hover:text-orange-400"
                        onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                        aria-expanded={isProfileMenuOpen}
                      >
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          {user.firstName}
                        </div>
                        <ChevronDown className={`h-4 w-4 transform transition-transform ${isProfileMenuOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isProfileMenuOpen && (
                        <div className="mt-2 space-y-1 pl-4">
                          {profileMenuLinks.map((link) => (
                            <Link
                              key={link.to}
                              to={link.to}
                              className="block py-2 text-sm text-gray-300 hover:text-orange-400"
                              onClick={toggleMenu}
                            >
                              {link.label}
                            </Link>
                          ))}
                          <button
                            onClick={() => {
                              handleLogout();
                              toggleMenu();
                            }}
                            className="block w-full text-left py-2 text-sm text-gray-300 hover:text-orange-400"
                          >
                            Logout
                          </button>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

