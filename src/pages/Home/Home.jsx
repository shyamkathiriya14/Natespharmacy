import React from 'react'
import Header from '../../components/common/Header/Header'
import Footer from '../../components/common/Footer/Footer'
import Hero from '../../components/sections/Hero/Hero'
import HeroButtons from '../../components/sections/HeroButtons/HeroButtons'
import OurStory from '../../components/sections/OurStory/OurStory'
import WhyChooseUs from '../../components/sections/WhyChooseUs/WhyChooseUs'
import Testimonial from '../../components/sections/Testimonials/Testimonial'
import Newslatter from '../../components/sections/Newslatter/Newslatter'

const Home = () => {
  return (
    <>
 {/* Header always visible */}
      <Header />

      {/* Container sections */}
      <div className="w-full max-w-[1440px] mx-auto px-[16px] sm:px-[20px]">
        <Hero />
        <HeroButtons />
        <OurStory />
      </div>

      {/* Full-width sections */}
      <WhyChooseUs />
      <Testimonial />
      <Newslatter />

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home