import { useEffect, useState } from "react";
import { IceCream } from "../interfaces";
import { Pagination } from "../components";
import { data } from "../variables";

export function BrowsePage() {
  const [iceCreams, setIceCreams] = useState<IceCream[]>([]);

  async function getIceCreams() {
    try {
      const response = await fetch(data);
      const result = await response.json();
      setIceCreams(result.IceCreams);
    } catch (error) {
      console.error("Error reading JSON file:", error);
    }
  }

  useEffect(() => {
    getIceCreams();
  }, []);
  return (
    <main>
      <Pagination data={iceCreams} />
    </main>
  );
}
