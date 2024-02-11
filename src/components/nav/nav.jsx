import React from "react";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-[#F9EFDB] text-gray-800">
      <div className="flex justify-center items-center flex-grow">
        <a href="/" className="text-lg font-bold mx-4">
          Home
        </a>
        <a href="/about" className="text-lg font-bold mx-4">
          About us
        </a>
        <a href="/products" className="text-lg font-bold mx-4">
          Products
        </a>
        <a href="/contact" className="text-lg font-bold mx-4">
          Contact
        </a>
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center">
          <img src="/login-icon.png" alt="Login" className="w-6 h-6 mr-2" />
          <span>Login</span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
