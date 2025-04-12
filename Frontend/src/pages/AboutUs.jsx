import React from "react";
import bg from "../../public/assets/about/bg.jpg";
import a1 from "../../public/assets/about/a1.jpg";
import child from "../../public/assets/about/child.png";
import b1 from "../../public/assets/about/b1.png";
import b2 from "../../public/assets/about/b2.png";
import b3 from "../../public/assets/about/b3.png";
import p1 from "../../public/assets/about/p1.png";
import p2 from "../../public/assets/about/p2.png";
import p3 from "../../public/assets/about/p3.png";
import p4 from "../../public/assets/about/p4.png";

const AboutUs = () => {
  return (
    <div>
      <div className="bg-white h-[12vh]"></div>

      {/* Background Image Section */}
      <div
        className="min-h-screen bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        {/* Part 1 */}
        <div className=" flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-10 bg-green-50 bg-opacity-95 py-10">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img
              src={a1}
              alt="About Us"
              className="w-full h-auto rounded-3xl shadow-lg object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 text-left space-y-4">
            <p className="text-gray-500 uppercase tracking-wider text-sm">
              We Love What We Do
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
              Nurturing Quality Dairy for Every Family
            </h1>
            <p className="text-gray-700 text-lg">
              At our farm, we believe in purity, sustainability, and the power
              of single-origin milk. Our dairy products are crafted with care,
              sourced from healthy, happy cows, and delivered fresh to your
              doorstep. Join us in bringing wholesome goodness to every home.
            </p>
          </div>
        </div>

        {/* Part 2 */}
        <div className="py-10 flex flex-col items-center justify-center text-center px-6 md:px-32 bg-transparent bg-opacity-15">
          <h1 className="text-2xl md:text-4xl font-extrabold text-white mb-4 uppercase tracking-wider">
            Revolutionizing Dairy – From Our Farm to Your Home
          </h1>
          <p className="text-md md:text-xl text-white leading-relaxed max-w-4xl font-semibold">
            We began this journey with one vision — to deliver pure, nutritious
            milk and dairy products with unmatched quality and care. Our farms
            are equipped with advanced German and French technology, ensuring
            every drop you consume is safe, fresh, and wholesome.
            <br />
            <br />
            We care for our cows like family, provide them with world-class
            treatment, and follow sustainable practices like biogas recycling,
            organic fertilization, and water reuse. Every product we deliver is
            a promise — of health, integrity, and a better tomorrow.
          </p>
        </div>

        {/* Part 3 */}
        <div className="px-6 py-14 bg-white bg-opacity-90 w-full md:px-[18vw]">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-700 mb-12">
            Better Health Through Better Dairy
          </h1>

          <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
            {/* Left - Text Blocks */}
            <div className="flex flex-col gap-10 w-full lg:w-1/2">
              {/* Card 1 */}
              <div className="flex items-start gap-4">
                <img src={b1} alt="" className="w-14 h-14 object-contain" />
                <p className=" text-md leading-relaxed">
                  Providing nutritious milk supported by modern dairy practices,
                  high-quality fodder, and expert care at every step.
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex items-start gap-4">
                <img src={b2} alt="" className="w-14 h-14 object-contain" />
                <p className="text-md leading-relaxed">
                  Enjoy the freshness, aroma, and full nutritional value of
                  single-origin milk — straight from our farms.
                </p>
              </div>

              {/* Card 3 */}
              <div className="flex items-start gap-4">
                <img src={b3} alt="" className="w-14 h-14 object-contain" />
                <p className=" text-md leading-relaxed">
                  Trusted by families who value purity, taste, and health in
                  every glass of milk.
                </p>
              </div>
            </div>

            {/* Right - Child Image */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <img
                src={child}
                alt="Healthy Child"
                className="rounded-3xl w-full max-w-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Part 4  */}
        <div className="bg-white bg-opacity-90 py-16 px-6 md:px-[12vw] text-center">
          {/* Subheading */}
          <p className="text-gray-500 uppercase tracking-widest text-sm mb-2">
            A place full of love
          </p>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
            Our Philosophy
          </h1>

          {/* Philosophy Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center">
              <img
                src={p1}
                alt="Hygienic"
                className="w-20 h-20 object-contain mb-4 rounded-full bg-white p-3"
              />
              <p className="text-gray-700 font-medium">
                Hygienic, antibiotic-free milk products
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center">
              <img
                src={p2}
                alt="Technology"
                className="w-20 h-20 object-contain mb-4 rounded-full bg-white p-3"
              />
              <p className="text-gray-700 font-medium">
                Innovative global dairy technology
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center">
              <img
                src={p3}
                alt="Feedback"
                className="w-20 h-20 object-contain mb-4 rounded-full bg-white p-3"
              />
              <p className="text-gray-700 font-medium">
                Feedback-driven improvements
              </p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center text-center">
              <img
                src={p4}
                alt="Environment"
                className="w-20 h-20 object-contain mb-4 rounded-full bg-white p-3"
              />
              <p className="text-gray-700 font-medium">
                Value, uplift, and conserve the environment
              </p>
            </div>
          </div>
        </div>

        {/* Part 5  */}
        <div>
          <h1></h1>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
