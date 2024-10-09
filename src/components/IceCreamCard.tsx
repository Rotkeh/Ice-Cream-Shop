import { IceCreamProp } from "../interfaces";
import "../css/IceCreamCard.css";
import { useNavigate } from "react-router-dom";

export function IceCreamCard({ iceCream }: IceCreamProp) {
  const navigate = useNavigate();
  function handleClick(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    const target = e.target as HTMLElement;
    if (target.className !== "card_button") navigate(`/item/${iceCream.id}`);
  }
  return (
    <section onClick={(e) => handleClick(e)} className="card">
      <figure className="card_img_container">
        <img className="card_img" src={iceCream.imageUrl} alt="" />
      </figure>
      <h4 className="card_title">{iceCream.title}</h4>
      <h6 className="card_price">{iceCream.price}$</h6>
      <p className="card_text">{iceCream.description}</p>
      <div className="button_container">
        <button className="card_button">Buy now</button>
        <button className="card_button">Add to cart</button>
      </div>
    </section>
  );
}
