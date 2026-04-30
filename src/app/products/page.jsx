import React from 'react';
import products from "@/data/products.json";
import ProductCard from '@/components/ProductCard';



const ProductsPage = async () => {
    await new Promise((res) => setTimeout(res, 1500));

    return (
        <div className='container mx-auto my-10 min-h-screen p-3 '>
            {/* Title */}
            <h1 className="text-2xl font-bold mb-8">
                All Products
            </h1>
            {/* grid section */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">

                {
                    products.map((product) => <ProductCard
                        key={product.id}
                        product={product}
                    ></ProductCard>)
                }

            </div>

        </div>
    );
};

export default ProductsPage;