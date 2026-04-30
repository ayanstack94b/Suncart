"use client";

import Lottie from "lottie-react";
import animationData from "@/lottie/loading.json";

export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <Lottie
                animationData={animationData}
                loop={true}
                className="w-40"
            />
        </div>
    );
}