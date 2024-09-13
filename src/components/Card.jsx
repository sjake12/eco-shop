function Card({ coverImg, productName, description }) {
  return (
    <div className="w-60 h-80 rounded-xl bg-white overflow-hidden shadow-md flex flex-col">
      <img src={coverImg} className="h-[45%] w-full object-cover" />
      <div className="p-4 h-[55%] w-full flex flex-col justify-between">
        <div className="flex-grow">
          <p className="text-lg font-bold font-roboto">{productName}</p>
          <p className="text-sm text-gray-600 mt-2">{description}</p>
        </div>
        <a
          href="#"
          className="mt-4 bg-black text-white font-semibold p-2 text-center rounded-sm hover:opacity-80"
        >
          Add to cart +
        </a>
      </div>
    </div>
  );
}

export default Card;
