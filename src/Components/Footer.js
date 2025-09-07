import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Services Section */}
        <div>
          <h2 className="text-lg font-bold mb-3">Our Services</h2>
          <ul className="space-y-2">
            
            <li><Link to="/Services/cockroach-control" className="hover:text-gray-400">Cockroach Control</Link></li>
            <li><Link to="/Services/termite" className="hover:text-gray-400">Termite Control</Link></li>
            <li><Link to="Services/Bedbug" className="hover:text-gray-400">Bedbug Control</Link></li>
            <li><Link to="/Services/Mosquito" className="hover:text-gray-400">Mosquito Control</Link></li>
            <li><Link to="/Services/Woodwork" className="hover:text-gray-400">Wood Borer</Link></li>
            <li><Link to="/Services/Rat" className="hover:text-gray-400">Rodent Control</Link></li>
          </ul>
        </div>

        {/* Other Links Section */}
        <div>
          <h2 className="text-lg font-bold mb-3">Other Links</h2>
          <ul className="space-y-2">
            {/* <li><Link to="/offers" className="hover:text-gray-400">Offers</Link></li> */}
            <li><Link to="/about_us" className="hover:text-gray-400">About Us</Link></li>
            <li><Link to="/contactus" className="hover:text-gray-400">Contact Us</Link></li>
            {/* <li><Link to="/careers" className="hover:text-gray-400">Careers</Link></li> */}
            <li><Link to="/feedback" className="hover:text-gray-400">Feedback</Link></li>
            <li><Link to="/blog" className="hover:text-gray-400">Blog</Link></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h2 className="text-lg font-bold mb-3">Follow Us On</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-xl hover:text-gray-400" />
            </a>
          
            <a href="https://www.instagram.com/hs_patel_bros_pest_service/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl hover:text-gray-400" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-xl hover:text-gray-400" />
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-bold mb-3">Call Us</h2>
          <p className="mb-3">📞 <a href="tel:8828333888" className="hover:text-gray-400">8707727951</a></p>

          <h2 className="text-lg font-bold mb-3">Mail</h2>
          <p className="mb-2">📧 <a href="mailto:info@rentokilpci-hicare.com" className="hover:text-gray-400">patelbrospest@gmail.com</a></p>
          {/* <p>📧 <a href="mailto:enterprise.care@rentokilpci-hicare.com" className="hover:text-gray-400">enterprise.care@rentokilpci-hicare.com</a></p> */}
        </div>
      </div>

      {/* Download Section */}
      {/* <div className="text-center mt-8">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
          Download Now
        </button>
      </div> */}

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Patelbrospest. All rights reserved.
      </div>
    </footer>
  );
}

// export default Footer;