import React from 'react';
import Testimonial_icon from "../../../assets/images/Testimonials/testimonial.svg"


const Testimonial = () => {
  return (
    <>
     <section className='py-[80px] xl:py-[150px] px-[20px]'>
      <h1 className='text-[32px] md:text-[38px] lg:text-[44px] xl:text-[48px] text-center mb-[60px] sm:mb-[66px] xl:mb-[76px] font-extrabold text-[#154D71]'>What Our Customers Say</h1>
      <div className='flex items-center flex-col md:flex-row justify-center gap-[20px] sm:gap-[26px] lg:gap-[32px] xl:gap-[55px]'>
        <div className='px-[30px] md:px-[42px] xl:px-[55px] py-[28px] md:py-[35px] rounded-[30px] shadow-[0px_6px_42.8px_0px_rgba(0,0,0,0.11)] w-full max-w-[550px]'>
         <img src={Testimonial_icon} alt='testimonials' className='mb-[10px] w-[34px] lg:w-[43px] h-auto'/>
         <p className='text-[18px] lg:text-[20px] xl:text-[22px] font-semibold text-[#00A2FF]'><span className='text-[#154D71]'>Best pharmacy around,</span> caring staff, quick service, and great follow-up.</p>
        </div>
        <div className='px-[30px] md:px-[42px] xl:px-[55px] py-[28px] md:py-[35px] rounded-[30px] shadow-[0px_6px_42.8px_0px_rgba(0,0,0,0.11)] w-full max-w-[550px]'>
         <img src={Testimonial_icon} alt='testimonials' className='mb-[10px] w-[34px] lg:w-[43px] h-auto'/>
         <p className='text-[18px] lg:text-[20px] xl:text-[22px] font-semibold text-[#00A2FF]'><span className='text-[#154D71]'>Feels like family.</span> They remember you by name and always go the extra mile.</p>
        </div>
      </div>
     </section>
    </>
  )
}

export default Testimonial