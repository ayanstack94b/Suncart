'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaStar } from 'react-icons/fa';



const ProductCard = ({ product }) => {

    const { name, price, image, rating, id } = product;

    const router = useRouter();
    const { data: session } = authClient.useSession();

    const handleViewDetails = () => {
        if (!session) {
            router.push(`/login?redirect=/products/${id}`);
        } else {
            router.push(`/products/${id}`);
        }
    };

    return (
        <div className="container mx-auto">
            <div className="card bg-base-100 w-full shadow-sm">

                {/* Image */}
                <figure className="relative w-full h-48">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover rounded-t-lg"
                    />
                </figure>

                {/*  */}
                <div className="card-body items-center text-center">
                    <h2 className="card-title line-clamp-2">{name}</h2>

                    <p className="text-sm text-gray-500"><FaStar className='text-yellow-400' size={24}></FaStar> {rating}</p>

                    <p className="font-bold text-lg">₹{price}</p>

                    <div className="card-actions">
                        <button
                            onClick={handleViewDetails}
                            className="btn bg-orange-500 hover:bg-orange-600 text-white border-none"
                        >
                            View Details
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductCard;