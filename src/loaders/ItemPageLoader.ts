import { LoaderFunctionArgs } from "react-router-dom";
import { api } from "../variables";

export const fetchDataFromId = async ({ params }: LoaderFunctionArgs) => {
  const id = params.id;
  try {
    const response = await fetch(`${api}/icecreams/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Error fetching item from db:", error);
  }
};
