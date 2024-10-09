import { useEffect, useState } from "react";
import { IceCream } from "../interfaces";
import { Pagination } from "../components";
import { filePath } from "../constants";

export function BrowsePage() {
  const [iceCreams, setIceCreams] = useState<IceCream[]>([]);

  async function fetchJsonData() {
    try {
      const response = await fetch(filePath);
      const result = await response.json();
      setIceCreams(result);
    } catch (error) {
      console.error("Error reading JSON file:", error);
    }
  }

  useEffect(() => {
    fetchJsonData();
  }, []);
  return (
    <main>
      <Pagination data={iceCreams} />
    </main>
  );
}
