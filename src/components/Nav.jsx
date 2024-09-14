import React, { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

function Nav({ onCartClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-eco-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl sm:text-3xl font-bold font-open-sans cursor-pointer">
              Ecco shop<span className="text-eco-500">.</span>
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="#" label="Home" />
              <NavLink href="#" label="Shop" />
              <button
                onClick={onCartClick}
                className="text-white hover:bg-eco-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center transition duration-150 ease-in-out"
                aria-label="Cart"
              >
                Cart
                <ShoppingCart className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-eco-200 hover:text-white hover:bg-eco-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="#" label="Home" mobile />
            <NavLink href="#" label="Shop" mobile />
            <button
              onClick={onCartClick}
              className="text-white hover:bg-eco-700 hover:text-white px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center transition duration-150 ease-in-out"
            >
              Cart
              <ShoppingCart className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, label, mobile }) {
  const baseClasses =
    "text-white hover:bg-eco-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out";
  const mobileClasses = "block text-base w-full text-left";

  return (
    <a href={href} className={`${baseClasses} ${mobile ? mobileClasses : ""}`}>
      {label}
    </a>
  );
}

export default Nav;
