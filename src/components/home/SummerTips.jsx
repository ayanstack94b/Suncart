import React from 'react';

const SummerTips = () => {
    return (
        <section className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">
                ☀️ Summer Care Tips
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

                <div className="p-5 bg-base-100 shadow rounded">
                    <h3 className="font-semibold mb-2">Stay Hydrated</h3>
                    <p className="text-sm text-gray-500">
                        Drink enough water to avoid dehydration.
                    </p>
                </div>

                <div className="p-5 bg-base-100 shadow rounded">
                    <h3 className="font-semibold mb-2">Use Sunscreen</h3>
                    <p className="text-sm text-gray-500">
                        Protect your skin from harmful UV rays.
                    </p>
                </div>

                <div className="p-5 bg-base-100 shadow rounded">
                    <h3 className="font-semibold mb-2">Wear Light Clothes</h3>
                    <p className="text-sm text-gray-500">
                        Stay cool with breathable fabrics.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default SummerTips;