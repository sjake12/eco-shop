import Card from "./Card";
import data from "../featured";

function Products() {
  const card = data.map((item) => {
    return (
      <Card
        key={item.id}
        coverImg={item.coverImg}
        productName={item.name}
        description={item.description}
      />
    );
  });

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-eco-500 to-eco-400">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl sm:text-4xl font-bold font-roboto text-center mb-8 sm:mb-12 text-white">
          Featured Products
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {card}
        </div>
      </div>
    </section>
  );
}

export default Products;
