import React, { useState } from "react";

import { ReactComponent as Refill_Icon } from "../../../assets/images/HeroButtons/Refill-icon.svg";
import { ReactComponent as Transfer_Icon } from "../../../assets/images/HeroButtons/Transfer-icon.svg";
import { ReactComponent as FreeDelivery_Icon } from "../../../assets/images/HeroButtons/Free-Delivery-icon.svg";
import { ReactComponent as GetDirection_Icon } from "../../../assets/images/HeroButtons/GetDirection-icon.svg";

const actions = [
  { id: 1, label: "Refill Now", icon: Refill_Icon },
  { id: 2, label: "Transfer Prescription", icon: Transfer_Icon },
  { id: 3, label: "Free Delivery", icon: FreeDelivery_Icon },
  { id: 4, label: "Get Directions", icon: GetDirection_Icon },
];

const HeroButtons = () => {
  const [activeId, setActiveId] = useState(1);

  return (
   <div className="relative w-full">
    <div className="
    pointer-events-none
    absolute top-0 right-0 h-full w-16
    bg-gradient-to-l from-white/90 to-transparent
  " />
     <div className="flex gap-[12px] xl:gap-6 w-full max-w-[1350px] mx-auto overflow-auto no-scrollbar">
      {actions.map((item) => {
        const Icon = item.icon;
        const isActive = activeId === item.id;

        return (
          <div
            key={item.id}
            onMouseEnter={() => setActiveId(item.id)}
            onMouseLeave={() => setActiveId(1)}
            className={`flex w-full justify-center items-center gap-[8px] sm:gap-3 px-[16px] sm:px-6 py-[16px] sm:py-[20px] xl:py-[24px] rounded-xl border cursor-pointer transition-all duration-300
              ${
                isActive
                  ? "bg-[linear-gradient(100.86deg,#1C6EA4_14.45%,#0B2A3E_88.24%)] text-white border-[#1C6EA4] border-2"
                  : "bg-white text-[#154D71] border-[#1C6EA4] border-2"
              }
            `}
          >
            {/* Override SVG fill with CSS */}
            <Icon 
              className={`w-[20px] sm:w-[26px] h-auto transition-all duration-300 ${
                isActive 
                  ? "fill-white"  // White when active/hovered
                  : item.id === 1 
                    ? "fill-[#1C6EA4]"  // First button always blue when not hovered
                    : "fill-[#1C6EA4] hover:fill-white"  // Other buttons blue, turn white on hover
              }`}
            />

            <span className="whitespace-nowrap text-[16px] lg:text-[18px] xl:text-[20px] font-semibold">
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
   </div>
  );
};

export default HeroButtons;