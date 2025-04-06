import React from 'react';
import about2 from "../../public/assets/about2.jpg";
import about3 from "../../public/assets/about3.jpg";
import banner from "../../public/assets/about-banner.jpg";

const AboutUs = () => {
  return (
    <div className="pt-[12vh] w-full lg:w-[80vw] mx-auto">
      {/* Banner Section */}
      <div
        className="h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1 className="text-white text-4xl font-bold px-4 text-center md:text-5xl">
          About Us
        </h1>
      </div>

      {/* Content Section */}
      <div className="pt-10">
        {/* First Image on Left, Text on Right */}
        <div className="flex flex-col lg:flex-row items-center justify-between px-4 py-10">
          <div className="w-full lg:w-1/2">
            <img
              src={about2}
              alt="About us"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left mt-4 lg:mt-0 lg:pl-10">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed mb-6">
              We are dedicated to providing high-quality milk and dairy products sourced from local farms. 
              Our mission is to bring fresh, nutritious, and sustainably produced dairy to your table every day. 
              We believe that quality starts with care, and we ensure every step of the production process is handled with love and precision.
            </p>
            <p className="text-lg leading-relaxed">
              We are committed to sustainability, working closely with local farmers who share our values of ethical production and environmental responsibility. 
              Together, we can deliver fresh, wholesome dairy products directly to your home with minimal environmental impact.
            </p>
          </div>
        </div>

        {/* Second Image on Right, Text on Left */}
        <div className="flex flex-col lg:flex-row items-center justify-between px-4 py-10">
          <div className="w-full lg:w-1/2 text-center lg:text-left my-4 lg:mt-0 lg:pr-10">
            <h2 className="text-3xl font-semibold mb-4">Our Quality</h2>
            <p className="text-lg leading-relaxed mb-6">
              We pride ourselves on the quality of our products. Each product is crafted with care and goes through strict quality checks to guarantee freshness and purity. 
              Our milk is sourced from happy, healthy cows that are raised on the best feed and care available.
            </p>
            <p className="text-lg leading-relaxed">
              From cheese to yogurt, our range of dairy products is crafted using traditional methods passed down through generations. We ensure that every product maintains the natural goodness, taste, and nutritional value that our customers expect.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src={about3}
              alt="Quality Dairy"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
