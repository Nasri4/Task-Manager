import React from "react";

const Header = () => {
  return (
    <>
      <header className="bg-red-300 text-white px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold">Nasri</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-red-400">Home</a></li>
            <li><a href="#about" className="hover:text-red-400">About</a></li>
            <li><a href="#services" className="hover:text-red-400">Services</a></li>
            <li><a href="#contact" className="hover:text-red-400">Contact</a></li>
          </ul>
        </nav>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Get Started
        </button>
      </header>
    </>
  );
};

export default Header;
