import React from "react";
import Header from "../components/Header";
import QuoteForm from "../components/QuoteForm";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
      <HeroSection />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
}
