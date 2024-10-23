import { useContext, useEffect, useState } from "react";
import { IceCream } from "../interfaces";
import { Pagination } from "../components";
import { api } from "../variables";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AccountContext } from "../context";
import { AccountType } from "../enums";
import "../css/BrowsePage.css";

export function BrowsePage() {
  const navigate = useNavigate();
  const { account } = useContext(AccountContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [iceCreams, setIceCreams] = useState<IceCream[]>([]);
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("");

  async function getAllIceCreams() {
    try {
      const response = await fetch(`${api}/icecreams`);
      const result = await response.json();
      setIceCreams(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function searchIceCreams(
    searchTitle: string = "",
    filterType: string = ""
  ) {
    const queryParams = new URLSearchParams();
    if (searchTitle) {
      queryParams.append("title", searchTitle);
    }
    if (filterType) {
      queryParams.append("iceCreamType", filterType);
    }
    try {
      const response = await fetch(
        `${api}/icecreams?${queryParams.toString()}`
      );
      const result = await response.json();
      setIceCreams(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (search !== "" && selectedType !== "")
      setSearchParams({ search: search, type: selectedType });
    else if (search !== "") setSearchParams({ search: search });
    else if (selectedType !== "") setSearchParams({ type: selectedType });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
  };

  useEffect(() => {
    const searchTerm = searchParams.get("search");
    const filterType = searchParams.get("type");
    if (searchTerm && searchTerm !== "" && filterType && filterType !== "")
      searchIceCreams(searchTerm, filterType);
    else if (searchTerm && searchTerm !== "") searchIceCreams(searchTerm);
    else if (filterType && filterType !== "") searchIceCreams("", filterType);
    else getAllIceCreams();
  }, [searchParams]);
  return (
    <main>
      {account && account.type === AccountType.admin ? (
        <button className="browse-edit_button" onClick={() => navigate(`/new`)}>
          Add new
        </button>
      ) : (
        ""
      )}
      <form className="browse-form" action="">
        <div className="search_container">
          <label htmlFor="ic-type">Type</label>
          <select
            value={selectedType}
            name=""
            id="ic-type"
            onChange={handleSelectChange}
          >
            <option value="">Select a type</option>
            <option value="Sorbet">Sorbet</option>
            <option value="Cream-based">Cream-based</option>
            <option value="Fruit-based">Fruit-based</option>
            <option value="Vegan">Vegan</option>
          </select>
        </div>
        <div className="search_container">
          <label htmlFor="ic-search">Search</label>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            name=""
            id="ic-search"
          />
        </div>
        <button
          className="search_button material-symbols-outlined"
          onClick={handleSearch}
        >
          search
        </button>
      </form>

      <Pagination data={iceCreams} />
    </main>
  );
}
