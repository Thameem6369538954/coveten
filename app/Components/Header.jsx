"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import headerAnimation from "../Anime/Header.json";

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Header = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="">
      <div className="sm:flex md:flex lg:flex justify-center items-center m-[auto] w-full min-h-[100vh] m-[auto]">
        <div className="w-[70%] md:w-[50%] lg:w-[70%] grid place-items-center m-[auto] px-[1em] py-[1em] lg:px-[4em] lg:py-[4em] sm:px-[2em] ">
          <h1 className="text-3xl font-bold text-black font-heading md:text-black sm:text-4xl lg:text-6xl">
            Fuel Your Growth with <span className="text-primary ">Coveten</span>
          </h1>
          <p className="font-sans text-2xl">
            Supercharge your business with tailored solutions from Coveten,
            designed to accelerate growth, enhance efficiency, and ensure
            success.
          </p>
          <div className="mt-[2em] m-[auto]">
            <button className="bg-primary text-white font-sans text-2xl py-3 px-5 hover:text-black rounded hover:bg-transparent hover:border-2 border-primary ">
              Get Started
            </button>
          </div>
        </div>
        <div className="w-[90%] md:w-[50%] lg:w-[50%] px-5 grid place-items-center">
          {isClient && (
            <Lottie
              className="px-[1em]"
              animationData={headerAnimation}
              loop={true}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
