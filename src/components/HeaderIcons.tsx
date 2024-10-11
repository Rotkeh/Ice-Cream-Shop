import { useNavigate } from "react-router-dom";
import cart from "../assets/cart.svg";
import user from "../assets/user.svg";
import "../css/HeaderIcons.css";

export function HeaderIcons() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("cart");
  }
  return (
    <div className="icons">
      <figure>
        <img onClick={handleClick} src={cart} alt="" />
      </figure>
      <figure>
        <img src={user} alt="" />
      </figure>
    </div>
  );
}
