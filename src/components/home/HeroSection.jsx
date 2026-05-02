"use client";

import { useEffect, useState } from "react";
import Image from "next/image";


const slides = [
    {
        image: "https://ik.imagekit.io/nwrherrxz/ChatGPT%20Image%20May%201,%202026,%2006_42_49%20PM.png",
        title: "Summer Sale 50% OFF",
        desc: "Grab the hottest deals before they’re gone.",
    },
    {
        image: "https://ik.imagekit.io/nwrherrxz/ChatGPT%20Image%20May%201,%202026,%2006_41_03%20PM.png",
        title: "Hot Deals 🔥",
        desc: "Trending products at unbeatable prices.",
    },
    {
        image: "https://ik.imagekit.io/nwrherrxz/ChatGPT%20Image%20May%201,%202026,%2006_52_33%20PM.png",
        title: "Stay Cool This Summer",
        desc: "Explore summer essentials now.",
    },
];

const HeroSection = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);



    return (
        <div className="relative w-full h-[30vh] md:h-[110vh] lg:min-h-screen overflow-hidden">

            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    <Image
                        src={slide.image}
                        alt="banner"
                        width={1920}
                        height={1400}
                        className="w-full h-auto"
                    />
                </div>
            ))}


            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, i) => (
                    <div
                        key={i}
                        className={`w-3 h-3 rounded-full ${i === current ? "bg-orange-500" : "bg-white/70"
                            }`}
                    />
                ))}
            </div>

        </div>
    );
};

export default HeroSection;