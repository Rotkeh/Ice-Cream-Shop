import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FlavorProvider } from "../context";

export function App() {
  return (
    <>
      <Header />
      <FlavorProvider>
        <Outlet />
      </FlavorProvider>
      <Footer />
    </>
  );
}
