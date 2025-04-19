import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaGoogle, FaWaze, FaApple } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Header />

      <section className="text-center py-28 px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mt-20 mb-6">Contact Us</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-10">
          Get in touch for questions, bookings or quote follow-ups.
        </p>

        <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-8 shadow-xl text-center space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Phone</h2>
              <p className="text-gray-700 dark:text-gray-300">
                <a href="tel:07399437312" className="hover:underline">07399 437 312</a>
                <br />
                or via <a href="https://wa.me/447399437312" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">WhatsApp</a>
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Email</h2>
              <p className="text-gray-700 dark:text-gray-300">contact@mddremap.com</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Address</h2>
              <p className="text-gray-700 dark:text-gray-300">21 Norfolk Road, LU2 0RE</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Opening Hours</h2>
              <p className="text-gray-700 dark:text-gray-300">Tuesday – Saturday · 09:00 – 18:00</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Navigate to us</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=21+Norfolk+Road,+LU2+0RE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition w-40 justify-center text-sm"
              >
                <FaGoogle /> Google Maps
              </a>
              <a
                href="https://waze.com/ul?ll=51.8889295,-0.4056214&navigate=yes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition w-40 justify-center text-sm"
              >
                <FaWaze /> Waze
              </a>
              <a
                href="http://maps.apple.com/?daddr=21+Norfolk+Road,+LU2+0RE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-900 transition w-40 justify-center text-sm"
              >
                <FaApple /> Apple Maps
              </a>
            </div>
          </div>

          <div className="w-full sm:w-[100%] mx-auto">
            <iframe
              title="Google Maps"
              className="rounded-xl w-full h-[400px] shadow-lg"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.8419397760865!2d-0.4056214!3d51.8889295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876488e032c38c7%3A0x47b327fc3d06bfc4!2s21%20Norfolk%20Rd%2C%20Luton%20LU2%200RE%2C%20UK!5e0!3m2!1sen!2suk!4v1713528211175!5m2!1sen!2suk"
            ></iframe>
          </div>
        </div>

        <div className="mt-10 text-center">
          <h3 className="text-xl font-bold mb-2">Need help choosing the right service?</h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Our team is happy to assist with technical questions, service recommendations, or appointment planning. Contact us anytime.
          </p>
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <Link to="/" className="px-6 py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition">
            Back to Home
          </Link>
          <Link to="/" className="px-6 py-3 rounded-lg border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition">
            Request a Quote
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
