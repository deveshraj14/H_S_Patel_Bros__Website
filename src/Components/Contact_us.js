import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "./Footer";
export default function ContactUs() {
  return (
    <>
    <div className="bg-gray-50 text-gray-800 py-12 px-6">
      {/* Contact Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-lg">For Booking, Complaints & Inquiries</p>
      </div>

      {/* Contact Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-12">
        <div>
          <FaPhoneAlt className="text-3xl mx-auto text-blue-600 mb-2" />
          <h3 className="font-bold">Customer Care</h3>
          <p className="text-lg mt-1">📞 8707727951</p>
        </div>
        <div>
          <FaEnvelope className="text-3xl mx-auto text-red-500 mb-2" />
          <h3 className="font-bold">Email Us at</h3>
          <p className="text-sm">abcd@patelbrospest.com</p>
          <p className="text-sm"> patelbrospest@gmail.com</p>
        </div>
        <div>
          <FaMapMarkerAlt className="text-3xl mx-auto text-green-500 mb-2" />
          <h3 className="font-bold">Registered Head Office</h3>
          <p className="text-sm mt-1">
            Patelbros Services PVT LTD. <br />
            near baidhyanth office abc calony<br />
            abc landmark - 284002
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto shadow-[0_4px_20px_rgba(34,197,94,0.4)] bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">I need a call</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="Name *" className="border px-4 py-2 rounded" required />
          <input type="text" placeholder="Mobile Number *" className="border px-4 py-2 rounded" required />
          <input type="text" placeholder="Pincode *" className="border px-4 py-2 rounded" required />
          <input type="text" placeholder="Interested in ? *" className="border px-4 py-2 rounded" required />
          <textarea placeholder="Remarks *" className="border px-4 py-2 rounded col-span-1 md:col-span-2" rows="4" required></textarea>
          <button type="submit" className="bg-blue-600 text-white py-2 rounded col-span-1 md:col-span-2 hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>

      {/* Footer Links */}
      {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-center md:text-left">
        <div>
          <h4 className="font-bold mb-2">Our Services</h4>
          <ul className="space-y-1">
            <li>Pest Control</li>
            <li>Bird Netting</li>
            <li>Cockroach Control</li>
            <li>Termite Control</li>
            <li>Bedbug Control</li>
            <li>Mosquito Control</li>
            <li>Wood Borer</li>
            <li>Rodent Control</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Other Links</h4>
          <ul className="space-y-1">
            <li>Offers</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>FAQs</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Follow Us On</h4>
          <ul className="space-y-1">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
          <p className="mt-4">📞 8828333888</p>
          <p>📧  patelbrospest@gmail.com</p>
        </div>
      </div> */}

     
    </div>
    <Footer/>
    </>
  );
}
