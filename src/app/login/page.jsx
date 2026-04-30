"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const LoginPage = () => {

    const searchParams = useSearchParams();
    const router = useRouter();

    const redirectPath = searchParams.get("redirect") || "/";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        
        if (!email || !password) {
            toast.error("All fields are required");
            return;
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }

        // simulate success
        localStorage.setItem("isLoggedIn", "true");

        toast.success("Login successful");
        router.push(redirectPath);
    };

    return (
        <div className="flex justify-center items-center min-h-[80vh] px-4">
            <div className="card w-full max-w-md bg-base-100 shadow-md p-6">

                <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

                <form onSubmit={handleLogin} className="space-y-4">

                    <input
                        type="email"
                        placeholder="Email"
                        className="input input-bordered w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="input input-bordered w-full"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className="btn bg-orange-500 hover:bg-orange-600 text-white w-full">
                        Login
                    </button>
                </form>

                <p className="text-sm text-center mt-4">
                    Don’t have an account?{" "}
                    <span
                        onClick={() => router.push("/register")}
                        className="text-orange-500 cursor-pointer"
                    >
                        Register
                    </span>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;