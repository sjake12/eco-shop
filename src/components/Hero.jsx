import hero from "../assets/heo2.jpg";

function Hero() {
  return (
    <section className="w-full flex h-[80vh] justify-between gap-12 mt-6 px-40">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-6xl font-bold font-roboto leading-30">
          Sustainable <br /> Products <br />
          Marketplace
        </h2>
        <a
          href="#"
          className="bg-eco-500 text-2xl font-bold mt-6 py-2 px-4 rounded-lg self-end shadow-md cursor-pointer hover:opacity-80"
        >
          Shop now &#8250;
        </a>
      </div>
      <div className="flex-1 bg-eco-brown-200">
        <img src={hero} alt="banner" className="w-full h-full object-cover" />
      </div>
    </section>
  );
}

export default Hero;
