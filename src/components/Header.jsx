import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 shadow-lg py-6">
      <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
        {/* Logo/Branding */}
        <div className="flex items-center">
          <img
            src="https://imgs.search.brave.com/6yURLmHck_81J19MLLjMzRa_nR6f9zpLdeYmIWx5ets/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzA5LzE0LzE2/LzM2MF9GXzkwOTE0/MTY4NV82R0lZNmdl/eGduazZHblF0MmhY/Z2JTU05JUXd3cW1r/dS5qcGc"
            alt="Restaurant Logo"
            className="h-12 rounded-lg"
          />
          <span className="ml-3 text-3xl font-extrabold text-white">
            Foodie
          </span>
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul className="flex space-x-8">
            <li>
              <a
                href="#home"
                className="text-white text-lg font-medium hover:text-yellow-400 transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#menu"
                className="text-white text-lg font-medium hover:text-yellow-400 transition-all duration-300"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white text-lg font-medium hover:text-yellow-400 transition-all duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white text-lg font-medium hover:text-yellow-400 transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Call-to-Action Button */}
        <div className="flex items-center">
          <a
            href="#order"
            className="bg-yellow-500 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-all duration-300"
          >
            Order Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
