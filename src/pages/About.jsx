// src/pages/About.jsx
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="flex flex-col">

      {/* Hero / Introduction Section */}
      <section className="relative py-16 bg-gradient-to-br from-teal-50 to-white mb-8">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-5xl font-extrabold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Ray Neel
          </motion.h1>
          <p className="max-w-2xl text-lg text-gray-700 mb-4">
            At Ray Neel, our mission is to empower individuals through innovative skincare
            solutions that combine the best of nature and science. With a commitment to
            sustainability, quality, and integrity, we are paving the way for a healthier future.
          </p>
          <p className="max-w-2xl text-lg text-gray-700">
            Our journey started with a passion for skincare, and over the years, we have grown
            into a trusted name—continuously innovating and setting new standards in the industry.
          </p>
        </div>
      </section>

      {/* The Need for Change */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Need for Change</h2>
          <p className="text-gray-700 mb-8 max-w-3xl">
            Conventional skincare products often rely on chemicals that not only irritate the skin 
            but also pose a threat to the environment. As consumer awareness grows, so does the 
            demand for eco-friendly, non-toxic solutions.
          </p>
        </div>
      </section>

      {/* Challenges & Supporting Data */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Challenges with Conventional Skincare */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Challenges with Conventional Skincare
              </h3>

              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-800 mt-4">For People</h4>
                <ul className="list-disc list-inside text-gray-700 ml-4 mt-2">
                  <li>
                    <strong>Short-Term Effects:</strong> Skin irritation, dryness, and redness
                  </li>
                  <li>
                    <strong>Long-Term Damage:</strong> Disrupted skin barriers, 
                    increased sensitivity, and premature aging
                  </li>
                </ul>

                <h4 className="text-lg font-medium text-gray-800 mt-4">For the Planet</h4>
                <ul className="list-disc list-inside text-gray-700 ml-4 mt-2">
                  <li>
                    <strong>Waste Pollution:</strong> Non-biodegradable packaging 
                    that clogs ecosystems
                  </li>
                  <li>
                    <strong>Toxic Runoff:</strong> Synthetic chemicals and microplastics 
                    contaminating water supplies
                  </li>
                </ul>
              </div>
            </div>

            {/* Supporting Data */}
            <div className="bg-white shadow rounded-lg p-6 self-start">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Supporting Data</h3>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                <li>
                  40% of users report long-term skin sensitivity (Dermatology Association, 2023)
                </li>
                <li>
                  Over 8 million tons of plastic packaging enter our oceans annually (UNEP, 2022)
                </li>
                <li>1 in 3 women switch products each year due to irritation</li>
                <li>Only 9% of skincare packaging is recycled globally</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Introducing Ray Neel & Our Promise */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
          {/* Introducing Ray Neel */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Introducing Ray Neel</h2>
            <p className="text-gray-700 mb-6">
              At Ray Neel, we believe that skincare is more than a routine—it’s a movement. 
              Our products combine the purity of clean beauty with the precision of advanced 
              technology, ensuring an experience that nurtures your skin while protecting 
              the environment.
            </p>
          </div>

          {/* Our Promise */}
          <div className="bg-gray-50 shadow rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Our Promise: <span className="italic">“Skincare That Cares”</span>
            </h3>
            <p className="text-gray-700">
              Every Ray Neel product is formulated with non-toxic ingredients and packaged 
              responsibly to minimize our ecological footprint. We’re committed to delivering 
              effective, safe, and sustainable solutions that empower you to look and feel your best.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Vision & Mission</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Vision</h3>
              <p className="text-gray-700">
                To revolutionize the beauty and wellness industry with innovative, sustainable, 
                and personalized skincare solutions that empower individuals to embrace their 
                natural beauty while fostering environmental responsibility.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mission</h3>
              <p className="text-gray-700 mb-4">
                Ray Neel is dedicated to:
              </p>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                <li>
                  Enhancing skin health with scientifically formulated, non-toxic products
                </li>
                <li>
                  Promoting eco-conscious living through sustainable packaging 
                  and responsible sourcing
                </li>
                <li>
                  Delivering personalized skincare experiences powered by cutting-edge AI technology
                </li>
                <li>
                  Building a community rooted in confidence, self-care, 
                  and environmental stewardship
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
