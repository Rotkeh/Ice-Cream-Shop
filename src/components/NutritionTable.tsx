import { IceCreamNutritionProp } from "../interfaces";
import "../css/NutritionTable.css";
import { useEffect } from "react";

export function NutritionTable({ nutrition }: IceCreamNutritionProp) {
  useEffect(() => {
    if (!nutrition) {
      nutrition = {
        weight: 0,
        kcal: 0,
        carbohydrates: 0,
        sugar: 0,
        fat: 0,
        protein: 0,
        fiber: 0,
      };
    }
  }, []);
  return (
    <section className="nutrition">
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
