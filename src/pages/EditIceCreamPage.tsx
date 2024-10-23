import { useLoaderData, useNavigate } from "react-router-dom";
import { IceCream, Nutrition } from "../interfaces";
import { useState } from "react";
import { NutritionTableEdit } from "../components";
import "../css/ItemPage.css";
import { api } from "../variables";

export function EditIceCreamPage() {
  const navigate = useNavigate();
  const getEmptyIceCream = () => {
    return {
      id: 0,
      title: "",
      iceCreamType: "",
      description: "",
      price: 0,
      madeBy: "",
      dateAdded: "",
      ingredients: [],
      nutrition: {
        kcal: 0,
        weight: 0,
        carbohydrates: 0,
        sugar: 0,
        fat: 0,
        protein: 0,
        fiber: 0,
      },
      imageUrl: "",
    };
  };

  const iceCreamLoaderData = useLoaderData() as IceCream;

  const [editedIceCream, setEditedIceCream] = useState<IceCream>(
    iceCreamLoaderData ? iceCreamLoaderData : getEmptyIceCream()
  );

  const updateNutrition = (nutrition: Nutrition) => {
    setEditedIceCream((prev) => {
      return {
        ...prev,
        nutrition: nutrition,
      };
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedIceCream({
      ...editedIceCream,
      [name]: name === "price" ? Number(value) : value,
    });
  };

  const handleIngredientsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    let ingredients = value.split(",");
    ingredients.map((i) => {
      i.trim();
    });
    setEditedIceCream({
      ...editedIceCream,
      ingredients: ingredients,
    });
  };

  const handleImgChange = () => {
    editedIceCream.imageUrl = "toBeAdded";
  };

  async function handleSaveClick() {
    if (iceCreamLoaderData) {
      try {
        const response = await fetch(`${api}/icecreams/${editedIceCream.id}}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedIceCream),
        });
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error("Error saving edited data:", error);
      }
    } else {
      try {
        console.log(editedIceCream);
        const response = await fetch(`${api}/icecreams`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedIceCream),
        });
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error("Error saving new data:", error);
      }
    }
  }

  async function handleDeleteClick() {
    try {
      const response = await fetch(`${api}/icecreams/${editedIceCream.id}}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  }
  return (
    <main>
      <figure className="item_img-container">
        {editedIceCream.imageUrl !== "" ? (
          <img className="item_img" src={editedIceCream.imageUrl} alt="" />
        ) : (
          <p>image</p>
        )}
        <input type="file" onChange={handleImgChange} name="imageUrl" />
      </figure>
      <h2 className="edit_header">Edit Ice Cream</h2>
      <input
        type="text"
        onChange={handleChange}
        className="item_title custom_input"
        name="title"
        defaultValue={editedIceCream.title}
        placeholder="title"
      />
      <input
        type="text"
        onChange={handleChange}
        name="type"
        className="item_type custom_input"
        defaultValue={editedIceCream.iceCreamType}
        placeholder="type"
      />
      <input
        type="text"
        onChange={handleChange}
        name="description"
        className="item_description custom_input"
        defaultValue={editedIceCream.description}
        placeholder="description"
      />
      <input
        type="text"
        onChange={handleChange}
        name="price"
        className="item_price custom_input"
        defaultValue={editedIceCream.price}
        placeholder="price"
      />
      <div className="line" />
      <section className="item-info">
        <input
          type="text"
          onChange={handleChange}
          name="madeBy"
          defaultValue={editedIceCream.madeBy}
          placeholder="made by"
        />
        <input
          type="text"
          onChange={handleChange}
          name="dateAdded"
          defaultValue={editedIceCream.dateAdded}
          placeholder="date added"
        />
      </section>
      <NutritionTableEdit
        nutrition={editedIceCream.nutrition}
        setEditNutrition={updateNutrition}
      />
      <input
        type="text"
        onChange={handleIngredientsChange}
        className="ingredients"
        defaultValue={editedIceCream.ingredients.join(", ")}
        placeholder='ingredients - seperated by "," example[milk, sugar, vanilla]'
      />
      <button onClick={handleSaveClick}>Save</button>
      <button
        disabled={iceCreamLoaderData ? false : true}
        onClick={handleDeleteClick}
      >
        Delete
      </button>
      <button onClick={() => navigate("/")}>Cancel</button>
    </main>
  );
}
