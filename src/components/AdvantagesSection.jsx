import { BatteryCharging } from "lucide-react";
import { FaBatteryFull, FaDollarSign, FaLeaf, FaTools, FaClock, FaCogs, FaRecycle, FaMapMarkedAlt } from "react-icons/fa";

const advantages = [
  { icon: <FaBatteryFull />, title: "Extended Lifespan", description: "With our Cell Replacement Technology™, cells can be replaced as they degrade, without replacing the entire pack, extending the overall lifespan of the battery." },
  { icon: <BatteryCharging />, title: "Reliable Charging", description: "Cell-level temperature & voltage measurements ensure optimal operation, preventing overheating, overvoltage, and errors. This allows faster charging with confidence." },
  { icon: <FaDollarSign />, title: "Cost Savings", description: "With our efficient manufacturing process, low-component design and flexibility to innovate, we are able to deliver greater cost savings for our customers." },
  { icon: <FaClock />, title: "Reduced Downtime", description: "By eliminating the traditional spot-welding & soldering of cells, we are able to provide quick repairs and servicing, reducing downtime and keeping our customers on-the-go." },
  { icon: <FaCogs />, title: "Modular Flexibility", description: "The modular design of our battery pack allows users to customise their battery configuration based on their application, usage preferences, and energy requirements." },
  { icon: <FaRecycle />, title: "Lower Environmental Impact", description: "Reusing batteries for longer reduces carbon footprint, with less e-waste, promoting a circular economy." },
];

export default function AdvantagesSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className="relative p-6 rounded-2xl border border-gray-300 shadow-lg overflow-hidden transition-colors duration-500 
                      before:absolute before:inset-0 before:bg-[#000] before:rounded-full before:w-0 before:h-0 before:top-1/2 before:left-1/2 
                      hover:before:w-[300%] hover:before:h-[300%] hover:before:top-[-100%] hover:before:left-[-100%] 
                      before:transition-all before:duration-700 before:ease-out 
                      hover:bg-[#000] group"
          >
            <div className="relative flex flex-col items-start text-gray-900 transition-colors duration-300 group-hover:text-white">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#000] text-white text-2xl mb-4 transition-colors duration-300">
                {advantage.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 font-julius hover:text-white">{advantage.title}</h3>
              <p className="text-gray-600 transition-colors duration-300 group-hover:text-white">{advantage.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
