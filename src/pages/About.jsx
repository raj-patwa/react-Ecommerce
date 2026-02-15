import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      {/* PAGE TITLE */}
      <div className="flex items-center gap-4 mb-10">
        <h1 className="text-2xl font-semibold tracking-wide">ABOUT US</h1>
        <div className="flex-1 h-[1px] bg-gray-300"></div>
      </div>

      {/* HERO SECTION */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <img
          src={assets.about_img}
          alt="About Forever"
          className="rounded-xl shadow-md"
        />

        {/* TEXT */}
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            Welcome to <span className="font-semibold text-black">FOREVER</span>,
            your trusted destination for premium fashion and lifestyle products.
            We believe that style is more than clothing — it’s a way to express
            confidence, individuality, and comfort.
          </p>

          <p>
            Since our beginning, we have focused on delivering high-quality
            products that combine modern design with everyday comfort.
            Our collections are curated to help you look and feel your best.
          </p>

          <p>
            We are committed to providing exceptional customer service,
            fast delivery, and a seamless shopping experience.
          </p>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="mt-16">

        <h2 className="text-xl font-semibold mb-6 text-center">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-500 text-sm">
              Carefully selected materials and superior craftsmanship.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-500 text-sm">
              Reliable and quick shipping to your doorstep.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">Customer First</h3>
            <p className="text-gray-500 text-sm">
              Dedicated support to ensure your satisfaction.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default About;
