import { IceCreamIngredientProp } from "../interfaces";
import "../css/Ingredients.css";

export function Ingredients({ ingredients }: IceCreamIngredientProp) {
  return (
    <section className="ingredients">
      <h5 className="ingredients_header">Ingredients</h5>
      {ingredients.map((ingredient) => (
        <p className="ingredient_item" key={ingredient}>
          {ingredient}
        </p>
      ))}
    </section>
  );
}
