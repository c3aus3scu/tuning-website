import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl px-4">
      <header className="bg-white dark:bg-black shadow-xl rounded-2xl px-6 py-4 md:py-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-gray-900 dark:text-white">mddremap</Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-base font-bold text-gray-700 dark:text-gray-300">
          <Link to="/" className="hover:text-black dark:hover:text-white transition">Home</Link>
          <Link to="/services" className="hover:text-black dark:hover:text-white transition">Services</Link>
          <a href="#regcheck" className="hover:text-black dark:hover:text-white transition">Reg Check</a>
          <a href="#contact" className="hover:text-black dark:hover:text-white transition">Contact</a>
          <a href="#why" className="hover:text-black dark:hover:text-white transition">Why Choose Us</a>
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
            <a href="#regcheck" className="hover:text-black dark:hover:text-white">Reg Check</a>
            <a href="#contact" className="hover:text-black dark:hover:text-white">Contact</a>
            <a href="#why" className="hover:text-black dark:hover:text-white">Why Choose Us</a>
          </nav>
        </div>
      )}
    </div>
  );
}
