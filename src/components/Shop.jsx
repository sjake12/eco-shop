import Card from "./Card";
import products from "../items";

function Shop() {
  const items = products.map((item) => (
    <Card
      key={item.id}
      coverImg={item.coverImg}
      productName={item.name}
      description={item.description}
      rating={item.rating}
    />
  ));

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto">
      <h2 className="font-bold text-3xl sm:text-4xl font-roboto text-eco-800 mb-6 sm:mb-10">
        Shop
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
        {items}
      </div>
    </section>
  );
}

export default Shop;
