import React, { useState } from "react";
import axios from "axios";

export default function QuoteForm() {
  const [regNumber, setRegNumber] = useState("");
  const [vehicle, setVehicle] = useState(null);
  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [gdprAccepted, setGdprAccepted] = useState(false);

  const [errors, setErrors] = useState({});

  const handleLookup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setVehicle(null);
    setServices([]);
    setSelectedServices([]);

    try {
      const res = await axios.post("/api/lookup", { regNumber });
      setVehicle(res.data.vehicle);
      setServices(res.data.matchedServices);
    } catch (err) {
      console.error("Lookup error:", err);
    } finally {
      setLoading(false);
    }
  };

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Invalid email address.";
    if (!/^[0-9]{10,}$/.test(phone)) newErrors.phone = "Phone must be at least 10 digits.";
    if (!gdprAccepted) newErrors.gdpr = "You must accept GDPR terms.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
      });
      alert("Quote sent successfully!");
    } catch (err) {
      console.error("Error sending quote:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-2">Auto Tuning Quote</h1>
        <p className="text-gray-600 mb-6">Enter your registration number to see what services we offer</p>
      </div>

      <form onSubmit={handleLookup} className="w-full max-w-md flex flex-col gap-4">
        <input
          type="text"
          placeholder="Registration Number"
          value={regNumber}
          onChange={(e) => setRegNumber(e.target.value.toUpperCase())}
          className="border border-gray-300 rounded-lg px-4 py-3 text-center text-lg"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white rounded-lg py-3 text-lg hover:bg-gray-900 transition"
        >
          {loading ? "Checking..." : "Continue"}
        </button>
      </form>

      {vehicle && (
        <div className="mt-8 text-center">
          <p className="text-lg font-semibold">{vehicle.make} {vehicle.model} ({vehicle.year})</p>
          <p>{vehicle.engineSize}L • {vehicle.fuelType} • Euro {vehicle.euroStatus}</p>
        </div>
      )}

      {services.length > 0 && (
        <div className="mt-10 w-full max-w-4xl">
          <h2 className="text-2xl font-semibold text-center mb-4">Select your services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((srv, idx) => {
              const selected = selectedServices.includes(srv);
              return (
                <div
                  key={idx}
                  onClick={() => toggleService(srv)}
                  className={`cursor-pointer transition-all duration-200 border-2 rounded-xl p-6 text-center font-medium text-lg shadow-sm ${
                    selected
                      ? "border-black bg-gray-100 scale-105"
                      : "border-gray-200 hover:border-gray-400 hover:scale-[1.01]"
                  }`}
                >
                  {srv}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {selectedServices.length > 0 && (
        <form onSubmit={handleSubmit} className="mt-10 w-full max-w-md flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border px-4 py-3 rounded"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border px-4 py-3 rounded"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border px-4 py-3 rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <textarea
            placeholder="Message (optional)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="3"
            className="border px-4 py-3 rounded resize-none"
          />

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={gdprAccepted}
              onChange={(e) => setGdprAccepted(e.target.checked)}
            />
            I agree to the GDPR terms and privacy policy.
          </label>
          {errors.gdpr && <p className="text-red-500 text-sm">{errors.gdpr}</p>}

          <button
            type="submit"
            className="bg-black text-white px-8 py-3 rounded-lg text-lg hover:bg-gray-900 transition"
          >
            Get a Quote
          </button>
        </form>
      )}
    </div>
  );
}
