import React from "react";
import i1 from "../../public/assets/home-page/1.png";
import i2 from "../../public/assets/home-page/2.png";
import i3 from "../../public/assets/home-page/3.png";
import i4 from "../../public/assets/home-page/4.png";
import c1 from "../../public/assets/about/c1.png";
import c2 from "../../public/assets/about/c2.png";
import c3 from "../../public/assets/about/c3.png";
import c4 from "../../public/assets/about/c4.png";

import f1 from "../../public/assets/about/f1.jpg";
import f2 from "../../public/assets/about/f2.jpg";
import f3 from "../../public/assets/about/f3.jpg";
import f4 from "../../public/assets/about/f4.jpg";
import img1 from "../../public/assets/about/img1.jpg";
import food from "../../public/assets/about/food.jpg";
import img2 from "../../public/assets/about/img2.jpg";
import video from "../../public/assets/video.mp4";

import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router";

const VideoComponent = () => {
  const navigate = useNavigate();

  const reviews = [
      {
        name: "गोपाल सिंह",
        place: "जयपुर",
        review:
          "मैं पहले बस अपने मोहल्ले में दूध बेचता था, लेकिन जब Veer Dairy से जुड़ा, तो मेरा दूध अब पैक होकर पूरे जयपुर में बिकता है। गायें बढ़ाई, आमदनी बढ़ी, और सबसे बड़ी बात – अब मुझे लोग पहचानने लगे हैं। पहले जो बस ‘गोपाल दूध वाला’ था, अब एक ब्रांड से जुड़ा किसान हूँ। मेरा जीवन पूरी तरह बदल चुका है।",
        image: f4,
      },
      {
        name: "सरिता देवी",
        place: "अलवर",
        review:
          "हम सीकर की चार महिलाएं मिलकर गाय-भैंस पालती हैं। पहले घर से बाहर निकलना मुश्किल था, लेकिन जब Veer Dairy की टीम आई और हमें साथ जोड़ने का मौका दिया, तो हमने खुद को साबित किया। आज हम हर महीने अच्छी कमाई कर रही हैं। अब हमारे बच्चों को बोलना अच्छा लगता है – मेरी माँ भी कमाती है। ",
        image: f2,
      },
      {
        name: "धर्मवीर गुर्जर",
        place: "नागौर",
        review:
          "पहले बाजार में रेट के लिए लड़ते रहते थे। कोई 20 रुपये देता, कोई 25। पर Veer Dairy से जुड़ने के बाद सब कुछ सिस्टम में हो गया – दूध तौल के लिया जाता है, ऑनलाइन पेमेंट मिलती है और महीने का हिसाब-किताब बिलकुल साफ। अब हमें कोई छोटा काम करने वाला नहीं समझता – अब हम प्रोफेशनल सप्लायर बन चुके हैं। ",
        image: f3,
      },
      {
        name: "लक्ष्मीबाई",
        place: "सवाई माधोपुर",
        review:
          "मैंने सोचा नहीं था कि एक दिन घर की बहू भी बिज़नेस संभालेगी। Veer Dairy से जुड़कर मैंने गायों की देखभाल, दूध की गुणवत्ता और मार्केटिंग तक सब सीखा। अब मोहल्ले की औरतें मुझसे सलाह लेती हैं। घरवाले भी कहते हैं – तू तो अब सवाई माधोपुर की रोल मॉडल बन गई है! मेरी मेहनत और समर्पण अब दूसरों के लिए प्रेरणा बन चुकी है।",
        image: f1,
      },
    ];
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* First Section: Culture */}
      <div className="bg-[#F7F9FA] py-16 px-6 md:px-[12vw] text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Our Culture
        </h1>
        <p className="text-gray-600 text-md md:text-lg max-w-3xl mx-auto mb-12">
          Our culture reflects our passion for dairy excellence and people-first
          values. Here’s what sets us apart.
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
          {/* Culture Points List */}
          {[
            {
              img: c1,
              title: "Balanced Culture, Refreshing Single-Origin Milk",
              desc: "We cultivate a balanced culture, embracing diversity and collaboration, while our refreshing single-origin milk stands as a testament to our commitment to purity and quality.",
            },
            {
              img: c2,
              title: "Skilled Backend, People-Oriented Harmony",
              desc: "Our skilled backend is the foundation of our success, built on a people-oriented harmony that fuels our innovation and growth.",
            },
            {
              img: c3,
              title: "Celebrating Wins & Refined Process",
              desc: "At our core, we're dedicated to celebrating wins while continuously refining our processes, creating a cycle of achievement and improvement that propels us forward.",
            },
            {
              img: c4,
              title: "Inclusivity and Diversity",
              desc: "We thrive on the strength of our inclusive and diverse community, fostering innovation and understanding across all walks of life.",
            },
          ].map((point, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 items-start"
            >
              <img
                src={point.img}
                alt={point.title}
                className="w-16 h-16 object-contain"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {point.title}
                </h2>
                <p className="text-gray-600">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-200 bg-opacity-95 py-16 px-6 md:px-[12vw] text-center">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Our Supporting Hands
          </h1>
          <p className="text-gray-600 text-md md:text-lg max-w-3xl mx-auto mb-12">
            Our journey is fueled by the stories of our incredible partners.
            From Jaipur to Jhunjhunu, these are the voices of change.
          </p>

          {/* Swiper for the Reviews */}
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-xl overflow-hidden transition-all duration-300 rounded-2xl cursor-pointer border-[1px] border-green-800">
                  {/* Image Section */}
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={review.image}
                      alt={`Review by ${review.name}`}
                      className="w-full h-full object-cover transition-all duration-500 transform hover:scale-110 overflow-hidden"
                    />
                  </div>

                  <div className="p-6 space-y-4">
                    {/* Name and Place */}
                    <h2 className="text-xl font-bold text-green-800 mb-2">
                      {review.name}
                    </h2>
                    <p className="text-gray-500 text-sm">{review.place}</p>
                    {/* Review Text */}
                    <p className="text-black text-base leading-relaxed">
                      {review.review}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className=" flex justify-center items-center py-3">
          <button  
            className="bg-green-500 text-white py-2 px-5  rounded-full flex justify-center items-center gap-5 cursor-pointer hover:scale-105 "
            onClick={()=>navigate("/blogs")} >
            Read More</button>
          </div>
          
        </div>

      {/* 1.5th Section: Culture */}
      {/* Part 3 */}
      {/* Part 3 */}
<div className="px-6 py-14 bg-gradient-to-r from-gray-200 via-gray-300 to-white w-full md:px-[18vw]">
  <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-700 mb-12">
    Our Care Manifesto
  </h1>

  <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
    {/* Left - Text Blocks */}
    <div className="flex flex-col gap-10 w-full lg:w-1/2">
      {/* Card 1 */}
      <div className="flex flex-col items-start gap-6">
        <div className="flex items-center gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 4M12 6l-4 4m4-4h7a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h7" />
          </svg>
          <p className="text-md md:text-lg font-semibold leading-relaxed  text-gray-800">Create Happy Milk Moments</p>
        </div>
        <p className="text-md md:text-lg leading-relaxed pl-4 text-gray-600">
          Unwind with Precious Moments of Absolute Milk Delight in Every Meal
        </p>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-start gap-6">
        <div className="flex items-center gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <p className="text-md md:text-lg font-semibold leading-relaxed  text-gray-800">Wholesome & Nutritious</p>
        </div>
        <p className="text-md md:text-lg leading-relaxed pl-4 text-gray-600">
          Relish Every Drop of High Calcium & Protein Intake in Your Milk
        </p>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-start gap-6">
        <div className="flex items-center gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12h3l-3 3M9 12H6l3 3M12 3v18M4 6h16" />
          </svg>
          <p className="text-md md:text-lg font-semibold leading-relaxed  text-gray-800">The Goodness of Pride of Cow's Milk</p>
        </div>
        <p className="text-md md:text-lg leading-relaxed pl-4 text-gray-600">
          Treat Yourself to a Generous Glass of Veer Dairy's Milk
        </p>
      </div>
    </div>

    {/* Right - Child Image */}
    <div className="w-full lg:w-1/2 flex items-center justify-center">
      <img
        src={food} // Update with actual image URL
        alt="Healthy Child"
        className="rounded-3xl w-full max-w-[400px] object-cover transition-all duration-300 transform hover:scale-105 shadow-lg"
      />
    </div>
  </div>
</div>


      {/* Video Section */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10">
          <h2 className="text-3xl text-white font-semibold">
            Experience the Difference with Our Story
          </h2>
        </div>
      </div>

      {/* Second Section: Features Grid */}
      <div className="bg-[#EDECEA] relative z-20 flex flex-col items-center justify-center text-black text-center px-4 space-y-6 pb-8">
        <div className="pt-8">
          <h1 className="text-2xl md:text-4xl font-semibold mb-2">
            Be A Part Of Our
          </h1>
          <h1 className="text-2xl md:text-4xl font-semibold mb-4">
            Single Origin Milk Story
          </h1>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {/* First three items */}
          {[
            { img: i1, text: "Unmatched Premium Single Origin Milk" },
            { img: i2, text: "Sourced from picturesque Veer Dairy Farm" },
            { img: i3, text: "Innovative & Advanced Techniques" },
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-center scale-90">
              <div className="bg-white rounded-full p-6 mb-2">
                <img
                  src={feature.img}
                  alt={`Feature ${index + 1}`}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <p className="text-lg md:text-[20px]">{feature.text}</p>
            </div>
          ))}

          {/* Fourth item, centered */}
          <div className="flex flex-col items-center scale-90 md:col-span-1 md:col-start-2">
            <div className="bg-white rounded-full p-6 mb-2">
              <img
                src={i4}
                alt="Feature 4"
                className="w-20 h-20 object-contain"
              />
            </div>
            <p className="text-lg md:text-[20px]">
              Healthier Family & A Healthier You
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-8">
          <button className="bg-[#00B86C] text-white px-6 py-3 rounded-lg flex justify-center items-center gap-4 cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out"
          onClick={()=> navigate("/about")}>
            KNOW MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
