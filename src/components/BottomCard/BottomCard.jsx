import Header4 from "../Header4/Header4";
import Header5 from "../Header5/Header5";
import Paragraph from "../Paragraph/Paragraph_type1";
import "./BottomCard.scss";

export default function Bottom(props) {
  return (
    <>
      <div className="card">
        <img src={props.src} alt="article cover"></img>
        <article>
          <Header4 text={props.num} />
          <Header5 text={props.heading} />
          <Paragraph text={props.text} />
        </article>
      </div>
    </>
  );
}
