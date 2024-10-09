export interface IceCream {
  id: number;
  title: string;
  type: string;
  description: string;
  price: number;
  madeBy: string;
  dateAdded: string;
  ingredients: string[];
  nutrition: Nutrition;
  imageUrl: string;
}

export interface Nutrition {
  kcal: number;
  weight: number;
  carbohydrates: number;
  sugar: number;
  fat: number;
  protein: number;
  fiber: number;
}

export interface IceCreamProp {
  iceCream: IceCream;
}

export interface IceCreamNutritionProp {
  nutrition: Nutrition;
}

export interface IceCreamIngredientProp {
  ingredients: string[];
}
