import Image from "next/image";

const applications = [
  {
    title: "E-Bikes",
    description: "Powering the next generation of electric bicycles with long-lasting battery solutions.",
    image: "/applications_images/app_1.png",
  },
  {
    title: "EV Charging",
    description: "Efficient and fast-charging solutions for electric vehicles.",
    image: "/applications_images/app_2.jpg",
  },
  {
    title: "E-Scooters",
    description: "Providing high-performance batteries for modern electric scooters.",
    image: "/applications_images/app_3.png",
  },
  {
    title: "Drones",
    description: "Reliable power sources for drones used in various applications.",
    image: "/applications_images/app_4.jpg",
  },
  {
    title: "Renewable Energy",
    description: "Integrating battery storage with solar and wind energy for a sustainable future.",
    image: "/applications_images/app_5.jpg",
  },
  {
    title: "Home Energy Storage",
    description: "Smart battery solutions for home power backup and grid independence.",
    image: "/applications_images/app_6.png",
  },
];

export default function ApplicationSection() {
  return (
    <section className="py-16 text-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold font-julius text-center mb-12">Applications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {applications.map((app, index) => (
            <div key={index} className="relative group overflow-hidden">
              <Image
                src={app.image}
                alt={app.title}
                width={500}
                height={300}
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-800/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <h3 className="text-lg font-julius text-white font-semibold">{app.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};
