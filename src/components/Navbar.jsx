"use client";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import Lottie from "lottie-react";
import animationData from "@/lottie/summerCart.json";
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
    const pathname = usePathname();
    const isLogin = pathname === "/login";
    const isRegister = pathname === "/register";

    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;


    const links = <>
        <li>
            <Link
                href="/"
                className={`font-semibold text-lg ${pathname === "/" ? "text-orange-500" : "hover:text-orange-600"
                    }`}
            >
                Home
            </Link>
        </li>

        <li>
            <Link
                href="/products"
                className={`font-semibold text-lg ${pathname.startsWith("/products")
                    ? "text-orange-500"
                    : "hover:text-orange-600"
                    }`}
            >
                Products
            </Link>
        </li>

        <li>
            <Link
                href="/my-profile"
                className={`font-semibold text-lg ${pathname === "/my-profile"
                    ? "text-orange-500"
                    : "hover:text-orange-600"
                    }`}
            >
                My Profile
            </Link>
        </li>
    </>;


    return (
        <div className=''>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="0"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link href={'/'}>
                        <div className="flex items-center gap-2">
                            <Lottie animationData={animationData} className="w-10" />
                            <span className="text-orange-500 font-bold text-xl">SunCart</span>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
               
               
                {/* active inactive buttonns */}

                <div className="navbar-end gap-2">

                    {isPending ? (<span className="loading loading-bars loading-xl"></span>): user ? (
                        <div className="flex items-center gap-3">

                            {/* User Info */}
                            <h2 className="text-gray-500 font-semibold text-md">
                                Hello, <span className="text-green-500 font-bold text-lg">{user?.name}</span>
                            </h2>

                            {/* Avatar */}
                            {user?.image ? (
                               <Link href={'/my-profile'}>
                                    <Image
                                        src={user?.image}
                                        alt="user"
                                        height={50}
                                        width={50}
                                        className="rounded-full"
                                    />
                               </Link>
                            ) : (
                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                                    <FaUser />
                                </div>
                            )}

                            {/* Logout */}
                            <button onClick={async()=>await authClient.signOut()}
                                
                                className="btn bg-red-600 text-white"
                            >
                                Logout
                            </button>

                        </div>
                    ) : (
                        <>
                            {/* Login */}
                            <Link href="/login">
                                <button
                                    className={`btn ${isLogin
                                            ? "bg-orange-500 text-white border-none"
                                            : "btn-ghost font-medium text-orange-600 text-lg"
                                        }`}
                                >
                                    Login
                                </button>
                            </Link>

                            {/* Register */}
                            <Link href="/register">
                                <button
                                    className={`btn ${isRegister
                                            ? "bg-orange-500 text-white border-none"
                                            : "btn-ghost"
                                        }`}
                                >
                                    Register
                                </button>
                            </Link>
                        </>
                    )}

                </div>

            </div>
        </div>
    );
};

export default Navbar;