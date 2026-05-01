import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const brands = [
  {
    id: 1,
    name: "SunnyStyle",
    tagline: "Bright vibes for sunny days",
    logo: '/brandLogo/raySun.svg',
  },
  {
    id: 2,
    name: "CoolWear",
    tagline: "Stay fresh, stay cool",
    logo: '/brandLogo/coolwear.svg' ,
  },
  {
    id: 3,
    name: "RaySun",
    tagline: "Luxury in every shade",
    logo: '/brandLogo/sunny.svg',
  },
];






const TopBrands = () => {
    return (
        <div>
            <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        Top Brands 🔥
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="border p-6 rounded-2xl text-center hover:shadow-lg transition"
          >
            <Image
              src={brand?.logo}
              alt={brand.name}
              width={200}
              height={200}
              className="h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">{brand.name}</h3>
            <p className="text-gray-500 text-sm">{brand.tagline}</p>

            <Link href={'/products'} className="mt-4 text-orange-500 font-semibold">
              Explore →
            </Link>
          </div>
        ))}
      </div>
    </section>
        </div>
    );
};

export default TopBrands;