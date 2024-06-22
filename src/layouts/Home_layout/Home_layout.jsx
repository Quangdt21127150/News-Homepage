import "./Home_layout.scss";

export default function Home_layout(props) {
  return (
    <>
      <div className="home-layout">{props.children}</div>
    </>
  );
}
