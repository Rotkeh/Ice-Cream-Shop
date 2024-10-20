import { LoaderFunctionArgs } from "react-router-dom";
import { api } from "../variables";

export const fetchDataFromId = async ({ params }: LoaderFunctionArgs) => {
  const id = params.id;
  try {
    const response = await fetch(`${api}/icecreams/${id}`);
    const result = await response.json();
    // const iceCream = result.IceCreams.find(
    //   (i: IceCream) => i.id.toString() === id
    // );
    return result;
  } catch (error) {
    console.log(error);
    console.error("Error reading JSON file:", error);
  }
};
