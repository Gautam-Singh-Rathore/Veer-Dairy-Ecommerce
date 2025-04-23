import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineLinkedin } from "react-icons/ai";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Import Leaflet marker icon directly
import markerIconUrl from "leaflet/dist/images/marker-icon.png";

const Footer = () => {
  const position = [27.072315865570594, 75.7458178708348]; // Latitude and Longitude
  const address =
    "3PCW+Q96 Verdant Impact Food Park, NH 52, Nanag Nagar, Rajawas , Amber, Jaipur, Nangal Siras, Rajasthan 302013";
  const mapUrl = "https://maps.app.goo.gl/rNguJEd642BawZyt8"; // Open Map URL

  return (
    <div className="w-full  mx-auto bg-[#F0F0F5] text-[#616673] pt-10">
      <div className="w-full md:w-[80vw] mx-auto">
        {/* Map and Address Section */}
        <div className="flex flex-col md:flex-row justify-between px-6 md:px-20 py-10 gap-8 md:gap-10 mt-8">
          {/* Map */}
          <div className="w-full md:w-2/3 h-80 md:h-[400px] rounded-lg overflow-hidden shadow-lg">
            <MapContainer
              center={position}
              zoom={12}
              scrollWheelZoom={false}
              style={{ width: "100%", height: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker
                position={position}
                icon={
                  new L.Icon({
                    iconUrl: markerIconUrl, // Use the imported marker icon
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    shadowSize: [41, 41],
                  })
                }
              >
                <Popup>
                  <b>Veer Dairy</b>
                  <br />
                  {address}
                </Popup>
              </Marker>
            </MapContainer>
          </div>

          {/* Address and Open Map Button */}
          <div className="w-full md:w-1/3 flex flex-col justify- space-y-6">
            <div className="space-y-2">
              <p className="text-lg font-semibold text-black">Visit Us</p>
              <p className="text-sm text-[#4F4F4F]">{address}</p>
            </div>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#2D3E50] text-white text-sm font-semibold rounded-lg hover:bg-[#3F4E66] transition w-max"
            >
              Open Map
            </a>
          </div>
        </div>

        {/* Main Footer Section */}
        <div className="w-full flex flex-col md:flex-row justify-between px-6 md:px-20  gap-8 md:gap-10 mt-8">
          {/* Contact Us Section */}
          <div className="space-y-4 md:w-1/3">
            <p className="text-black font-semibold text-xl">Contact Us</p>
            <div className="flex items-center space-x-2 text-[#4F4F4F]">
              <MdOutlineEmail className="text-2xl" />
              <p className="text-sm">veerdairyofficial@gmail.com</p>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="space-y-4 md:w-1/3">
            <p className="text-black font-semibold text-xl">Follow Us</p>
            <div className="flex gap-6 text-[#616673]">
              <a
                href="https://www.instagram.com/veer.dairy?igsh=MTdsaHkyNm83bXFkeQ=="
                className="text-3xl hover:text-black transition"
                aria-label="Instagram"
              >
                <IoLogoInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/veer-dairy/"
                className="text-3xl hover:text-black transition"
                aria-label="LinkedIn"
              >
                <AiOutlineLinkedin />
              </a>
            </div>
          </div>
        </div>

        
      </div>
      {/* Bottom Footer Section */}
      <div className="bg-[#E6E6EB] py-6 text-center shadow-md mt-8">
          <p className="text-sm text-[#4F4F4F]">
            &copy; 2025 Veer Dairy. All Rights Reserved.
          </p>
        </div>
    </div>
  );
};

export default Footer;
