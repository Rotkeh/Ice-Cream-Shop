import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import "../css/Navbar.css";
import { useState } from "react";

export function Navbar() {
  const navigate = useNavigate();
  const [, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    navigate("/browse");
    setSearchParams({ search: search });
    setSearch("");
  };
  return (
    <nav className="nav-bar">
      <NavLink to={"browse"} className={"nav-link"}>
        Browse
      </NavLink>
      <NavLink to={"custom"} className={"nav-link"}>
        Make your own
      </NavLink>
      <NavLink to={"visit"} className={"nav-link"}>
        Visit us
      </NavLink>
      <form className="search" action="">
        <button
          onClick={handleSearch}
          className="nav-bar-search_button material-symbols-outlined"
        >
          search
        </button>
        <input
          className="nav-bar-search_input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          type="text"
          name=""
          id=""
        />
      </form>
    </nav>
  );
}
