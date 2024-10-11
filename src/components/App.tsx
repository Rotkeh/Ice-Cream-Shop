import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FlavorProvider } from "../context";
import { CartProvider } from "../context/CartContext";

export function App() {
  return (
    <>
      <Header />
      <FlavorProvider>
        <CartProvider>
          <Outlet />
        </CartProvider>
      </FlavorProvider>
      <Footer />
    </>
  );
}
