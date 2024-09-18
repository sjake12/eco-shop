import { useState, useEffect } from "react";
import hero from "../assets/heo2.jpg";

function Hero({ onLoginClick }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.src = hero;
  }, []);

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-eco-100 to-eco-200 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 px-4 md:px-8 lg:px-16 xl:px-24 py-12 lg:py-0 overflow-hidden">
      <div className="flex flex-col justify-center items-start lg:w-1/2 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-roboto leading-tight text-eco-900 mb-6">
          <span className="block">Sustainable</span>
          <span className="block">Products</span>
          <span className="block">Marketplace</span>
        </h1>
        <p className="text-lg md:text-xl text-eco-700 mb-8 max-w-lg">
          Discover eco-friendly products that make a difference. Join us in
          creating a sustainable future, one purchase at a time.
        </p>
        <div className="flex space-x-4">
          <a
            href="#shop"
            className="group bg-eco-800 text-white text-lg md:text-xl font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-eco-600 hover:shadow-xl hover:transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-eco-400 focus:ring-opacity-50 flex items-center"
          >
            Shop now
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </a>
          <button
            onClick={onLoginClick}
            className="group bg-eco-800 text-white text-lg md:text-xl font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-eco-600 hover:shadow-xl hover:transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-eco-400 focus:ring-opacity-50"
          >
            Log In
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 h-64 md:h-96 lg:h-[80vh] relative overflow-hidden rounded-3xl shadow-2xl">
        <div
          className={`absolute inset-0 bg-eco-brown-200 transition-opacity duration-500 ${
            isLoaded ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-eco-900/50 to-transparent mix-blend-multiply"></div>
        <img
          src={hero}
          alt="Sustainable products"
          className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
            isLoaded ? "scale-100 blur-0" : "scale-110 blur-sm"
          }`}
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-eco-500 mix-blend-color opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-eco-100/30 to-eco-200/30 mix-blend-overlay"></div>
      </div>
    </section>
  );
}

export default Hero;
