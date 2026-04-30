"use client";
import Link from 'next/link';
import React from 'react';

const Navbar = () => {

    const links = <>
        <li><Link className='font-semibold text-lg hover:text-orange-600' href={'/'}>Home</Link></li>
        <li><Link className='font-semibold text-lg hover:text-orange-600' href={'/products'}>Products</Link></li>
        <li><Link className='font-semibold text-lg hover:text-orange-600' href={'/my-profile'}>My Profile</Link></li>
    </>

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
                    <Link href="/" className=" text-xl text-orange-500 hover:text-orange-600 font-bold">
                        SunCart
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <Link href="/login">
                        <span className=" font-bold text-lg hover:text-orange-600">Login</span>
                    </Link>
                    <Link href="/register">
                        <button className="btn bg-orange-500 hover:bg-orange-600 text-white border-none">
                            Register
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;