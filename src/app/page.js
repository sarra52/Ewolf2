import { AdvantagesSection, ApplicationSection, Button, Footer, OurEthos, SustainabilitySection, WhyElectricWolf } from "@/components";


export default function Home() {

  return (
    <div className="w-screen overflow-x-hidden">
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="w-full h-full flex items-center relative">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src="/videoplayback.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
          <div className="relative z-10 flex flex-col items-start text-left w-full px-6 md:px-[10%] lg:px-[15%] max-w-screen-xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-julius leading-tight">
              UNPARALLELED INTELLIGENCE,<br/>
              UNMATCHED SAFETY,<br/>
              UNLIMIT PERFORMANCE
            </h1>
            <p className="sm:text-lg md:text-xl lg:text-xl mt-4 mb-8 leading-relaxed">
              We are here to REDEFINE the lithium-ion battery experience with modern design INNOVATION, enabling transition to clean SUSTAINABLE ENERGY.
            </p>
            <Button w="full sm:w-40" h="14 sm:h-16" text={"Play video"} />
          </div>
        </div>
      </section>

      <WhyElectricWolf />
      <AdvantagesSection />
      <OurEthos />
      <SustainabilitySection />
      <ApplicationSection />
      <Footer />

    </div>
  );
}
