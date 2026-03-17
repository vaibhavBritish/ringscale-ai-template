import React from "react";

type ServiceItem = {
  id: string;
  name: string;
};

type ServicesGridProps = {
  title: string;
  services: ServiceItem[];
};

const Product_and_servicesFeatures = ({ title, services }: ServicesGridProps) => {
  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0f172a] max-w-6xl mx-auto leading-snug">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {services.map((service) => (
            <div
              key={service.id}
              className="border border-gray-300 rounded-xl bg-transparent px-7 py-8 min-h-33 flex flex-col justify-start"
            >
              <span className="text-[#1d4ed8] text-2xl font-bold">
                {service.id}.
              </span>

              <h3 className="mt-3 text-[#0f172a] text-2xl font-semibold leading-tight">
                {service.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product_and_servicesFeatures;