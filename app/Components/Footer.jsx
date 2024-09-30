import React from 'react'

const Footer = () => {
  return (
    <div>
      {" "}
      <footer className="bg-primary text-black py-6 min-h-[30vh] flex flex-col items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo or Brand Name */}
            <div className="text-5xl font-bold mb-4 md:mb-0 font-logo">
              Coveten
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col md:flex-row md:space-x-6 mb-4 md:mb-0 font-sans text-3xl">
              <a href="#about" className="hover:text-gray-400">
                About
              </a>
              <a href="#services" className="hover:text-gray-400">
                Services
              </a>
              <a href="#contact" className="hover:text-gray-400">
                Contact
              </a>
              <a href="#privacy" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <i className="fab fa-facebook"></i>{" "}
                {/* Replace with actual icon */}
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <i className="fab fa-twitter"></i>{" "}
                {/* Replace with actual icon */}
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <i className="fab fa-instagram"></i>{" "}
                {/* Replace with actual icon */}
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-4">
            <p className="text-sm">
              © {new Date().getFullYear()} MyBrand. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer