import React from "react";

const AboutSection = () => {
  return (
    <div className="fixed inset-0 bg-primary z-10">
      <div className="relative max-w-7xl mx-auto h-full grid place-content-center z-10">
        <div className="lg:flex pt-14 px-4 lg:px-12">
          <div className="flex-none pr-8 mb-4">
            <h2 className="uppercase text-4xl lg:text-7xl font-acuminpro font-black">Exotic <br /> finishess</h2>
          </div>
          <div className="border-l-2 border-black pl-4 lg:pl-8 lg:pt-52">
            <div className="text-base md:text-2xl">
              <p className="mb-4">
                We are a group of humans dedicated to create, produce, and improve design projects. Our goal is to bring
                life the ideas from Residential to Commercial works.
              </p>
              <p className="mb-4">
                The way we work allows us to get into a project from the start, creating a concept, designing it and
                producing it to finally install and bring the best experiences for you and/or your costumers.
              </p>
              <p className="mb-4">Our team is fully capacitated to execute and give you a guide through all the process.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
