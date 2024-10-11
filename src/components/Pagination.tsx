import { useEffect, useState } from "react";
import { IceCreamCard } from "./IceCreamCard";
import { IceCream } from "../interfaces";
import "../css/Pagination.css";

interface IPaginationDataProps {
  data: object[];
}

export function Pagination({ data }: IPaginationDataProps) {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  const totalPages = Math.ceil(data.length / 8);

  const startIndex = (currentPage - 1) * 8;
  const currentItems = data.slice(startIndex, startIndex + 8);

  const getIndexButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={currentPage === i ? "activeIndex" : ""}
        >
          {i}
        </button>
      );
    }
    return <div className="page-button">{buttons}</div>;
  };

  return (
    <nav className="pagination">
      <div className="pagination-navigation">
        <button
          onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {getIndexButtons()}

        <button
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          disabled={currentPage === totalPages || totalPages === 0}
        >
          Next
        </button>
      </div>
      <section className="items">
        {currentItems.map((item) => (
          <IceCreamCard
            key={(item as IceCream).id}
            iceCream={item as IceCream}
          />
        ))}
      </section>
    </nav>
  );
}
