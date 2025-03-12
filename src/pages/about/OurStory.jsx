export default function OurStory() {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Text Content */}
          <div>
            <h1 className="text-4xl font-bold mb-6 font-[Lora] text-gray-900">Our Story</h1>
            <p className="text-gray-700 mb-4">
              At Ray Neel, our mission is to empower individuals through innovative skincare
              solutions that combine the best of nature and science. With a commitment to
              sustainability, quality, and integrity, we are paving the way for a healthier future.
            </p>
            <p className="max-w-2xl text-lg font-[Lora] text-lg text-gray-700">
              Our journey started with a passion for skincare, and over the years, we have grown
              into a trusted name—continuously innovating and setting new standards in the industry.
            </p>
          </div>
  
          {/* Right Column: Image */}
          <div>
            <img
              src="https://via.placeholder.com/600x400" 
              alt="Our Story"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    );
  }
  