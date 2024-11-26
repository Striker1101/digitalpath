import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();
  const navigate = useNavigate();

  // Optional: Redirect to home after a delay
  React.useEffect(() => {
    // Set the 404 status using the browser history API
    if (typeof window !== "undefined") {
      document.title = "404 - Page Not Found";
      // Optionally use history.replaceState to mimic 404
      window.history.replaceState(null, "", location.pathname);
    }

    const timeout = setTimeout(() => navigate("/"), 5000); // Redirect after 5 seconds
    return () => clearTimeout(timeout); // Cleanup timeout
  }, [location.pathname, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      {/* Animated SVG */}
      <div className="flex items-center justify-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-28 h-28 text-red-500 animate-bounce"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.29 3.86L1.82 12.22a2 2 0 000 2.56l8.47 8.36a2 2 0 002.85-.12L22.29 8.36a2 2 0 00-2.12-3.24L12 5.75l-1.71-1.89a2 2 0 00-2.56-.01z"
          />
        </svg>
      </div>
      <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mt-2 text-center px-6 md:px-0">
        Oops! The page you’re looking for doesn’t exist. It might have been
        removed, renamed, or is temporarily unavailable.
      </p>
      {/* Buttons */}
      <div className="mt-6">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
        >
          Return to Homepage
        </button>
      </div>
      {/* Auto redirect message */}
      <p className="mt-4 text-sm text-gray-500">
        You’ll be redirected to the homepage in 5 minutes.
      </p>
    </div>
  );
}
