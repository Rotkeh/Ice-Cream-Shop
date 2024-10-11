import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { CartIceCreamItem } from "../components";

export function CartPage() {
  const {
    cartItems,
    removeIceCreamFromCart,
    removeCustomIceCreamFromCart,
    updateIceCreamToCart,
    updateCustomIceCreamToCart,
  } = useContext(CartContext);
  return (
    <main>
      <h1>Cart</h1>
      <section>
        <h3>Ice Creams</h3>
        {cartItems.iceCreams.map((i) => (
          <CartIceCreamItem iceCream={i} />
        ))}
      </section>
      <section></section>
      <section></section>
    </main>
  );
}
