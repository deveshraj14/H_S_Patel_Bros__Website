import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const logo = require("../Images/logo.jpg");
export default function Navbar() {
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [pestControlDropdown, setPestControlDropdown] = useState(false);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setServicesDropdown(false);
        setPestControlDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white p-2 shadow-md z-50 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        {/* <h1 className="text-xl font-bold text-[#006c67]">Company Name</h1> */}
        <img src={logo} alt="Company Logo" className="h-12 w-12 object-cover rounded-full" />
        {/* Nav Links */}
        <ul className="flex space-x-6 items-center relative">
          <li>
            <Link to="/" className="hover:text-[#006c67] font-bold">Home</Link>
          </li>
          <li>
            <Link to="/about_us" className="hover:text-[#006c67] font-bold">About Us</Link>
          </li>
          <li>
            <Link to="/contactus" className="hover:text-[#006c67] font-bold">Contact Us</Link>
          </li>

          {/* Services Dropdown */}
          <li
            className="relative dropdown"
            onClick={(e) => {
              e.stopPropagation();
              setServicesDropdown(!servicesDropdown);
              setPestControlDropdown(false); // Reset sub-dropdown
            }}
          >
            <span className="cursor-pointer hover:text-[#006c67] font-bold">Services</span>

            {/* Main Dropdown */}
            {servicesDropdown && (
              <div className="absolute left-0 mt-2 bg-[#3ad473] text-black shadow-lg rounded-md w-44 font-bold z-50">
                <ul>
                  {/* Pest Control Submenu */}
                  <li
                    className="p-2 hover:bg-gray-200 cursor-pointer relative"
                    onClick={(e) => {
                      e.stopPropagation();
                      setPestControlDropdown(!pestControlDropdown);
                    }}
                  >
                    Pest Control
                    {pestControlDropdown && (
                      <div className="absolute top-0 left-full bg-[#3ad473] text-black shadow-lg rounded-md w-60 z-50">
                        <ul>
                          <li className="p-2 hover:bg-gray-200 cursor-pointer">
                            <Link to="/Services/Bedbug">Bedbug</Link>
                          </li>
                          <li className="p-2 hover:bg-gray-200 cursor-pointer">
                            <Link to="/Services/Mosquito">Mosquito</Link>
                          </li>
                          <li className="p-2 hover:bg-gray-200 cursor-pointer">
                            <Link to="/services/termite">Termite Repellent</Link>
                          </li>
                          <li className="p-2 hover:bg-gray-200 cursor-pointer">
                            <Link to="/services/Rat">Rat Control</Link>
                          </li>
                          <li className="p-2 hover:bg-gray-200 cursor-pointer">
                            <Link to="/services/Birds">Birds Netting</Link>
                          </li>
                          <li className="p-2 hover:bg-gray-200 cursor-pointer">
                            <Link to="/Services/Woodwork">Wood Borer Control</Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>

                  {/* Inspection */}
                  <li className="p-2 hover:bg-gray-200 cursor-pointer">
                    <Link to="/Allservices">Inspection</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          {/* <li>
            <Link to="/offer" className="hover:text-[#006c67] font-bold">Offer</Link>
          </li> */}
        </ul>

        {/* Sign In Button */}
        <Link to="/signin" className="bg-[#229c4f] text-white px-6 py-2 rounded-md hover:bg-green-800 transition font-semibold">
          Sign In
        </Link>
      </div>
    </nav>
  );
}
