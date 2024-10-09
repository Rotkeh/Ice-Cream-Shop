import { useState } from "react";
import { NutritionTable } from "../components";
import { IceCream } from "../interfaces";
import "../css/CustomIceCreamPage.css";

export function CustomIceCreamPage() {
  const [count, setCount] = useState<number>(1);
  const [customIceCream, setCustomIceCream] = useState<IceCream>();
  return (
    <main>
      <h2 className="custom_header">Design your own ice cream!</h2>
      <section className="custom-flavors">
        <h4 className="flavors_header">Flavors</h4>
        <ul className="flavors_list">
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
      </section>
      <section className="custom_ice-cream">
        <select className="custom_select" value="">
          <option id="">small cone</option>
          <option id="">medium cone</option>
          <option id="">large cone</option>
          <option id="">small cup</option>
          <option id="">medium cup</option>
          <option id="">large cup</option>
        </select>
        <h4>Order your ice cream</h4>
        <div>
          <ul>
            <li>test2</li>
            <li>test2</li>
            <li>test2</li>
            <li>test2</li>
            <li>test2</li>
          </ul>
        </div>
      </section>
      <input
        className="item_count"
        type="number"
        value={count}
        id=""
        min={1}
        max={99}
        onChange={(e) => {
          if (parseInt(e.target.value) > 99) {
            setCount(99);
          } else {
            setCount(parseInt(e.target.value));
          }
        }}
      />
      <p className="item_price">5$</p>
      <button className="item_button">Buy now</button>
      <button className="item_button">Add to cart</button>
      <section className="item-nutrition">
        <h5 className="item-nutrition_header">Nutrition</h5>
        {/* <NutritionTable nutrition={} /> */}
      </section>
      <section className="item-ingredients">
        <h5 className="item-ingredients_header">Ingredients</h5>
        {/* {customIceCream!.ingredients.map((ingredient) => (
          <p key={ingredient}>{ingredient}</p>
        ))} */}
      </section>
    </main>
  );
}
