import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddGem = () => {
  const [addGem, setAddGem] = useState({
    type: "",
    size: "",
    weight: "",
    species: "",
    variety: "",
    hue: "",
    tone: "",
    intensity: "",
    gem_pic: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setAddGem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddGem = (e) => {
    e.preventDefault();
    console.log(addGem);
  };
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl ring-2 ring-indigo-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-indigo-700 uppercase">
          Add Gem Details
        </h1>
        <form onSubmit={handleAddGem} className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="text"
              className="block text-sm font-semibold text-gray-800"
            >
              Type
            </label>
            <input
              name="type"
              onChange={handleChange}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="text"
              className="block text-sm font-semibold text-gray-800"
            >
              Size
            </label>
            <input
              name="size"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="text"
              className="block text-sm font-semibold text-gray-800"
            >
              Weight
            </label>
            <input
              name="weight"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              name="weight"
              htmlFor="text"
              className="block text-sm font-semibold text-gray-800"
            >
              Species
            </label>
            <input
              name="species"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="text"
              className="block text-sm font-semibold text-gray-800"
            >
              Variety
            </label>
            <input
              name="variety"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="text"
              className="block text-sm font-semibold text-gray-800"
            >
              Hue
            </label>
            <input
              name="hue"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="text"
              className="block text-sm font-semibold text-gray-800"
            >
              Tone
            </label>
            <input
              name="tone"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="text"
              className="block text-sm font-semibold text-gray-800"
            >
              Intensity
            </label>
            <input
              name="intensity"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="file"
              className="block text-sm font-semibold text-gray-800"
            >
              Upload Gem Picture
            </label>
            <input
              name="gem_pic"
              type="file"
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Submit to Register Gem
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddGem;
