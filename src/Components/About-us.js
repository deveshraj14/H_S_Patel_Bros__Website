import React from 'react';
import Footer from "./Footer";
import about from "../Images/about.png";

function AboutUs() {
  return (
    <div className="min-h-screen text-gray-800"
     >
      {/* Hero Section */}
      <section className="bg-cover bg-center text-white p-24"  style={{ backgroundImage: `url(${about})` }} >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
          <p className="text-lg max-w-2xl text-gray-200 mx-auto">
            Trusted, Eco-Friendly, and Professional Pest Control Solutions at Your Service.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="container mx-auto px-6 py-12">
        <div className="bg-white p-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Who We Are?</h2>
          <p className="leading-relaxed text-gray-600">
            At <strong>HS PatelBros Pest Services</strong>, we are committed to creating pest-free, hygienic, and safe environments for homes and businesses. Our certified experts use advanced techniques and government-approved eco-friendly solutions that are safe for children, pets, and the environment. Whether it’s ants, cockroaches, termites, bed bugs, or rodents, we provide reliable treatments that ensure long-lasting results.

We specialize in both residential and commercial pest control, offering customized plans to meet the unique needs of every client. From detailed inspections and effective treatments to preventive care and follow-up checks, we follow a step-by-step process to deliver complete peace of mind. Our team is trained to handle even the toughest infestations with professionalism, ensuring that your property remains safe, clean, and pest-free.

What sets us apart is our dedication to quality, safety, and customer satisfaction. We believe in transparent pricing with no hidden charges, quick response times, and guaranteed results. With years of experience and a reputation for trust, we have become the preferred choice for homeowners, offices, warehouses, and restaurants seeking dependable pest management solutions.

Choose HS PatelBros Pest Services today and experience the difference of expert care. Contact us now to book a free inspection or get an instant quote, and let us help you reclaim your space from unwanted pests.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-black text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["Eco-Friendly Solutions", "Safe, odorless chemicals approved by the Central Insecticides Board."],
              ["Advanced Technology", "Modern tools and techniques for effective pest elimination."],
              ["Trained Experts", "Professionally trained, background-verified technicians."],
              ["Transparent Pricing", "Fair One-Nation-One-Price policy across all locations."]
            ].map(([title, desc], index) => (
              <div key={index} className="bg-white p-6 rounded-lg hover:shadow-[0_4px_20px_rgba(34,197,94,0.4)] transition">
                <h3 className="font-bold text-lg text-blue-800">{title}</h3>
                <p className="text-gray-700 mt-2 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center text-black mb-12">Our Core Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            ["General Pest Control", "Protection from cockroaches, ants, and other pests."],
            ["Termite Control", "Prevent damage with powerful anti-termite treatment."],
            ["Rodent Control", "Keep rodents away with safe, efficient methods."],
            ["Mosquito & Fly Control", "Reduce the risk of mosquito-borne diseases."],
            ["Bed Bug Treatment", "Eliminate bed bugs and restore peace of mind."],
            ["Bird Netting Solutions", "Safe netting solutions to prevent bird intrusion."]
          ].map(([title, desc], index) => (
            <div key={index} className="border p-6 rounded-lg hover:shadow-[0_4px_20px_rgba(34,197,94,0.4)] bg-white transition-transform">
              <h3 className="text-xl font-bold text-blue-800">{title}</h3>
              <p className="mt-2 text-sm text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CEO Bio Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="bg-white p-8">
          <h2 className="text-4xl font-bold text-black mb-4">Meet Our CEO</h2>
          <p className="text-gray-700 mb-4">
            <strong>Shubham Patel</strong> (B.Sc and M.Sc in Zoology) is a seasoned professional with extensive experience in the pest control industry. With a passion for delivering exceptional customer service and a commitment to innovation, <strong>We</strong> leads <strong>HS PATELBROS Pest Services</strong> with a vision to provide effective, eco-friendly, and customer-centric pest control solutions.
          </p>
          <p className="text-gray-700 mb-4">
            Under <strong>Shubham Patel</strong>'s leadership, the company has established itself as a trusted partner for homes and businesses seeking reliable pest control services.
          </p>
          <h3 className="text-xl font-semibold text-black mt-6 mb-2">Message from the CEO:</h3>
          <blockquote className="italic border-l-4 border-green-500 pl-4 text-gray-700">
            “At HS PATELBROS Pest Services, we're driven by a simple yet powerful mission: to protect our customers' homes and businesses from pests while promoting a healthier environment. As CEO, I'm proud to lead a team of dedicated professionals who share this vision and are committed to delivering exceptional service and results. We're honored to serve our community and look forward to continuing to innovate and improve our services to meet the evolving needs of our customers.”
          </blockquote>
          {/* <p className="mt-4 text-gray-600"><strong>Qualifications:</strong> B.Sc and M.Sc in Zoology</p> */}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-200 text-black py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Let’s Get in Touch</h2>
          <p className="mb-6 font-bold text-gray-600">Reach out to us for inspections, queries, or customized pest control plans.</p>
          <div className="space-y-2 text-sm">
            <p><strong>📍 Address:</strong>225/A2, Behind Suti Mill, Power house Gwalior road, Jhansi-284001</p>
            <p><strong>📞 Call Us:</strong>8707727951</p>
            <p><strong>📧 Email:</strong> patelbrospest@gmail.com</p>
            <p><strong>🌐 Website:</strong>####</p>
          </div>
        </div>
      </section>
 <Footer />
    </div>
   
  );
}

export default AboutUs;
