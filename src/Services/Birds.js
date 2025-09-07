import { useState, useRef } from "react";
import Footer from "../Components/Footer";
import emailjs from "@emailjs/browser";

export default function BirdControlPage() {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pincode: "",
    service: "",
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
        alert(`Thank you, ${formData.name}, your request for ${formData.service} has been submitted.`);
        setFormData({
          name: "",
          phone: "",
          pincode: "",
          service: "",
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
        {/* Left Side Content */}
        <div className="lg:w-2/3 lg:pr-8">
          <header className="mb-6">
            <h1 className="text-4xl font-bold text-[#006c67] mb-4">Bird Control & Netting Services</h1>
            <p className="text-gray-700">
              Birds, while beautiful, can become a nuisance when they invade homes and commercial spaces.
              Their droppings damage surfaces and carry diseases, and nests can clog drains or vents.
            </p>
            <p className="text-gray-700 mt-2">
              Our bird netting and spike solutions offer humane and long-lasting control.
            </p>
          </header>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-[#006c67] mb-2">Why Book Bird Control?</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Prevents health hazards due to droppings</li>
              <li>Protects balconies, windows, and solar panels</li>
              <li>Non-harmful to birds – 100% humane methods</li>
              <li>Custom fit nets & installations</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-[#006c67] mb-2">Service Options</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Bird Netting - Residential</li>
              <li>Bird Spikes - Commercial</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-[#006c67] mb-2">Service Details</h2>
            <table className="w-full border text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border">Type</th>
                  <th className="px-4 py-2 border">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">Netting</td>
                  <td className="px-4 py-2 border">
                    UV-stabilized nets installed across balconies/windows – transparent or colored
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Spikes</td>
                  <td className="px-4 py-2 border">
                    Installed on ledges and AC units to prevent nesting without harm
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-[#006c67] mb-2">Booking Process</h2>
            <ol className="list-decimal ml-6 text-gray-700 space-y-1">
              <li>Fill in your number for a callback</li>
              <li>Site inspection by technician</li>
              <li>Custom quote and quick installation</li>
              <li>Peaceful, bird-free surroundings</li>
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
              name="service"
              required
              onChange={handleChange}
              value={formData.service}
              className="border p-2 w-full"
            >
              <option value="">Select Service</option>
              <option value="Bird Netting - Residential">Bird Netting - Residential</option>
              <option value="Bird Spikes - Commercial">Bird Spikes - Commercial</option>
            </select>

            {/* Hidden fields for EmailJS template */}
            <input type="hidden" name="size" value="" />
            <input type="hidden" name="package" value="" />
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
