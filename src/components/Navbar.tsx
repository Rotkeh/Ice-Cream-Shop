import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

export function Navbar() {
  return (
    <nav className="nav-bar">
      <NavLink to={"browse"} className={"nav-link"}>
        Browse
      </NavLink>
      <NavLink to={"mix"} className={"nav-link"}>
        Make your own
      </NavLink>
      <NavLink to={"store"} className={"nav-link"}>
        Visit us
      </NavLink>
      <form className="search" action="">
        <button>O</button>
        <input placeholder="Search" type="text" name="" id="" />
      </form>
    </nav>
  );
}
