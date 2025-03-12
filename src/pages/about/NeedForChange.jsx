import { motion } from 'framer-motion';
import first from "../../assets/14.jpg"
import third from "../../assets/11.jpg"
import two from "../../assets/13.jpg"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function NeedForChange() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl  mb-12 text-center font-medium italic font-[Lora]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        What’s Wrong with Conventional Skincare?
      </motion.h1>

      {/* For People Section - Image Left, Content Right */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Image on Left */}
        <motion.div variants={itemVariants}>
          <img
            src={first}
            alt="For People"
            className="w-96 h-96 rounded-lg shadow-md"
          />
        </motion.div>
        {/* Content on Right */}
        <motion.div variants={itemVariants} className="text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">For People</h2>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Short-Term Effects:</strong> Skin irritation, dryness, and redness.
            </li>
            <li>
              <strong>Long-Term Damage:</strong> Disrupted skin barriers, increased sensitivity, and premature aging.
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* For the Planet Section - Content Left, Image Right */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Content on Left */}
        <motion.div variants={itemVariants} className="text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">For the Planet</h2>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Waste Pollution:</strong> Most skincare packaging is non‑biodegradable, clogging ecosystems for centuries.
            </li>
            <li>
              <strong>Toxic Runoff:</strong> Ingredients like microbeads and synthetic chemicals contaminate water supplies.
            </li>
          </ul>
        </motion.div>
        {/* Image on Right */}
        <motion.div variants={itemVariants}>
          <img
            src={two}
            alt="For the Planet"
            className="w-96 h-96 rounded-lg shadow-md"
          />
        </motion.div>
      </motion.div>

      {/* Stat Spotlight Section - Image Left, Content Right */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Image on Left */}
        <motion.div variants={itemVariants}>
          <img
            src={third}
            alt="Stat Spotlight"
            className="w-96 h-96 rounded-lg shadow-md"
          />
        </motion.div>
        {/* Content on Right */}
        <motion.div variants={itemVariants} className="text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">Stat Spotlight</h2>
          <ul className="list-disc list-inside ml-4">
            <li>1 in 3 women switch products every year due to irritation caused by chemicals.</li>
            <li>Only 9% of skincare packaging is recycled globally.</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}
