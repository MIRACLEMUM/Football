import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center sticky top-0 z-50">
      <div className="text-xl font-bold text-blue-600">⚽ BetZone</div>
      <div className="space-x-4">
        <button className="text-gray-600 hover:text-blue-600 font-medium">
          Home
        </button>
        <button className="text-gray-600 hover:text-blue-600 font-medium">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
