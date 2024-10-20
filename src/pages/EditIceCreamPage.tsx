import { useNavigate } from "react-router-dom";
import { IceCream, IceCreamProp, Nutrition } from "../interfaces";
import { useState } from "react";
import { NutritionTableEdit } from "../components";
import "../css/ItemPage.css";
import { api } from "../variables";

export function EditIceCreamPage({ iceCream }: IceCreamProp) {
  const navigate = useNavigate();

  const getEmptyIceCream = () => {
    return {
      id: 0,
      title: "",
      type: "",
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

  const [editedIceCream, setEditedIceCream] = useState<IceCream>(
    iceCream ? iceCream : getEmptyIceCream()
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

  async function handleSaveClick() {
    if (iceCream) {
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
        console.error("Error reading JSON file:", error);
      }
    } else {
      try {
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
        console.error("Error reading JSON file:", error);
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
      console.error("Error reading JSON file:", error);
    }
  }
  return (
    <main>
      <figure className="item_img-container">
        {" "}
        {editedIceCream.imageUrl === "" ? (
          <input type="file" onChange={handleChange} />
        ) : (
          <img className="item_img" src={editedIceCream.imageUrl} alt="" />
        )}
      </figure>
      <input type="text" onChange={handleChange} className="item_title">
        {editedIceCream.title}
      </input>
      <input type="text" onChange={handleChange} className="item_type">
        Type {editedIceCream.type}
      </input>
      <input type="text" onChange={handleChange} className="item_description">
        {editedIceCream.description}
      </input>
      <input
        type="text"
        onChange={handleChange}
        name="price"
        className="item_price"
      ></input>
      <div className="line" />
      <section className="item-info">
        <input type="text" onChange={handleChange}>
          {editedIceCream.madeBy}
        </input>
        <input type="text" onChange={handleChange}>
          {editedIceCream.dateAdded.toString()}
        </input>
      </section>
      <NutritionTableEdit
        nutrition={editedIceCream.nutrition}
        setEditNutrition={updateNutrition}
      />
      <input
        type="text"
        onChange={handleChange}
        className="ingredients"
      ></input>
      <button onClick={handleSaveClick}>Save</button>
      <button disabled={iceCream ? true : false} onClick={handleDeleteClick}>
        Delete
      </button>
      <button onClick={() => navigate("/")}>Cancel</button>
    </main>
  );
}
