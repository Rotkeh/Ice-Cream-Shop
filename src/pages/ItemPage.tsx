import { useLoaderData } from "react-router-dom";
import { IceCream } from "../interfaces";
import { useState } from "react";
import { NutritionTable, SimiliarProducts } from "../components";
import "../css/ItemPage.css";

export function ItemPage() {
  const iceCreamData = useLoaderData() as IceCream;
  const [iceCream] = useState<IceCream>(iceCreamData);
  const [count, setCount] = useState<number>(1);
  console.log(iceCream);
  return (
    <main>
      <figure className="item_img-container">
        <img className="item_img" src={iceCream.imageUrl} alt="" />
      </figure>
      <h2 className="item_title">{iceCream.title}</h2>
      <p className="item_type">Type {iceCream.type}</p>
      <p className="item_description">{iceCream.description}</p>
      <input
        className="item_count"
        type="number"
        value={count}
        name=""
        id=""
        min={1}
        onChange={(e) => setCount(parseInt(e.target.value))}
      />
      <p className="item_price">
        {count > 1 ? `${count} x ${iceCream.price}` : iceCream.price}
      </p>
      <button className="item_button">Buy now</button>
      <button className="item_button">Add to cart</button>
      <div className="line" />
      <section className="item_info">
        <p>Made by {iceCream.madeBy}</p>
        <p>Released {iceCream.dateAdded.toString()}</p>
      </section>
      <section className="item_nutrition">
        <h5>Nutrition</h5>
        <NutritionTable nutrition={iceCream.nutrition} />
      </section>
      <section className="item_ingredients">
        {iceCream.ingredients.map((ingredient) => (
          <p key={ingredient}>{ingredient}</p>
        ))}
      </section>
      <h5 className="item-similiar_header">You may also like</h5>
      <SimiliarProducts iceCream={iceCream} />
    </main>
  );
}
