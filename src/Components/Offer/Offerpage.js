import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OfferFormPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    feature1: "",
    feature2: "",
    feature3: "",
    bg: "bg-green-100"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOffer = {
      title: formData.title,
      price: formData.price,
      features: [formData.feature1, formData.feature2, formData.feature3],
      bg: formData.bg
    };

    const existing = JSON.parse(localStorage.getItem("offers") || "[]");
    localStorage.setItem("offers", JSON.stringify([...existing, newOffer]));

    navigate("/offer/visual");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow mt-6 rounded">
      <h1 className="text-3xl font-bold text-center mb-6 text-[#006c67]">Create New Offer</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" required placeholder="Offer Title" onChange={handleChange} className="border p-2 w-full rounded" />
        <input name="price" required placeholder="Price (e.g. ₹1999)" onChange={handleChange} className="border p-2 w-full rounded" />
        <input name="feature1" required placeholder="Feature 1" onChange={handleChange} className="border p-2 w-full rounded" />
        <input name="feature2" required placeholder="Feature 2" onChange={handleChange} className="border p-2 w-full rounded" />
        <input name="feature3" required placeholder="Feature 3" onChange={handleChange} className="border p-2 w-full rounded" />
        <select name="bg" onChange={handleChange} className="border p-2 w-full rounded">
          <option value="bg-green-100">Green Background</option>
          <option value="bg-blue-100">Blue Background</option>
          <option value="bg-yellow-100">Yellow Background</option>
          <option value="bg-pink-100">Pink Background</option>
        </select>
        <button type="submit" className="bg-[#006c67] text-white px-4 py-2 rounded w-full font-semibold hover:bg-[#004d49]">
          Submit Offer
        </button>
      </form>
    </div>
  );
}
