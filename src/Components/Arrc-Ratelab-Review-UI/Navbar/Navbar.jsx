// import { useState, useEffect } from 'react'
// import { Menu, X, ChevronDown } from 'lucide-react'
// import mainlogo from '../../../assets/mainlogo.png';
// const Button = ({ className, children, ...props }) => {
//   return (
//     <button
//       className={`inline-flex items-center justify-center rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${className}`}
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

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const toggleMenu = () => {
//     setIsOpen(!isOpen)
//     setIsLanguageOpen(false)
//   }

//   const toggleLanguage = () => {
//     setIsLanguageOpen(!isLanguageOpen)
//   }

//   return (
//     <>
//       <nav className={`fixed left-0 right-0 top-0 z-40 bg-[#1a1b3a] text-white transition-shadow ${isScrolled ? 'shadow-lg' : ''}`}>
//         <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
//           {/* Logo */}
//           <div className="flex items-center">
//             <a href="/" className="flex items-center gap-2">
//               <img
//                 src={mainlogo}
//                 alt="RateLab Logo"
//                 className="h-10 w-10 bg-white rounded-full"
//               />
//               <span className="text-xl font-semibold">
//                 Rate<span className="text-orange-500">Lab</span><br/>
//   <span className="text-sm">
//     <span className="text-white">Arrc</span>{" "}
//     <span className="text-orange-500">Technology</span>
//   </span>
//               </span>
//             </a>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden items-center gap-8 lg:flex">
//             <a href="/" className="text-orange-500 hover:text-orange-400">
//               Home
//             </a>
//             <a href="/companies" className="hover:text-orange-500">
//               Companies
//             </a>
//             <a href="/blog" className="hover:text-orange-500">
//               Blog
//             </a>
//             <a href="/review" className="hover:text-orange-500">
//               Review
//             </a>
//             <a href="/contact" className="hover:text-orange-500">
//               Contact
//             </a>
//           </div>

//           {/* Desktop Language & Login */}
//           <div className="hidden items-center gap-4 lg:flex">
//             <div className="relative">
//               <button
//                 onClick={toggleLanguage}
//                 className="flex items-center gap-2 hover:text-orange-500"
//               >
//                 <img
//                   src="/placeholder.svg?height=20&width=20"
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
//                       src="/placeholder.svg?height=20&width=20"
//                       alt="Hindi"
//                       className="h-5 w-5 rounded-sm"
//                     />
//                     Hindi
//                   </button>
//                   <button className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
//                     <img
//                       src="/placeholder.svg?height=20&width=20"
//                       alt="Bangla"
//                       className="h-5 w-5 rounded-sm"
//                     />
//                     Bangla
//                   </button>
//                 </div>
//               )}
//             </div>
//             <Button>
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
//             className="fixed inset-y-0 left-0 w-64 bg-[#1a1b3a] transform transition-transform duration-300 ease-in-out"
//             onClick={e => e.stopPropagation()}
//           >
//             <div className="flex h-16 items-center justify-between px-4">
//               <a href="/" className="flex items-center gap-2">
//                 <img
//                   src="/placeholder.svg?height=40&width=40"
//                   alt="RateLab Logo"
//                   className="h-10 w-10 bg-white rounded-md"
//                 />
//                 <span className="text-xl font-semibold">
//                   Rate<span className="text-orange-500">Lab</span>
//                 </span>
//               </a>
//               <button
//                 onClick={toggleMenu}
//                 className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-[#2a2b4a]"
//               >
//                 <X className="h-6 w-6" />
//               </button>
//             </div>
//             <div className="px-4 pb-6">
//               <div className="flex items-center justify-between py-4">
//                 <div className="relative">
//                   <button
//                     onClick={toggleLanguage}
//                     className="flex items-center gap-2 text-lg"
//                   >
//                     <img
//                       src="/placeholder.svg?height=20&width=20"
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
//                           src="/placeholder.svg?height=20&width=20"
//                           alt="Hindi"
//                           className="h-5 w-5 rounded-sm"
//                         />
//                         Hindi
//                       </button>
//                       <button className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm hover:bg-[#3a3b5a]">
//                         <img
//                           src="/placeholder.svg?height=20&width=20"
//                           alt="Bangla"
//                           className="h-5 w-5 rounded-sm"
//                         />
//                         Bangla
//                       </button>
//                     </div>
//                   )}
//                 </div>
//                 <Button>
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
//                 <a
//                   href="/"
//                   className="block py-4 text-lg text-orange-500 hover:text-orange-400"
//                 >
//                   Home
//                 </a>
//                 <a
//                   href="/companies"
//                   className="block py-4 text-lg hover:text-orange-500"
//                 >
//                   Companies
//                 </a>
//                 <a
//                   href="/blog"
//                   className="block py-4 text-lg hover:text-orange-500"
//                 >
//                   Blog
//                 </a>
//                 <a
//                   href="/review"
//                   className="block py-4 text-lg hover:text-orange-500"
//                 >
//                   Review
//                 </a>
//                 <a
//                   href="/contact"
//                   className="block py-4 text-lg hover:text-orange-500"
//                 >
//                   Contact
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import mainlogo from '../../../assets/mainlogo.png';
import { Link } from "react-router-dom";

const Button = ({ className, children, ...props }) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md bg-orange-500 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setIsLanguageOpen(false)
  }

  const toggleLanguage = () => {
    setIsLanguageOpen(!isLanguageOpen)
  }

  return (
    <>
      <nav className={`fixed left-0 right-0 top-0 z-40 bg-[#1a1b3a] text-white transition-shadow ${isScrolled ? 'shadow-lg' : ''}`}>
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-3">
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
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-10 lg:flex">
          <Link
                      to="/" className="text-orange-500 hover:text-orange-400">
              Home
              </Link>
            <Link
                      to="/Companies" className="hover:text-orange-500">
              Companies
              </Link>
            <Link
                      to="/Blog" className="hover:text-orange-500">
              Blog
              </Link>
            <Link
                      to="/Review" className="hover:text-orange-500">
              Review
              </Link>
            {/* <a href="/contact" className="hover:text-orange-500">
              Contact
            </a> */}
            <Link
                      to="/contact"
className="hover:text-orange-500"                      
                    >
                      Contact
                    </Link>

          </div>

          {/* Desktop Language & Login */}
          <div className="hidden items-center gap-6 lg:flex">
            <div className="relative">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 hover:text-orange-500"
              >
                <img
                  src={'https://script.viserlab.com/ratelab/assets/images/language/664c6885ecc541716283525.png'}
                  alt="English"
                  className="h-5 w-5 rounded-sm"
                />
                English
                <ChevronDown className="h-4 w-4" />
              </button>
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-md bg-white py-1 shadow-lg">
                  <button className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                    <img
                      src={'https://script.viserlab.com/ratelab/assets/images/language/664c6869b970c1716283497.png'}
                      alt="Hindi"
                      className="h-5 w-5 rounded-sm"
                    />
                    Hindi
                  </button>
                  <button className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                    <img
                      src={'https://script.viserlab.com/ratelab/assets/images/language/664c684f5b7341716283471.png'}
                      alt="Bangla"
                      className="h-5 w-5 rounded-sm"
                    />
                    Bangla
                  </button>
                </div>
              )}
            </div>
            <Button>
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
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-[#2a2b4a] lg:hidden"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 lg:hidden" onClick={toggleMenu}>
          {/* Mobile Menu Drawer */}
          <div 
            className="fixed inset-y-0 left-0 w-72 bg-[#1a1b3a] transform transition-transform duration-300 ease-in-out"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex h-[72px] items-center justify-between px-4">
              <a href="/" className="flex items-center gap-3">
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
              </a>
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-[#2a2b4a]"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="px-4 pb-6">
              <div className="flex items-center justify-between py-4">
                <div className="relative text-white">
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center gap-2  text-lg"
                  >
                    <img
                      src={'https://script.viserlab.com/ratelab/assets/images/language/664c6885ecc541716283525.png'}
                      alt="English"
                      className="h-5 w-5 rounded-sm"
                    />
                    English
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {isLanguageOpen && (
                    <div className="absolute left-0 mt-2 w-40 rounded-md bg-[#2a2b4a] py-1 shadow-lg">
                      <button className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm hover:bg-[#3a3b5a]">
                        <img
                          src={'https://script.viserlab.com/ratelab/assets/images/language/664c6885ecc541716283525.png'}
                          alt="Hindi"
                          className="h-5 w-5 rounded-sm"
                        />
                        Hindi
                      </button>
                      <button className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm hover:bg-[#3a3b5a]">
                        <img
                      src={'https://script.viserlab.com/ratelab/assets/images/language/664c684f5b7341716283471.png'}
                      alt="Bangla"
                          className="h-5 w-5 rounded-sm"
                        />
                        Bangla
                      </button>
                    </div>
                  )}
                </div>
                <Button>
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
                </Button>
              </div>
              <div className="space-y-0 divide-y divide-gray-800">
                <Link
                  to ="/"
                  className="block py-4 text-lg text-orange-500 hover:text-orange-400"
                >
                  Home
                </Link>
                <Link
                  to="/Companies"
                  className="block py-4 text-lg text-orange-500 hover:text-orange-500"
                >
                  Companies
                </Link>
                <Link
                  to ="/Blog"
                  className="block py-4 text-lg text-orange-500 hover:text-orange-500"
                >
                  Blog
                </Link>
                <Link
                  to ="/Review"
                  className="block py-4 text-lg text-orange-500 hover:text-orange-500"
                >
                  Review
                </Link>
                <Link
                  to ="/contact"
                  className="block py-4 text-lg text-orange-500 hover:text-orange-500"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

