import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center bg-white">
      <h1 className="text-7xl font-extrabold text-gray-900 mb-2">404</h1>

      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        Page not found
      </h2>

      <p className="text-gray-500 max-w-md mb-8">
        Looks like you took a wrong turn. The page you’re looking for doesn’t
        exist or has been moved.
      </p>

      <Link href="/">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full shadow-sm transition">
          Back to Home
        </button>
      </Link>

      <div className="mt-10 w-24 h-1 bg-orange-200 rounded-full"></div>
    </div>
  );
}
