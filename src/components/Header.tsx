import { HeaderIcons } from "./HeaderIcons";
import { Navbar } from "./Navbar";
import "../css/Header.css";
import logo from "../assets/logo-transparent.png";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <header className="header">
      <figure className="logo_container">
        <img onClick={handleClick} className="logo_img" src={logo} alt="" />
      </figure>
      <Navbar />
      <HeaderIcons />
    </header>
  );
}
