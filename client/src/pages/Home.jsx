import React, { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import QuoteForm from "../components/QuoteForm";
import Footer from "../components/Footer";

export default function Home() {
  const [step, setStep] = useState(1);
  const [regNumber, setRegNumber] = useState("");

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen flex flex-col transition-colors duration-300">
      <Header />
      <main className="flex-grow">
        <HeroSection setStep={setStep} setRegNumber={setRegNumber} />
        <QuoteForm step={step} setStep={setStep} regNumber={regNumber} />
      </main>
      <Footer />
    </div>
  );
}
