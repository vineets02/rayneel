import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import first from "../assets/1.jpg";
import sec from "../assets/2.jpg";
import third from "../assets/4.jpg";
import { Helmet } from 'react-helmet-async';

const slides = [
  {
    title: "Noble Nurture",
    subtitle: "Pure and Effective Skincare",
    description:
      "Noble Nurture represents our commitment to pure and effective skincare, blending natural ingredients with advanced formulations to nurture your skin responsibly.",
    productImage: first,
    // Gradient background from light blue to a slightly darker blue
    bgColor: "bg-gradient-to-r from-green-100 to-white-300",
  },
  {
    title: "Clean Beauty with a Conscience",
    subtitle: "Scientifically Formulated, Non-Toxic",
    description:
      "Our products are meticulously formulated with clean, non‑toxic ingredients to ensure that every application cares for your skin and the environment.",
    productImage: sec,
    // Gradient background from light green to a slightly darker green
    bgColor: "bg-gradient-to-r from-orange-100 to-white-300",
  },
  {
    title: "Sustainable Practices",
    subtitle: "Eco-Friendly & Responsible",
    description:
      "Embracing sustainability, Noble Nurture uses eco‑friendly packaging and responsibly sourced ingredients so every purchase supports a greener planet.",
    productImage: third,
    // Gradient background from light yellow to a slightly darker yellow
    bgColor: "bg-gradient-to-r from-pink-100 to-white-300",
  },
];

export default function Brands() {
  const settings = {
    modules: [Autoplay, Pagination],
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    autoplay: { delay: 5000 },
    pagination: { clickable: true },
  };

  return (
    <>
    <Helmet>
        <title>Noble Nurture | Pure & Effective Skincare</title>
        <meta 
          name="description" 
          content="Discover Noble Nurture, a promise to deliver pure, effective, and sustainable skincare solutions. Experience clean beauty through advanced formulations and eco-friendly practices." 
        />
        <meta 
          name="keywords" 
          content="Noble Nurture, skincare, clean beauty, sustainable skincare, non-toxic skincare, effective skincare, eco-friendly skincare" 
        />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Noble Nurture | Pure & Effective Skincare" />
        <meta 
          property="og:description" 
          content="Discover Noble Nurture, where we blend natural ingredients with advanced technology to deliver pure, effective skincare solutions that care for your skin and the planet." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rayneel.in/brands" />
        <meta property="og:image" content="https://yourdomain.com/path-to-og-image.jpg" />
        {/* Twitter Card Tags */}
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        {/* <meta name="twitter:title" content="Noble Nurture | Pure & Effective Skincare" /> */}
        {/* <meta 
          name="twitter:description" 
          content="Experience Noble Nurture—a promise of pure, effective, and sustainable skincare that combines clean beauty with cutting-edge technology." 
        /> */}
        {/* <meta name="twitter:image" content="https://yourdomain.com/path-to-twitter-image.jpg" /> */}
        <link rel="canonical" href="https://rayneel.in/brands" />
      </Helmet>
      {/* Carousel Section */}
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl  mb-8 text-center font-medium italic font-[Lora]">Our Brand</h1>
        <Swiper {...settings}>
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col px-10  md:flex-row bg-gradient-to-l from-gray-100 to-transparent items-center gap-8">
                {/* Left Column: Slide Content with Gradient Background */}
                <div className={`w-full md:w-1/2 p-20  ${slide.bgColor} rounded-lg`}>
                  <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
                  <h3 className="text-xl font-medium mb-4 text-gray-600">{slide.subtitle}</h3>
                  <p className="text-gray-700 mb-4">{slide.description}</p>
                  <Link
                    to="/brands"
                    className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition duration-300"
                  >
                    Learn More
                  </Link>
                </div>
                {/* Right Column: Product Image */}
                <div className="w-full md:w-1/2">
                  <img
                    src={slide.productImage}
                    alt={`${slide.title} Product`}
                    className="w-full h-96 rounded-lg  object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* New Brief Section */}
      <div className="container mx-auto px-4 py-20 my-10 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-center  italic font-[Lora]">About Noble Nurture</h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto text-center">
          Noble Nurture is more than just a skincare brand—it’s a promise to deliver pure, effective,
          and sustainable solutions. Our commitment to clean beauty ensures that every product is crafted
          with non‑toxic ingredients and eco‑friendly practices, empowering you to embrace your natural beauty
          while caring for our planet.
        </p>
      </div>
    </>
  );
}
