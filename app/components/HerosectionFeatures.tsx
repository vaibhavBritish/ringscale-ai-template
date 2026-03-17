import React from "react";

type Feature = {
  id: string;
  name: string;
};

type HerosectionFeatureProps = {
  title: string;
  features: Feature[];
};

const HerosectionFeatures = ({ title, features }: HerosectionFeatureProps) => {
  return (
    <div
      className="py-20"
      style={{
        backgroundImage: "url('/bg-image-2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">
          {title}
        </h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="relative bg-[#2c2f36] rounded-xl p-8 text-white shadow-lg"
            >
              <div className="absolute -top-6 left-6 w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold">
                {feature.id}.
              </div>

              <h3 className="text-xl font-semibold mt-4">{feature.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HerosectionFeatures;
