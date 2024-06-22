import "./Section2.scss";
import Header2 from "../Header2/Header2";
import NewsCard from "../NewsCard/NewsCard";

export default function Section2() {
  return (
    <>
      <aside>
        <Header2 text="New" />

        <NewsCard
          h_text="Hydrogen VS Electric Cars"
          p_text="Will hydrogen-fueled cars ever catch up to EVs?"
        />
        <NewsCard
          h_text="The Downsides of AI Artistry"
          p_text="What are the possible adverse effects of on-demand AI image generation?"
        />
        <NewsCard
          h_text="Is VC Funding Drying Up?"
          p_text="Private funding by VC firms is down 50% YOY. We take a look at what that means."
        />
      </aside>
    </>
  );
}
