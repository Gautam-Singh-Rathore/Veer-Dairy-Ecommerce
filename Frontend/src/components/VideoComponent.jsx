import React from 'react';
import video from "../../public/assets/video.mp4";

const VideoComponent = () => {
  return (
    <div className="w-full max-w-full mx-auto bg-white">
      <video 
        src={video} 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="w-full lg:w-[80vw] mx-auto px-10 py-10 ro h-auto object-cover overflow-hidden"
      />
    </div>
  );
}

export default VideoComponent;
