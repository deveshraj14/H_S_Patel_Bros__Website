import React, { useState } from "react";
import Footer from "../Components/Footer";

export default function MosquitoControlPage() {
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
    alert(`Thank you, ${formData.name}, your request for Mosquito ${formData.package} service has been submitted.`);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row p-6 max-w-7xl mx-auto">
        <div className="lg:w-2/3 lg:pr-8">
          <div className="bg-red-700 text-white p-4 rounded-md shadow mb-6">
            <h1 className="text-3xl font-bold">Mosquito Control Services</h1>
            <p className="mt-1 text-sm">Protect your family from deadly mosquito-borne diseases.</p>
          </div>

          <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded mb-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2 text-blue-900">Why Mosquito Control is Crucial 🦟</h2>
            <p className="text-gray-800 mb-2">
              Mosquitoes are more than a nuisance — they spread dangerous diseases like <strong>dengue, malaria, chikungunya</strong> and even Zika virus.
            </p>
            <p className="text-gray-800 mb-2">
              They breed in stagnant water, hide in corners, and bite mostly at night. If not controlled, they can turn your home into a breeding ground.
            </p>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">🛡️ Why You Need Our Services</h2>
            <ul className="space-y-1 text-gray-700">
              <li>🩸 Prevents mosquito-borne epidemics</li>
              <li>🪣 Stops mosquito breeding in tanks, pots & drains</li>
              <li>🏠 Indoor + Outdoor fogging & larvicidal treatment</li>
              <li>🌿 Safe for kids and pets</li>
              <li>🛏 Sleep peacefully without bites</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">🌟 Why Choose Patel Bros?</h2>
            <ul className="space-y-1 text-gray-700">
              <li>💨 Fogging machine + Larvae spray + Herbal repellent</li>
              <li>🕒 Flexible timing & fast response</li>
              <li>📍 Targeted mosquito hotspots</li>
              <li>💰 Cost-effective treatment plans</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">🔧 Treatment Process</h2>
            <ol className="list-decimal ml-6 text-gray-700 space-y-1">
              <li>Site inspection (balcony, pots, drainage)</li>
              <li>Larvicide applied to stagnant water</li>
              <li>Thermal fogging in exterior and garden</li>
              <li>Herbal spray indoors</li>
            </ol>
          </section>

          <footer className="pt-4 mt-8 border-t">
            <p className="text-sm text-gray-600">Call us: 8707727951 | Email: patelbrospest@gmail.com</p>
          </footer>
        </div>

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
              <option value="Lite">Mosquito - Lite</option>
              <option value="Pro">Mosquito - Pro</option>
            </select>
            <button type="submit" className="bg-red-700 text-white px-4 py-2 rounded w-full">Book Now</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
