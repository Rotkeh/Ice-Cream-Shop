import { useLoaderData, useNavigate } from "react-router-dom";
import { IceCream } from "../interfaces";
import { useContext, useState } from "react";
import { Ingredients, NutritionTable, SimiliarProducts } from "../components";
import "../css/ItemPage.css";
import { CartContext } from "../context/CartContext";
import { AccountContext } from "../context";
import { AccountType } from "../enums";

export function ItemPage() {
  const iceCreamData = useLoaderData() as IceCream;
  const { account } = useContext(AccountContext);
  const [iceCream] = useState<IceCream>(iceCreamData);
  const [count, setCount] = useState<number>(1);
  const { addIceCreamToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    addIceCreamToCart({
      iceCream: iceCream,
      amount: count,
      id: iceCream.id,
    });
  };
  return (
    <main>
      <figure className="item_img-container">
        {account && account.type === AccountType.admin ? (
          <button
            className="item-edit_button"
            onClick={() => navigate(`/edit/${iceCream.id}`)}
          >
            Edit
          </button>
        ) : (
          ""
        )}
        <img className="item_img" src={iceCream.imageUrl} alt="" />
      </figure>
      <h2 className="item_title">{iceCream.title}</h2>
      <p className="item_type">Type: {iceCream.iceCreamType}</p>
      <p className="item_description">{iceCream.description}</p>
      <input
        className="item_count"
        type="number"
        value={count}
        name=""
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
      <p className="item_price">
        {count > 1
          ? `${count} x ${iceCream.price}$ = ${iceCream.price * count}$`
          : iceCream.price + "$"}
      </p>
      <button
        className="item_button"
        onClick={() => {
          handleButtonClick();
          navigate("/cart");
        }}
      >
        Buy now
      </button>
      <button className="item_button" onClick={() => handleButtonClick()}>
        Add to cart
      </button>
      <div className="line" />
      <section className="item-info">
        <p>Made by {iceCream.madeBy}</p>
        <p>Released {iceCream.dateAdded.toString()}</p>
      </section>
      <NutritionTable nutrition={iceCream.nutrition} />
      <Ingredients ingredients={iceCream.ingredients} />
      <h5 className="item-similiar_header">You may also like</h5>
      <SimiliarProducts iceCream={iceCream} />
    </main>
  );
}
