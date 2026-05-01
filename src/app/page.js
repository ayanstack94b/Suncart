"use client";

import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";
import HeroSection from "@/components/home/HeroSection";
import SummerTips from "@/components/home/SummerTips";
import TopBrands from "@/components/home/TopBrands";

export default function Home() {
  const popularProducts = products.slice(0, 3);

  return (
    <div className="space-y-16">
      <HeroSection />
      <TopBrands />
      {/* Popular Products */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">🔥 Popular Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <SummerTips />
    </div>
  );
}
