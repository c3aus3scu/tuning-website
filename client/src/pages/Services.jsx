import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet-async';
const services = [
  {
    title: "Stage 1 Remap",
    desc: "Optimised software tuning for safe power and torque gains.",
    details: "Stage 1 remapping delivers noticeable improvements in power, torque and throttle response without compromising engine safety or lifespan. Suitable for stock vehicles.\n\nIdeal for everyday use, Stage 1 tunes focus on smoother acceleration and better throttle response. No hardware upgrades required.",
    img: "https://vuduperformance.com/cdn/shop/files/polo-gti-s1-dyno-graph_2000x2000.jpg?v=1737560551"
  },
  {
    title: "Stage 2 Remap",
    desc: "Advanced tuning for max performance with supporting mods.",
    details: "Stage 2 tuning delivers aggressive power gains and is designed for performance enthusiasts.\n\nRequires performance parts like a larger intercooler, high-flow intake/exhaust, or turbo upgrades.",
    img: "https://vuduperformance.com/cdn/shop/files/polo-gti-stage-2-remap_781f1af1-5208-4ab1-9db8-f81436558708_2000x2000.jpg?v=1737560537"
  },
  {
    title: "DPF Delete",
    desc: "Remove diesel particulate filter restrictions for improved airflow.",
    details: "A DPF delete improves fuel economy and throttle response while eliminating regeneration cycles.\n\nBest suited for off-road or export vehicles. May not comply with emissions regulations.",
    img: "https://dynotune.net/wp-content/uploads/2024/03/14.-dpf-delete-and-remap.webp"
  },
  {
    title: "EGR Delete",
    desc: "Eliminate EGR valve issues and improve engine reliability.",
    details: "Disabling the Exhaust Gas Recirculation system reduces carbon buildup and prevents related engine faults.\n\nImproves MPG and reduces intake temperatures, especially beneficial for diesel engines.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrm6aKBn1wT0tuEVzBtLMIZHAsk67Y3krd1gjI1W5EvPQpi0AM8-f0uE5CTCTwDjKoLLc&usqp=CAU"
  },
  {
    title: "AdBlue Delete",
    desc: "Bypass AdBlue system to avoid costly maintenance errors.",
    details: "Disables the SCR system and eliminates dashboard warnings and consumption.\n\nFor off-road or non-EU use. Helps avoid limp mode and sensor failures common on modern diesels.",
    img: "https://api.caracaltech.com/static/thumbnails/619a14e93d96c404e4a5da65.webp"
  },
  {
    title: "Swirl Flap Solution",
    desc: "Prevent swirl flap failure in diesel intake manifolds.",
    details: "Swirl flaps often break and cause engine damage. Removal ensures clean airflow and better combustion.\n\nThis service removes or disables flaps via software and optionally physically blocks them.",
    img: "https://api.caracaltech.com/static/thumbnails/618911099d8d798e1e2b085a.webp"
  },
  {
    title: "Diagnostic Trouble Code (DTC) Solution",
    desc: "Custom code removals to suppress warning lights on the dash.",
    details: "This service targets fault codes caused by removed components (e.g., DPF, EGR).\n\nIt ensures a clean dashboard without limp mode while maintaining important system functionality.",
    img: "https://lh3.googleusercontent.com/proxy/94JQ1y7QWf-CVDebQi4mPD4JfPKKnkY9UNnVTYG2taZG1Bkyui0sJ0sxpQD8OSpCZjrcyRqgpffmeZjvzX9Uk3mRIRq3gkEEhDrTgxSt2srUNpXAnkfCKq_1W7pZsYV6li0dz48"
  },
  {
    title: "Remap Solution Without Tune",
    desc: "Adjust maps and limits without increasing power. Useful for prep.",
    details: "Perfect for track prep or disabling specific maps.\n\nEnables or disables limiters, speed governors, or torque caps without affecting base power output.",
    img: "https://thetuner.co.uk/wp-content/uploads/2024/04/faqs-about-car-remapping.webp"
  },
  {
    title: "AdBlue Solution",
    desc: "Software-only bypass of AdBlue functions (DPF remains active).",
    details: "This solution disables AdBlue but keeps the DPF fully active.\n\nGreat for temporary error elimination or sensor fault correction.",
    img: "https://images.squarespace-cdn.com/content/v1/615ebb31f31c981a073f0eee/2c61b453-0645-480f-8045-9f03b95f704e/refill-adblue-800x350.jpg"
  },
  {
    title: "Android Auto / Apple CarPlay Module",
    desc: "Upgrade your OEM screen with CarPlay & Android Auto retrofit.",
    details: "Enjoy wireless Apple CarPlay or Android Auto on most factory screens.\n\nWorks via USB or Bluetooth. Includes microphone, reversing camera support, and steering wheel integration.",
    img: "https://i.ebayimg.com/images/g/tv8AAOSwjFJjIxuz/s-l1200.jpg"
  },
  {
    title: "Return To Original",
    desc: "Restore your vehicle's ECU to original factory settings.",
    details: "We restore the factory software for MOTs, dealership visits, or resale.\n\nRemoves all tuning changes and resets counters to factory state.",
    img: "https://dynomotorsport.tn/wp-content/uploads/2019/08/evc.jpg"
  },
  {
    title: "Datalogging Session",
    desc: "Real-time engine data logging to assess performance & safety.",
    details: "Live monitoring of boost, AFR, knock, temps, and more.\n\nIncludes dyno-based or road-based data logs with expert interpretation.",
    img: "https://pumaspeed.co.uk/saved/Stage_1R.jpg"
  },
  {
    title: "ECU Cloning",
    desc: "Transfer original data to a replacement ECU safely.",
    details: "We clone your damaged ECU to a donor unit, preserving immobiliser and VIN.\n\nEssential after water damage or corruption.",
    img: "https://cdn.zyrosite.com/cdn-ecommerce/store_01HSGZ1BF56SZ677GAR6GW38BE%2Fassets%2F1712327316901-ecu%20cloning.png"
  },
  {
    title: "Catalytic Converter Off",
    desc: "Improve flow by removing catalytic restrictions (off-road use).",
    details: "Deletes catalyst logic in ECU and disables O2 checks.\n\nCan help with performance builds or racing vehicles. Off-road use only.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCGmeYCQmnCcufsEGAZEmHG7YHuD-D5jBhdQ&s"
  }
];

