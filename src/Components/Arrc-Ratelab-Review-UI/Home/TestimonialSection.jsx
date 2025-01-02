import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ar Raad",
    location: "Washington DC, USA",
    image:
      "https://script.viserlab.com/ratelab/assets/images/frontend/testimonial/6354dee02fa141666506464.jpg",
    text: `"Hi, I'm Ar Raad, from USA. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugiat iure, sunt rerum saepe odit atque porro exercitationem enim dolor asperiores. Aliquam quo, iure ullam sed perferendis corrupti odit earum atque porro. That is my say about this nice platform."`,
  },
  {
    id: 2,
    name: "Maria Smith",
    location: "New York, USA",
    image:
      "https://script.viserlab.com/ratelab/assets/images/frontend/testimonial/6354dee02fa141666506465.jpg",
    text: `"I'm Maria Smith from New York. Ratelab has transformed the way we handle customer reviews and loyalty programs. The platform is user-friendly and highly effective."`,
  },
  {
    id: 3,
    name: "Liam Johnson",
    location: "London, UK",
    image:
      "https://script.viserlab.com/ratelab/assets/images/frontend/testimonial/6354dee02fa141666506466.jpg",
    text: `"Liam here from London. The insights provided by Ratelab have been invaluable for our business growth. Highly recommend to any company looking to boost their brand."`,
  },
  // Add more testimonials as needed
];

const faqs = [
  {
    question: "Why will you use Ratelab?",
    answer: "Ratelab offers a comprehensive solution for managing customer reviews and loyalty programs, enhancing your brand's credibility and customer satisfaction.",
  },
  {
    question: "Why is the platform considered the best?",
    answer: "Ratelab stands out with its user-friendly interface, powerful analytics, and seamless integration capabilities, making it the preferred choice for businesses worldwide.",
  },
  {
    question: "How does the platform enrich my company?",
    answer: "By leveraging Ratelab, your company can gain valuable customer insights, improve service quality, and foster strong customer loyalty, driving sustained growth.",
  },
];

export default function TestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center py-12 px-4 md:py-16 md:px-8 relative"
      style={{
        backgroundImage: `url('https://script.viserlab.com/ratelab/assets/images/frontend/testimonial/6354d8c143bee1666504897.jpg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1a1b3b] bg-opacity-80"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-[#FFA500] text-lg md:text-xl mb-2">Our User Review</h3>
          <h2 className="text-white text-3xl md:text-5xl font-bold">
            What Clients Say About Us
          </h2>
        </div>

        {/* Testimonial Section */}
        <div className="relative px-4 md:px-12">
          {/* Previous Button */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#8B4513] text-white flex items-center justify-center hover:bg-[#A0522D] transition-colors focus:outline-none"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Testimonial Content */}
          <div className="text-center">
            <div className="mb-6">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto border-4 border-[#FFA500] object-cover"
              />
            </div>
            <h4 className="text-white text-lg md:text-xl font-semibold mb-1">
              {testimonials[currentTestimonial].name}
            </h4>
            <p className="text-[#FFA500] mb-6 text-sm md:text-base">
              {testimonials[currentTestimonial].location}
            </p>
            <div className="relative max-w-3xl mx-auto px-4">
              <span className="absolute top-0 left-0 text-xl md:text-6xl text-gray-600 opacity-20">
                "
              </span>
              <p className="text-white text-base md:text-lg italic">
                {testimonials[currentTestimonial].text}
              </p>
              <span className="absolute bottom-0 right-0 text-5xl md:text-6xl text-gray-600 opacity-20">
                "
              </span>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#8B4513] text-white flex items-center justify-center hover:bg-[#A0522D] transition-colors focus:outline-none"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 md:mt-20 max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-5 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-4 py-3 md:px-6 md:py-4 text-left text-white flex justify-between items-center focus:outline-none"
              >
                <span className="text-sm md:text-base">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 md:w-6 md:h-6 transition-transform ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-4 py-3 md:px-6 md:py-4 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#FFA500] text-white flex items-center justify-center hover:bg-[#FFB52E] transition-colors focus:outline-none"
        aria-label="Scroll to Top"
      >
        <ChevronUp className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </div>
  );
}
