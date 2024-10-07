import { HeaderIcons } from "./HeaderIcons";
import { Navbar } from "./Navbar";
import "../css/Header.css";

export function Header() {
  return (
    <header className="header">
      <figure className="logo"></figure>
      <Navbar />
      <HeaderIcons />
    </header>
  );
}
