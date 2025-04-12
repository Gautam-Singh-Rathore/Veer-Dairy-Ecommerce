// import React from "react";
// import video from "../../public/assets/video.mp4";
// import i1 from "../../public/assets/home-page/1.png";
// import i2 from "../../public/assets/home-page/2.png";
// import i3 from "../../public/assets/home-page/3.png";
// import i4 from "../../public/assets/home-page/4.png";

// const VideoComponent = () => {
//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Background Video */}
//       <video
//         src={video}
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//       />

//       {/* Dim Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10" />

//       {/* Content */}
//       <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4 space-y-6">
//         {/* Headings */}
//         <div>
//           <h1 className="text-4xl md:text-6xl font-bold mb-2">Be A Part Of Our</h1>
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">Single Origin Milk Story</h1>
//           <p className="text-lg md:text-2xl">Experience the difference with our services</p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-8">
//           <div className="flex flex-col items-center scale-75">
//             <img src={i1} alt="Feature 1" className="w-20 h-20 object-contain mb-2" />
//             <p className="text-[22px]">Unmatched Premium<br />Single Origin Milk</p>
//           </div>
//           <div className="flex flex-col items-center scale-75 ">
//             <img src={i2} alt="Feature 2" className="w-20 h-20 object-contain mb-2" />
//             <p className="text-[22px]">Sourced from picturesque Veer <br />Dairy Farm</p>
//           </div>
//           <div className="flex flex-col items-center scale-75">
//             <img src={i3} alt="Feature 3" className="w-20 h-20 object-contain mb-2" />
//             <p className="text-[22px]">Innovative & Advanced <br />Techniques</p>
//           </div>
//           <div className="flex flex-col items-center scale-75 col-span-full md:col-span-1 md:col-start-2">
//             <img src={i4} alt="Feature 4" className="w-20 h-20 object-contain mb-2" />
//             <p className="text-[22px]">Healthier Family & <br />A Healthier You</p>
//           </div>
//         </div>

//         {/* Button */}
//         <div className="mt-10">
//           <button className="bg-[#00B86C] text-white px-4 py-2 rounded-lg flex justify-center items-center gap-5 cursor-pointer hover:scale-105  my-1">
//             KNOW MORE
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoComponent;

import React from "react";
import i1 from "../../public/assets/home-page/1.png";
import i2 from "../../public/assets/home-page/2.png";
import i3 from "../../public/assets/home-page/3.png";
import i4 from "../../public/assets/home-page/4.png";

const VideoComponent = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#EDECEA] py-3">
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-black text-center px-4 space-y-6">
        {/* Headings */}
        <div className="pt-10">
          <h1 className="text-3xl md:text-6xl font-semibold mb-2">Be A Part Of Our</h1>
          <h1 className="text-3xl md:text-6xl font-semibold mb-4">Single Origin Milk Story</h1>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 mt-8">
          <div className="flex flex-col items-center scale-75">
            <div className="bg-white rounded-full p-6 mb-2">
              <img src={i1} alt="Feature 1" className="w-20 h-20 object-contain" />
            </div>
            <p className="text-[22px]">Unmatched Premium<br />Single Origin Milk</p>
          </div>
          <div className="flex flex-col items-center scale-75 px-14">
            <div className="bg-white rounded-full p-6 mb-2 ">
              <img src={i2} alt="Feature 2" className="w-20 h-20 object-contain" />
            </div>
            <p className="text-[22px]">Sourced from picturesque Veer <br />Dairy Farm</p>
          </div>
          <div className="flex flex-col items-center scale-75">
            <div className="bg-white rounded-full p-6 mb-2">
              <img src={i3} alt="Feature 3" className="w-20 h-20 object-contain" />
            </div>
            <p className="text-[22px]">Innovative & Advanced <br />Techniques</p>
          </div>
          <div className="flex flex-col items-center scale-75 col-span-full md:col-span-1 md:col-start-2">
            <div className="bg-white rounded-full p-6 mb-2">
              <img src={i4} alt="Feature 4" className="w-20 h-20 object-contain" />
            </div>
            <p className="text-[22px]">Healthier Family & <br />A Healthier You</p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-10">
          <button className="bg-[#00B86C] text-white px-4 py-2 rounded-lg flex justify-center items-center gap-5 cursor-pointer hover:scale-105 my-1 transition">
            KNOW MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;

