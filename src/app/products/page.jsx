import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';


const products = async () => {

    const res = await fetch('https://a-08-juhairul-b13.vercel.app/product.json');
    const data = await res.json();

    return data;
}

const PopularProducts = async () => {

    const AllProducts = await products()

    // const AllProducts = productsData.slice(0,3 );

    // console.log(AllProducts)

    return (
        <div>
            <div className='p-10 my-6'>
                <h1 className='text-center text-2xl md:text-4xl font-bold text-gray-600'>All Products From SunCart</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6'>

                    {
                        AllProducts.map(p => <div key={p.id}
                        >
                            <div className='rounded-xl shadow p-6 hover:shadow-xl transition duration-300'>

                                <Image
                                    alt={p.name}
                                    src={p.image}
                                    width={200}
                                    height={200}
                                    className='object-cover w-90 h-50 rounded-xl mx-auto'
                                >

                                </Image>

                                <h1 className='my-6 font-bold text-xl'>{p.name}</h1>
                                 <div className="flex items-center gap-1 text-yellow-400 text-sm">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                  <span className="text-gray-600 ml-1 text-md">
                    ({p.rating})
                  </span>
                </div>

                                <div className='flex items-center justify-between mt-4'>
                                    <p className='text-2xl font-bold text-orange-500'>${p.price}</p>
                                    <Link href={`/products/${p.id}`} className='btn rounded-xl bg-linear-to-r from-orange-400 to-pink-500 text-white hover:opacity-90 transition'>View Details</Link>

                                </div>

                            </div>

                        </div>)
                    }

                </div>



            </div>
        </div>
    );
};

export default PopularProducts;