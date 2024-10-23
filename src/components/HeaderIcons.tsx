import { useNavigate } from "react-router-dom";
import cart from "../assets/cart.svg";
import user from "../assets/user.svg";
import "../css/HeaderIcons.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export function HeaderIcons() {
  const { itemCount } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <div className="icons">
      <figure
        onClick={() => {
          navigate("cart");
        }}
      >
        {itemCount > 0 ? (
          <div className="header-cart_amount">
            <p>{itemCount}</p>
          </div>
        ) : (
          ""
        )}
        <img src={cart} alt="" />
      </figure>
      <figure onClick={() => navigate("account")}>
        <img src={user} alt="" />
      </figure>
    </div>
  );
}
