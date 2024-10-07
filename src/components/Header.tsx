import { HeaderIcons } from "./HeaderIcons";
import { Navbar } from "./Navbar";

export function Header() {
  return (
    <header className="header">
      <figure></figure>
      <Navbar />
      <HeaderIcons />
    </header>
  );
}
