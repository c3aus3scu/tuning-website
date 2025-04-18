import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl px-4">
      <header className="bg-white dark:bg-black shadow-xl rounded-2xl px-6 py-4 md:py-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
  <img
    src="/images/Logo.png"
    alt="MDDREMAP Logo"
    className="ml-2 h-12 md:h-14 transform scale-[1.7] hover:scale-[1.8] transition-transform duration-300"
    />
</Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-base font-bold text-gray-700 dark:text-gray-300">
          <Link to="/" className="hover:text-black dark:hover:text-white transition">Home</Link>
          <Link to="/services" className="hover:text-black dark:hover:text-white transition">Services</Link>
          <Link to="/blog" className="hover:text-black dark:hover:text-white transition">Blog</Link>
          <Link to="/about" className="hover:text-black dark:hover:text-white transition">About</Link>
          <Link to="/contact" className="hover:text-black dark:hover:text-white transition">Contact</Link>
        </nav>

        {/* Theme + Burger */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-gray-800 dark:text-white px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="mt-2 bg-white dark:bg-black rounded-xl shadow-lg py-4 px-6 md:hidden">
          <nav className="flex flex-col gap-4 text-base font-medium text-gray-700 dark:text-gray-300">
            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-black dark:hover:text-white">Home</Link>
            <Link to="/services" onClick={() => setMenuOpen(false)} className="hover:text-black dark:hover:text-white">Services</Link>
            <Link to="#" onClick={() => setMenuOpen(false)} className="hover:text-black dark:hover:text-white">Blog</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-black dark:hover:text-white">About</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-black dark:hover:text-white">Contact</Link>
          </nav>
        </div>
      )}
    </div>
  );
}
