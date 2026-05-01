"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";

const ProductsPage = () => {
    const router = useRouter();

    const { data: session, isPending } = authClient.useSession();

    // 🔐 redirect if not logged in
    useEffect(() => {
        if (!isPending && !session) {
            router.replace("/login?redirect=/products");
        }
    }, [session, isPending, router]);

    // ⏳ loading state
    if (isPending) {
        return <div className="text-center py-10">Loading...</div>;
    }

    // 🚫 prevent flicker
    if (!session) {
        return null;
    }

    return (
        <div className="container mx-auto my-10 min-h-screen p-3">
            <h1 className="text-2xl font-bold mb-8">
                All Products
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;