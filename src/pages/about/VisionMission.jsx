import { motion } from 'framer-motion';

export default function VisionMission() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h1
        className="text-4xl  mb-8 font-medium italic font-[Lora] text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Vision & Mission
      </motion.h1>

      {/* Vision Card */}
      <motion.div
        className="mb-12 py-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Gradient Border Wrapper */}
        <div className="p-1 bg-gradient-to-br my-10 from-orange-100 to-white-100 rounded-lg">
          {/* Inner Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-lg p-6">
            {/* Vision Content */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Vision</h2>
              <p className="text-gray-700">
                To revolutionize the beauty and wellness industry by creating innovative, sustainable, 
                and personalized skincare solutions that empower individuals to embrace their natural 
                beauty while fostering environmental responsibility.
              </p>
            </div>
            {/* Vision Image */}
            <div>
              <motion.img
                src="https://via.placeholder.com/600x400?text=Vision+Image"
                alt="Vision"
                className="w-full h-auto rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mission Card */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Gradient Border Wrapper */}
        <div className="p-1 bg-gradient-to-l from-white-100 to-orange-100 rounded-lg">
          {/* Inner Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-lg p-6">
            {/* Mission Image */}
            <div className="order-2 md:order-1">
              <motion.img
                src="https://via.placeholder.com/600x400?text=Mission+Image"
                alt="Mission"
                className="w-full h-auto rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
            {/* Mission Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-semibold mb-4">Mission</h2>
              <motion.p
                className="text-gray-700 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                To provide high-quality, clean, and effective skincare products that cater to diverse skin needs,
                combining advanced technology and sustainable practices. At Rayneel, we strive to:
              </motion.p>
              <motion.ul
                className="list-disc list-inside text-gray-700 ml-4 space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <li>Enhance skin health with scientifically formulated, non-toxic products.</li>
                <li>Promote eco-conscious living through sustainable packaging and sourcing.</li>
                <li>Deliver personalized skincare experiences using cutting-edge AI technology.</li>
                <li>Build a community rooted in confidence, self-care, and environmental stewardship.</li>
              </motion.ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
