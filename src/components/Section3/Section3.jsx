import BottomCard from "../BottomCard/BottomCard";
import retroPcsImage from "../../assets/images/image-retro-pcs.jpg";
import topLaptopsImage from "../../assets/images/image-top-laptops.jpg";
import gamingGrowthImage from "../../assets/images/image-gaming-growth.jpg";
import "./Section3.scss";

export default function Section3() {
  return (
    <>
      <div className="bottom-cards">
        <BottomCard src={retroPcsImage} num="01" heading="Reviving Retro PCs" text="What happens when old PCs are given modern upgrages?" />
        <BottomCard src={topLaptopsImage} num="02" heading="Top 10 Laptops of 2022" text="Our best picks for various needs and budgets" />
        <BottomCard src={gamingGrowthImage} num="03" heading="The Growth of Gaming" text="How the pandemic has sparked fresh opportunities." />
      </div>
    </>
  );
}
