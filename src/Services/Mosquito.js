import React, { useState, useRef } from "react";
import Footer from "../Components/Footer";
import emailjs from "@emailjs/browser";

export default function MosquitoControlPage() {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pincode: "",
    size: "",
    package: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_2eb9m2p", "template_omojni5", form.current, {
      publicKey: "XWwwDcyWL7cmEF-TA",
    }).then(
      () => {
        alert(`Thank you, ${formData.name}, your request for Mosquito ${formData.package} service has been submitted.`);
        setFormData({
          name: "",
          phone: "",
          pincode: "",
          size: "",
          package: "",
        });
      },
      (error) => {
        console.error("EmailJS error:", error);
        alert("Something went wrong. Please try again.");
      }
    );
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row p-6 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="lg:w-2/3 lg:pr-8">
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-green-800">Mosquito Pest Control</h1>
            <p className="mt-2 text-gray-600">
              Keep your home safe and mosquito-free during the rainy season with our expert solutions.
            </p>
          </header>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Why Book Mosquito Control Services?</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Kills mosquitoes before they infect you</li>
              <li>Destroys mosquito breeding grounds</li>
              <li>Reduces risk of diseases like dengue and malaria</li>
              <li>Keeps your family and pets safe</li>
              <li>Allows you to open windows 24x7</li>
              <li>Improves sleep and work efficiency</li>
              <li>Uses safe, CIB-approved chemicals</li>
              <li>Backed by 30-day money-back guarantee</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Service Highlights</h2>
            <ol className="list-decimal ml-6 text-gray-700 space-y-1">
              <li>Proper Inspection</li>
              <li>Dusting & Covering</li>
              <li>Encapsulated Wall Spray</li>
              <li>Automatic Dispenser Installation</li>
              <li>Final Cleanup & Feedback Collection</li>
            </ol>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Why Choose Patelbros?</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>India’s 1st 3X Mosquito Control Treatment</li>
              <li>30+ years of industry experience</li>
              <li>90 mosquito-free days guaranteed</li>
              <li>Safe, government-approved chemicals</li>
              <li>Service in 20+ Indian cities</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">How to Book</h2>
            <ol className="list-decimal ml-6 text-gray-700 space-y-1">
              <li>Fill your pin code</li>
              <li>Select 'Mosquito Control' under services</li>
              <li>Choose preferred treatment (Lite/Pro)</li>
              <li>Submit form or request a callback</li>
            </ol>
          </section>

          <footer className="pt-4 mt-8 border-t">
            <p className="text-sm text-gray-600">Call us: 8707727951 | Email: patelbrospest@gmail.com</p>
          </footer>
        </div>

        {/* Booking Form */}
        <div className="lg:w-1/3 sticky top-4 h-fit bg-gray-50 p-6 border rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Booking Form</h2>
          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="border p-2 w-full"
            />
            <input
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="border p-2 w-full"
            />
            <input
              name="pincode"
              type="text"
              required
              value={formData.pincode}
              onChange={handleChange}
              placeholder="Pin Code"
              className="border p-2 w-full"
            />
            <select
              name="size"
              required
              value={formData.size}
              onChange={handleChange}
              className="border p-2 w-full"
            >
              <option value="">Select Size</option>
              <option value="1BHK">1BHK</option>
              <option value="2BHK">2BHK</option>
              <option value="3BHK">3BHK</option>
              <option value="Villa">Villa</option>
            </select>
            <select
              name="package"
              required
              value={formData.package}
              onChange={handleChange}
              className="border p-2 w-full"
            >
              <option value="">Select Package</option>
              <option value="Lite">Mosquito - Lite</option>
              <option value="Pro">Mosquito - Pro</option>
            </select>

            {/* Hidden EmailJS Template Fields */}
            <input type="hidden" name="service" value="Mosquito Control" />
            <input type="hidden" name="price" value="" />
            <input type="hidden" name="termite_type" value="" />
            <input type="hidden" name="details" value="" />

            <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded w-full">
              Book Now
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
