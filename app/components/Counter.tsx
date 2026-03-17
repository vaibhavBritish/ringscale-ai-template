import React from "react";
import { Star } from "lucide-react";

type CounterItem = {
  value: string;
  label: string;
  icon?: string;
};

type CounterProps = {
  badge: string;
  title: string;
  counters: CounterItem[];
};

const Counter = ({ badge, title, counters }: CounterProps) => {
  return (
    <section className="py-24 bg-gray-50 text-black">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-14">
          {title}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {counters.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 hover:border-gray-400 rounded-xl p-10 bg-white shadow-sm"
            >
              <div className="flex items-center justify-center gap-2 text-5xl font-bold">
                {item.value}

                {item.icon === "star" && (
                  <Star className="text-blue-600 w-8 h-8 fill-blue-600" />
                )}
              </div>

              <p className="mt-4 text-lg font-semibold text-gray-700">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Counter;