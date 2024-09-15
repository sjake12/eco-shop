import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Card({ coverImg, productName, description, rating }) {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={`text-${i <= rating ? "eco-800" : "eco-500"} mr-1`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="w-60 rounded-xl bg-white overflow-hidden shadow-md flex flex-col">
      <img src={coverImg} className="h-[150px] w-full object-cover" />
      <div className="p-4 h-[55%] w-full flex flex-col justify-between">
        <div className="flex-grow">
          <p className="text-lg font-bold font-roboto">{productName}</p>
          <p className="text-sm text-gray-600 mt-2">{description}</p>
          <p className="font-bold font-roboto text-sm mt-2 text-eco-800">
            Sustainability Rating:
          </p>
          <ul className="flex mt-2 [&>*]:cursor-pointer">{renderStars()}</ul>
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
