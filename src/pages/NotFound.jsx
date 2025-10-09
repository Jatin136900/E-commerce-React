import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center text-white px-4 py-10">
      <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] max-w-[500px] mb-8">
        <img
          src="https://i.pinimg.com/1200x/6a/00/d9/6a00d9f0d294ea4311382be18fd78f88.jpg"
          alt="Not Found"
          className="w-full h-auto object-cover rounded-2xl shadow-2xl border border-gray-700"
        />
      </div>

      <p className="text-base sm:text-lg md:text-xl text-red-400 text-center mb-6 px-2">
        Oops! The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="bg-red-600 hover:bg-red-700 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full font-medium shadow-lg transition-all duration-300 text-sm sm:text-base"
      >
        Go Back Home
      </Link>
    </div>
  );
}
