import { IceCreamIngredientProp } from "../interfaces";
import "../css/Ingredients.css";

export function Ingredients({ ingredients }: IceCreamIngredientProp) {
  return (
    <section className="item-ingredients">
      <h5 className="item-ingredients_header">Ingredients</h5>
      {ingredients.map((ingredient) => (
        <p key={ingredient}>{ingredient}</p>
      ))}
    </section>
  );
}
