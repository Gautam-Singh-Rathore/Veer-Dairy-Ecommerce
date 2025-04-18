import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../utils/Constants";
import c1 from "../../public/assets/categories/c1.jpg";
import c2 from "../../public/assets/categories/c2.jpg";
import c3 from "../../public/assets/categories/c3.jpg";
import { useNavigate } from "react-router";

const CategorySection = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const getCategories = async () => {
    try {
      const response = await axios.get(BACKEND_URL + "/category/all");
      console.log("API Response:", response);

      if (response.status === 200) {
        setCategories(response.data);
        console.log(response.data);
      } else {
        console.log("Data not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const getCategoryImage = (id) => {
    const images = { 1: c1, 2: c2, 3: c3 };
    return images[id] || c1; // Default image
  };

  return (
    <div className="w-full lg:w-[80vw] lg:ml-[10vw] px-4 py-6 md:py-10">
      <h2 className="text-xl md:text-3xl font-bold mb-6 text-center text-[#00B86C]">
        Categories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-gray-100  rounded-3xl text-center cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md"
            onClick={()=> navigate(`/products/${cat.name}`)}
          >
            <img
              src={getCategoryImage(cat.id)}
              alt={cat.name}
              className="w-full h-36 sm:h-40 object-cover rounded-md rounded-t-3xl"
            />
            <h3 className="py-2  md:text-xl font-semibold text-gray-800">
              {cat.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
