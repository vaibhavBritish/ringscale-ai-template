import React from "react";
import Image from "next/image";

export type HeroButton = {
  label: string;
  variant: "primary" | "secondary";
};

export type HeroSectionProps = {
  title: string;
  description: string;
  overlayClass?: string;
  buttons: HeroButton[];
};

const HeroSection = ({
  title,
  description,
  overlayClass,
  buttons,
}: HeroSectionProps) => {
  return (
    <section
      className={`relative min-h-screen flex items-center bg-no-repeat bg-cover bg-center ${overlayClass}`}
      style={{
        backgroundImage: `url('/bg-image.png')`
      }}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 pb-16">
        <div className="max-w-4xl">
          <h1 className="text-[38px] sm:text-[52px] lg:text-[40px] font-bold text-[#111827] leading-[1.15] tracking-[-0.02em]">
            {title}
          </h1>

          <p className="mt-8 max-w-4xl text-[18px] leading-[1.7] text-[#5b6472]">
            {description}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5">
            {buttons.map((button, index) => (
              <button
                key={index}
                className={
                  button.variant === "primary"
                    ? "bg-[#2357b7] hover:bg-[#1d4ca1] text-white px-10 py-4 rounded-xl font-semibold text-[15px] shadow-sm transition"
                    : "bg-[#e8eef9] hover:bg-[#dce6f7] text-[#2357b7] px-10 py-4 rounded-xl font-semibold text-[15px] transition"
                }
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
