import { LoaderFunctionArgs } from "react-router-dom";
import { data } from "../constants";
import { IceCream } from "../interfaces";

export const fetchDataFromId = async ({ params }: LoaderFunctionArgs) => {
  const id = params.id;
  try {
    const response = await fetch(`${data}/IceCreams`);
    const result: IceCream[] = await response.json();
    const iceCream = result.find((i) => i.id.toString() === id);
    return iceCream;
  } catch (error) {
    console.log(error);
    console.error("Error reading JSON file:", error);
  }
};
