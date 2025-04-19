import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from 'react-helmet-async';import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import QuoteForm from "../components/QuoteForm";
import Footer from "../components/Footer";

export default function Home() {
  const [step, setStep] = useState(1);
  const [regNumber, setRegNumber] = useState("");

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen flex flex-col transition-colors duration-300">
      <Helmet>
        <title>ECU Remapping & Car Tuning in Luton | MDDREMAP</title>
        <meta
          name="description"
          content="ECU remapping, DPF removal, AdBlue delete, and custom Stage 1/2 tuning in Luton. Mobile & workshop services by trusted specialists. Get a free quote today!"
        />
        <meta
          name="keywords"
          content="ecu remap luton, car tuning luton, adblue delete luton, dpf removal luton, mobile tuning luton, stage 1 remap luton, performance tuning uk"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mddremap.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            "name": "MDD MOVE LTD",
            "image": "https://mddremap.com/logo.png",
            "url": "https://mddremap.com/",
            "telephone": "07399437312",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "21 Norfolk Road",
              "addressLocality": "Luton",
              "postalCode": "LU2 0RE",
              "addressCountry": "GB"
            },
            "openingHours": "Tu-Sa 09:00-18:00",
            "priceRange": "££",
            "sameAs": []
          })}
        </script>
      </Helmet>

      <Header />
      <main className="flex-grow">
        <HeroSection setStep={setStep} setRegNumber={setRegNumber} />
        <QuoteForm step={step} setStep={setStep} regNumber={regNumber} />

        {/* Reviews Section */}
        <section className="bg-gray-100 dark:bg-gray-900 py-20 px-4">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
    <p className="text-gray-600 dark:text-gray-400 mb-10">
      Real feedback from tuning clients across Luton and beyond.
    </p>

    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      >
        {[
          {
            name: "Daniel M.",
            location: "Luton",
            date: "2024-12-03",
            text: "Very professional service. My BMW runs smoother than ever after the Stage 1 remap!",
            stars: 5,
          },
          {
            name: "Ana P.",
            location: "Dunstable",
            date: "2024-11-20",
            text: "AdBlue delete solved my constant dashboard errors. Highly recommend MDDREMAP!",
            stars: 5,
          },
          {
            name: "Cristian R.",
            location: "Hitchin",
            date: "2024-10-18",
            text: "Fast, friendly and knowledgeable. EGR delete + diagnostics done in 2 hours. Brilliant job!",
            stars: 5,
          },
          {
            name: "Jake T.",
            location: "St Albans",
            date: "2024-08-12",
            text: "Stage 2 remap made my Golf feel like a rocket. Dyno showed +42hp gain!",
            stars: 5,
          },
          {
            name: "Marius A.",
            location: "Luton",
            date: "2024-07-25",
            text: "Professional setup and transparent advice. I trust them with all my cars.",
            stars: 5,
          },
          {
            name: "Nina S.",
            location: "Milton Keynes",
            date: "2024-06-15",
            text: "Highly rated service. They fixed my DTC errors and explained everything clearly.",
            stars: 5,
          },
        ].map((review, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 min-w-[300px] max-w-sm mx-2"
            itemScope
            itemType="https://schema.org/Review"
          >
            <div
              className="flex justify-center items-center text-yellow-400 text-3xl mb-2"
              itemProp="reviewRating"
              itemScope
              itemType="https://schema.org/Rating"
            >
              {[...Array(review.stars)].map((_, i) => (
                <span key={i}>★</span>
              ))}
              <meta itemProp="ratingValue" content={String(review.stars)} />
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4" itemProp="reviewBody">
              {review.text}
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <span itemProp="author">{review.name}</span> – {review.location}
            </div>
            <meta itemProp="datePublished" content={review.date} />
          </div>
        ))}
      </motion.div>
    </div>

    <div className="mt-12">
      <a
        href="https://g.page/r/CZeVNdV3IPo4EBM/review"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition text-sm font-medium"
      >
        ⭐ Leave us a Google Review
      </a>
    </div>
  </div>
</section>

        {/* End Reviews */}
      </main>

      <Footer />
    </div>
  );
}
