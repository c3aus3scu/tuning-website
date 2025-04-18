import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full flex justify-center bg-white sticky top-0 z-50 px-4 py-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-gray-100 px-8 py-6 flex items-center justify-between">

        {/* Logo / Brand */}
        <div className="text-2xl font-bold text-gray-900">mddremap</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-base font-medium text-gray-700">
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
      </div>

      {/* Dropdown Mobile */}
      {menuOpen && (
        <div className="absolute top-[90px] left-4 right-4 bg-white shadow-lg rounded-xl z-40 py-6 px-6 md:hidden">
          <nav className="flex flex-col gap-4 text-base font-medium text-gray-700">
            <a href="#" className="hover:text-black">Home</a>
            <a href="#services" className="hover:text-black">Services</a>
            <a href="#regcheck" className="hover:text-black">Reg Check</a>
            <a href="#contact" className="hover:text-black">Contact</a>
            <a href="#why" className="hover:text-black">Why Choose Us</a>
          </nav>
        </div>
      )}
    </header>
  );
}
