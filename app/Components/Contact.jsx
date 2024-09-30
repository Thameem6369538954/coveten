"use client";
import React from "react";
// import Map from "../../public/Map.jpg"


const Contact = () => {

  return (
    <div>
      <div className="w-full min-h-[100vh] bg-white px-[1em] m-[auto] flex items-center justify-center flex-col">
        <div className="w-full flex flex-col  sm:flex-col md:flex-col lg:flex-row items-center justify-around p-[1em] gap-3 m-[auto]">
          <div className="w-[90%] md:w-[50%] lg:w-[70%] grid place-items-center px-[4em] py-[4em] sm:px-[2em]">
            <h1 className="text-3xl font-bold text-black font-heading md:text-black sm:text-4xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="font-sans text-2xl">
              Supercharge your business with tailored solutions from Coveten,
              designed to accelerate growth, enhance efficiency, and ensure
              success.
            </p>
            <div className="mt-[2em]">
              <button className="bg-primary text-white font-sans text-2xl py-3 px-5 hover:text-black rounded hover:bg-transparent hover:border-2 border-primary ">
                Get Started
              </button>
            </div>
          </div>
          <div className="w-[90%] md:w-[50%] lg:w-[50%] px-5 grid place-items-center">
            <form className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
              {/* Name */}
              <div className="md:col-span-1">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div className="md:col-span-1">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Enter your email"
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Enter your message"
                  rows="5"
                />
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="w-full bg-primary text-white hover:text-primary p-3 rounded-lg hover:bg-transparent hover:border-2 border-primary transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
