import { useEffect, useState } from "react";
import Footer from "../Footer";

export default function VisualOfferPage() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("offers") || "[]");
    setOffers(saved);
  }, []);

  return (
    <>
      <div className="max-w-6xl mx-auto p-6 bg-white text-gray-800">
        <h1 className="text-4xl font-bold text-center text-[#006c67] mb-10">
          🔥 Available Offers
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ${offer.bg}`}
            >
              <h2 className="text-2xl font-bold text-[#006c67] mb-2">{offer.title}</h2>
              <p className="text-3xl font-bold mb-4">Rs {offer.price} /- </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                {offer.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
              <button className="mt-6 bg-[#3ad473] text-white px-4 py-2 rounded hover:bg-[#00bfa5] font-semibold">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
