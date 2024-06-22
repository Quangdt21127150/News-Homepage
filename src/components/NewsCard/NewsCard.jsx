import Header3 from "../Header3/Header3";
import Paragraph from "../Paragraph/Paragraph_type2";
import "./NewsCard.scss";

export default function NewsCard(props) {
  return (
    <>
      <article className="news-card">
        <Header3 text={props.h_text} />
        <Paragraph text={props.p_text} />
      </article>
    </>
  );
}
