"use client";

import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { FaRunning, FaTags, FaTshirt } from "react-icons/fa";
import { MdSportsSoccer, MdOutlineWatch } from "react-icons/md";
import { GiSunglasses, GiRunningShoe } from "react-icons/gi";
import { BsBackpack } from "react-icons/bs";

const brands = [
    { name: "Nike", icon: <FaRunning />, color: "text-orange-500", bg: "bg-orange-100" },
    { name: "Adidas", icon: <MdSportsSoccer />, color: "text-blue-500", bg: "bg-blue-100" },
    { name: "Puma", icon: <GiRunningShoe />, color: "text-red-500", bg: "bg-red-100" },
    { name: "RayBan", icon: <GiSunglasses />, color: "text-yellow-500", bg: "bg-yellow-100" },
    { name: "H&M", icon: <FaTshirt />, color: "text-pink-500", bg: "bg-pink-100" },
    { name: "Decathlon", icon: <BsBackpack />, color: "text-green-500", bg: "bg-green-100" },
    { name: "Fastrack", icon: <MdOutlineWatch />, color: "text-purple-500", bg: "bg-purple-100" },
];

const TopBrands = () => {

    const marqueeBrands = [...brands, ...brands];

    return (
        <section className="container mx-auto px-4 pb-14">

            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2"
            >
                <FaTags className="text-orange-500 text-2xl" />
                Top Brands
            </motion.h2>

            {/* Marquee */}
            <Marquee
                speed={40}
                pauseOnHover
                gradient={false}
            >
                {marqueeBrands.map((brand, i) => (
                    <div
                        key={i}
                        className="
        mx-3 sm:mx-4 md:mx-6
        flex items-center gap-2 sm:gap-3
        bg-white
        px-3 sm:px-4 md:px-5
        py-2 sm:py-3
        rounded-xl
        shadow
        border border-orange-100
        hover:shadow-lg transition
      "
                    >
                        <div className={`p-2 rounded-full ${brand.bg}`}>
                            <span className={`${brand.color} text-lg sm:text-xl`}>
                                {brand.icon}
                            </span>
                        </div>

                        <span className="text-sm sm:text-base font-semibold text-gray-700 whitespace-nowrap">
                            {brand.name}
                        </span>
                    </div>
                ))}
            </Marquee>

        </section>
    );
};

export default TopBrands;