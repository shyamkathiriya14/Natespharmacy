import React, { useState, useEffect } from "react";
import Company_Logo from "../../../assets/images/Header/CompanyLogo.svg";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false); // For scroll-based hide/reveal
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll-based hide/reveal logic
  useEffect(() => {
    const controlHeader = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        // Scroll down beyond threshold: hide
        setHidden(true);
      } else {
        // Scroll up or near top: reveal
        setHidden(false);
      }
      setLastScrollY(window.scrollY);
    };

    const handleScroll = () => requestAnimationFrame(controlHeader);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Body scroll lock for popup (unchanged)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* HEADER - Now with scroll-based hide/reveal */}
      <header 
        className={`
          w-full sticky top-0 z-10 bg-white shadow-[0px_4px_40px_rgba(0,0,0,0.07)] rounded-b-[24px] mb-[16px] sm:mb-[26px]
          transform transition-transform duration-300 ease-out
          ${hidden ? '-translate-y-full' : 'translate-y-0'}
        `}
      >
        <div className="px-[20px] md:px-[40px] py-[20px] sm:py-[24px] flex items-center justify-between max-w-[1440px] mx-auto">
          
          {/* Logo */}
          <img src={Company_Logo} alt="Company Logo" className="w-[200px] md:w-[261px] h-[40px]" />

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-[60px] items-center">
            <ul className="flex gap-[60px] text-[#154D71] text-[18px]">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Reviews</li>
            </ul>

            <button className="bg-[linear-gradient(100.86deg,#1C6EA4_14.45%,#0B2A3E_88.24%)] text-white px-6 py-2 rounded-lg">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#154D71] text-[22px]"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE SLIDE MENU - Unchanged */}
      <div
        className={`
          fixed top-0 left-0 h-full w-[80%] max-w-[320px] bg-white z-50
          transform transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
        style={{ willChange: 'transform' }}
      >
        {/* Close */}
        <div className="p-6 mb-[20px] flex justify-between">
          <img src={Company_Logo} alt="Company Logo" className="w-[200px] md:w-[210px] h-[40px]" />
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        {/* Menu */}
        <ul className="flex flex-col gap-9 px-6 text-[#154D71] text-[18px]">
          <li>Home</li>
          <li>About Us</li>
          <li>Reviews</li>
        </ul>

        <div className="px-6 mt-8 absolute bottom-[26px] w-full">
          <button className="w-full bg-[linear-gradient(100.86deg,#1C6EA4_14.45%,#0B2A3E_88.24%)] text-white py-3 rounded-lg">
            Contact Us
          </button>
        </div>
      </div>

      {/* Overlay - Unchanged */}
      <div
        className={`
          fixed inset-0 bg-black/40 backdrop-blur-sm z-40
          transition-opacity duration-300 ease-out
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setOpen(false)}
      />
    </>
  );
};

export default Header;