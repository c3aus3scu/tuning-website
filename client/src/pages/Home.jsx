import React from 'react';

import QuoteForm from "../components/QuoteForm";

export default function Home() {
  return (
    <div className="min-h-screen px-4 py-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">Welcome to Auto Tuning</h1>
        <QuoteForm />
      </div>
    </div>
  );
}
