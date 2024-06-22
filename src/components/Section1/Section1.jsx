import Header1 from "../Header1/Header1";
import Paragraph from "../Paragraph/Paragraph_type1";
import Button from "../Button/Button";
import desktopImage from "../../assets/images/image-web-3-desktop.jpg";
import mobileImage from "../../assets/images/image-web-3-mobile.jpg";
import "./Section1.scss";

export default function Section1() {
  return (
    <>
      <main>
        <picture>
          <img src={mobileImage} alt="Thumbnail" />
          <img src={desktopImage} alt="Thumbnail" />
        </picture>

        <article>
          <Header1 text="The Bright Future of Web 3.0?" />
        </article>

        <section>
          <Paragraph
            text="We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?"
          />
          <Button text="read more" />
        </section>
      </main>
    </>
  );
}
