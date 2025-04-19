import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <section className="text-center py-28 px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mt-10 mb-4">About MDDREMAP</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Tuning isn't just our job – it's our passion. We're here to give you the safest, most powerful driving experience possible.
        </p>
      </section>

      {/* Our Story */}
      <section className="bg-gray-100 dark:bg-gray-900 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-gray-700 dark:text-gray-300 text-md">
            Founded in 2016, MDDREMAP began with a single goal: to bring reliable and powerful performance upgrades to everyday drivers.
            With over 3000 cars tuned, we’ve built a reputation for custom software, top-tier tools, and a commitment to safe gains.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-md">
            Whether you're looking for more torque, better fuel efficiency, or DPF/EGR/AdBlue solutions, we treat every vehicle with care.
            We’re not just pressing buttons – we calibrate, test, and validate every job.
          </p>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center space-y-10">
        <h2 className="text-3xl font-bold">What Makes Us Different</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "In-house Dyno Testing",
            "IMI Accredited Technicians",
            "Mobile & Workshop Tuning",
            "Genuine Tuning Tools",
            "Tailored Remap Files",
            "Over 8 Years Experience"
          ].map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow text-md font-medium">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Client Showcase Placeholder */}
      <section className="bg-gray-100 dark:bg-gray-900 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Client Jobs & Showcase</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Here's where we’ll feature some of the transformations we’ve completed – remaps, deletes, diagnostics and full builds.
        </p>
        <div className="border-2 border-dashed border-gray-400 dark:border-gray-600 py-16 rounded-xl text-gray-500">
          Image gallery coming soon...
        </div>
      </section>

      {/* Blog Highlights Placeholder */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">From the Blog</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          We’ll post updates, tuning tips, and behind-the-scenes insights here.
        </p>
        <div className="border-2 border-dashed border-gray-400 dark:border-gray-600 py-16 rounded-xl text-gray-500">
          Blog content coming soon...
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16">
        <h2 className="text-2xl font-semibold mb-4">Ready to tune your car?</h2>
        <div className="flex justify-center gap-4">
          <Link to="/" className="px-6 py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition">
            Check Reg
          </Link>
          <Link to="/quote" className="px-6 py-3 rounded-lg border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition">
            Get a Quote
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
