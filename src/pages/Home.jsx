// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroImg from "../assets/3.jpg"
import rayneelogo from "../assets/tube.png"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-48 bg-gradient-to-r from-orange-50 to-gray-200">
        <div className="container mx-auto px-20  flex flex-col md:flex-row items-center">
          {/* Left Column (Text) */}
          <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0 text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
            <blockquote>
            <p className="text-4xl md:text-5xl font-medium italic font-[Lora] text-gray-900">
  “Transforming Skincare with Technology and Clean Beauty”
</p>

            </blockquote>
           
            </motion.h1>
            <motion.p
              className="text-gray-700 text-lg md:text-xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className='font-bold'>Rayneel</span> is dedicated to revolutionizing skincare with a commitment
              to quality, sustainability, and innovation. Transform your routine
              with clean beauty and cutting-edge technology.
            </motion.p>
            <Link
              to="/about"
              className="inline-block px-6 py-3 bg-yellow-700 hover:bg-yellow-800 text-white font-semibold rounded-full transition duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Right Column (Image) */}
          <div className="w-full h-full md:w-1/2 flex justify-center">
            <motion.img
              src={heroImg}
              alt="Skincare"
              className="w-screen  rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>
      </section>

      {/* About Us / Highlights Section */}
      <section className="bg-white py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8  italic font-[Lora]">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Brand Logo */}
          <div className="flex justify-center">
            <img
              src={rayneelogo}
              alt="Ray Neel Logo"
              className="w-auto h-auto"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4">
            Rayneel Consumers Global
            Private Limited
            </h3>
            <p className="text-gray-600 min-w-64">
            Rayneel Consumers Global
            Private Limited is dedicated to revolutionizing skincare 
              with a commitment to quality, sustainability, and innovation. 
              We believe that skincare is more than just a routine—it’s a 
              movement to protect both your skin and our planet.
            </p>
            {/* <div className="mt-6"> */}
              {/* <Link to="/about" className="text-yellow-700 font-bold hover:underline">
                Learn More
              </Link> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>

      {/* Our Brands Section */}
      <section className=" bg-gray-50 py-20">
      <div className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8  italic font-[Lora]">Our Brand</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 gap-8">
          {/* Noble Nurture Card */}
          <div className=" text-center">
          <Link to="/brands" className="text-blue-500 hover:underline">
          <div className="bg-white  shadow hover:shadow-md   rounded-lg flex items-center justify-center">
            {/* Only Logo */}
            <img
              src={rayneelogo}
              alt="Noble Nurture Logo"
              className="w-44 h-auto"
            />
          </div>
          </Link>
        </div>
        
          
         
        </div>
      </div>
    </section>
    </div>
  );
}
