import React from 'react'
import Navbar from './Navbar/Navbar'
import Slider from './Home/Slider'
import CategorySection from './Home/CategorySection'
import WhyRatelab from './Home/WhyRatelab'
import RecentReviews from './Home/RecentReviews'
import BlogSection from './Home/BlogSection'
import ReviewsLanding from './Home/ReviewsLanding'
import TestimonialSection from './Home/TestimonialSection'
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <CategorySection />
      <WhyRatelab />
      <RecentReviews />
      <TestimonialSection />
      <ReviewsLanding />
      <BlogSection />
    </div>
  )
}

export default Layout
