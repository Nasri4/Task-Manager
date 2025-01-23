import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white text-center py-6">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-lg font-semibold">
          &copy; 2025 Nasri. All rights reserved.
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <a
            href="#"
            className="text-blue-100 hover:text-white transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-blue-100 hover:text-white transition-colors duration-200"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-blue-100 hover:text-white transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
