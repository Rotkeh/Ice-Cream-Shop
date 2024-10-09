import { IceCreamNutritionProp } from "../interfaces";

export function NutritionTable({ nutrition }: IceCreamNutritionProp) {
  return (
    <div>
      <p>weight</p>
      <p>{nutrition.weight}</p>
      <p>kcal</p>
      <p>{nutrition.kcal}</p>
      <p>carbohydrates</p>
      <p>{nutrition.carbohydrates}</p>
      <p>sugar</p>
      <p>{nutrition.sugar}</p>
      <p>fat</p>
      <p>{nutrition.fat}</p>
      <p>protein</p>
      <p>{nutrition.protein}</p>
      <p>fiber</p>
      <p>{nutrition.fiber}</p>
    </div>
  );
}
