import React, { useState } from "react";
import Footer from "../Components/Footer";

export default function TermiteControlPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pincode: "",
    size: "",
    package: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}, your request for Termite ${formData.package} service has been submitted.`);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row p-6 max-w-7xl mx-auto">
        <div className="lg:w-2/3 lg:pr-8">
          <div className="bg-amber-800 text-white p-4 rounded-md shadow mb-6">
            <h1 className="text-3xl font-bold">Termite Control Services</h1>
            <p className="mt-1 text-sm">Shield your home from silent wood destroyers.</p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded mb-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2 text-yellow-800">Why Termite Control is Urgent 🐜</h2>
            <p className="text-gray-800 mb-2">
              Termites silently eat away at your wood, floors, and walls from the inside. You won't even know until the damage is severe.
            </p>
            <p className="text-gray-800 mb-2">
              They cause <strong>structural damage worth thousands of rupees</strong> every year. By the time you notice them, they’ve already created deep colonies.
            </p>
            <p className="text-gray-800">
              Protect your investment and act before termites destroy the wooden backbone of your house.
            </p>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">🚨 Signs You May Have Termites</h2>
            <ul className="space-y-1 text-gray-700">
              <li>🪵 Hollow-sounding wood</li>
              <li>🌿 Mud tubes along walls or corners</li>
              <li>📦 Damaged cardboard, books, or wooden boxes</li>
              <li>🧱 Cracks in wooden floors or doors</li>
              <li>🪰 Flying termite swarms near lights</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">🌟 Why Choose Patel Bros?</h2>
            <ul className="space-y-1 text-gray-700">
              <li>🧪 Advanced drilling & injection method</li>
              <li>🚫 Odorless, safe chemical barrier system</li>
              <li>✅ 1-Year protection warranty</li>
              <li>📍 Both pre- and post-construction treatment</li>
              <li>👷 Certified & experienced technicians</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">🛠️ Our Treatment Process</h2>
            <ol className="list-decimal ml-6 text-gray-700 space-y-1">
              <li>Inspection of affected wood & walls</li>
              <li>Drilling 6mm holes near joints/floor</li>
              <li>Injecting anti-termite chemical with precision</li>
              <li>Sealing holes and explaining post-care</li>
            </ol>
          </section>

          <footer className="pt-4 mt-8 border-t">
            <p className="text-sm text-gray-600">Call us: 8707727951 | Email: patelbrospest@gmail.com</p>
          </footer>
        </div>

        {/* Booking Form */}
        <div className="lg:w-1/3 sticky top-4 h-fit bg-gray-50 p-6 border rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Book a Service</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" type="text" required onChange={handleChange} placeholder="Your Name" className="border p-2 w-full" />
            <input name="phone" type="tel" required onChange={handleChange} placeholder="Mobile Number" className="border p-2 w-full" />
            <input name="pincode" type="text" required onChange={handleChange} placeholder="Pin Code" className="border p-2 w-full" />
            <select name="size" required onChange={handleChange} className="border p-2 w-full">
              <option value="">Select Size</option>
              <option value="1BHK">1BHK</option>
              <option value="2BHK">2BHK</option>
              <option value="3BHK">3BHK</option>
              <option value="Villa">Villa</option>
            </select>
            <select name="package" required onChange={handleChange} className="border p-2 w-full">
              <option value="">Select Package</option>
              <option value="Lite">Termite - Lite</option>
              <option value="Pro">Termite - Pro</option>
            </select>
            <button type="submit" className="bg-amber-800 text-white px-4 py-2 rounded w-full">Book Now</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
