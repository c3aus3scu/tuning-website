import React, { useState } from "react";

export default function HeroSection({ setStep, setRegNumber }) {
  const [localReg, setLocalReg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLookup = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setRegNumber(localReg);    // Trimite numărul către QuoteForm
      setStep(2);                // Activează stepul 2
      setLoading(false);

      // ⚠️ Așteaptă ca DOM-ul să se actualizeze, apoi derulează
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
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Maximum Performance. Minimum Limits.
        </h1>
        <p className="text-lg md:text-xl mb-6">
          ECU Remapping · DPF/EGR Deletes · Dyno Tuning & More
        </p>

        <div className="p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Auto Tuning Quote</h2>
          <p className="mb-4">
            Enter your registration number to see what services we offer
          </p>
          <form
            onSubmit={handleLookup}
            className="flex flex-col items-center justify-center gap-4"
          >
            <input
              type="text"
              value={localReg}
              onChange={(e) => setLocalReg(e.target.value.toUpperCase())}
              placeholder="Registration Number"
              className="w-full md:w-1/2 px-5 py-4 text-center text-black text-2xl border border-gray-300 rounded-xl shadow"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-[110%] md:w-auto bg-gray-700 text-white px-10 py-3 rounded-xl font-semibold hover:bg-green-500 transition"
            >
              {loading ? "Checking..." : "Check"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
