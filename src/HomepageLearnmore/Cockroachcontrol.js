import React, { useState } from "react";
import Footer from "../Components/Footer";

export default function CockroachControlPage() {
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
    alert(`Thank you, ${formData.name}, your request for Cockroach ${formData.package} service has been submitted.`);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row p-6 max-w-7xl mx-auto">
        <div className="lg:w-2/3 lg:pr-8">

          {/* Custom heading section */}
          <div className="bg-green-900 text-white p-4 rounded-md shadow mb-6">
            <h1 className="text-3xl font-bold">Cockroach Control Services</h1>
            <p className="mt-1 text-sm">Say goodbye to pests. Live cleaner, live safer.</p>
          </div>

          {/* Intro box */}
          <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded mb-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2 text-yellow-900">Why You Should Worry About Cockroaches 🪳</h2>
            <p className="text-gray-800 mb-2">
              Cockroaches are not just gross — they're dangerous. They carry harmful bacteria from drains and garbage right into your kitchen.
            </p>
            <p className="text-gray-800 mb-2">
              These pests spread <strong>typhoid, cholera, gastroenteritis, and allergies</strong>. They contaminate food, spread disease, and trigger asthma in kids.
            </p>
            <p className="text-gray-800">
              If you're seeing one cockroach, chances are dozens more are hiding. Get professional help before the problem explodes.
            </p>
          </div>

          {/* Why control is needed */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">🚨 Why Cockroach Control is Important</h2>
            <ul className="space-y-1 text-gray-700">
              <li>🧫 Spreads serious diseases like Salmonella and typhoid</li>
              <li>🍽 Contaminates food and surfaces</li>
              <li>👶 Triggers asthma and allergies in kids</li>
              <li>🐛 Reproduces quickly in hidden spots</li>
              <li>👃 Leaves behind foul odor and stains</li>
            </ul>
          </section>

          {/* Why our company */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">✅ Why Choose Patel Bros</h2>
            <ul className="space-y-1 text-gray-700">
              <li>🧪 Odorless Gel + Herbal Spray Combo</li>
              <li>🎯 Targeted treatment for kitchens, bathrooms & storage</li>
              <li>🚫 No relocation or preparation required</li>
              <li>⏱ Quick process — long-lasting results</li>
              <li>💰 Budget-friendly with expert service</li>
            </ul>
          </section>

          {/* Work process */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">🔧 How We Treat</h2>
            <ol className="list-decimal ml-6 text-gray-700 space-y-1">
              <li>Inspect common cockroach hotspots</li>
              <li>Apply safe, non-toxic gel in hidden corners</li>
              <li>Use herbal spray near entry points</li>
              <li>Share care instructions to prevent return</li>
            </ol>
          </section>

          {/* Footer */}
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
              <option value="Lite">Cockroach - Lite</option>
              <option value="Pro">Cockroach - Pro</option>
            </select>
            <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded w-full">Book Now</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
