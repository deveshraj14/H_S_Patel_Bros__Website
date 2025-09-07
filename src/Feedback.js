import React, { useState , useRef} from "react";
import emailjs from "@emailjs/browser";
export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    experience: "",
    navigation: "",
    design: "",
    speed: "",
    infoAvailability: "",
    improvement: "",
    feature: "",
    rating: "5",
    
  });
const form = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_2eb9m2p",
        "template_a7qpt9n",
        form.current,
        {
          publicKey: "XWwwDcyWL7cmEF-TA",
         
        }
      );
      alert("✅ Thank you for your feedback! We appreciate your input.");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("❌ Failed to send feedback. Please try again later.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 to-green-50 min-h-screen p-6 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-4xl">
        <h1 className="text-3xl font-extrabold text-center mb-6 text-green-700">
          Help Us Improve Your Experience
        </h1>
        <form ref={form} onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block font-semibold text-gray-800">
              How would you describe your overall experience?
            </label>
            <textarea
              name="experience"
              required
              rows={3}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-800">
              Was the website easy to navigate?
            </label>
            <select
              name="navigation"
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Somewhat">Somewhat</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-gray-800">
              How would you rate the website's design/appearance?
            </label>
            <select
              name="design"
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded"
            >
              <option value="">Select</option>
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Average">Average</option>
              <option value="Needs Improvement">Needs Improvement</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-gray-800">
              Was the website fast and responsive?
            </label>
            <select
              name="speed"
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded"
            >
              <option value="">Select</option>
              <option value="Very Fast">Very Fast</option>
              <option value="Normal">Normal</option>
              <option value="Slow">Slow</option>
              <option value="Very Slow">Very Slow</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-gray-800">
              Was it easy to find the information/services you were looking for?
            </label>
            <select
              name="infoAvailability"
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded"
            >
              <option value="">Select</option>
              <option value="Yes, everything was clear">Yes, everything was clear</option>
              <option value="Somewhat, had to search">Somewhat, had to search</option>
              <option value="No, it was confusing">No, it was confusing</option>
            </select>
          </div>

          {/* <div>
            <label className="block font-semibold text-gray-800">
              Do you trust us to handle pest control at your home/business?
            </label>
            <select
              name="trust"
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded"
            >
              <option value="">Select</option>
              <option value="Absolutely">Absolutely</option>
              <option value="Maybe, need more assurance">Maybe, need more assurance</option>
              <option value="Not yet">Not yet</option>
            </select>
          </div> */}

          <div>
            <label className="block font-semibold text-gray-800">
              What would you like to see improved?
            </label>
            <textarea
              name="improvement"
              rows={3}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-800">
              What new feature or section should we add?
            </label>
            <input
              name="feature"
              type="text"
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
              placeholder="e.g., Online Booking, Chat Support, etc."
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-800">
              Overall Rating (1 - Worst, 5 - Best)
            </label>
            <select
              name="rating"
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded"
              value={formData.rating}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num} Star{num > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded font-bold hover:bg-green-700 transition"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}
