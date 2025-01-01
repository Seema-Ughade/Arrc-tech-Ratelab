import React from 'react';
import { HandshakeIcon, DiamondIcon, StarIcon } from 'lucide-react';

const WhyRatelab = () => {
  const features = [
    {
      icon: HandshakeIcon,
      title: "Trusted Platform",
      description: "Animi corporis et exercitationem natus, dolore adipisci optio sunt, eum, voluptas minus laudantium aliquam pariatur in. Tenetur atque eligendi consequatur rem."
    },
    {
      icon: DiamondIcon,
      title: "Loyalty and Rewards",
      description: "Animi corporis et exercitationem natus, dolore adipisci optio sunt, eum, voluptas minus laudantium aliquam pariatur in. Tenetur atque eligendi consequatur rem."
    },
    {
      icon: StarIcon,
      title: "Reviews and Ratings",
      description: "Animi corporis et exercitationem natus, dolore adipisci optio sunt, eum, voluptas minus laudantium aliquam pariatur in. Tenetur atque eligendi consequatur rem."
    }
  ];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h3 className="text-orange-400 font-semibold text-lg mb-4">
          Why Ratelab
        </h3>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 max-w-4xl mx-auto leading-tight">
          Why would you give a review of our platform
        </h2>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="relative bg-white p-6 rounded-lg shadow-sm group hover:shadow-md transition-shadow duration-300"
          >
            {/* Orange Decorative Elements */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-orange-400/10 rounded-bl-[100px]" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-orange-400/10 rounded-tr-[100px]" />
            
            {/* Icon */}
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-orange-400" />
              </div>
            </div>

            {/* Content */}
            <div className="relative">
              <h3 className="text-xl font-bold text-navy-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyRatelab;

