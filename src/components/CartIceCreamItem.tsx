import { CartIceCreamItemProp } from "../interfaces";
import "../css/CartItem.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export function CartIceCreamItem({ iceCream }: CartIceCreamItemProp) {
  const { addIceCreamAmount, removeIceCreamFromCart } = useContext(CartContext);
  return (
    <div className="cart-ic-item">
      <figure className="cart-ic-img_container">
        <img
          className="cart-item_img"
          src={iceCream.iceCream.imageUrl}
          alt=""
        />
      </figure>
      <h6 className="cart-item_header">{iceCream.iceCream.title}</h6>
      <p className="cart-item_price">{iceCream.iceCream.price}$</p>
      <div className="cart-item-amount_container">
        <button
          className="cart-item-amount_decrease"
          disabled={iceCream.amount < 2}
          onClick={() => addIceCreamAmount(iceCream.id, -1)}
        >
          -
        </button>
        <p className="cart-item_amount">{iceCream.amount}</p>
        <button
          className="cart-item-amount_increase"
          onClick={() => addIceCreamAmount(iceCream.id, 1)}
        >
          +
        </button>
      </div>
      <button
        className="cart-item_remove"
        onClick={() => removeIceCreamFromCart(iceCream.id)}
      >
        Remove
      </button>
    </div>
  );
}
