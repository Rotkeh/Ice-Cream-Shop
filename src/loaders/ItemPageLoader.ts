import { LoaderFunctionArgs } from "react-router-dom";
import { filePath } from "../constants";
import { IceCream } from "../interfaces";

export const fetchDataFromId = async ({ params }: LoaderFunctionArgs) => {
  const id = params.id;
  try {
    const response = await fetch(filePath);
    const result: IceCream[] = await response.json();
    const iceCream = result.find((i) => i.id.toString() === id);
    return iceCream;
  } catch (error) {
    console.log(error);
    console.error("Error reading JSON file:", error);
  }
};