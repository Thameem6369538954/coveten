"use client";
import React,{useState} from 'react'

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null); // To keep track of which section is open

  // Function to toggle a section
  const toggleSection = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if it's already open
    } else {
      setActiveIndex(index); // Open the clicked section
    }
  };
  return (
    <div>
      <div className="">
        <div className=" w-full min-h-[100vh] bg-white px-[1em] m-[auto] flex items-center justify-center flex-col">
          <div className="relative ">
            <h1 className='text-3xl md:text-5xl lg:text-5xl relative lg:left-[-170%] sm:left-[-40%] left-[-30%]  lg:top-40 font-bold text-black  font-heading after:content-[""] after:block after:w-3/4 after:h-1 after:bg-primary after:rounded after:left-[100%]   after:top-[40%]   after:absolute '>
              About
            </h1>{" "}
          </div>

          <div className="w-full flex flex-col  sm:flex-col md:flex-col lg:flex-row items-center justify-around p-[1em] gap-3 m-[auto]">
            <div className="lg:w-[50%] w-[80%] md:[100%] px-[2em]">
              <p className="font-sans text-2xl">
                Coveten is an all-in-one platform that helps businesses
                streamline their operations, improve efficiency, and achieve
                success. Our platform provides a comprehensive suite of tools
                and services to help businesses streamline their processes,
                improve efficiency, and achieve success.
              </p>
            </div>
            <div className="grid place-items-center grid-cols-1 gap-3 min-h-[60vh] w-[50%]">
              <h1 className="text-4xl font-sans">What We Do</h1>

              {/* Section 1 */}
              <div className="min-w-[100%] bg-primary p-[2em] rounded">
                <h1
                  className="text-1xl font-bold text-black font-heading cursor-pointer"
                  onClick={() => toggleSection(0)}
                >
                  Industrial Testing & Quality Solutions.....<span>more</span>
                </h1>
                {activeIndex === 0 && (
                  <p className="font-sans text-1xl">
                    {/* Content for section 1 */}
                    Description about Industrial Testing & Quality Solutions
                    goes here.
                  </p>
                )}
              </div>

              {/* Section 2 */}
              <div className="min-w-[100%] bg-primary p-[2em] rounded">
                <h1
                  className="text-1xl font-bold text-black font-heading cursor-pointer"
                  onClick={() => toggleSection(1)}
                >
                  Procurement Solutions.....<span>more</span>
                </h1>
                {activeIndex === 1 && (
                  <p className="font-sans text-1xl">
                    {/* Content for section 2 */}
                    Description about Procurement Solutions goes here.
                  </p>
                )}
              </div>

              {/* Section 3 */}
              <div className="min-w-[100%] bg-primary p-[2em] rounded">
                <h1
                  className="text-1xl font-bold text-black font-heading cursor-pointer"
                  onClick={() => toggleSection(2)}
                >
                  Software Solutions.....<span>more</span>
                </h1>
                {activeIndex === 2 && (
                  <p className="font-sans text-1xl">
                    {/* Content for section 3 */}
                    Description about Software Solutions goes here.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About