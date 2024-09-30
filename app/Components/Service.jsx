"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { IoSomeIcon } from "react-icons/io5";
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'; // Importing icons from react-icons
import { CgRadioChecked } from "react-icons/cg";


const About = () => {
      const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
            <IoArrowForward size={24} /> {/* Set size for the icon */}
          </div>
        );
      };

      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev" onClick={onClick}>
            <IoArrowBack size={24} /> {/* Set size for the icon */}
          </div>
        );
      };

   const settings = {
     dots: true,
     infinite: false,
     speed: 500,
     slidesToShow: 4,
     slidesToScroll: 4,
     initialSlide: 0,
     arrows: true,
     nextArrow: <NextArrow  className='w-20%'/>,
     prevArrow: <PrevArrow  className='w-20%'/>,
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
           infinite: true,
           dots: true,
         },
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           initialSlide: 1,
         },
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
         },
       },
     ],
   };


  
  return (
    <div>
      <div className="">
        <div className="  w-full lg:min-h-[100vh] min-h-[50vh] lg:bg-white px-[1em] m-[auto]  ">
          <h1 className='text-3xl md:text-5xl lg:text-5xl relative lg:left-[0%] md:left-[0%] sm:left-[5%]   after:left-[300px] lg:top-40 font-bold text-black  font-heading after:content-[""] after:block after:w-1/4 after:h-1 after:bg-primary after:rounded after:left-[22%] sm:after:left-[35%]  after:top-[40%]   after:absolute '>
            Service
          </h1>
          <div className="w-[100%] lg:min-h-[20vh]  m-[auto] "></div>
          <div className="w-[90%]  ">
            <div className="w-[100%] m-20">
              <Slider {...settings}>
                <div className="h-[430px] rounded-2xl max-w-[250px] bg-white  m-4  border-[5px] border-black ">
                  <h3 className="text-1xl font-heading rounded-t-xl bg-primary w-full h-[100px] py-2 px-2">
                    Our Industrial Benefits
                  </h3>
                  <div className="p-2 flex  items-center justify-center">
                    <ul className="text-1xl font-sans font-bold grid  grid-cols-1 gap-1 mt-20  ">
                      <li className="grid  grid-cols-2 text-2xl">
                        {" "}
                        <CgRadioChecked /> Efficiency
                      </li>
                      <li className="grid  grid-cols-2 text-2xl">
                        {" "}
                        <CgRadioChecked /> Quality
                      </li>
                      <li className="grid  grid-cols-2 text-2xl">
                        {" "}
                        <CgRadioChecked /> Reliability
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="h-[430px] rounded-2xl max-w-[250px] bg-white  m-4  border-[5px] border-black   ">
                  <h3 className="text-1xl font-heading rounded-t-xl bg-primary w-full h-[100px] py-2 px-2">
                    Design Engineering Services
                  </h3>
                  <div className="p-2 flex  items-center justify-center">
                    <ul className="text-1xl font-sans font-bold grid  grid-cols-1 gap-1 mt-20  ">
                      <li className="grid  grid-cols-2 text-2xl">
                        {" "}
                        <CgRadioChecked /> Efficiency
                      </li>
                      <li className="grid  grid-cols-2 text-2xl">
                        {" "}
                        <CgRadioChecked /> Quality
                      </li>
                      <li className="grid  grid-cols-2 text-2xl">
                        {" "}
                        <CgRadioChecked /> Reliability
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="h-[430px] rounded-2xl max-w-[250px] bg-white  m-4  border-[5px] border-black flex   ">
                  <h3 className="text-1xl font-heading rounded-t-xl bg-primary w-full h-[100px] py-2 px-2">
                    Materials Engineering Services
                  </h3>
                  <div className="p-2 flex  items-center justify-center">
                    <ul className="text-1xl font-sans font-bold grid  grid-cols-1 gap-1 mt-20  ">
                      <li className="grid  grid-cols-2 text-2xl">
                        {" "}
                        <CgRadioChecked /> Efficiency
                      </li>
                      <li className="grid  grid-cols-2 text-2xl">
                        {" "}
                        <CgRadioChecked /> Quality
                      </li>
                      <li className="grid  grid-cols-2 text-2xl">
                        {" "}
                        <CgRadioChecked /> Reliability
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="h-[430px] rounded-2xl max-w-[250px] bg-white  m-4  border-[5px] border-black   ">
                  <h3 className="text-1xl font-heading rounded-t-xl bg-primary w-full h-[100px] py-2 px-2">
                    Non Destructive Services
                  </h3>
                  <div className="p-2 flex  items-center justify-center">
                    <ul className="text-1xl font-sans font-bold grid  grid-cols-1 gap-1 mt-20  ">
                      <li className="grid  grid-cols-2 text-2xl">
                        {" "}
                        <CgRadioChecked /> Efficiency
                      </li>
                      <li className="grid  grid-cols-2 text-2xl">
                        {" "}
                        <CgRadioChecked /> Quality
                      </li>
                      <li className="grid  grid-cols-2 text-2xl">
                        {" "}
                        <CgRadioChecked /> Reliability
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="h-[430px] rounded-2xl max-w-[250px] bg-white  m-4  border-[5px] border-black   ">
                  <h3 className="text-1xl font-heading rounded-t-xl bg-primary w-full h-[100px] py-2 px-2">
                    Functional Services
                  </h3>
                  <div className="p-2 flex  items-center justify-center">
                    <ul className="text-1xl font-sans font-bold grid  grid-cols-1 gap-1 mt-20  ">
                      <li className="grid  grid-cols-2 text-2xl">
                        {" "}
                        <CgRadioChecked /> Efficiency
                      </li>
                      <li className="grid  grid-cols-2 text-2xl">
                        {" "}
                        <CgRadioChecked /> Quality
                      </li>
                      <li className="grid  grid-cols-2 text-2xl">
                        {" "}
                        <CgRadioChecked /> Reliability
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="h-[430px] rounded-2xl max-w-[250px] bg-white   m-4 border-[5px] border-black   ">
                  <h3 className="text-1xl font-heading rounded-t-xl bg-primary w-full h-[100px] py-2 px-2">
                    Manufacturing Services
                  </h3>
                  <div className="p-2 flex  items-center justify-center">
                    <ul className="text-1xl font-sans font-bold grid  grid-cols-1 gap-1 mt-20  ">
                      <li className="grid  grid-cols-2 text-2xl">
                        {" "}
                        <CgRadioChecked /> Efficiency
                      </li>
                      <li className="grid  grid-cols-2 text-2xl">
                        {" "}
                        <CgRadioChecked /> Quality
                      </li>
                      <li className="grid  grid-cols-2 text-2xl">
                        {" "}
                        <CgRadioChecked /> Reliability
                      </li>
                    </ul>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
