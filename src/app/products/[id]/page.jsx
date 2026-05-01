import Image from 'next/image';



const ProductDetailsPage =async ({params}) => {

    const {id} = await params;


    const res = await fetch('https://a-08-juhairul-b13.vercel.app/product.json');
    const allProducts = await res.json();

    // console.log(allProducts)

const product = allProducts.find(p => p.id == id);

        // console.log(id , product)


    return (
        <div>
 <div className="max-w-7xl mx-auto px-4 py-10 min-h-screen">
            
            <div className="grid md:grid-cols-2 gap-10 items-center">
                
                <div className="bg-gray-100 rounded-2xl p-6 flex justify-center">
                    <Image
                    width={500}
                    height={500}
                        src={product.image} 
                        alt={product.name}
                        className="w-full max-w-md object-contain hover:scale-105 transition duration-300"
                    />
                </div>

                <div className="space-y-6">
                    
                    <p className="text-sm text-gray-500 uppercase tracking-wider">
                        {product.brand}
                    </p>

                    
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        {product.name}
                    </h1>

                    <div className="flex items-center gap-2">
                        <span className="text-yellow-500 text-lg">★</span>
                        <span className="font-medium">{product.rating}</span>
                        <span className="text-gray-500 text-sm">(Reviews)</span>
                    </div>

                    <div className="text-3xl font-bold text-orange-500">
                        ${product.price}
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                        {product.description}
                    </p>

                    <p className={`font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-500'}`}>
                        {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                    </p>

                    <div className="flex gap-4 pt-4">
                        <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition">
                            Add to Cart
                        </button>

                        <button className="flex-1 border border-orange-500 text-orange-500 hover:bg-orange-50 py-3 rounded-xl font-semibold transition">
                            Buy Now
                        </button>
                    </div>

                </div>
            </div>

        </div>        </div>
    );
};

export default ProductDetailsPage;