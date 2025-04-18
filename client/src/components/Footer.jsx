import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white mt-20 pt-10 pb-6 px-6 border-t border-gray-200">
      {/* Layout 2 coloane */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 text-sm text-gray-700">

        {/* Contact Details */}
        <div className="w-full md:w-1/2">
          <h3 className="text-lg font-semibold mb-3">Contact Details</h3>
          <p className="mb-1">01234 619579</p>
          <p className="mb-1">44 Singer Way, Bedford, MK42 7AF</p>
          <p className="mb-1">Tuesday–Saturday · 09:00–18:00</p>
        </div>

        {/* Socials & Partners */}
        <div className="w-full md:w-1/2 text-left md:text-right">
          <h3 className="text-lg font-semibold mb-3">Socials & Partners</h3>
          <div className="flex md:justify-end gap-6 text-xl text-gray-700">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
              <FaInstagram />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
              <FaTiktok />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-xs text-gray-500">
        Copyright © MDDREMAP 2025 · Made with <span className="text-red-500">❤️</span> by IHaveHost
      </div>
    </footer>
  );
}
