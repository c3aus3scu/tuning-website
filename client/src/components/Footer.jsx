import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { href: "https://facebook.com", icon: <FaFacebookF /> },
    { href: "https://instagram.com", icon: <FaInstagram /> },
    { href: "https://tiktok.com", icon: <FaTiktok /> },
    { href: "https://youtube.com", icon: <FaYoutube /> },
  ];

  return (
    <footer className="bg-white dark:bg-black mt-20 pt-10 pb-6 px-6 border-t border-gray-200 dark:border-gray-800 text-center md:text-left transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10 text-sm text-gray-700 dark:text-gray-300">

        {/* Contact Details */}
        <div className="w-full md:w-1/2">
          <h3 className="text-lg font-semibold mb-3">Contact Details</h3>
          <p className="mb-1">07399437312</p>
          <p className="mb-1">21 Norfolk Road, LU2 0RE</p>
          <p className="mb-1">Tuesday–Saturday · 09:00–18:00</p>
        </div>

        {/* Socials & Partners */}
        <div className="w-full md:w-1/2 text-center md:text-right">
          <h3 className="text-lg font-semibold mb-3">Socials & Partners</h3>
          <div className="flex justify-center md:justify-end gap-6 text-xl text-gray-700 dark:text-gray-300">
            {socialLinks.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:text-black dark:hover:text-cyan-400 hover:scale-110"
              >
                <span className="inline-block transform hover:drop-shadow-[0_0_6px_rgba(0,0,0,0.3)] dark:hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
                  {item.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-xs text-gray-500 dark:text-gray-400">
        Copyright © MDDREMAP 2025 · Made with <span className="text-red-500">❤️</span> by IHaveHost
      </div>
    </footer>
  );
}
