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

export interface Flavor {
  name: string;
  imageUrl: string;
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

export interface IDraggableItem {
  id: number;
  flavor: Flavor | null;
}

export interface FlavorProp {
  flavor: Flavor | null;
  picked: boolean;
  item?: IDraggableItem;
}

export interface DraggableItemProp {
  id: number;
  item: IDraggableItem;
}

export interface IFlavorsContext {
  selectedFlavors: IDraggableItem[];
  setupFlavors: (flavors: any) => void;
  addFlavor: (flavor: Flavor) => void;
  removeFlavor: (item: IDraggableItem) => void;
}
