import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; 
import p1 from "../../public/assets/p1.png"
import p2 from "../../public/assets/p2.png"
import p3 from "../../public/assets/p3.png"

const Testimonial = () => {
  const testimonials = [
    {
      name: "Aarav Sharma",
      review:
        "The quality of milk is top-notch! It's fresh, pure, and tastes just like the farm-fresh milk I used to have in my childhood. I no longer worry about adulteration.",
      image: p1,
      role: "Health-Conscious Consumer",
      rating: 5,
    },
    
    {
      name: "Rohan Desai",
      review:
        "I run a small café, and ever since I switched to their milk, my customers have noticed the difference! The lattes and desserts taste much richer now.",
      image: p2,
      role: "Café Owner",
      rating: 4.7,
    },
    {
      name: "Priya Malhotra",
      review:
        "Their ghee is simply amazing! It has a rich aroma and authentic taste, making my homemade rotis and sweets even more delicious. Highly recommended!",
      image: p3,
      role: "Homemaker",
      rating: 5,
    },
  ];
  

  // Function to render star ratings using react-icons
  const renderStars = (rating) => {
    const filledStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <div className="flex items-center">
        {[...Array(filledStars)].map((_, index) => (
          <FaStar key={index} className="text-yellow-400 w-6 h-6 transition-all duration-300 ease-in-out transform hover:scale-110" />
        ))}
        {halfStar && (
          <FaStarHalfAlt className="text-yellow-400 w-6 h-6 transition-all duration-300 ease-in-out transform hover:scale-110" />
        )}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={index} className="text-gray-300 w-6 h-6 transition-all duration-300 ease-in-out transform hover:scale-110" />
        ))}
      </div>
    );
  };

  return (
    <div>
      <section className="text-gray-600 body-font bg-gradient-to-b from-gray-50 to-gray-200 py-12">
        {/* Main Section */}
        <div className="container px-5 mx-auto">
          {/* Heading */}
          <h1 className="text-center text-4xl font-bold text-gray-900 mb-4">
            Testimonials
          </h1>
          <p className="text-center text-xl font-medium text-gray-700 mb-12">
            What our{" "}
            <span className="text-[#00B86C] font-bold">customers</span> are
            saying
          </p>

          <div className="flex flex-wrap -m-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="lg:w-1/3 md:w-1/2 p-4 w-full transform transition duration-500 hover:scale-105"
              >
                <div className="h-full bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center">
                  {/* Image */}
                  <img
                    alt={testimonial.name}
                    className="w-24 h-24 mb-6 object-cover object-center rounded-full border-4 border-[#00B86C] shadow-md"
                    src={testimonial.image}
                  />
                  {/* Review */}
                  <p className="leading-relaxed text-gray-700 italic">
                    "{testimonial.review}"
                  </p>
                  {/* Divider */}
                  <span className="inline-block h-1 w-12 rounded bg-[#00B86C] mt-6 mb-4" />
                  {/* Name and Role */}
                  <h2 className="text-gray-900 font-semibold text-lg">
                    {testimonial.name}
                  </h2>
                  <p className="text-gray-500 text-sm uppercase">
                    {testimonial.role}
                  </p>
                  {/* Rating */}
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
