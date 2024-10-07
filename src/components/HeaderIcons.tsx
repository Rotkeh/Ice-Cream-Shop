import cart from "../assets/cart.svg";
import user from "../assets/user.svg";
import "../css/HeaderIcons.css";

export function HeaderIcons() {
  return (
    <div className="icons">
      <figure>
        <img src={cart} alt="" />
      </figure>
      <figure>
        <img src={user} alt="" />
      </figure>
    </div>
  );
}
