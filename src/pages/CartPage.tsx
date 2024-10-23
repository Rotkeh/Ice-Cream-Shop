import { useContext, useEffect, useState } from "react";
import { AccountContext, CartContext } from "../context";
import { CartCustomIceCreamItem, CartIceCreamItem } from "../components";
import "../css/CartPage.css";
import { getOrderId } from "../variables";
import { useNavigate } from "react-router-dom";

export function CartPage() {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useContext(CartContext);
  const { token, checkToken, updateUserOrderHistory } =
    useContext(AccountContext);
  const [total, setTotal] = useState<number>();
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const handleConfirm = async () => {
    if (token) {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().split("T")[0];
      updateUserOrderHistory({
        items: cartItems,
        date: formattedDate,
        price: total!,
        id: getOrderId(),
      });
      clearCart();
      navigate("/account");
    } else {
      clearCart();
      navigate("/");
    }
  };

  useEffect(() => {
    let total = 0;
    cartItems.iceCreams.map((i) => (total += i.amount * i.iceCream.price));
    cartItems.customIceCreams.map((i) => (total += i.price * i.amount));
    setTotal(total);
  }, [cartItems]);

  useEffect(() => {
    checkToken();
  }, []);
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
      <section className="cart-checkout">
        <p>Total: {total}$</p>
        {token ? (
          ""
        ) : (
          <>
            <label htmlFor="cart-email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="cart-email"
              type="text"
            />
            <label htmlFor="cart-address">Address</label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              id="cart-address"
              type="text"
            />
          </>
        )}
        <button className="cart_confirm" onClick={handleConfirm}>
          Confirm
        </button>
      </section>
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
