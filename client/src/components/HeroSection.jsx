import React, { useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection({ setStep, setRegNumber }) {
  const [localReg, setLocalReg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLookup = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setRegNumber(localReg);
      setStep(2);
      setLoading(false);

      setTimeout(() => {
        const target = document.getElementById("services");
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }, 1500);
  };

  return (
    <section
      className="relative min-h-screen bg-cover bg-center text-white flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1500&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div className="relative z-10 text-center px-4 w-full max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          ECU Remapping & Car Tuning in Luton
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl mb-6"
        >
          Maximum Performance. Minimum Limits.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="p-6 text-white"
        >
          <h2 className="text-2xl font-bold mb-2">Instant Tuning Quote</h2>
          <p className="mb-4">
            Enter your UK registration to see available tuning services.
          </p>

          <form
            onSubmit={handleLookup}
            className="flex flex-col items-center justify-center gap-4"
          >
            <label htmlFor="reg" className="sr-only">
              Vehicle Registration
            </label>

            {/* UK Icon + Input */}
            <div className="relative w-full md:w-1/2">
  <img
    src="https://flagcdn.com/w40/gb.png"
    alt="UK Flag"
    className="absolute left-4 top-1/2 transform -translate-y-1/2 h-8 w-10 rounded shadow-sm"
  />
  <input
    id="reg"
    type="text"
    value={localReg}
    onChange={(e) => setLocalReg(e.target.value.toUpperCase())}
    placeholder="Registration"
    maxLength={7}
    autoCapitalize="characters"
    className="w-full pl-14 pr-4 py-4 text-center text-black text-2xl border border-gray-300 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-green-500"
    required
  />
</div>


            <button
              type="submit"
              disabled={loading}
              className="w-[70%] md:w-auto bg-gray-700 text-white px-10 py-3 rounded-xl font-semibold hover:bg-green-500 transition"
            >
              {loading ? "Checking..." : "Check"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
