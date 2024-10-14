import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { CartCustomIceCreamItem, CartIceCreamItem } from "../components";
import "../css/CartPage.css";

export function CartPage() {
  const { cartItems } = useContext(CartContext);
  const [total, setTotal] = useState<number>();
  useEffect(() => {
    let total = 0;
    cartItems.iceCreams.map((i) => (total += i.amount * i.iceCream.price));
    cartItems.customIceCreams.map((i) => (total += i.price * i.amount));
    setTotal(total);
  }, [cartItems]);
  return (
    <main>
      <h1 className="cart_header">Cart</h1>
      <section className="cart-ic">
        <h3 className="cart-ic_header">Ice Creams</h3>
        {cartItems.iceCreams
          ? cartItems.iceCreams.map((i) => (
              <CartIceCreamItem iceCream={i} key={i.id} />
            ))
          : ""}
      </section>
      <section className="cart-checkout">Total: {total}</section>
      <section className="cart-cic">
        <h3 className="cart-items-cic_header">Custom Ice Creams</h3>
        {cartItems.customIceCreams
          ? cartItems.customIceCreams.map((i) => (
              <CartCustomIceCreamItem customIceCream={i} key={i.id} />
            ))
          : ""}
      </section>
    </main>
  );
}
