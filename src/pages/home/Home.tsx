import Banner from "./Banner";
import Category from "./Category";
import NewProduct from "./NewProduct";
import Product from "./Product";
import Detail from "./Detail";
import Points from "./Points";
import Subscribe from "./Subscribe";

export default function Home() {
  return (
    <main>
      {/* Banner with Slider */}
      <Banner />
      {/* Category */}
      <Category />
      {/* New Products */}
      <NewProduct />
      {/* All Prouducts */}
      <Product />
      {/* Extra Detail */}
      <Detail />
      {/* Subscription */}
      <Subscribe />

      {/* 4 Points before Footer */}
      <Points />
    </main>
  );
}
