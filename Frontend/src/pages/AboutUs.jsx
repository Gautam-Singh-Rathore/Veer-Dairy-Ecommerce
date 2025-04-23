import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
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
import c1 from "../../public/assets/about/c1.png";
import c2 from "../../public/assets/about/c2.png";
import c3 from "../../public/assets/about/c3.png";
import c4 from "../../public/assets/about/c4.png";
import img1 from "../../public/assets/about/img1.jpg";
import img2 from "../../public/assets/about/img2.jpg";
import { useNavigate } from "react-router";

const AboutUs = () => {
  const navigate = useNavigate();
  

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
        <div className="bg-gray-200 bg-opacity-95 py-16 px-6 md:px-[12vw] text-center">
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

        {/* Part 5 */}
        <div className="bg-white bg-opacity-90 py-16 px-6 md:px-[12vw] text-center">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Our Culture
          </h1>
          <p className="text-gray-600 text-md md:text-lg max-w-3xl mx-auto mb-12">
            Our culture reflects our passion for dairy excellence and
            people-first values. Here’s what sets us apart.
          </p>

          {/* Images Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <img
              src={img1}
              alt="Culture 1"
              className="w-full h-[250px] object-cover rounded-xl"
            />
            <img
              src={img2}
              alt="Culture 2"
              className="w-full h-[250px] object-cover rounded-xl"
            />
          </div>

          {/* Culture Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            {/* 1 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img
                src={c1}
                alt="Balanced Culture"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Balanced Culture, Refreshing Single-Origin Milk
                </h2>
                <p className="text-gray-600">
                  We cultivate a balanced culture, embracing diversity and
                  collaboration, while our refreshing single-origin milk stands
                  as a testament to our commitment to purity and quality.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img
                src={c2}
                alt="Skilled Backend"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Skilled Backend, People-Oriented Harmony
                </h2>
                <p className="text-gray-600">
                  Our skilled backend is the foundation of our success, built on
                  a people-oriented harmony that fuels our innovation and
                  growth.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img
                src={c3}
                alt="Celebrate Wins"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Celebrating Wins & Refined Process
                </h2>
                <p className="text-gray-600">
                  At our core, we're dedicated to celebrating wins while
                  continuously refining our processes, creating a cycle of
                  achievement and improvement that propels us forward.
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img
                src={c4}
                alt="Inclusivity"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Inclusivity and Diversity
                </h2>
                <p className="text-gray-600">
                  We thrive on the strength of our inclusive and diverse
                  community, fostering innovation and understanding across all
                  walks of life.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Part 6 */}


        
      </div>
    </div>
  );
};

export default AboutUs;
