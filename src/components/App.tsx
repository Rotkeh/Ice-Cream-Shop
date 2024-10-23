import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FlavorProvider } from "../context";
import { CartProvider } from "../context";
import { AccountProvider } from "../context/AccountContext";

export function App() {
  return (
    <>
      <AccountProvider>
        <CartProvider>
          <Header />
          <FlavorProvider>
            <Outlet />
          </FlavorProvider>
        </CartProvider>
      </AccountProvider>
      <Footer />
    </>
  );
}
