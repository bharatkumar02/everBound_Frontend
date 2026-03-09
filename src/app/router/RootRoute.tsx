import { Outlet } from "react-router";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import ProductList from "@/components/layout/header/ProductList";

export default function RootRoute() {
  return (
    <>
      <Header />
      <div className="hidden lg:block sticky top-0 z-20">
        <ProductList />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
