import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">

        {/* 404 Text */}
        <h1 className="text-8xl font-bold text-blue-500">404</h1>

        {/* Message */}
        <h2 className="text-2xl mt-4 mb-2">Page Not Found</h2>
        <p className="text-gray-400 mb-6">
          The page you are looking for doesn't exist.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded transition"
        >
          Go Home
        </Link>

      </div>
    </div>
  );
};

export default NotFound;