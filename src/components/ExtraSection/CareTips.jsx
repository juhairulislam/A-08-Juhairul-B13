const tips = [
  {
    id: 1,
    title: "Stay Hydrated 💧",
    desc: "Drink at least 8 glasses of water daily to avoid dehydration.",
    icon: "💧",
  },
  {
    id: 2,
    title: "Use Sunscreen ☀️",
    desc: "Protect your skin from harmful UV rays with SPF 30+ sunscreen.",
    icon: "☀️",
  },
  {
    id: 3,
    title: "Wear Sunglasses 😎",
    desc: "Shield your eyes from UV rays with quality sunglasses.",
    icon: "😎",
  },
];




import Link from 'next/link';
import React from 'react';

const CareTips = () => {
    return (
        <div>
             <section className="py-16 px-6 bg-linear-to-r from-orange-50 to-yellow-50">
      <h2 className="text-3xl font-bold text-center mb-10">
        Summer Care Tips 🌴
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <div className="text-4xl mb-4">{tip.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
            <p className="text-gray-600">{tip.desc}</p>

            <Link href={'/products'} className="mt-4 text-orange-500 font-semibold">
              Shop Related →
            </Link>
          </div>
        ))}
      </div>
    </section>
            
        </div>
    );
};

export default CareTips;