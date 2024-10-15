import { LoaderFunctionArgs } from "react-router-dom";
import { data } from "../variables";
import { IceCream } from "../interfaces";

export const fetchDataFromId = async ({ params }: LoaderFunctionArgs) => {
  const id = params.id;
  try {
    const response = await fetch(data);
    const result = await response.json();
    const iceCream = result.IceCreams.find(
      (i: IceCream) => i.id.toString() === id
    );
    return iceCream;
  } catch (error) {
    console.log(error);
    console.error("Error reading JSON file:", error);
  }
};
