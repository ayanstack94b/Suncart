"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginPage = () => {

    const { register, handleSubmit, formState: { errors },watch } = useForm()

    const handleLoginFunc = (data) => {
        console.log('this is data from login', data);
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
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password"
                            className="input"
                            {...register("password", {required: true})}
                            placeholder="Type your Password" />
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