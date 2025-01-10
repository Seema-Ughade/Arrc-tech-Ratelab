// import React from 'react';
// import { HandshakeIcon, DiamondIcon, StarIcon } from 'lucide-react';

// const WhyRatelab = () => {
//   const features = [
//     {
//       icon: HandshakeIcon,
//       title: "Trusted Platform",
//       description: "Our platform connects users with verified vendors and professionals, ensuring a safe and reliable experience. We prioritize transparency and build long-lasting trust with our community."
//     },
//     {
//       icon: DiamondIcon,
//       title: "Loyalty and Rewards",
//       description: "Earn points on every purchase and enjoy exclusive rewards and discounts. Our loyalty program is designed to appreciate your commitment and offer you added value."
//     },
//     {
//       icon: StarIcon,
//       title: "Reviews and Ratings",
//       description: "Get insights from real customer feedback. Our reviews and ratings system helps you make informed decisions based on the experiences of others in our community."
//     }
//   ];
  
//   return (
//     <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
//       {/* Section Header */}
//       <div className="text-center mb-12">
//         <h3 className="text-orange-400 font-semibold text-lg mb-4">
//           Why Ratelab
//         </h3>
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 max-w-4xl mx-auto leading-tight">
//           Why would you give a review of our platform
//         </h2>
//       </div>

//       {/* Features Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {features.map((feature, index) => (
//           <div 
//             key={index} 
//             className="relative bg-white p-6 rounded-lg shadow-sm group hover:shadow-md transition-shadow duration-300"
//           >
//             {/* Orange Decorative Elements */}
//             <div className="absolute top-0 right-0 w-16 h-16 bg-orange-400/10 rounded-bl-[100px]" />
//             <div className="absolute bottom-0 left-0 w-16 h-16 bg-orange-400/10 rounded-tr-[100px]" />
            
//             {/* Icon */}
//             <div className="relative mb-6">
//               <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center">
//                 <feature.icon className="w-8 h-8 text-orange-400" />
//               </div>
//             </div>

//             {/* Content */}
//             <div className="relative">
//               <h3 className="text-xl font-bold text-navy-900 mb-4">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-600 leading-relaxed">
//                 {feature.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WhyRatelab;


import React from "react";
import { HandshakeIcon, DiamondIcon, StarIcon } from "lucide-react";

const WhyRatelab = () => {
  const features = [
    {
      icon: HandshakeIcon,
      title: "Trusted Platform",
      description:
        "Our platform connects users with verified vendors and professionals, ensuring a safe and reliable experience. We prioritize transparency and build long-lasting trust with our community.",
    },
    {
      icon: DiamondIcon,
      title: "Loyalty and Rewards",
      description:
        "Earn points on every purchase and enjoy exclusive rewards and discounts. Our loyalty program is designed to appreciate your commitment and offer you added value.",
    },
    {
      icon: StarIcon,
      title: "Reviews and Ratings",
      description:
        "Get insights from real customer feedback. Our reviews and ratings system helps you make informed decisions based on the experiences of others in our community.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h3 className="text-orange-500 font-semibold text-lg mb-4 uppercase tracking-wide">
          Why Ratelab
        </h3>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 max-w-4xl mx-auto leading-snug">
          Why would you give a review of our platform
        </h2>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative bg-white p-8 rounded-2xl shadow-lg group hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            {/* Decorative Light Shapes */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-tr from-pink-300 to-yellow-300 opacity-30 rounded-full blur-lg group-hover:opacity-50 transition-all duration-300"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-bl from-blue-300 to-teal-300 opacity-30 rounded-full blur-lg group-hover:opacity-50 transition-all duration-300"></div>

            {/* Icon */}
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-gradient-to-tr from-orange-200 to-orange-500 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-white group-hover:text-gray-800 transition-all duration-300" />
              </div>
            </div>

            {/* Content */}
            <div className="relative">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-orange-500 transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-all duration-300">
                {feature.description}
              </p>
            </div>

            {/* Decorative Border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500 rounded-2xl transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyRatelab;
