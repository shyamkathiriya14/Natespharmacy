import React from 'react';
import Right_vectore from "../../../assets/images/Hero/right-round-vectore.svg"
import Hero_Man from "../../../assets/images/Hero/hero-man.png";
import Refils_icon from "../../../assets/images/Hero/refils-icon.svg";
import Delivery_Truck_icon from "../../../assets/images/Hero/delivery-truck.svg";

const Hero = () => {
  return (
    <>
      <div id="home" className='bg-[linear-gradient(0deg,#1C6EA4,#96cef4,#fff)] sm:bg-none sm:bg-[#1C6EA4] h-auto sm:h-[500px] lg:h-[580px] xl:h-[631px] rounded-[0px_0px_46px_46px] sm:rounded-[46px] relative overflow-hidden mb-[43px] mx-[-20px] sm:mx-[0px]'>

        <div className='flex items-center sm:items-end justify-between pt-[48px] sm:pt-0 px-[40px] h-full flex-col sm:flex-row relative z-[1] gap-[45px] sm:gap-0'>
          <div className='h-full flex flex-col justify-center'>
            <div className='text-center sm:text-start'>
              <h1 className='text-[20px] sm:text-[24px] md:text-[28px] lg:text-[40px] font-black text-[#154d71] sm:text-white mb-[18px] md:mb-[20px] leading-[100%]'>More Than Medicine,</h1>
              <h1 className='text-[46px] md:text-[56px] lg:text-[64px] font-black text-[#154d71] sm:text-white mb-[22px] sm:mb-[28px] lg:mb-[20px] leading-[100%]'>We Care</h1>
              <p className='text-[#154d71] sm:text-white text-[14px] md:text-[16px] lg:text-[20px] mb-[24px] sm:mb-[60px] md:mb-[80px] lg:mb-[100px]'>Your neighborhood pharmacy.<br />
                Refills, transfers, delivery, and everyday wellness, made simple.</p>
            </div>
            <div className='flex items-center justify-center sm:justify-start gap-[26px] sm:gap-[35px] md:gap-[60px] flex-wrap'>
              <div className='flex items-center justify-center gap-[8px] w-fit'>
                <div className='h-[42px] w-[42px] md:w-[52px] md:h-[52px] lg:w-[62px] lg:h-[62px] bg-[#154D71] rounded-full flex items-center justify-center'>
                  <img className='w-[14px] md:w-[18px] lg:w-[22px] h-auto' src={Refils_icon} alt='Pharmacy Rifils icon' />
                </div>
                <h2 className='text-[15px] md:text-[18px] lg:text-[20px] text-[#154d71] sm:text-white'>Fast Refills</h2>
              </div>
              <div className='flex items-center justify-center gap-[8px] w-fit'>
                <div className='h-[42px] w-[42px] md:w-[52px] md:h-[52px] lg:w-[62px] lg:h-[62px] bg-[#154D71] rounded-full flex items-center justify-center'>
                  <img className='w-[20px] md:w-[26px] lg:w-[30px] h-auto' src={Delivery_Truck_icon} alt='Pharmacy Delivery truck icon' />
                </div>
                <h2 className='text-[15px] md:text-[18px] lg:text-[20px] text-[#154d71] sm:text-white'>Free Delivery</h2>
              </div>
            </div>
          </div>

          <img src={Hero_Man} alt='pharmacy round vectore' className='w-[200px] sm:w-[260px] md:w-[35%] lg:w-[28%] relative z-10 mr-[0px] md:mr-[20px] lg:mr-[100px]' />
        </div>
        <img src={Right_vectore} alt='pharmacy dilivery man' className='hidden sm:block w-[300px] sm:w-[35%] xl:w-[42%] absolute right-[-20px] sm:right-0 sm:top-0 -z-0' />

      </div>

    </>
  )
}

export default Hero