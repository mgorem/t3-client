import React, { useState } from "react";

const RequestAccess = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleFormDetailsChange = (e) => {
    setEmail((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-tertiary rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-primary uppercase">
          Request Access
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              for="text"
              className="block text-sm font-semibold text-gray-800"
            >
              Full Name
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="phone"
              className="block text-sm font-semibold text-gray-800"
            >
              Phone
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="text"
              className="block text-sm font-semibold text-gray-800"
            >
              Organization
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestAccess;
