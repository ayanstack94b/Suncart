"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    const router = useRouter();
    const { data: session } = authClient.useSession();

    const handleProtectedNav = (path) => {
        if (!session) {
            router.push(`/login?redirect=${path}`);
        } else {
            router.push(path);
        }
    };

    return (
        <footer className="bg-base-200 text-gray-700">
            <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-3 lg:grid-cols-4">


                <div>
                    <Link href={'/'}>
                        <h2 className="text-3xl font-bold text-orange-500 mb-3">
                            Suncart
                        </h2>
                    </Link>
                    <p className="text-sm">
                        Your one-stop summer essentials store.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="cursor-pointer hover:text-orange-500" onClick={() => router.push("/")}>
                            Home
                        </li>
                        <li className="cursor-pointer hover:text-orange-500" onClick={() => handleProtectedNav("/products")}>
                            Products
                        </li>
                        <li className="cursor-pointer hover:text-orange-500" onClick={() => handleProtectedNav("/my-profile")}>
                            My Profile
                        </li>
                    </ul>
                </div>

                {/* Categories */}
                <div>
                    <h3 className="font-semibold mb-3">Categories</h3>
                    <ul className="space-y-2 text-sm">

                        <li className="hover:text-orange-500 cursor-pointer">Accessories</li>
                        <li className="hover:text-orange-500 cursor-pointer">Clothing</li>
                        <li className="hover:text-orange-500 cursor-pointer">Footwear</li>

                        <li className="hover:text-orange-500 cursor-pointer">Essentials</li>

                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="font-semibold mb-3">Connect</h3>

                    <div className="flex gap-4 text-xl text-gray-600">
                        <FaFacebook className="hover:text-orange-500 cursor-pointer" />
                        <FaInstagram className="hover:text-orange-500 cursor-pointer" />
                        <FaTwitter className="hover:text-orange-500 cursor-pointer" />
                    </div>

                    <p className="text-xs mt-4">
                        © {new Date().getFullYear()} Suncart. All rights reserved.
                    </p>

                    <p className="text-xs mt-1 hover:text-orange-500 cursor-pointer">
                        Privacy Policy
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;