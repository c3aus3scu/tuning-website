import React, { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import QuoteForm from "../components/QuoteForm";
import Footer from "../components/Footer";

export default function Home() {
  const [step, setStep] = useState(1);
  const [regNumber, setRegNumber] = useState(""); // 👈 definește aici

  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection setStep={setStep} setRegNumber={setRegNumber} /> {/* 👈 PAS important */}
        <QuoteForm step={step} setStep={setStep} regNumber={regNumber} /> {/* 👈 trimite și regNumber */}
      </main>
      <Footer />
    </div>
  );
}
