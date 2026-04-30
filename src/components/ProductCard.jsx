'use client'
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

const ProductCard = ({ product }) => {
    
    
    
    const { name, price, image, rating, id } = product;

    return (
        <div className='container mx-auto'>
            <div className="card bg-base-100  w-full shadow-sm">

                {/* Image container */}
                <figure className="relative w-full h-48">
                    <Image
                        src={image}
                        alt={name} 
                        height={500}
                        width={400}
                        priority
                        className="object-cover rounded-t-lg"
                    />
                </figure>

                {/* Body */}
                <div className="card-body items-center text-center">
                    <h2 className="card-title line-clamp-2">{name}</h2>

                    <p className="text-sm text-gray-500">⭐ {rating}</p>

                    <p className="font-bold text-lg">₹{price}</p>

                    <div className="card-actions">
                       
                           <Link href={`/products/${id}`}>
                            <button className="btn bg-orange-500 hover:bg-orange-600 text-white border-none">
                                View Details
                            </button>
                           </Link>
                       
                    </div>
                </div>

            </div>
           
        </div>
    );
};

export default ProductCard;