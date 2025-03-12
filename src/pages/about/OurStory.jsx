export default function OurStory() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Text Content */}
        <div>
          <h1 className="text-4xl mb-6 font-medium italic font-[Lora] text-gray-900">Our Story</h1>
          <p className="text-gray-700 mb-4">
            At Ray Neel, our mission is to empower individuals through innovative skincare
            solutions that combine the best of nature and science. With a commitment to
            sustainability, quality, and integrity, we are paving the way for a healthier future.
          </p>
          <p className="max-w-2xl text-lg font-[Lora] text-gray-700">
            Our journey started with a passion for skincare, and over the years, we have grown
            into a trusted name—continuously innovating and setting new standards in the industry.
          </p>
        </div>

        {/* Right Column: Replaced Image with Title */}
        <div className="flex justify-center items-center h-full">
          <h1 className="text-5xl  text-gray-800 font-bold">RayNeel</h1>
        </div>
      </div>
    </div>
  );
}
