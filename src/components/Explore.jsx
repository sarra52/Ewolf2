"use client"
import Image from "next/image"
import React from "react"

export default function Explore({ description, title, imgSrc, icon }) {
    return (
        <div className="relative w-full h-[240px] text-white">
            <Image
                src={imgSrc}
                alt="explore-background"
                layout="fill"
                objectFit="cover"
                priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>

            <div className="relative z-10 flex gap-6 h-full w-full px-[10%] justify-start items-center">
                {icon && (
                    <div className="p-5 rounded-full bg-[#fff] flex-shrink-0">
                        {React.cloneElement(icon, { className: "w-8 h-8 text-black" })}
                    </div>
                )}

                <div className="flex flex-col items-start gap-3">
                    <p className="lg:text-3xl text-xl font-julius">{title}</p>
                    <p className="lg:text-xl text-base text-left font-medium">{description}</p>
                </div>
            </div>
        </div>
    )
}