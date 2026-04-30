"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";


const RegisterPage = () => {

     const { register, handleSubmit, formState: { errors },watch } = useForm()
    
        const handleRegisterFunc = (data) => {
            console.log('this is data from login', data);
            const {name, email, photo, password} = data
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
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password"
                            className="input"
                            {...register("password", { required: true })}
                            placeholder="Type your Password" />
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