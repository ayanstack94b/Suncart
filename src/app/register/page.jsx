"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors }, watch } = useForm()
    const [isShowPassword, setIsShowPassword] = useState(false)
    const handleRegisterFunc = async (data) => {
        const { name, email, photo, password } = data
        console.log('from Register', name, email, photo, password);

        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: '/',
        })
        console.log('from register', res, error);
        if (error) {
            alert(error.message)
        }
        if (res) {
            alert("Signup successfully")
        }
    }

    return (
        <div className="container mx-auto flex items-center justify-center bg-base-200 p-5 min-h-screen px-4">
            <div className="bg-white p-10 rounded shadow-md hover:shadow-xl transition-shadow duration-75">
                {/* form title */}
                <h2 className="text-3xl font-bold mb-5">Register to <span className="text-orange-500">Suncart</span></h2>

                <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
                    {/* Name */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input type="text"
                            className="input"
                            {...register("name", { required: true })}
                            placeholder="Type your Name" />
                        {errors.name && <span className="text-red-500 text-xs font-md">Name field is required</span>}
                    </fieldset>

                    {/* Email */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email address</legend>
                        <input type="email"
                            className="input"
                            {...register("email", { required: true })}
                            placeholder="Type your Email" />
                        {errors.email && <span className="text-red-500 text-xs font-md">Email field is required</span>}
                    </fieldset>

                    {/* Photo */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input type="text"
                            className="input"
                            {...register("photo", { required: true })}
                            placeholder="Type your URL" />
                        {errors.photo && <span className="text-red-500 text-xs font-md">Photo URL is Required</span>}
                    </fieldset>

                    {/* Password */}
                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                        <input type={isShowPassword ? 'text' : "password"}
                            className="input"
                            {...register("password", { required: true })}
                            placeholder="Type your Password" />
                        <span className="absolute right-2 top-4 cursor-pointer" onClick={() => setIsShowPassword(!isShowPassword)}>
                            {isShowPassword ? (<FaEye></FaEye>) : (<FaEyeSlash></FaEyeSlash>)}
                        </span>
                        {errors.password && <span className="text-red-500 text-xs font-md">Password is required</span>}
                    </fieldset>
                    <button type="submit " className="btn w-full bg-orange-500 text-white">Register</button>
                </form>
                <p className="text-gray-500 font-semibold my-5">Already have an Account? Please <Link href={'/login'}><span className="text-blue-600 font-md underline">Login</span></Link></p>
            </div>
        </div>
    );
};

export default RegisterPage;