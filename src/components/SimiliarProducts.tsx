import { useEffect, useState } from "react";
import "../css/SimiliarProducts.css";
import { IceCream, IceCreamProp } from "../interfaces";
import { data } from "../variables";
import { IceCreamCard } from "./IceCreamCard";

export function SimiliarProducts({ iceCream }: IceCreamProp) {
  const [similiarIceCreams, setSimiliarIceCreams] = useState<IceCream[]>([]);
  async function getSimiliar() {
    try {
      const response = await fetch(data);
      const result: IceCream[] = await response.json();
      let filtered = result.filter((i) => i.type === iceCream.type);
      filtered = filtered.sort(
        (a, b) =>
          new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
      );
      filtered = filtered.slice(1, 5);
      setSimiliarIceCreams(filtered);
    } catch (error) {
      console.error("Error reading JSON file:", error);
    }
  }
  useEffect(() => {
    getSimiliar();
  }, []);
  return (
    <section className="item_similiar">
      {similiarIceCreams.map((i) => (
        <IceCreamCard key={i.id} iceCream={i} />
      ))}
    </section>
  );
}
