"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {

    const [isShowPassword, setIsShowPassword] = useState(false)
    const { register, handleSubmit, formState: { errors }, watch } = useForm()

    const handleLoginFunc = async (data) => {
        const { email, password } = data

        const { data: res, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        console.log('from login', res, error);
    }

    return (
        <div className="container mx-auto flex items-center justify-center bg-base-200 p-3 min-h-[80vh] px-4">
            <div className="bg-white p-10 rounded shadow-md hover:shadow-xl transition-shadow duration-75">
                {/* form title */}
                <h2 className="text-3xl font-bold mb-5">Login to <span className="text-orange-500">Suncart</span></h2>

                <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
                    {/* Email */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email address</legend>
                        <input type="email"
                            className="input"
                            {...register("email", { required: true })}
                            placeholder="Type your Email" />
                        {errors.email && <span className="text-red-500 text-xs font-md">Email field is required</span>}
                    </fieldset>

                    {/* Password */}
                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                        <input type={isShowPassword ? "text" : "password"}
                            className="input"
                            {...register("password", { required: true })}
                            placeholder="Type your Password" />
                            <span className="absolute right-2 top-4 cursor-pointer" onClick={()=>setIsShowPassword(!isShowPassword)}>
                            {isShowPassword ? (<FaEye></FaEye>) : (<FaEyeSlash></FaEyeSlash>)}
                            </span>
                        {errors.password && <span className="text-red-500 text-xs font-md">Password is required</span>}
                    </fieldset>
                    <button type="submit " className="btn w-full bg-orange-500 text-white">Login</button>
                </form>
                <p className="text-gray-500 font-semibold my-5">Dont have an Account? Please <Link href={'/register'}><span className="text-blue-600 font-md underline">Register</span></Link></p>
            </div>
        </div>
    );
};

export default LoginPage;