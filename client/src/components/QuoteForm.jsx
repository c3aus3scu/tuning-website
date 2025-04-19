import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function QuoteForm({ step, setStep, regNumber }) {
  const [vehicle, setVehicle] = useState({
    make: "BMW",
    model: "320d",
    fuelType: "Diesel",
    engineSize: "2.0",
    euroStatus: "5",
    year: "2013",
  });
  const [selectedServices, setSelectedServices] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [gdpr, setGdpr] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const serviceOptions = [
    "Stage 1 Remap", "Stage 2 Remap", "DPF Delete", "EGR Delete", "AdBlue Delete",
    "Swirl Flap Solution", "Diagnostic Trouble Code (DTC) Solution",
    "Remap Solution Without Tune", "AdBlue Solution",
    "Android Auto / Apple CarPlay Module", "Return To Original",
    "Datalogging Session", "ECU Cloning", "Catalytic Converter Off"
  ];

  const scrollTo = (id) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const toggleService = (srv) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const validate = () => {
    const err = {};
    if (!name.trim()) err.name = "Required.";
    if (!/^[0-9]{10,}$/.test(phone)) err.phone = "Invalid phone.";
    if (!/\S+@\S+\.\S+/.test(email)) err.email = "Invalid email.";
    if (!gdpr) err.gdpr = "Accept GDPR.";
    if (step === 4 && !deliveryMethod) err.deliveryMethod = "Choose an option.";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      await axios.post("/api/quote", {
        regNumber,
        lookupData: vehicle,
        matchedServices: selectedServices,
        name,
        phone,
        email,
        message,
        deliveryMethod,
      });
      setSuccess(true);
      setSubmitError("");
      setTimeout(() => setSuccess(false), 5000);
      setStep(1);
    } catch (err) {
      console.error(err);
      setSubmitError("There was a problem sending your quote. Please try again.");
    }
  };

  useEffect(() => {
    if (step === 3) scrollTo("step3");
    if (step === 4) scrollTo("step4");
  }, [step]);

  const stepProgress = step === 2 ? "0%" : step === 3 ? "50%" : step === 4 ? "100%" : "0%";

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-black dark:text-white bg-white dark:bg-black transition-colors duration-300">
      {step > 1 && (
        <div className="relative mb-10 px-4">
          <div className="flex items-center justify-between relative z-10">
            {[
              { label: "Services", icon: "🛠️" },
              { label: "Details", icon: "👤" },
              { label: "Delivery", icon: "🚗" }
            ].map((item, index) => {
              const current = step - 2;
              const isActive = current === index;
              const isCompleted = current > index;
              return (
                <div key={item.label} className="flex-1 flex flex-col items-center text-center">
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full border-2 text-lg font-bold
                    ${isCompleted ? "bg-green-500 border-green-500 text-white" : isActive ? "bg-black dark:bg-white text-white dark:text-black" : "border-gray-300 text-gray-400 dark:border-gray-600 dark:text-gray-500"}`}>
                    {item.icon}
                  </div>
                  <span className={`mt-2 text-sm ${isCompleted || isActive ? "text-black dark:text-white" : "text-gray-400 dark:text-gray-500"}`}>
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="absolute left-40 right-40 top-[44px] h-1 bg-gray-200 dark:bg-gray-600 z-0 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-black dark:bg-white"
              initial={{ width: 0 }}
              animate={{ width: stepProgress }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>
      )}

      {/* Step 1: Success */}
      {step === 1 && success && (
        <div className="py-24 text-center">
          <h2 className="text-3xl font-bold text-green-500 mb-4">✅ Quote Sent Successfully!</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">Thank you! We'll get back to you shortly with a personalised quote.</p>
        </div>
      )}

      {/* Step 1: Reg Checker Info */}
      {step === 1 && !success && (
        <>
          <div className="mt-12 space-y-4 max-w-3xl mx-auto text-center" id="regcheck">
            <h2 className="text-xl font-semibold">How To Use Our Reg Checker</h2>
            <p className="text-gray-600 dark:text-gray-400">When using our reg checker, the goal is to show what services we offer for your car.</p>
            <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-gray-800 dark:text-gray-300 text-left">
              <li>See which services each of our branches offer</li>
              <li>Book online & view availability</li>
              <li>See gains for ECU remaps</li>
              <li>View pricing for extras</li>
              <li>Get info about dyno, finance, and mobile/workshop options</li>
            </ul>
          </div>
          <div className="mt-20 max-w-4xl mx-auto px-4" id="why">
            <h2 className="text-2xl font-bold mb-4 text-center">Why Choose Us?</h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
              We use genuine tools and high-calibre tunes to ensure maximum safety when tuning your vehicle.
            </p>
            <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-gray-800 dark:text-gray-300 text-left">
              <li>Fully insured, IMI accredited, in-house dyno</li>
              <li>Custom calibrations for every vehicle</li>
              <li>Thousands of vehicles tuned since 2016</li>
              <li>Workshop with waiting area, tea/coffee, comfy sofa</li>
              <li>Viewing window so you can watch the process</li>
            </ul>
          </div>
        </>
      )}

      {/* Step 2: Services */}
      {step === 2 && (
        <div id="services" className="scroll-mt-28 md:scroll-mt-0 text-center my-10">
          <h2 className="text-3xl font-semibold mb-4">Select Your Services</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Choose the services relevant to your car</p>
          <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceOptions.map((srv, idx) => (
              <div
                key={idx}
                className={`border rounded-xl p-4 text-center cursor-pointer transition-all duration-200 ${
                  selectedServices.includes(srv)
                    ? "bg-gray-100 dark:bg-white text-black border-black scale-[1.02]"
                    : "hover:border-gray-500 dark:hover:border-gray-300"
                }`}
                onClick={() => toggleService(srv)}
              >
                <p className="font-medium">{srv}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => setStep(1)}
              className="bg-gray-300 dark:bg-gray-600 text-black dark:text-white px-6 py-2 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition"
            >
              Back
            </button>
            <button
              onClick={() => {
                if (selectedServices.length > 0) {
                  setStep(3);
                }
              }}
              className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-300 transition"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Details */}
      {step === 3 && (
        <form
          id="step3"
          onSubmit={(e) => {
            e.preventDefault();
            if (validate()) setStep(4);
          }}
          className="mt-10 max-w-lg mx-auto space-y-4 scroll-mt-28 md:scroll-mt-0"
        >
          <h2 className="text-center text-2xl font-semibold">Your Details</h2>
          <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border px-4 py-3 rounded bg-white dark:bg-gray-800 dark:text-white" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border px-4 py-3 rounded bg-white dark:bg-gray-800 dark:text-white" />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border px-4 py-3 rounded bg-white dark:bg-gray-800 dark:text-white" />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          <textarea placeholder="Message (optional)" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full border px-4 py-3 rounded bg-white dark:bg-gray-800 dark:text-white" rows="3" />
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={gdpr} onChange={(e) => setGdpr(e.target.checked)} />
            I agree to the GDPR terms and privacy policy.
          </label>
          {errors.gdpr && <p className="text-red-500 text-sm">{errors.gdpr}</p>}
          <div className="text-center flex justify-center gap-4">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="bg-gray-300 dark:bg-gray-600 text-black dark:text-white px-6 py-2 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-300 transition"
            >
              Next
            </button>
          </div>
        </form>
      )}

      {/* Step 4: Delivery */}
      {step === 4 && (
        <form
          onSubmit={handleSubmit}
          className="mt-10 max-w-4xl mx-auto space-y-6 scroll-mt-28 md:scroll-mt-0"
          id="step4"
        >
          <h2 className="text-center text-2xl font-semibold">Workshop or Mobile?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div onClick={() => setDeliveryMethod("workshop")} className={`p-6 border rounded-xl cursor-pointer transition shadow ${deliveryMethod === "workshop" ? "border-black bg-gray-50 dark:bg-white dark:text-black" : "hover:border-gray-400 dark:hover:border-gray-300"}`}>
              <h3 className="font-semibold mb-2">Visit our workshop</h3>
              <p>Book a specific day & time. No extra charge.</p>
              <p className="mt-2 font-medium">I'll come to you +£0</p>
            </div>
            <div onClick={() => setDeliveryMethod("mobile")} className={`p-6 border rounded-xl cursor-pointer transition shadow ${deliveryMethod === "mobile" ? "border-black bg-gray-50 dark:bg-white dark:text-black" : "hover:border-gray-400 dark:hover:border-gray-300"}`}>
              <h3 className="font-semibold mb-2">Mobile service</h3>
              <p>Choose AM/PM. We'll confirm final time the day before. +£30 charge.</p>
              <p className="mt-2 font-medium">You come to me +£30</p>
            </div>
          </div>
          <div className="text-center flex justify-center gap-4">
            <button
              type="button"
              onClick={() => setStep(3)}
              className="bg-gray-300 dark:bg-gray-600 text-black dark:text-white px-6 py-2 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={!deliveryMethod}
              className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-300 disabled:opacity-50 transition"
            >
              Get a Quote
            </button>
          </div>

          {success && (
            <div className="mt-4 text-green-600 font-medium text-center transition-all duration-300">
              ✅ Your quote was successfully sent!
            </div>
          )}

          {submitError && (
            <div className="mt-4 text-red-600 font-medium text-center transition-all duration-300">
              ❌ {submitError}
            </div>
          )}
        </form>
      )}
    </div>
  );
}
