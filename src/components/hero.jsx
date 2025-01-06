import React from "react";

const Hero = () => {
  return (
    <section className="bg-red-300 text-white py-16 text-center mt-6">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6">Welcome</h1>
        <button className="bg-red-500 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-red-600 transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
