import React from 'react';
import { BookOpen, Heart } from 'lucide-react';

const ReviewsLanding = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Give Your Real Review",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugiat iure, sunt rerum saepe odit atque porro exercitationem enim dolor asperiores. Aliquam quo, iure ullam sed perferendis corrupti odit earum atque porro exercitationem.",
      buttonText: "Join Us"
    },
    {
      icon: Heart,
      title: "Show Your Brand Trust",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugiat iure, sunt rerum saepe odit atque porro exercitationem enim dolor asperiores. Aliquam quo, iure ullam sed perferendis corrupti odit earum atque porro exercitationem.",
      buttonText: "Get Started"
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[url('/wave-pattern.svg')] opacity-5" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="inline-block  text-orange-400 px-4 py-2 mb-2">
                Give reviews or
              </span>
              <br />
              <span className="text-navy-900">
                building brand trust
              </span>
            </h1>
            <p className="text-gray-600 max-w-3xl text-lg">
              Lorem recusandae minima asperiores libero. Expedita consectetur tenetur itaque distinctio animi, officiis illum dolorem excepturi minus blanditiis nam porro dignissimos commodi numquam soluta quam.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-start">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-gray-700" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {feature.description}
                  </p>

                  {/* Button */}
                  <button className="px-6 py-3 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors">
                    {feature.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsLanding;

