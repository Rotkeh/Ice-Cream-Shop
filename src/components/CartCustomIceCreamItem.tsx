import { CartCustomIceCreamItemProp } from "../interfaces";
import "../css/CartItem.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { IceCreamContainer } from "../enums";

export function CartCustomIceCreamItem({
  customIceCream,
}: CartCustomIceCreamItemProp) {
  const { removeCustomIceCreamFromCart, addCustomIceCreamAmount } =
    useContext(CartContext);
  return (
    <div className="cart-ic-item">
      <figure className="cart-item-img_container">
        <img
          className="cart-item_img"
          src={`containerUrl${customIceCream.container}`}
          alt=""
        />
      </figure>
      <h6 className="cart-item_header">Flavors</h6>
      <ul>
        {customIceCream.flavors.map((f, index) => (
          <li key={f.name + index}>
            <p>{f.name}</p>
            <p>{f.price}</p>
          </li>
        ))}
        <li>
          {customIceCream.container}{" "}
          {Number(IceCreamContainer[customIceCream.container]) / 2}
        </li>
      </ul>
      <p className="cart-item_price">{customIceCream.price}$</p>
      <div className="cart-item-amount_container">
        <button
          className="cart-item-amount_decrease"
          disabled={customIceCream.amount < 2}
          onClick={() => addCustomIceCreamAmount(customIceCream.id, -1)}
        >
          -
        </button>
        <p className="cart-item_amount">{customIceCream.amount}</p>
        <button
          className="cart-item-amount_increase"
          onClick={() => addCustomIceCreamAmount(customIceCream.id, 1)}
        >
          +
        </button>
      </div>
      <button
        className="cart-item_remove"
        onClick={() => removeCustomIceCreamFromCart(customIceCream.id)}
      >
        Remove
      </button>
    </div>
  );
}
