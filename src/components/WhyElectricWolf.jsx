"use client"
import { BrainCircuit, ShieldCheck, Zap, BatteryCharging, Flame, Clock, Layers } from "lucide-react";
import { Explore } from ".";

export default function WhyElectricWolf() {

  return (
    <section className="w-full py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-black font-julius">
        WHY ELECTRIC WOLF?
      </h2>

      <div className="mt-10">
        <Explore icon={<BrainCircuit />} key={1} title={"INTELLIGENCE"} imgSrc={"/Intelligence.jpeg"} description={"Our Smart Cell Monitoring System™ sends early fault alerts to users."} />
        <Explore icon={<ShieldCheck />} key={2} title={"SAFETY"} imgSrc={"/Safety.jpg"} description={"Multiple layers of protection ensure high tolerance to faults & failures."} />
        <Explore icon={<Zap />} key={3} title={"PERFORMANCE"} imgSrc={"/Performance.jpg"} description={"Our robust design & active thermal management deliver fast-charging with less downtime."} />
      </div>

      <div className="mt-16 flex flex-col items-center gap-8 max-w-6xl mx-auto">

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          <div className="p-4 bg-transparent rounded-lg flex items-center gap-4">
            <div className="p-3 rounded-full">
              <Flame className="w-16 h-16 text-black" />
            </div>
            <div>
              <p className="text-3xl font-bold text-[#000]">0%</p>
              <p className="text-gray-700 text-sm">Risk of Fire</p>
            </div>
          </div>

          <div className="p-4 rounded-lg flex items-center gap-4">
            <div className="p-3 rounded-full">
              <Clock className="w-16 h-16 text-black" />
            </div>
            <div>
              <p className="text-3xl font-bold text-[#000]">15-min</p>
              <p className="text-gray-700 text-sm">Charging</p>
            </div>
          </div>

          <div className="p-4 rounded-lg flex items-center gap-4">
            <div className="p-3 rounded-full">
              <Layers className="w-16 h-16 text-black" />
            </div>
            <div>
              <p className="text-3xl font-bold text-[#000]">2X</p>
              <p className="text-gray-700 text-sm">Battery Shelf-Life</p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
