import { CartIceCreamItemProp } from "../interfaces";

export function CartIceCreamItem({ iceCream }: CartIceCreamItemProp) {
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
      <p className="cart-item_price">{iceCream.iceCream.price}</p>
      <p className="cart-item_amount">{iceCream.amount}</p>
    </div>
  );
}
