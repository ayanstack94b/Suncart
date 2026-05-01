"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const UpdateProfilePage = () => {
    const router = useRouter();

    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    const handleUpdate = async (e) => {
        e.preventDefault();

        if (!name || !image) {
            toast.error("All fields required");
            return;
        }

        const { data, error } = await authClient.updateUser({
            name,
            image,
        });

        if (error) {
            toast.error(error.message);
            return;
        }

        toast.success("Profile updated");

        router.push("/my-profile");
    };

    return (
        <div className="max-w-md mx-auto py-10 px-4">

            <h1 className="text-2xl font-bold mb-6">
                Update Profile
            </h1>

            <form onSubmit={handleUpdate} className="space-y-4">

                <input
                    type="text"
                    placeholder="New Name"
                    className="input input-bordered w-full"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="New Photo URL"
                    className="input input-bordered w-full"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />

                <button className="btn bg-orange-500 text-white w-full">
                    Update
                </button>

            </form>

        </div>
    );
};

export default UpdateProfilePage;