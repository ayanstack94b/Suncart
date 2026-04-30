import { notFound, redirect } from 'next/navigation';
import products from "@/data/products.json";
import Image from 'next/image';
import { Star } from 'lucide-react';

const ProductDetailsPage = async ({ params }) => {

    const {id} = await params;
    const isLoggedIn = false;

    const product = products.find(p => p.id === parseInt(id));
    if (!product) {
        notFound();
    }

    if (!isLoggedIn) {
        redirect(`/login?redirect=/products/${id}`);
    }
    const { name, image, price, rating, description, brand, stock } = product;

    return (
        <div className="max-w-6xl mx-auto px-6 py-10">

            <div className="grid md:grid-cols-2 gap-10">

                <Image
                    src={image}
                    alt={name}
                    height={600}
                    width={400}
                    className="w-full h-80 object-cover rounded-lg"
                />

                <div>
                    <h1 className="text-3xl font-bold mb-3">{name}</h1>

                    <p className="text-gray-500 mb-2">Brand: {brand}</p>

                    <p className="text-xl font-semibold mb-2">₹{price}</p>

                    <p className="flex items-center gap-1 text-sm text-gray-500 mb-4">
                        <Star
                            size={18}
                            className="text-yellow-500 fill-yellow-500 "
                        />
                        {rating}
                    </p>

                    <p className="mb-6">{description}</p>

                    <p className="text-sm mb-6">
                        Stock: {stock > 0 ? "Available" : "Out of stock"}
                    </p>

                    <button className="btn bg-orange-500 hover:bg-orange-600 text-white border-none">
                        Buy Now
                    </button>
                </div>

            </div>

        </div>
    );
};

export default ProductDetailsPage;