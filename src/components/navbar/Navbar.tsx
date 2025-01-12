"use client"
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="flex justify-between items-center lg:py-1">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <Image
              src="https://i.ibb.co/7kbQYXT/LOGO-1-1.png"
              alt="Logo"
              width={71}
              height={71}
            />
        
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <Image
              src="https://i.ibb.co/YdW1Z0q/menu-1-1.png"
              alt="Menu Icon"
              width={22}
              height={22}
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>

          {/* Routes Section (Hidden on Mobile) */}
          <div className="hidden md:flex gap-10 text-[#484848] lg:text-[17px] font-bold">
            <a href="#about" className="hover:text-gray-600 transition-colors">
              About Us
            </a>
            <div className="flex items-center gap-2 hover:text-gray-600 transition-colors cursor-pointer">
              <a href="#services">Our Services</a>
              <Image
                src="https://i.ibb.co/JBWf8QD/Polygon-1.png"
                alt="Dropdown Icon"
                width={11}
                height={9}
              />
            </div>
            <a href="#blog" className="hover:text-gray-600 transition-colors">
              Blog
            </a>
            <div className="flex items-center gap-2 hover:text-gray-600 transition-colors cursor-pointer">
              <a href="#projects">Projects</a>
              <Image
                src="https://i.ibb.co/JBWf8QD/Polygon-1.png"
                alt="Dropdown Icon"
                width={11}
                height={9}
              />
            </div>
            <a
              href="#contact"
              className="hover:text-gray-600 transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Phone Section for Desktop */}
          <div className="hidden md:flex items-center gap-2">
            <Image
              src="https://i.ibb.co/BNZ9t4d/phone-call-1.png"
              alt="Phone Icon"
              width={37}
              height={37}
            />
            <p className="text-xl text-[#049E43] font-bold">(647) 449 - 9512</p>
          </div>
        </div>

        {/* Mobile Menu (Shown on Hamburger Click) */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-100 p-4 rounded-lg">
            <a
              href="#about"
              className="block text-[#484848] font-bold py-2 hover:text-gray-600 transition-colors"
            >
              About Us
            </a>
            <a
              href="#services"
              className="block text-[#484848] font-bold py-2 hover:text-gray-600 transition-colors"
            >
              Our Services
            </a>
            <a
              href="#blog"
              className="block text-[#484848] font-bold py-2 hover:text-gray-600 transition-colors"
            >
              Blog
            </a>
            <a
              href="#projects"
              className="block text-[#484848] font-bold py-2 hover:text-gray-600 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block text-[#484848] font-bold py-2 hover:text-gray-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
