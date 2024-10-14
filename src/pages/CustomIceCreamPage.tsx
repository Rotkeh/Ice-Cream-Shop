import { ReactNode, useContext, useEffect, useState } from "react";
import { DraggableItem, FlavorItem, NutritionTable } from "../components";
import { Flavor, IDraggableItem, Nutrition } from "../interfaces";
import "../css/CustomIceCreamPage.css";
import "../enums";

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
import { data, getCustomIceCreamId } from "../variables";
import { FlavorContext } from "../context";
import { IceCreamContainer } from "../enums";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export function CustomIceCreamPage() {
  const [count, setCount] = useState<number>(1);
  const [price, setPrice] = useState<number>(0);
  const [flavors, setFlavors] = useState<Flavor[]>([]);
  const { selectedFlavors, setupFlavors } = useContext(FlavorContext);
  const { addCustomIceCreamToCart } = useContext(CartContext);
  const [selectedOption, setSelectedOption] = useState("0");
  const [totalNutrition, setTotalNutrition] = useState<Nutrition>(
    {} as Nutrition
  );
  const navigate = useNavigate();

  async function getFlavors() {
    try {
      const response = await fetch(data);
      const result = await response.json();
      setFlavors(result.IceCreamFlavors);
    } catch (error) {
      console.error("Error reading JSON file:", error);
    }
  }

  const getTaskPos = (id: number) =>
    selectedFlavors.findIndex((flavor) => flavor.id === id);

  const handleDragEnd = (event: { active: any; over: any }) => {
    const { active, over } = event;
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
  };

  const resetFlavors = () => {
    let emptyFlavors: IDraggableItem[] = [];
    for (
      let i = 1;
      i <= IceCreamContainer[selectedOption as keyof typeof IceCreamContainer];
      i++
    ) {
      emptyFlavors.push({ id: i, flavor: null });
    }
    setupFlavors(emptyFlavors);
  };

  const getOptions = () => {
    let options: ReactNode[] = [];
    for (const key in IceCreamContainer) {
      if (isNaN(Number(key)))
        options.push(
          <option value={key} key={key}>
            {key}
          </option>
        );
    }
    return options;
  };

  const getSelectedPrice = () => {
    let price = 0;
    selectedFlavors.forEach((flavor) => {
      if (flavor.flavor) price += flavor.flavor.price!;
    });
    return price;
  };

  const updatePrice = () => {
    setPrice(
      count *
        (getSelectedPrice() +
          IceCreamContainer[selectedOption as keyof typeof IceCreamContainer] /
            2)
    );
  };

  const handleClick = () => {
    const selected = selectedFlavors.filter((f) => f.flavor !== null);
    addCustomIceCreamToCart({
      flavors: selected.map((f) => f.flavor!),
      amount: count,
      id: getCustomIceCreamId(),
      price: price,
      container: selectedOption as unknown as IceCreamContainer,
    });
    resetFlavors();
  };

  const updateNutrition = () => {
    let flavors = selectedFlavors.filter((s) => s.flavor);
    const nutrition = flavors.reduce<Nutrition>(
      (total, i) => {
        return {
          kcal: total.kcal + i.flavor!.nutrition.kcal,
          weight: total.weight + i.flavor!.nutrition.weight,
          carbohydrates:
            total.carbohydrates + i.flavor!.nutrition.carbohydrates,
          sugar: total.sugar + i.flavor!.nutrition.sugar,
          fat: total.fat + i.flavor!.nutrition.fat,
          protein: total.protein + i.flavor!.nutrition.protein,
          fiber: total.fiber + i.flavor!.nutrition.fiber,
        };
      },
      {
        kcal: 0,
        weight: 0,
        carbohydrates: 0,
        sugar: 0,
        fat: 0,
        protein: 0,
        fiber: 0,
      }
    );
    setTotalNutrition(nutrition);
  };

  useEffect(() => {
    updatePrice();
    updateNutrition();
  }, [count, selectedFlavors]);

  useEffect(() => {
    resetFlavors();
  }, [selectedOption]);

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
          {getOptions()}
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
            <img src={getContainerImg()} alt="image of the cup/cone" />
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
      <p className="item_price">{!isNaN(price) ? price : "0"}$</p>
      <button
        className="item_button"
        onClick={() => {
          handleClick();
          navigate("/cart");
        }}
      >
        Buy now
      </button>
      <button
        className="item_button"
        onClick={() => {
          handleClick();
        }}
      >
        Add to cart
      </button>
      <section className="item-nutrition">
        <h5 className="item-nutrition_header">Nutrition</h5>
        <NutritionTable nutrition={totalNutrition} />
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
