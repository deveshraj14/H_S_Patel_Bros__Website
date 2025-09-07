import React, { useState, useRef } from "react";
import Footer from "../Components/Footer";
// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser";

export default function WoodBorerPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pincode: "",
    size: "",
    package: "",
  });
  const form = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_2eb9m2p", "template_omojni5", form.current, {
      publicKey: "XWwwDcyWL7cmEF-TA",
    })
    .then(
      () => {
        alert(`Thank you, ${formData.name}, your request for Wood Borer ${formData.package} service has been submitted.`);
      },
      (error) => {
        alert("Something went wrong. Please try again.");
        console.error(error);
      }
    );
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row p-6 max-w-7xl mx-auto">
        <div className="lg:w-2/3 lg:pr-8">
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-green-800">Patel Bros Pest Control</h1>
            <p className="mt-2 text-gray-600">
              Protect your wooden furniture and interiors with Patelbros expert services.
            </p>
          </header>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Why Book Patelbros Control Services?</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Proper inspection and detection</li>
              <li>Preserves your furniture and home</li>
              <li>Eliminates wood borers effectively</li>
              <li>Saves time and money</li>
              <li>Peace of mind with expert handling</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">When to Book?</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Cracks or holes in wood</li>
              <li>Wooden dust around furniture</li>
              <li>Visible bugs or larvae</li>
              <li>Damaged or weak furniture</li>
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
                    <td className="px-4 py-2 font-medium">Wood Borer - Lite</td>
                    <td className="px-4 py-2">
                      6/12 month options, syringing + spraying, 1 manpower/visit, extended warranty available
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 font-medium">Wood Borer - Pro</td>
                    <td className="px-4 py-2">
                      Includes Lite + enhanced treatment effectiveness
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
              <li>Injection of safe chemical syringes</li>
              <li>Spraying chemical petroleum base</li>
            </ol>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Terms and Conditions</h2>
            <p className="text-gray-700">
              Service effectiveness will be visible within 15 days. Lasting results depend on proper post-service care.
            </p>
          </section>

          <footer className="pt-4 mt-8 border-t">
            <p className="text-sm text-gray-600">Call us: 8707727951 | Email: patelbrospest@gmail.com</p>
          </footer>
        </div>

        {/* Booking Form - fixed on right side */}
        <div className="lg:w-1/3 sticky top-4 h-fit bg-gray-50 p-6 border rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Booking Form</h2>
          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
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
              <option value="Lite">Wood Borer - Lite</option>
              <option value="Pro">Wood Borer - Pro</option>
            </select>
            <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded w-full">Book Now</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
