"use client";
import React from "react";

type ProductAndServicesProps = {
  title: string;
  description: string;
  buttonText: string;
};

const Product_and_services = ({
  title,
  description,
  buttonText,
}: ProductAndServicesProps) => {
  return (
    <div>
      <section className="py-28 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center px-6 py-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {/* <span className="relative inline-block">
            {title.split("British")[0]}
            <span className="absolute left-0 bottom-0 h-2 w-full bg-blue-600 -z-10"></span>
            </span> */}
            {title}
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            {description}
          </p>

          <button className="bg-gray-900 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition">
            {buttonText}
          </button>
        </div>
      </section>

    </div>
  );
};

export default Product_and_services;
