export interface IceCream {
  id: number;
  title: string;
  type: string;
  description: string;
  price: number;
  madeBy: string;
  dateAdded: Date;
  ingredients: string[];
  nutrition: nutrition;
  imageUrl: string;
}

export interface nutrition {
  kcal: number;
  weight: number;
  carbohydrates: number;
  sugar: number;
  fat: number;
  protein: number;
  fiber: number;
}
