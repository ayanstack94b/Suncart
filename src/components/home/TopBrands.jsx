import React from 'react';

const TopBrands = () => {

    const brands = ["Nike", "Adidas", "Puma", "RayBan"];

    return (
        <section className="container mx-auto px-4 pb-10">
            <h2 className="text-2xl font-bold mb-6">
                🏷️ Top Brands
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                {brands.map((brand) => (
                    <div
                        key={brand}
                        className="p-6 text-center bg-base-100 shadow rounded"
                    >
                        <h3 className="font-semibold">{brand}</h3>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default TopBrands;