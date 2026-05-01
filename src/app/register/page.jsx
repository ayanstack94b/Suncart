"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const RegisterPage = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors }, watch } = useForm()
    const [isShowPassword, setIsShowPassword] = useState(false)


    const handleRegisterFunc = async (data) => {
        const { name, email, photo, password } = data


        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photo,

        })

        if (error) {
            toast.error(error.message || "Signup failed");
            return;
        }

        toast.success("Signup successful");
        router.push("/login");

    }
    const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <div className="container mx-auto my-20 py-20 flex items-center justify-center bg-base-200 p-5 min-h-[90vh] px-4">
            <div className="bg-white w-md p-10 rounded shadow-md hover:shadow-xl transition-shadow duration-75">
                {/* form title */}
                <h2 className="text-3xl font-bold mb-5 text-center">Register to <span className="text-orange-500">Suncart</span></h2>

                <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
                    {/* Name */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input type="text"
                            className="input w-full"
                            {...register("name", { required: true })}
                            placeholder="Type your Name" />
                        {errors.name && <span className="text-red-500 text-xs font-md">Name field is required</span>}
                    </fieldset>

                    {/* Email */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email address</legend>
                        <input type="email"
                            className="input w-full"
                            {...register("email", { required: true })}
                            placeholder="Type your Email" />
                        {errors.email && <span className="text-red-500 text-xs font-md">Email field is required</span>}
                    </fieldset>

                    {/* Photo */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input type="text"
                            className="input w-full"
                            {...register("photo", { required: true })}
                            placeholder="Type your URL" />
                        {errors.photo && <span className="text-red-500 text-xs font-md">Photo URL is Required</span>}
                    </fieldset>

                    {/* Password */}
                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                        <input type={isShowPassword ? 'text' : "password"}
                            className="input w-full"
                            {...register("password", { required: true })}
                            placeholder="Type your Password" />
                        <span className="absolute right-2 top-4 cursor-pointer" onClick={() => setIsShowPassword(!isShowPassword)}>
                            {isShowPassword ? (<FaEye></FaEye>) : (<FaEyeSlash></FaEyeSlash>)}
                        </span>
                        {errors.password && <span className="text-red-500 text-xs font-md">Password is required</span>}
                    </fieldset>
                    <button type="submit " className="btn w-full bg-orange-500 text-white">Register</button>
                </form>
                <p className="text-gray-500 font-semibold my-5 text-center">Already have an Account? Please <Link href={'/login'}><span className="text-blue-600 font-md underline">Login</span></Link></p>

                <div className="divider my-5">Or</div>

                {/* login with google */}

                <div className="">
                    <button onClick={handleGoogleSignin} className="btn shadow-md bg-white text-black border-[#e5e5e5] w-full">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>

            </div>
        </div>
    );
};

export default RegisterPage;