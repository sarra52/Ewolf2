"use client"

import { Card, CardContent } from "@/components/ui/card.jsx";
import { FaLeaf, FaIndustry, FaRecycle, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SustainabilitySection () {
  const items = [
    {
      icon: "/Affordable.png",
      title: "Affordable and Clean Energy",
      description:
        "No emission during operation and excellent well-to-wheel efficiencies make lithium-ion batteries an ideal solution.",
    },
    {
      icon: "/Responsible.png",
      title: "Responsible Consumption and Production",
      description:
        "We envision a novel battery design that is reusable at the largest possible scale and made with minimum number of components.",
    },
    {
      icon: "/Industry.png",
      title: "Industry, Innovation, and Infrastructure",
      description:
        "We are shaping new industry standards and processes for the next generation of battery technology.",
    },
    {
      icon: "/Climate.png",
      title: "Climate Action",
      description:
        "We accelerate the transition towards EVs by rethinking the manufacturing process of lithium-ion batteries.",
    },
  ];

  return (
    <section className="py-12 px-6 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 font-julius">
          We contribute to and embrace the UN sustainability goals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6 flex items-start gap-4 bg-[#f5f5f5] rounded-2xl shadow-lg hover:bg-white transition-colors duration-300 overflow-hidden">
                <img src={item.icon} alt={item.title} className=" bg-white rounded-full h-12"></img>
                <CardContent className="p-0">
                  <h3 className="font-semibold font-julius text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

