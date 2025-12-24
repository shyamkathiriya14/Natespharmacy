import React from 'react';
import Madicine_Delivery from "../../../assets/images/OurStory/madicine-delivery.png";
import Heart_icon from "../../../assets/images/OurStory/heart-icon.svg";

const OurStory = () => {
  return (
    <>
      <section className='py-[80px] xl:py-[110px] w-full max-w-[1350px] mx-auto'>
        <h1 className='text-[#154D71] text-center text-[32px] md:text-[38px] lg:text-[44px] xl:text-[48px] font-bold leading-[100%] mb-[36px] xl:mb-[55px]'>Our Story</h1>
        <div className='grid grid-cols-[1fr] lg:grid-cols-[auto_1fr] items-center gap-[24px] sm:gap-[36px] xl:gap-[50px]'>
          <div className='w-full lg:max-w-[550px] xl:max-w-[671px] h-full'>
            <img loading="lazy" src={Madicine_Delivery} alt='madicine delivery image' className='w-full h-full object-cover rounded-[16px]' />
          </div>
          <div>
            <div className='grid gap-[15px] lg:gap-[20px] mb-[28px] sm:mb-[35px] lg:mb-[60px]'>
            <p className='text-[#154D71] text-[16px] lg:text-[18px] leading-[1.4]'>Every prescription tells a story a parent caring for a child, a neighbor looking after a loved one, a patient getting back to good health. At Nates Pharmacy, we believe healthcare should feel personal.
            </p>
            <p className='text-[#0189E0] text-[16px] lg:text-[18px] leading-[1.4]'>We started with one simple idea to bring trust, compassion, and convenience back into the pharmacy experience. 
            </p>
            <p className='text-[#154D71] text-[16px] lg:text-[18px] leading-[1.4]'>When you walk in, you’ll find familiar faces, genuine conversations, and a team that treats your health like their own.
            </p>
            <p className='text-[#154D71] text-[16px] lg:text-[18px] leading-[1.4]'>Whether it’s helping you find the right over-the-counter product or delivering your medications on time, we’re here to make life a little easier  every day.
            </p>
          </div>
          <div className='flex items-center gap-[10px] lg:gap-[13px]'>
            <div className='w-[40px] h-[40px] lg:h-[51px] lg:w-[51px] rounded-full bg-[#154D71] flex items-center justify-center'>
              <img className='w-[16px] h-auto lg:w-[21px]' src={Heart_icon} alt='pharmacy heart icon'/>
            </div>
            <p className='text-[#154D71] text-[16px] lg:text-[18px] font-medium'>100% Personal Care</p>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurStory