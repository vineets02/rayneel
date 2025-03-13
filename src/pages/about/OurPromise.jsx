import { motion } from 'framer-motion';
import img from "../../assets/01.jpg"
import { Helmet } from 'react-helmet-async';

export default function OurPromise() {
  return (
    <>
     <Helmet>
        <title>Our Promise: Skincare That Cares | RayNeel</title>
        <meta
          name="description"
          content="At Rayneel Consumer Global Private Limited, we believe skincare should be more than a routine—it should be a movement. Discover our promise to deliver pure, effective, and sustainable skincare solutions through clean beauty, sustainable practices, and personalized experiences."
        />
        <meta
          name="keywords"
          content="RayNeel, skincare, clean beauty, sustainable skincare, personalized skincare, Noble Nurtures, our promise"
        />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Our Promise: Skincare That Cares | RayNeel" />
        <meta
          property="og:description"
          content="Discover how Rayneel Consumer Global Private Limited is revolutionizing skincare with clean, sustainable, and personalized solutions. Our promise delivers a skincare experience like no other."
        />
        <meta property="og:image" content="https://yourdomain.com/path-to-og-image.jpg" />
        <meta property="og:url" content="https://rayneel.in/about/our-promise" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Promise: Skincare That Cares | RayNeel" />
        <meta
          name="twitter:description"
          content="Experience the promise of RayNeel—where clean beauty meets sustainable, personalized skincare solutions."
        />
        {/* <meta name="twitter:image" content="https://yourdomain.com/path-to-twitter-image.jpg" /> */}
        <link rel="canonical" href="https://rayneel.in/about/our-promise" />
      </Helmet>
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl  mb-6 font-medium italic font-[Lora]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Promise: “Skincare That Cares”
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-gray-700 mb-4">
            At Rayneel Consumer Global Private Limited, we believe skincare should be more than a routine—it should be a movement. Our flagship brand, Noble Nurtures, combines the purity of clean beauty with the precision of advanced technology to create a skincare experience like no other.
          </p>
          <h2 className="text-2xl font-semibold mb-2">What We Stand For:</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Clean Beauty with a Conscience:</strong> Scientifically formulated, non-toxic products designed to care for your skin and the environment.
            </li>
            <li>
              <strong>Sustainable Practices:</strong> Eco-friendly packaging and responsibly sourced ingredients ensure every purchase supports a greener planet.
            </li>
            <li>
              <strong>Personalized Solutions:</strong> Powered by artificial intelligence, our platform tailors recommendations to your unique skin needs, offering a truly customized experience.
            </li>
          </ul>
        </motion.div>
        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img
            src={img}
            alt="Our Promise"
            className="w-96 h-96 rounded-lg shadow-md"
          />
        </motion.div>
      </div>
    </div>
    </>
  );
}
