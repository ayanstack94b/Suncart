"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const MyProfilePage = () => {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();

    const user = session?.user;

    useEffect(() => {
        if (!isPending && !session) {
            router.replace("/login?redirect=/my-profile");
        }
    }, [session, isPending, router]);

    if (isPending) {
        return <div className="text-center py-10">Loading...</div>;
    }

    if (!session) {
        return null;
    }

    return (
        <div className="max-w-xl mx-auto py-10 px-4">

            <h1 className="text-2xl font-bold mb-6">
                My Profile
            </h1>

            <div className="bg-white shadow rounded-lg p-6 text-center">

                {/* Image */}
                {user?.image ? (
                    <Image
                        src={user.image}
                        alt="user"
                        width={100}
                        height={100}
                        className="rounded-full mx-auto mb-4"
                    />
                ) : (
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4" />
                )}

                {/* Info */}
                <h2 className="text-xl font-semibold">{user?.name}</h2>
                <p className="text-gray-500">{user?.email}</p>


                <Link href="/my-profile/update">
                    <button className="btn mt-6 bg-orange-500 text-white">
                        Update Profile
                    </button>
                </Link>

            </div>

        </div>
    );
};

export default MyProfilePage;