export default function Services() {
    const [selected, setSelected] = useState(null);

    return (
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        <Helmet>
  <title>ECU Remapping & Car Tuning Services | MDDREMAP Luton</title>
  <meta
    name="description"
    content="Discover all our car tuning services: ECU remapping, DPF & EGR delete, AdBlue solutions, Stage 1/2 performance tuning, diagnostics and more. Safe & tested in Luton."
  />
  <meta
    name="keywords"
    content="ecu remap luton, car tuning services luton, stage 1 remap, dpf delete luton, adblue delete uk, swirl flap removal, dtc fault solution, tuning garage luton"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://mddremap.com/services" />

  {/* ✅ JSON-LD Schema */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "ECU Remapping & Car Tuning",
      "provider": {
        "@type": "AutoRepair",
        "name": "MDD MOVE LTD",
        "url": "https://mddremap.com",
        "telephone": "07399437312",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "21 Norfolk Road",
          "addressLocality": "Luton",
          "postalCode": "LU2 0RE",
          "addressCountry": "GB"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Luton"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Car Tuning Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Stage 1 Remap" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Stage 2 Remap" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DPF Delete" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "EGR Delete" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AdBlue Delete" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Swirl Flap Removal" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DTC Fault Code Solution" } }
        ]
      }
    })}
  </script>
</Helmet>


        <Header />

        <section className="text-center py-28 px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mt-20 mb-5">ECU Remapping & Car Tuning Services</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-10">
            Performance. Efficiency. Precision. Safe custom tuning in Luton.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelected(srv)}
                className="cursor-pointer rounded-2xl overflow-hidden shadow hover:shadow-xl transition hover:scale-[1.02] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              >
                <img
                  src={srv.img}
                  alt={srv.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{srv.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{srv.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-900 text-left p-6 rounded-2xl max-w-2xl w-full shadow-xl relative"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-6 text-2xl text-gray-400 hover:text-red-500 dark:hover:text-red-400"
                  onClick={() => setSelected(null)}
                >
                  ×
                </button>
                <img src={selected.img} alt={selected.title} className="rounded-lg mb-5 w-full object-cover max-h-72" />
                <h3 className="text-2xl font-bold mb-3">{selected.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm whitespace-pre-line leading-relaxed">
                  {selected.details}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <section className="bg-gray-100 dark:bg-gray-900 py-16 text-center px-6">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Tuning?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            We use certified tools and custom tuning files. With thousands of cars tuned and dyno-tested, you’re in safe hands.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["IMI Accredited", "In-House Dyno", "Mobile & Workshop", "Custom Files"].map((item, idx) => (
              <div
                key={idx}
                className="px-6 py-4 rounded-xl bg-white dark:bg-black border dark:border-gray-700 shadow"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to unlock your car’s potential?</h2>
          <div className="flex justify-center gap-4 mt-6">
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
