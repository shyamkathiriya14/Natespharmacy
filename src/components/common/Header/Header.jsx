import React, { useState, useEffect, useRef } from "react";
import Company_Logo from "../../../assets/images/Header/CompanyLogo.svg";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [footerVisible, setFooterVisible] = useState(false);

  const isClickScrolling = useRef(false);

  const sections = ["home", "our-story", "why-choose-us", "reviews"];

  /* ---------------- HEADER HIDE / SHOW ---------------- */
  useEffect(() => {
    const controlHeader = () => {
      if (footerVisible) {
        setHidden(false); // Always show if footer is visible
        return;
      }

      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(window.scrollY);
    };

    const handleScroll = () => requestAnimationFrame(controlHeader);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, footerVisible]);

  /* ---------------- ACTIVE SECTION DETECTION ---------------- */
  useEffect(() => {
    const onScroll = () => {
      if (isClickScrolling.current) return;

      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let id of sections) {
        const section = document.getElementById(id);
        if (!section) continue;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(id);
          return;
        }
      }
    };

    onScroll(); // run on page load
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------- SCROLL TO SECTION ---------------- */
  const scrollToSection = (id) => {
    isClickScrolling.current = true;
    setActiveSection(id);

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(id);
      if (!section) return;

      const headerOffset = 110;
      const offsetPosition =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setOpen(false);

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 600);
  };

  const linkClass = (id) =>
    `relative cursor-pointer transition-colors duration-300 ${
      activeSection === id ? "text-[#0B2A3E]" : "text-[#154D71]"
    }`;

  /* ---------------- FOOTER VISIBILITY ---------------- */
  useEffect(() => {
    const footer = document.getElementById("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`
          w-full max-w-[1440px] mx-auto sticky top-0 z-10 bg-white
          shadow-[0px_4px_40px_rgba(0,0,0,0.07)]
          rounded-b-[24px] mb-[16px] sm:mb-[26px]
          transform transition-transform duration-300
          ${hidden ? "-translate-y-full" : "translate-y-0"}
        `}
      >
        <div className="px-[20px] md:px-[40px] py-[20px] flex items-center justify-between">

          {/* LOGO */}
          <img
            src={Company_Logo}
            alt="Company Logo"
            className="w-[200px] md:w-[261px] h-[40px] cursor-pointer"
            onClick={() => scrollToSection("home")}
          />

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex gap-[60px] items-center">
            <ul className="flex gap-[35px] xl:gap-[60px] text-[18px]">
              {sections.map((id) => (
                <li
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={linkClass(id)}
                >
                  {id.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
                  {activeSection === id && (
                    <span className="absolute -bottom-[2px] left-0 w-full h-[2px] bg-[#1C6EA4] rounded-full" />
                  )}
                </li>
              ))}
            </ul>

            <button className="bg-[linear-gradient(100.86deg,#1C6EA4_14.45%,#0B2A3E_88.24%)] text-white px-6 py-2 rounded-lg">
              Contact Us
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-[#154D71] text-[22px]"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] max-w-[320px] bg-white z-50
        transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-between">
          <img src={Company_Logo} className="w-[200px]" />
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <ul className="flex flex-col gap-9 px-6 text-[#154D71] text-[18px]">
          {sections.map((id) => (
            <li
              key={id}
              className="cursor-pointer"
              onClick={() => scrollToSection(id)}
            >
              {id.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
            </li>
          ))}
        </ul>
      </div>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />
    </>
  );
};

export default Header;
