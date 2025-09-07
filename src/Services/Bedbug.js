import React, { useState, useRef } from "react";
import Footer from "../Components/Footer";
import emailjs from "@emailjs/browser";

export default function BedBugControlPage() {
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

    emailjs
      .sendForm("service_2eb9m2p", "template_omojni5", form.current, {
        publicKey: "XWwwDcyWL7cmEF-TA",
      })
      .then(
        () => {
          alert(
            `Thank you, ${formData.name}, your request for Bed Bug ${formData.package} service has been submitted.`
          );
          setFormData({
            name: "",
            phone: "",
            pincode: "",
            size: "",
            package: "",
          });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row p-6 max-w-7xl mx-auto">
        <div className="lg:w-2/3 lg:pr-8">
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-green-800">Bed Bug Pest Control</h1>
            <p className="mt-2 text-gray-600">
              Don’t let bed bugs rob your sleep. Choose Patelbros for safe, effective, and professional bed bug elimination.
            </p>
          </header>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Why Book Bed Bug Control Services?</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Minimizes chances of contracting diseases</li>
              <li>Ensures professional solutions</li>
              <li>Saves time and money</li>
              <li>Prevents upholstery damage</li>
              <li>Promotes healthier indoor environment</li>
              <li>Improves sleep quality</li>
              <li>Ensures peace of mind</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">When to Book?</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Reddish or rusty spots on bedsheets</li>
              <li>Eggs, eggshells, or pale yellow skins</li>
              <li>Live bed bugs on bed or curtains</li>
              <li>Fecal spots on mattresses</li>
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
                    <td className="px-4 py-2 font-medium">BBMS - Lite</td>
                    <td className="px-4 py-2">
                      Detecting hideouts, mild odor spray, 2 visits (Day 1 & Day 16), 1 person per service
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 font-medium">BBMS - Pro</td>
                    <td className="px-4 py-2">
                      Detecting hideouts, mild odor spray, inspect effectiveness, 4 visits (Days 1, 16, 46, 76), 1 person per service
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">How We Work</h2>
            <ol className="list-decimal ml-6 text-gray-700 space-y-1">
              <li>Identification of infested areas</li>
              <li>Application of mild-odor spray</li>
              <li>Follow-up inspections to ensure elimination</li>
            </ol>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Terms and Conditions</h2>
            <p className="text-gray-700">
              Treatment effectiveness begins within 24 hours. Customer must follow post-treatment precautions as advised.
            </p>
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
              onChange={handleChange}
              value={formData.name}
              placeholder="Your Name"
              className="border p-2 w-full"
            />
            <input
              name="phone"
              type="tel"
              required
              onChange={handleChange}
              value={formData.phone}
              placeholder="Mobile Number"
              className="border p-2 w-full"
            />
            <input
              name="pincode"
              type="text"
              required
              onChange={handleChange}
              value={formData.pincode}
              placeholder="Pin Code"
              className="border p-2 w-full"
            />
            <select
              name="size"
              required
              onChange={handleChange}
              value={formData.size}
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
              onChange={handleChange}
              value={formData.package}
              className="border p-2 w-full"
            >
              <option value="">Select Package</option>
              <option value="Lite">BBMS - Lite</option>
              <option value="Pro">BBMS - Pro</option>
            </select>

            {/* Hidden fields for EmailJS template compatibility */}
            <input type="hidden" name="service" value="Bed Bug Control" />
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
