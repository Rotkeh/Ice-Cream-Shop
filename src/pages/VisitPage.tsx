import map from "../assets/map.png";
import "../css/VisitPage.css";

export function VisitPage() {
  return (
    <main>
      <h1 className="visit_header">Visit us</h1>
      <p className="visit_text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ea
        inventore consequatur doloremque neque atque ab, facilis cupiditate!
        Quam cum repellendus magnam sint facere voluptas ut nisi. Ea, vel iusto?
      </p>
      <section className="visit-info">
        <h4 className="visit-info_header">Open:</h4>
        <p className="visit-info_day">Mon-Fri:</p>
        <p className="visit-info_time">10:00 - 21:00</p>
        <p className="visit-info_day">Saturday:</p>
        <p className="visit-info_time">09:00 - 23:00</p>
        <p className="visit-info_day">Sunday:</p>
        <p className="visit-info_time">10:00 - 21:00</p>
        <h4 className="visit-info_header">Adress:</h4>
        <p className="visit-info_adress">Madeupstreet 13</p>
        <p className="visit-info_adress">
          Click on the map below to see how to get here
        </p>
      </section>
      <figure
        className="visit-info-img_container"
        onClick={() =>
          (window.location.href = "https://maps.app.goo.gl/eGAaWrPj9WnRA94EA")
        }
      >
        <img className="visit-info_img" src={map} alt="" />
      </figure>
    </main>
  );
}
