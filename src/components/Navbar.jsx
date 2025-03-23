"use client"
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-full h-24 z-50 fixed top-0 left-0 ${scrolled ? "bg-[#3C3C3C] bg-opacity-90 shadow-lg" : "bg-transparent"}`}>
      <div className="w-1/2 h-full flex">
        <div className="w-1/2 h-full flex justify-end items-center relative">
          <Image
              className="lg:h-full absolute lg:right-[-50px]"
              width={156}
              height={0}
              src="/logo/logo.png"
              alt="Logo"
            />
        </div>
        <div className="w-1/2 h-full flex flex-col gap-0 relative">
        <Image
            className="absolute lg:top-[15px] lg:left-[-15px] left-[-30px] top-[30px]"
            width={234}
            height={10}
            src="/logo/name_1.png"
            alt="Logo Text"
          />
          <Image
            className="absolute lg:top-[35px] lg:left-[-15px] left-[-30px] top-[40px]"
            width={234}
            height={10}
            src="/logo/name_2.png"
            alt="Logo Subtitle"
          />
        </div>
      </div>
    </nav>
  );
}
