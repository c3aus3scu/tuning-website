import React, { useState } from "react";
import axios from "axios";

export default function QuoteForm({ step, setStep }) {
    const [regNumber, setRegNumber] = useState("");
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


  const serviceOptions = [
    "Stage 1 Remap", "Stage 2 Remap", "DPF Delete", "EGR Delete", "AdBlue Delete",
    "Swirl Flap Solution", "Diagnostic Trouble Code (DTC) Solution",
    "Remap Solution Without Tune", "AdBlue Solution",
    "Android Auto / Apple CarPlay Module", "AA/ACP Screen Upgrade - Linux OS",
    "AA/ACP Screen Upgrade - Android OS", "Ghost Immobiliser",
    "Return To Original", "Datalogging Session", "ECU Cloning"
  ];

  const toggleService = (srv) => {
    setSelectedServices((prev) =>
      prev.includes(srv)
        ? prev.filter((s) => s !== srv)
        : [...prev, srv]
    );
  };

  const validate = () => {
    const err = {};
    if (!name.trim()) err.name = "Required.";
    if (!/^[0-9]{10,}$/.test(phone)) err.phone = "Invalid phone.";
    if (!/\S+@\S+\.\S+/.test(email)) err.email = "Invalid email.";
    if (!gdpr) err.gdpr = "Accept GDPR.";
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
        selectedServices,
        name,
        phone,
        email,
        message,
        deliveryMethod,
      });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000); // dispare după 5s
      setStep(1);

    } catch (err) {
      console.error(err);
      alert("Error sending quote.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
     {step === 1 && (
  <>
    {/* Doar informativ - NU mai afișăm formularul */}
    <div className="mt-12 space-y-4 text-gray-700 max-w-3xl mx-auto text-center" id="regcheck">
      <h2 className="text-xl font-semibold">How To Use Our Reg Checker</h2>
      <p>When using our reg checker, the goal is to show what services we offer for your car.</p>
      <ul className="list-disc list-inside text-left text-sm md:text-base text-center">
        <li>See which services each of our branches offer</li>
        <li>Book online & view availability</li>
        <li>See gains for ECU remaps</li>
        <li>View pricing for extras</li>
        <li>Get info about dyno, finance, and mobile/workshop options</li>
      </ul>
    </div>

    <div className="mt-20 max-w-4xl mx-auto px-4" id="why">
      <h2 className="text-2xl font-bold mb-4 text-center">Why Choose Us?</h2>
      <p className="text-gray-700 text-center mb-6">We use genuine tools and high-calibre tunes to ensure maximum safety when tuning your vehicle.</p>
      <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-2 text-center">
        <li>Fully insured, IMI accredited, in-house dyno</li>
        <li>Custom calibrations for every vehicle</li>
        <li>Thousands of vehicles tuned since 2016</li>
        <li>Workshop with waiting area, tea/coffee, comfy sofa</li>
        <li>Viewing window so you can watch the process</li>
      </ul>
    </div>
  </>
)}


      {step === 2 && (
        <>
          <div className="text-center my-10" id="services">
            <h2 className="text-3xl font-semibold mb-4">Select Your Services</h2>
            <p className="text-gray-600 mb-6">Choose the services relevant to your car</p>
            <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceOptions.map((srv, idx) => (
                <div
                  key={idx}
                  className={`border rounded-xl p-4 text-center cursor-pointer transition ${
                    selectedServices.includes(srv)
                      ? "bg-gray-100 border-black scale-[1.02]"
                      : "hover:border-gray-400"
                  }`}
                  onClick={() => toggleService(srv)}
                >
                  <p className="font-medium">{srv}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-center">
            <button
  onClick={() => {
    if (selectedServices.length > 0) {
      setStep(3);
    }
  }}
  className={`px-8 py-3 rounded-lg text-white transition ${
    selectedServices.length === 0
      ? "bg-black"
      : "bg-black hover:bg-gray-900"
  }`}
>
  Continue
</button>



            </div>
          </div>
        </>
      )}

      {step === 3 && (
        <form onSubmit={(e) => {
          e.preventDefault();
          if (validate()) setStep(4);
        }} className="mt-10 max-w-lg mx-auto space-y-4">
          <h2 className="text-center text-2xl font-semibold">Your Details</h2>
          <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border px-4 py-3 rounded" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border px-4 py-3 rounded" />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border px-4 py-3 rounded" />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          <textarea placeholder="Message (optional)" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full border px-4 py-3 rounded" rows="3" />
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={gdpr} onChange={(e) => setGdpr(e.target.checked)} />
            I agree to the GDPR terms and privacy policy.
          </label>
          {errors.gdpr && <p className="text-red-500 text-sm">{errors.gdpr}</p>}
          <div className="text-center">
          <button
  type="submit"
  className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-900"
>
  Next
</button>          </div>
        </form>
      )}

      {step === 4 && (
        <form onSubmit={handleSubmit} className="mt-10 max-w-4xl mx-auto space-y-6">
          <h2 className="text-center text-2xl font-semibold">Workshop or Mobile?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div onClick={() => setDeliveryMethod("workshop")} className={`p-6 border rounded-xl cursor-pointer transition shadow ${deliveryMethod === "workshop" ? "border-black bg-gray-50" : "hover:border-gray-400"}`}>
              <h3 className="font-semibold mb-2">Visit our workshop</h3>
              <p>Book a specific day & time. No extra charge.</p>
              <p className="mt-2 font-medium">I'll come to you +£0</p>
            </div>
            <div onClick={() => setDeliveryMethod("mobile")} className={`p-6 border rounded-xl cursor-pointer transition shadow ${deliveryMethod === "mobile" ? "border-black bg-gray-50" : "hover:border-gray-400"}`}>
              <h3 className="font-semibold mb-2">Mobile service</h3>
              <p>Choose AM/PM. We'll confirm final time the day before. +£30 charge.</p>
              <p className="mt-2 font-medium">You come to me +£30</p>
            </div>
          </div>
          <div className="text-center">
          <button
  type="submit"
  disabled={!deliveryMethod}
  className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-900 disabled:opacity-50"
>
  Get a Quote
</button>
{success && (
  <div className="mt-4 text-green-600 font-medium text-center transition-all duration-300">
    ✅ Your quote was successfully sent!
  </div>
)}
            {errors.gdpr && <p className="text-red-500 text-sm">{errors.gdpr}</p>}

          </div>
        </form>
      )}
    </div>
  );
}
