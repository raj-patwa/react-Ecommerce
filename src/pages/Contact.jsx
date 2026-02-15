import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      {/* TITLE */}
      <div className="flex items-center gap-4 mb-10">
        <h1 className="text-2xl font-semibold tracking-wide">CONTACT US</h1>
        <div className="flex-1 h-[1px] bg-gray-300"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div>

          <img
            src={assets.contact_img}
            alt="contact"
            className="rounded-xl shadow-md mb-6"
          />

          <h2 className="text-lg font-semibold mb-2">Our Store</h2>

          <p className="text-gray-600">
            Forever Store <br />
            Mumbai, Maharashtra <br />
            India
          </p>

          <p className="mt-4 text-gray-600">
            <strong>Phone:</strong> +91 98765 43210
          </p>

          <p className="text-gray-600">
            <strong>Email:</strong> support@forever.com
          </p>

        </div>

        {/* RIGHT SIDE FORM */}
        <form className="space-y-4">

          <h2 className="text-lg font-semibold mb-2">
            Get in Touch
          </h2>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black outline-none"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black outline-none"
          ></textarea>

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Send Message
          </button>

        </form>

      </div>
    </div>
  );
};

export default Contact;
