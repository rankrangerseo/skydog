import Link from "next/link";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | SkyDog",
  description: "The cosmic coordinates you requested do not exist. Return to the SkyDog homepage.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-[#0a071b] text-white">
      <div className="relative z-10 max-w-lg mx-auto py-16">
        <h1 className="text-7xl md:text-9xl font-extrabold tracking-widest text-[#a855f7] drop-shadow-[0_0_35px_rgba(168,85,247,0.5)]">
          404
        </h1>
        <div className="bg-[#6b21a8] px-3 py-1 text-xs uppercase tracking-widest font-semibold rounded inline-block my-4">
          Lost in Deep Space
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          Cosmic Coordinates Not Found
        </h2>
        <p className="text-slate-300 text-sm md:text-base mb-8 max-w-md mx-auto leading-relaxed">
          The page or asset you are searching for has drifted into deep space or has been relocated.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-900/40 transition-all duration-300 transform hover:-translate-y-0.5"
        >
          Return to Mission Control
        </Link>
      </div>
    </main>
  );
}
