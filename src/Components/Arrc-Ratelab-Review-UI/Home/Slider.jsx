
// import React from 'react'
// import { motion } from 'framer-motion'
// import { Search } from 'lucide-react'

// const Slider = () => {
//   const [searchQuery, setSearchQuery] = React.useState('')

//   const handleSearch = (e) => {
//     e.preventDefault()
//     console.log('Searching for:', searchQuery)
//   }

//   return (
//     <div className="relative h-screen w-full overflow-hidden bg-gradient-to-r from-cyan-100 to-sky-100">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage:
//             'url(https://script.viserlab.com/ratelab/assets/images/frontend/banner/6353a8fcb56c71666427132.jpg)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           opacity: 0.9,
//         }}
//       />

//       {/* Content Container */}
//       <div className="relative z-10 flex h-full items-center px-4 sm:px-6 lg:px-12">
//         <div className="max-w-3xl text-left">
//           {/* Animated Heading */}
//           <motion.h1
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="mb-6 text-4xl  font-bold tracking-tight text-[#1a237e] sm:text-6xl"
//           >
//             Accelerate brand <br /> growth with{' '}<br />
//             <span className="text-[#283593]">Reviews and <br /> Loyalty</span>
//           </motion.h1>

//           {/* Animated Subheading */}
//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="mb-12 text-xl text-gray-700"
//           >
//             Read reviews. Write reviews. Find companies.
//           </motion.p>

//           {/* Animated Search Form */}
//           <motion.form
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             onSubmit={handleSearch}
//             className="flex w-full max-w-lg gap-4"
//           >
//             <input
//               type="text"
//               placeholder="Search Here..."
//               className="flex-1 rounded-lg border-0 px-4 py-3 shadow-lg focus:ring-2 focus:ring-blue-500"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <button
//               type="submit"
//               className="rounded-lg bg-[#ffa726] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#ff9800] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
//             >
//               <span className="hidden sm:inline">Search</span>
//               <Search className="h-5 w-5 sm:hidden" />
//             </button>
//           </motion.form>
//         </div>
//       </div>

//       {/* Animated Icon */}
//       <motion.div
//         initial={{ opacity: 0, rotate: -180 }}
//         animate={{ opacity: 1, rotate: 0 }}
//         transition={{ duration: 1 }}
//         className="absolute right-4 top-4 text-yellow-400"
//       >
//         <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
//         </svg>
//       </motion.div>
//     </div>
//   )
// }

// export default Slider






import React from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import slidernew from '../../../assets/slidernew.jpg'

const Slider = () => {
  const [searchQuery, setSearchQuery] = React.useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
  }

  return (
    <div className="relative h-screen   w-full overflow-hidden bg-gradient-to-r from-cyan-100 to-sky-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            // 'url(https://script.viserlab.com/ratelab/assets/images/frontend/banner/6353a8fcb56c71666427132.jpg)',
            `url(${slidernew})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.9,
        }}
      />

      {/* Content Container */}
      <div className="relative lg:ml-28 lg:mt-9 z-10 flex h-full items-center px-4 sm:px-6 lg:px-12">
        {/* Left Side Content */}
        <div className="w-full max-w-xl text-left">
          {/* Animated Heading */}
          {/* <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-4xl lg:leading-tight font-extrabold tracking-tight text-[#1a237e] sm:text-6xl "
          >
            <span className="block mb-2">Accelerate brand</span>
            <span className="block mb-2">growth with</span>
            <span className="block mb-2">Reviews and</span>
            <span className="block">Loyalty</span>
          </motion.h1> */}

<motion.h1
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="mb-6 text-4xl text-orange-500 lg:leading-tight font-extrabold tracking-tight sm:text-6xl"
>
  <span className="block mb-2 text-blue-600 ">Accelerate <span className='text-orange-500'>brand</span> </span>
  <span className="block mb-2 text-pink-600 ">growth with</span>
  <span className="block text-pink-600 mb-2 ">Reviews and</span>
  <span className="block text-pink-600 ">Loyalty</span>
</motion.h1>
          {/* Animated Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 text-lg font-extrabold text-white sm:text-xl"
          >
            Discover companies, read reviews, and share your experience with the world.
          </motion.p>

          {/* Animated Search Form */}

<motion.form
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      onSubmit={handleSearch}
      className="flex items-center w-full sm:w-auto gap-6 relative"
    >
      {/* Input container with button inside */}
      <div className="w-full sm:w-[700px] relative">
        <input
          type="text"
          placeholder="Search Here..."
          className="w-full rounded-lg border border-gray-300 bg-white px-6 py-4 text-lg shadow-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500 pr-16"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/* Button inside the input */}
        <button
          type="submit"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center gap-2 rounded-lg bg-[#fd7e14] px-6 py-4 font-semibold text-white shadow-md transition hover:bg-[#ff9800] focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          <Search className="h-5 w-5" />
          <span className="hidden sm:inline">Search</span>
        </button>
      </div>
    
    </motion.form>

        </div>

        {/* Spacer for Right Side */}
        <div className="hidden lg:block lg:w-1/2" />
      </div>

      {/* Animated Icon */}
      <motion.div
        initial={{ opacity: 0, rotate: -180 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1 }}
        className="absolute right-4 top-4 text-yellow-400"
      >
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </motion.div>
    </div>
  )
}

export default Slider
