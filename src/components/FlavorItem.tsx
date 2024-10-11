import { useContext } from "react";
import "../css/IceCreamFlavor.css";
import { FlavorProp } from "../interfaces";
import { FlavorContext } from "../context";

export function FlavorItem({ flavor, picked, item }: FlavorProp) {
  const { addFlavor, removeFlavor } = useContext(FlavorContext);
  return (
    <div className="flavor">
      <figure className="flavor-img_container">
        {flavor ? (
          <img className="flamor_img" src={flavor.imageUrl} alt="" />
        ) : (
          <img className="flamor_img" src="" alt="" />
        )}
      </figure>

      <h6 className="flavor_name">
        {flavor ? flavor.name : "Select a flavor"}
      </h6>
      <div className="button_container">
        <button
          disabled={picked && !flavor}
          onClick={() => (picked ? removeFlavor(item!) : addFlavor(flavor!))}
          data-no-dnd={"true"}
        >
          {picked ? "Remove" : "Add"}
        </button>
      </div>
    </div>
  );
}
