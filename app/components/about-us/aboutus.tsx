import React from "react";

type AboutUsProps = {
  badge: string;
  title: string;
  description: string;
};

const AboutUs = ({ badge, title, description }: AboutUsProps) => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/bg-pattern.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm mb-6">
          {badge}
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          {title}
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          {description}
        </p>

      </div>
    </section>
  );
};

export default AboutUs;