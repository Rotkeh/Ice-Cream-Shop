import { useEffect, useState } from "react";
import iceCream from "../assets/iceCream1.jpg";
import { IceCreamCard, ImageGallery } from "../components";
import "../css/HomePage.css";
import { IceCream } from "../interfaces";

export function HomePage() {
  const [latest, setLatest] = useState<IceCream[]>();
  const filePath = "/data.json";

  async function getIceCreams() {
    try {
      const response = await fetch(filePath);
      const result = await response.json();
      setLatest(result.IceCreams);
    } catch (error) {
      console.error("Error reading JSON file:", error);
    }
  }

  useEffect(() => {
    getIceCreams();
  }, []);
  return (
    <main>
      <section className="hero_content">
        <figure className="hero_img"></figure>
        <h1 className="hero_header">Ice Cream Shop</h1>
        <h5 className="hero_text">
          Get the perfect ice cream for you to your door{" "}
        </h5>
      </section>
      <article className="main_intro">
        <h3 className="intro_header">Our model</h3>
        <h4 className="intro-promo_header">Try out this weeks favorite!</h4>
        <p className="intro_text">
          Select the ice cream you want from our big assortment or make your own
          with your favorite flavors! Our experienced ice cream makers makes it
          from natural ingredients and has is delivered to your door!
        </p>
        <figure className="intro_image-container">
          <img className="intro_image" src={iceCream} alt="" />
        </figure>
      </article>
      <section className="main_cards">
        <h3 className="cards_header">Check out the latest cold ice creams</h3>
        {latest ? (
          <div className="cards">
            <IceCreamCard iceCream={latest![0]} />
            <IceCreamCard iceCream={latest![1]} />
            <IceCreamCard iceCream={latest![2]} />
          </div>
        ) : (
          ""
        )}
      </section>
      <article className="main_info">
        <h3 className="info_header">Our shop</h3>
        <p className="info_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          qui incidunt labore, explicabo recusandae, alias similique ad delectus
          commodi placeat eaque optio sed quaerat mollitia praesentium
          reprehenderit quos aperiam dolores!
        </p>
        <p className="info_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          qui incidunt labore, explicabo recusandae, alias similique ad delectus
          commodi placeat eaque optio sed quaerat mollitia praesentium
          reprehenderit quos aperiam dolores!
        </p>
        <ImageGallery />
      </article>
    </main>
  );
}
