import "../css/ImageGallery.css";
import iceCreamImg from "../assets/iceCream1.jpg";

export function ImageGallery() {
  return (
    <section className="info_gallery">
      <figure className="gallery_img_container">
        <img src={iceCreamImg} alt="" />
      </figure>
      <figure className="gallery_img_container">
        <img src={iceCreamImg} alt="" />
      </figure>
      <figure className="gallery_img_container">
        <img src={iceCreamImg} alt="" />
      </figure>
      <figure className="gallery_img_container">
        <img src={iceCreamImg} alt="" />
      </figure>
    </section>
  );
}
