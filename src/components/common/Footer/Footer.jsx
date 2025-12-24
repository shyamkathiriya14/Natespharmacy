import React from 'react';
import Footer_logo from "../../../assets/images/Footer/Footer-Logo.svg";
import location_icon from "../../../assets/images/Footer/location-icon.svg";
import Clock_icon from "../../../assets/images/Footer/clock-icon.svg";
import Call_icon from "../../../assets/images/Footer/call-icon.svg";

const Footer = () => {
  return (
    <>
      <section className='bg-[linear-gradient(97.84deg,#0C1F2B_0%,#00426C_51.91%,#0C212E_100.9%)] p-[76px_16px_0px_16px] sm:p-[76px_30px_0px_30px] xl:p-[76px_76px_0px_76px]'>
        <div className='mb-[45px] sm:mb-[50px] md:mb-[65px] xl:mb-[76px]'>
          <div>
          <img src={Footer_logo} alt='nates pharmacy footer logo' className='w-[250px] md:w-[300px] lg:w-[333px] mb-[30px]' />
        </div>
        <p className='text-white text-[16px] lg:text-[18px]'>Your neighborhood pharmacy. <br/>
          Refills, transfers, delivery, and everyday wellness, made simple.</p>
        </div>

        <div className='flex items-center gap-[24px] sm:gap-[26px] lg:gap-[40px] xl:gap-[100px] pb-[50px] sm:pb-[70px] xl:pb-[90px] flex-wrap'>
          <div className='flex items-center gap-[16px]'>
            <div className='w-[40px] h-[40px] xl:w-[55px] xl:h-[55px] flex items-center justify-center rounded-[12px] bg-[#003C63] shadow-[0px_3.49px_26.8px_0px_rgba(0,0,0,0.17)]'>
              <img className='w-[18px] xl:w-[24px] h-auto' src={location_icon} alt='location icon'/>
            </div>
            <div>
              <h2 className='text-[16px] xl:text-[18px] text-[#0096F7] font-bold'>Visit Us</h2>
              <h2 className='text-[16px] xl:text-[18px] text-white'>376 Van Brunt St, Brooklyn, NY 11231</h2>
            </div>
          </div>
          <div className='flex items-center gap-[16px]'>
            <div className='w-[40px] h-[40px] xl:w-[55px] xl:h-[55px] flex items-center justify-center rounded-[12px] bg-[#003C63] shadow-[0px_3.49px_26.8px_0px_rgba(0,0,0,0.17)]'>
              <img className='w-[18px] xl:w-[22px] h-auto' src={Clock_icon} alt='location icon'/>
            </div>
            <div>
              <h2 className='text-[16px] xl:text-[18px] text-[#0096F7] font-bold'>Hours</h2>
              <h2 className='text-[16px] xl:text-[18px] text-white'>Mon–Fri 9 AM–7 PM | Sat 9 AM–3 PM | Sun Closed</h2>
            </div>
          </div>
          <div className='flex items-center gap-[16px]'>
            <div className='w-[40px] h-[40px] xl:w-[55px] xl:h-[55px] flex items-center justify-center rounded-[12px] bg-[#003C63] shadow-[0px_3.49px_26.8px_0px_rgba(0,0,0,0.17)]'>
              <img className='w-[16px] xl:w-[20px] h-auto' src={Call_icon} alt='location icon'/>
            </div>
            <div>
              <h2 className='text-[16px] xl:text-[18px] text-[#0096F7] font-bold'>Phone</h2>
              <h2 className='text-[16px] xl:text-[18px] text-white'>+1 718-797-0200</h2>
            </div>
          </div>
        </div>
        <div className="w-full text-center py-[12px] text-white 
                bg-gradient-to-r from-transparent via-[#FFFFFF14] to-transparent">
  © 2025 Nates Pharmacy. All rights reserved.
</div>

      </section>
    </>
  )
}

export default Footer