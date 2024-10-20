import { EditIceCreamNutritionProp, Nutrition } from "../interfaces";
import "../css/NutritionTable.css";
import { useState } from "react";

export function NutritionTableEdit({
  nutrition,
  setEditNutrition,
}: EditIceCreamNutritionProp) {
  const getEmptyNutrition = () => {
    return {
      weight: 0,
      kcal: 0,
      carbohydrates: 0,
      sugar: 0,
      fat: 0,
      protein: 0,
      fiber: 0,
    };
  };
  const [editedNutrition, setEditedNutrition] = useState<Nutrition>(
    nutrition ? nutrition : getEmptyNutrition()
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedNutrition({
      ...editedNutrition,
      [name]: Number(value),
    });
    setEditNutrition(editedNutrition);
  };

  return (
    <section className="nutrition">
      <h5 className="item-nutrition_header">Nutrition</h5>
      <p className="nutrition_category">weight</p>
      <input name="weight" onChange={handleChange} className="nutrition_data">
        {editedNutrition.weight}
      </input>
      <p className="nutrition_category">kcal</p>
      <input name="kcal" onChange={handleChange} className="nutrition_data">
        {editedNutrition.kcal}
      </input>
      <p className="nutrition_category">carbohydrates</p>
      <input
        name="carbohydrates"
        onChange={handleChange}
        className="nutrition_data"
      >
        {editedNutrition.carbohydrates}
      </input>
      <p className="nutrition_category">sugar</p>
      <input name="sugar" onChange={handleChange} className="nutrition_data">
        {editedNutrition.sugar}
      </input>
      <p className="nutrition_category">fat</p>
      <input name="fat" onChange={handleChange} className="nutrition_data">
        {editedNutrition.fat}
      </input>
      <p className="nutrition_category">protein</p>
      <input name="protein" onChange={handleChange} className="nutrition_data">
        {editedNutrition.protein}
      </input>
      <p className="nutrition_category">fiber</p>
      <input name="fiber" onChange={handleChange} className="nutrition_data">
        {editedNutrition.fiber}
      </input>
    </section>
  );
}
