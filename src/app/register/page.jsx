"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const RegisterPage = () => {

    const router = useRouter();

    const [form, setForm] = useState({
        name: "",
        email: "",
        photo: "",
        password: "",
    });

    const handleRegister = (e) => {
        e.preventDefault();

        const { name, email, photo, password } = form;

        if (!name || !email || !photo || !password) {
            toast.error("All fields are required");
            return;
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }

        // 🔥 TEMP success
        toast.success("Registration successful");

        router.push("/login");
    };

    return (
        <div className="flex justify-center items-center min-h-[80vh] px-4">
            <div className="card w-full max-w-md bg-base-100 shadow-md p-6">

                <h1 className="text-2xl font-bold text-center mb-6">Register</h1>

                <form onSubmit={handleRegister} className="space-y-4">

                    <input
                        type="text"
                        placeholder="Name"
                        className="input input-bordered w-full"
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="input input-bordered w-full"
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />

                    <input
                        type="text"
                        placeholder="Photo URL"
                        className="input input-bordered w-full"
                        onChange={(e) => setForm({ ...form, photo: e.target.value })}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="input input-bordered w-full"
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />

                    <button className="btn bg-orange-500 hover:bg-orange-600 text-white w-full">
                        Register
                    </button>
                </form>

                <p className="text-sm text-center mt-4">
                    Already have an account?{" "}
                    <span
                        onClick={() => router.push("/login")}
                        className="text-orange-500 cursor-pointer"
                    >
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;