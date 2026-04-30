"use client"
import Image from "next/image";
import products from "@/data/products.json";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Popular Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.slice(0, 3).map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h2 className="font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-500">⭐ {product.rating}</p>
            <p className="font-bold">₹{product.price}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}
