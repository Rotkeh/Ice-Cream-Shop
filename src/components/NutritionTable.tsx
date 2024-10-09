import { IceCreamNutritionProp } from "../interfaces";
import "../css/NutritionTable.css";

export function NutritionTable({ nutrition }: IceCreamNutritionProp) {
  return (
    <section className="item-nutrition">
      <h5 className="item-nutrition_header">Nutrition</h5>
      <p className="nutrition_category">weight</p>
      <p className="nutrition_data">{nutrition.weight}</p>
      <p className="nutrition_category">kcal</p>
      <p className="nutrition_data">{nutrition.kcal}</p>
      <p className="nutrition_category">carbohydrates</p>
      <p className="nutrition_data">{nutrition.carbohydrates}</p>
      <p className="nutrition_category">sugar</p>
      <p className="nutrition_data">{nutrition.sugar}</p>
      <p className="nutrition_category">fat</p>
      <p className="nutrition_data">{nutrition.fat}</p>
      <p className="nutrition_category">protein</p>
      <p className="nutrition_data">{nutrition.protein}</p>
      <p className="nutrition_category">fiber</p>
      <p className="nutrition_data">{nutrition.fiber}</p>
    </section>
  );
}
