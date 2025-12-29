import React from 'react';
import { ReactComponent as RefillIcon } from "../../../assets/images/WhyChooseUs/FastRefills-icon.svg";
import { ReactComponent as WellnessIcon } from "../../../assets/images/WhyChooseUs/Wellness-icon.svg";
import { ReactComponent as DeliveryIcon } from "../../../assets/images/WhyChooseUs/Delivery-icon.svg";
import { ReactComponent as BlisterIcon } from "../../../assets/images/WhyChooseUs/Packaging-icon.svg";
import { ReactComponent as CardIcon } from "../../../assets/images/WhyChooseUs/Card-icon.svg";

const WhyChooseUs = () => {
    const services = [
  {
    id: 1,
    title: "Fast Refills",
    desc: "Order online or by phone anytime",
    icon: RefillIcon,
  },
  {
    id: 2,
    title: "OTC & Wellness",
    desc: "Shop trusted products in-store.",
    icon: WellnessIcon,
  },
  {
    id: 3,
    title: "Free Delivery",
    desc: "Same-day delivery available",
    icon: DeliveryIcon,
  },
  {
    id: 4,
    title: "Blister Packaging",
    desc: "Organized medication made simple",
    icon: BlisterIcon,
  },
  {
    id: 5,
    title: "OTC Card Accepted",
    desc: "Use your plan benefits easily",
    icon: CardIcon,
  },
];
    return (
        <>
            <section id="why-choose-us" className='bg-[linear-gradient(114.74deg,#EBF8FF_0.35%,#9ADAFF_91.62%)] py-[80px] xl:py-[110px] px-[20px]'>
                <div className='mb-[60px] sm:mb-[80px] xl:mb-[110px]'>
                    <h1 className='text-[32px] md:text-[38px] lg:text-[44px] xl:text-[48px] font-bold text-[#154D71] text-center leading-[100%] mb-[32px] xl:mb-[60px]'>Why Choose Us</h1>
                    <p className='w-full max-w-[556px] mx-auto text-center text-[16px] lg:text-[18px] xl:text-[20px] text-[#154D71]'>At Nates Pharmacy, we combine personal care with modern convenience. From quick refills to free delivery, we’re here to make managing your health simple and stress-free.</p>
                </div>

                <div className=" lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] lg:gap-[20px] justify-items-center">
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className={`card-expanded bg-white rounded-2xl shadow-md px-8 pb-[18px] lg:pb-6 pt-[6px] lg:pt-[10px] w-full w-[100%]
                  ${index >= 3 ? "lg:col-span-1 lg:translate-x-1/2" : ""}
                `}
              >
                <div className="aaa">
                  <Icon className="ml-[-18px] w-[70px] h-[70px] xl:h-[90px] xl:w-[90px] text-[#1C6EA4]" />
                </div>

                <h3 className="text-[#154D71] font-semibold text-[20px] xl:text-[22px] mb-[8px] xl:mb-[12px]">
                  {item.title}
                </h3>

                <p className="text-[#747474] text-[16px]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
            </section>
        </>
    )
}

export default WhyChooseUs