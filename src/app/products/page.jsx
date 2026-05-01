import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';


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
                <h1 className='text-center text-4xl font-bold text-gray-600'>Popular Products</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6'>

                    {
                        AllProducts.map(p => <div key={p.id}
                        >
                            <div className='rounded-xl shadow p-6'>

                                <Image
                                    alt={p.name}
                                    src={p.image}
                                    width={200}
                                    height={200}
                                    className='object-cover w-90 h-50 rounded-xl mx-auto'
                                >

                                </Image>

                                <h1 className='my-2 font-bold text-xl'>{p.name}</h1>
                                <p className='flex gap-2 items-center font-semibold text-xl'><span className='text-yellow-300'><FaStarHalfAlt />
                                </span> {p.rating}</p>

                                <div className='flex items-center justify-between mt-6'>
                                    <p className='font-bold text-2xl'>$ {p.price}</p>
                                    <Link href={'/products'} className='btn text-white bg-orange-400'>View Details</Link>

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