import React from "react";

const OurMission = () => {
  return (
    <div className="w-full lg:w-[80vw] mx-auto py-12 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl md:text-3xl font-bold text-[#00B86C] mb-6">
          Our Mission & Vision
        </h2>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
          Empowering farmers and local businesses by delivering fresh and
          high-quality dairy products directly to consumers with trust and care.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Mission Section */}
        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <img
            src="https://media.istockphoto.com/id/1297005860/photo/raw-milk-being-poured-into-container.jpg?s=612x612&w=0&k=20&c=5Xumh49_zYs9GjLkGpZXM41tS17K8M-svN9jLMv0JpE="
            alt="Mission"
            className="w-full h-60 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-bold text-[#00B86C]">Our Mission</h3>
          <p className="text-gray-600 mt-2">
            To create a sustainable ecosystem where quality meets trust, by
            bridging the gap between farmers and consumers.
          </p>
        </div>

        {/* Vision Section */}
        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <img
            src="https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Vision"
            className="w-full h-60 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-bold text-[#00B86C]">Our Vision</h3>
          <p className="text-gray-600 mt-2">
            To become the leading farm-to-table dairy brand, ensuring purity,
            freshness, and ethical sourcing for every home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
