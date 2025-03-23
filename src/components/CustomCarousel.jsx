"use client";
import { useState } from "react";
import Image from "next/image";

const images = [
  { id: 1, src: "/technology_m1.png", title: "Concept", desc: "The first stage of the design process involves interpreting our customers' vision using Amec's internal toolsets." },
  { id: 2, src: "/technology_m2.png", title: "Development", desc: "Our skilled engineering team excels at designing and developing chosen concepts using flexible structures and specialized tools." },
  { id: 3, src: "/technology_m3.png", title: "Testing", desc: "Every product goes through rigorous testing to ensure high quality and efficiency before production." },
  { id: 4, src: "/technology_m4.png", title: "Assembly", desc: "Combining parts together with precision to bring the concept to life." },
  { id: 5, src: "/technology_m5.png", title: "Prototyping", desc: "Using 3D printing and rapid prototyping techniques to refine designs." },
  { id: 6, src: "/technology_m1.png", title: "Production", desc: "Mass production begins after successful testing and client approval." },
  { id: 7, src: "/technology_m2.png", title: "Delivery", desc: "Final products are shipped with care to ensure customer satisfaction." },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const handleSlideClick = (index) => {
    setCurrent(index);
  };

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-[#282e35]">
      <div className="relative flex w-full h-full items-center justify-center">
        {images.map((image, index) => {
          const isActive = index === current;
          const distance = Math.abs(index - current);
          let width = "5%";
          if (distance === 0) width = "40%";
          else if (distance === 1) width = "15%";
          else if (distance === 2) width = "10%";
          const offset = (index - current) * 18;
          const zIndex = isActive ? "z-20" : `z-${10 - distance}`;
          const scale = isActive ? "scale-110" : "scale-90";

          return (
            <div
              key={image.id}
              className={`absolute h-full transition-all duration-700 ease-in-out cursor-pointer ${zIndex} ${scale}`}
              style={{
                width,
                left: `calc(50% + ${offset}%)`,
                transform: "translateX(-50%)",
              }}
              onClick={() => handleSlideClick(index)}
            >
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
                <div className={`absolute inset-0 ${isActive ? "bg-black/40" : "bg-black/60"}`}></div>

                <span
                  className={`absolute text-white font-bold transition-all duration-700 ease-in-out ${
                    isActive
                      ? "top-4 left-4 text-2xl"
                      : "bottom-5 left-1/2 transform -translate-x-1/2 text-lg"
                  }`}
                >
                  {String(image.id).padStart(2, "0")}
                </span>

                <div
                  className={`absolute bottom-10 left-10 text-white transition-opacity duration-700 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h2 className="text-3xl font-bold">{image.title}</h2>
                  <p className="text-lg">{image.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
