import React, { useState, useRef } from "react";
import Footer from "../Components/Footer";
import emailjs from "@emailjs/browser";

export default function RatControlPage() {
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
        alert(`Thank you, ${formData.name}, your request for Rat & Rodent ${formData.package} service has been submitted.`);
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
        <div className="lg:w-2/3 lg:pr-8">
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-green-800">
              Rat & Rodent Control - Patel Bros
            </h1>
            <p className="mt-2 text-gray-600">
              Protect your home from health hazards and damage caused by rats and rodents.
            </p>
          </header>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              Why Book Rat Control Services?
            </h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Protects food storage from contamination</li>
              <li>Reduces spread of rat-borne diseases</li>
              <li>Eliminates property and wire damage</li>
              <li>Reduces anxiety and improves hygiene</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">When to Book?</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Scratchy sounds in walls or ceiling</li>
              <li>Rodent droppings around kitchen/storage</li>
              <li>Chewed packaging or wires</li>
              <li>Rodent sightings during the day</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Types of Services</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border text-sm text-left">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-4 py-2">Service</th>
                    <th className="px-4 py-2">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-2 font-medium">RMS - Standard</td>
                    <td className="px-4 py-2">
                      One-time rodent baiting and trapping, 2 visits over 1 week
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 font-medium">RMS - Intensive</td>
                    <td className="px-4 py-2">
                      Long-term bait station installation, 4 visits over 4 weeks
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">How We Work</h2>
            <ol className="list-decimal ml-6 text-gray-700 space-y-1">
              <li>Inspection for rodent entry points and nests</li>
              <li>Baiting and trapping using secure methods</li>
              <li>Installation of rodent-proof stations (if required)</li>
              <li>Follow-up visits for assurance</li>
            </ol>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Terms and Conditions</h2>
            <p className="text-gray-700">
              Customers must ensure cleanliness and remove food waste. Results may vary based on sanitation conditions.
            </p>
          </section>

          <footer className="pt-4 mt-8 border-t">
            <p className="text-sm text-gray-600">
              Call us: 8707727951 | Email: patelbrospest@gmail.com
            </p>
          </footer>
        </div>

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
              <option value="Standard">RMS - Standard</option>
              <option value="Intensive">RMS - Intensive</option>
            </select>

            {/* Hidden Fields to match EmailJS template */}
            <input type="hidden" name="service" value="Rat & Rodent Control" />
            <input type="hidden" name="price" value="" />
            <input type="hidden" name="termite_type" value="" />
            <input type="hidden" name="details" value="" />

            <button
              type="submit"
              className="bg-green-700 text-white px-4 py-2 rounded w-full"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
