import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl px-4">
      <header className="bg-white shadow-xl rounded-2xl px-6 py-4 md:py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">mddremap</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-base font-medium text-gray-700">
          <a href="#" className="hover:text-black transition">Home</a>
          <a href="#services" className="hover:text-black transition">Services</a>
          <a href="#regcheck" className="hover:text-black transition">Reg Check</a>
          <a href="#contact" className="hover:text-black transition">Contact</a>
          <a href="#why" className="hover:text-black transition">Why Choose Us</a>
        </nav>

        {/* Mobile Burger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl text-gray-800">
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="mt-2 bg-white rounded-xl shadow-lg py-4 px-6 md:hidden">
          <nav className="flex flex-col gap-4 text-base font-medium text-gray-700">
            <a href="#" className="hover:text-black">Home</a>
            <a href="#services" className="hover:text-black">Services</a>
            <a href="#regcheck" className="hover:text-black">Reg Check</a>
            <a href="#contact" className="hover:text-black">Contact</a>
            <a href="#why" className="hover:text-black">Why Choose Us</a>
          </nav>
        </div>
      )}
    </div>
  );
}
