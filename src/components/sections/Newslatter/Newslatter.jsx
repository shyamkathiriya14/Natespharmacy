import React from 'react';
import RefillNow_Icon from "../../../assets/images/newslatter/RefillNow-icon.svg";
import RightArrow_Icon from "../../../assets/images/newslatter/Right-Arrow.svg";

const Newslatter = () => {
  return (
    <>
    <section className='bg-[linear-gradient(180deg,#154D71_0%,#2893D7_100%)] py-[80px] xl:py-[120px] px-[20px]'>
       <div className='mb-[65px] xl:mb-[73px]'>
         <h1 className=' text-[32px] md:text-[38px] lg:text-[44px] xl:text-[48px] font-extrabold text-center text-white leading-[1.4] mb-[35px] lg:mb-[45px] xl:mb-[55px]'>Need a refill or want to<br/> switch to Nates?</h1>
        <p className='text-white text-[18px] lg:text-[18px] xl:text-[20px] text-center'>We’ll handle everything — it only takes a minute.</p>
       </div>
       <div className='flex items-center justify-center gap-[18px] sm:gap-[30px] md:gap-[40px] xl:gap-[60px] flex-col sm:flex-row'>
        <button className='bg-white w-full justify-center max-w-[330px] sm:max-w-[287px] flex items-center gap-[10px] xl:gap-[14px] px-[36px] md:px-[45px] py-[18px] md:py-[22px] rounded-[18px] text-[18px] xl:text-[20px] font-bold text-[#154D71]'><img className='w-[24px] xl:w-[29px] h-auto' src={RefillNow_Icon}/>Refill Now</button>
        <button className='border-[2px] w-full max-w-[100%] sm:max-w-[287px] border-white flex items-center justify-center gap-[10px] xl:gap-[14px] px-[36px] md:px-[45px] py-[18px] md:py-[22px] rounded-[18px] text-[18px] xl:text-[20px] font-bold text-white'>Transfer To Us <img className='w-[23px] xl:w-[27px] h-auto' src={RightArrow_Icon}/></button>
       </div>
    </section>
    </>
  )
}

export default Newslatter