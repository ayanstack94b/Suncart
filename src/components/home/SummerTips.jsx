"use client";

import { motion } from "framer-motion";
import { FaWater, FaSun, FaTshirt } from "react-icons/fa";

const tips = [
    {
        title: "Stay Hydrated",
        desc: "Drink water regularly throughout the day to prevent fatigue, dizziness, and heat exhaustion during hot weather.",
        icon: <FaWater className="text-orange-500 text-2xl" />,
    },
    {
        title: "Use Sunscreen",
        desc: "Apply SPF 30+ sunscreen before stepping out to protect your skin from sunburn, tanning, and long-term damage.",
        icon: <FaSun className="text-orange-500 text-2xl" />,
    },
    {
        title: "Wear Light Clothes",
        desc: "Choose loose, breathable fabrics like cotton to stay cool and comfortable even during peak summer heat.",
        icon: <FaTshirt className="text-orange-500 text-2xl" />,
    }
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

const SummerTips = () => {
    return (
        <section className="p-10 mt-3 md:mt-10 lg:pt-20 min-h-screen px-4 py-10 bg-orange-50 rounded">

            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold my-15 text-center flex items-center justify-center gap-2"
            >
                <motion.span
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 10,
                        ease: "linear",
                    }}
                >
                    <FaSun className="text-orange-500 text-3xl" />
                </motion.span>

                Summer Care Tips
            </motion.h2>

            {/* Cards */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="container mx-auto grid md:grid-cols-3 gap-6"
            >
                {tips.map((tip, i) => (
                    <motion.div
                        key={i}
                        variants={cardVariants}
                        whileHover={{
                            y: -8,
                            scale: 1.03,
                        }}
                        className="p-6 bg-base-100 shadow-md rounded-xl border border-orange-100 hover:shadow-xl transition"
                    >
                        <div className="mb-3">{tip.icon}</div>

                        <h3 className="font-semibold text-lg mb-2">
                            {tip.title}
                        </h3>

                        <p className="text-sm text-gray-500">
                            {tip.desc}
                        </p>
                    </motion.div>
                ))}
            </motion.div>

        </section>
    );
};

export default SummerTips;