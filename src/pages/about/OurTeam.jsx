import { motion } from 'framer-motion';
import rohitImage from "../../assets/rohitsingh.jpeg";
import muktaImage from "../../assets/muktasingh.jpeg";
import vineetImage from "../../assets/vineet.jpg";
import dishaImage from "../../assets/disha.jpg";
import { Helmet } from 'react-helmet-async';

const teamMembers = [
  {
    name: "Rohit Singh",
    title: "Founder and CEO",
    description:
      "With 13 years of IT experience, Rohit drives strategic growth through ecommerce, digital marketing, and innovation. His expertise in data analytics and sustainability ensures the brand's authenticity and quality.",
    image: rohitImage,
  },
  {
    name: "Mukta Singh",
    title: "Director",
    description:
      "Mukta brings 10 years of IT expertise, blending technical proficiency with entrepreneurial vision. She excels in digital marketing and product innovation, ensuring a customer-first approach.",
    image: muktaImage,
  },
  {
    name: "Disha Dattatray",
    title: "Business Development Manager",
    description:
      "Disha is a strategic thinker with expertise in market expansion and partnership building. She identifies growth opportunities and shapes the company's trajectory through her deep industry insight.",
    image: dishaImage,
  },
  {
    name: "Vineet Shrivastava",
    title: "Chief Technology Officer",
    description:
      "Vineet specializes in e-commerce platforms and mobile app development. His technical expertise ensures engaging digital experiences that drive customer satisfaction and business growth.",
    image: vineetImage,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function OurTeam() {
  return (
    <>
    <Helmet>
        <title>Our Team | Ray Neel</title>
        <meta
          name="description"
          content="Meet the dedicated team behind Ray Neel, a brand transforming skincare with innovative technology and sustainable practices. Our leadership drives strategic growth and ensures authenticity through expertise in ecommerce, digital marketing, and technology."
        />
        <meta
          name="keywords"
          content="Ray Neel, Our Team, skincare, clean beauty, digital marketing, ecommerce, sustainable skincare, leadership"
        />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Our Team | Ray Neel" />
        <meta
          property="og:description"
          content="Meet the dedicated team behind Ray Neel, transforming skincare with innovative technology and sustainable practices."
        />
        <meta property="og:url" content="https://rayneel.in/about/our-team" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Tags */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Team | Ray Neel" /> */}
        <meta
          name="twitter:description"
          content="Discover the leadership behind Ray Neel and how our team drives innovation in clean, sustainable skincare."
        />
        <link rel="canonical" href="https://rayneel.in/about/our-team" />
      </Helmet>

   <div className="container mx-auto px-4 py-20">
      <motion.h1
        className="text-4xl  mb-8 text-center font-medium italic font-[Lora]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Team
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {teamMembers.map((member, index) => (
          <motion.div key={index} variants={cardVariants}>
            {/* Gradient Border Wrapper */}
            <div className="p-1 bg-gradient-to-br from-orange-50 to-white-100 rounded-lg">
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
                <h3 className="text-lg font-medium text-gray-500 mb-4">
                  {member.title}
                </h3>
                <p className="text-gray-700 text-sm">{member.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
    </>
 
  );
}
