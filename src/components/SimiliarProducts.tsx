import { useEffect, useState } from "react";
import "../css/SimiliarProducts.css";
import { IceCream, IceCreamProp } from "../interfaces";
import { api } from "../variables";
import { IceCreamCard } from "./IceCreamCard";

export function SimiliarProducts({ iceCream }: IceCreamProp) {
  const [similiarIceCreams, setSimiliarIceCreams] = useState<IceCream[]>([]);
  async function getSimiliar() {
    try {
      const response = await fetch(`${api}/icecreams`);
      const result: IceCream[] = await response.json();
      let filtered: IceCream[] = result.filter((i) => {
        return i.iceCreamType === iceCream!.iceCreamType;
      });
      filtered = result.filter((i) => {
        return i.id !== iceCream!.id;
      });
      filtered = filtered.slice(0, 4);
      setSimiliarIceCreams(filtered);
    } catch (error) {
      console.error("Error fetching data:", error);
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
