import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="relative min-h-screen w-full bg-slate-50 flex flex-col items-center justify-center overflow-hidden font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* --- Background Elements --- */}

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Soft Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white pointer-events-none"></div>

      {/* Floating Blurred Orbs (Ambient) */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* --- Main Content --- */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        {/* Large Geometric 404 */}
        <h1 className="text-[120px] sm:text-[180px] font-black text-slate-900 tracking-tighter leading-none select-none opacity-90 drop-shadow-sm">
          4<span className="text-blue-600">0</span>4
        </h1>

        {/* Decorative Line */}
        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full my-6"></div>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 tracking-tight">
          Page not found
        </h2>

        <p className="text-slate-500 text-lg md:text-xl mb-10 leading-relaxed max-w-lg mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have
          been moved or deleted.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary Button: Home */}
          <Link
            to="/"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 bg-slate-900 rounded-full hover:bg-slate-800 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          >
            <span>Back to Home</span>
            <svg
              className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>

          {/* Secondary Button: Go Back */}
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-slate-600 transition-all duration-300 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2"
          >
            Go Back
          </button>
        </div>
      </div>

      {/* Footer Help Link */}
      <div className="absolute bottom-8 text-slate-400 text-sm">
        Need help?{" "}
        <Link
          to="/contact"
          className="text-slate-600 font-medium hover:text-blue-600 transition-colors"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
