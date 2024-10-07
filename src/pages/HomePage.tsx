import iceCream from "../assets/iceCream1.jpg";
import { IceCreamCard } from "../components";
import "../css/HomePage.css";

export function HomePage() {
  return (
    <main>
      <section className="hero_img">
        <h1>Ice Cream Shop</h1>
        <h5>Get the perfect ice cream for you to your door </h5>
      </section>
      <article className="main_intro">
        <h3 className="intro_header">Our model</h3>
        <p className="intro_text">
          Select the ice cream you want from our big assortment or make your own
          with your favorite flavors! Our experienced ice cream makers makes it
          from natural ingredients and has is delivered to your door!
        </p>
        <h4 className="intro-promo_header">Try out this weeks favorite!</h4>
        <figure className="intro_image-container">
          <img className="intro_image" src={iceCream} alt="" />
        </figure>
      </article>
      <section className="main_cards">
        <h3 className="cards_header">Check out the latest cold ice creams</h3>
        <div className="cards">
          <IceCreamCard />
          <IceCreamCard />
          <IceCreamCard />
        </div>
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
        <section className="info_gallery">
          <figure className="gallery_img_container">111</figure>
          <figure className="gallery_img_container">222</figure>
          <figure className="gallery_img_container">333</figure>
          <figure className="gallery_img_container">444</figure>
        </section>
      </article>
    </main>
  );
}
