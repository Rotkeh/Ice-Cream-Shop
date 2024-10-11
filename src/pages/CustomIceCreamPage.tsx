import { useContext, useEffect, useState } from "react";
import { DraggableItem, FlavorItem, NutritionTable } from "../components";
import { IceCream, Flavor, IDraggableItem } from "../interfaces";
import "../css/CustomIceCreamPage.css";

import {
  closestCorners,
  DndContext,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { PointerSensor, KeyboardSensor, TouchSensor } from "../CustomSensors";
import { data } from "../constants";
import { FlavorContext } from "../context";

export function CustomIceCreamPage() {
  const [count, setCount] = useState<number>(1);
  const [flavors, setFlavors] = useState<Flavor[]>([]);
  const { selectedFlavors, setupFlavors } = useContext(FlavorContext);
  const [selectedOption, setSelectedOption] = useState("0");

  async function getFlavors() {
    try {
      const response = await fetch(data);
      const result = await response.json();
      console.log(result);
      setFlavors(result.IceCreamFlavors);
    } catch (error) {
      console.error("Error reading JSON file:", error);
    }
  }

  const getTaskPos = (id: number) =>
    selectedFlavors.findIndex((flavor) => flavor.id === id);

  const handleDragEnd = (event: { active: any; over: any }) => {
    const { active, over } = event;

    console.log("active id: " + active.id);
    console.log("over id: " + over.id);
    if (active.id === over.id) return;

    setupFlavors((flavors: any) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(flavors, originalPos, newPos);
    });
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  function getContainerImg() {
    return "";
  }

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    let emptyFlavors: IDraggableItem[] = [];
    for (let i = 1; i <= parseInt(event.target.value); i++) {
      emptyFlavors.push({ id: i, flavor: null });
    }
    setupFlavors(emptyFlavors);
  };

  useEffect(() => {
    getFlavors();
  }, []);

  return (
    <main>
      <h2 className="custom_header">Design your own ice cream!</h2>

      <section className="custom-flavors">
        <h4 className="flavors_header">Flavors</h4>
        <ul className="flavors_list">
          {flavors.map((flavor) => (
            <FlavorItem key={flavor.name} flavor={flavor} picked={false} />
          ))}
        </ul>
      </section>
      <section className="custom_ice-cream">
        <select
          className="custom_select"
          onChange={(e) => handleChange(e)}
          value={selectedOption}
        >
          <option disabled value="0">
            choose a container
          </option>
          <option value="2">small cone</option>
          <option value="3">medium cone</option>
          <option value="4">large cone</option>
          <option value="3">small cup</option>
          <option value="4">medium cup</option>
          <option value="5">large cup</option>
        </select>
        <h4 className="custom-info_header">Order your ice cream</h4>
        <div className="picked_flavors">
          <DndContext
            sensors={sensors}
            onDragEnd={handleDragEnd}
            collisionDetection={closestCorners}
          >
            <ul>
              <SortableContext
                items={selectedFlavors}
                strategy={verticalListSortingStrategy}
              >
                {selectedFlavors.map((flavor) => (
                  <DraggableItem id={flavor.id} key={flavor.id} item={flavor} />
                ))}
              </SortableContext>
            </ul>
          </DndContext>
          <figure>
            <img src={getContainerImg()} alt="" />
          </figure>
        </div>
      </section>
      <input
        className="item_count"
        type="number"
        value={count}
        id=""
        min={1}
        max={99}
        onChange={(e) => {
          if (parseInt(e.target.value) > 99) {
            setCount(99);
          } else {
            setCount(parseInt(e.target.value));
          }
        }}
      />
      <p className="item_price">5$</p>
      <button className="item_button">Buy now</button>
      <button className="item_button">Add to cart</button>
      <section className="item-nutrition">
        <h5 className="item-nutrition_header">Nutrition</h5>
        {/* <NutritionTable nutrition={} /> */}
      </section>
      <section className="item-ingredients">
        <h5 className="item-ingredients_header">Ingredients</h5>
        {/* {customIceCream!.ingredients.map((ingredient) => (
          <p key={ingredient}>{ingredient}</p>
        ))} */}
      </section>
    </main>
  );
}
