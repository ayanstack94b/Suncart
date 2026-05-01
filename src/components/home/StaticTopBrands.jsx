"use client";

import { motion } from "framer-motion";
import { FaRunning } from "react-icons/fa";
import { MdSportsSoccer, MdOutlineWatch } from "react-icons/md";

const brands = [
    { name: "Nike", icon: <FaRunning />, gradient: "from-orange-100 to-orange-50", text: "text-orange-600" },
    { name: "Adidas", icon: <MdSportsSoccer />, gradient: "from-blue-100 to-blue-50", text: "text-blue-600" },
    { name: "Puma", icon: <FaRunning />, gradient: "from-red-100 to-red-50", text: "text-red-600" },
    { name: "Fastrack", icon: <MdOutlineWatch />, gradient: "from-purple-100 to-purple-50", text: "text-purple-600" },
];

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
};

const item = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const StaticTopBrands = () => {
    return (
        <section className="container mx-auto px-4 pb-14">

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold mb-10 text-center"
            >
                Top Brands
            </motion.h2>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
                {brands.map((brand, i) => (
                    <motion.div
                        key={i}
                        variants={item}
                        whileHover={{ y: -8, scale: 1.04 }}
                        className={`
              p-6 rounded-2xl 
              bg-gradient-to-br ${brand.gradient}
              shadow-md hover:shadow-xl
              transition-all duration-300
              flex flex-col items-center gap-3
              border border-white/40
              backdrop-blur-sm
            `}
                    >
                        <div className="p-3 bg-white/70 rounded-full shadow-sm">
                            <span className={`text-2xl ${brand.text}`}>
                                {brand.icon}
                            </span>
                        </div>

                        <h3 className={`font-semibold ${brand.text}`}>
                            {brand.name}
                        </h3>
                    </motion.div>
                ))}
            </motion.div>

        </section>
    );
};

export default StaticTopBrands;