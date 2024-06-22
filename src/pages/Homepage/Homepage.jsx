import Section1 from "../../components/Section1/Section1";
import Section2 from "../../components/Section2/Section2";
import Section3 from "../../components/Section3/Section3";
import Nav_bar from "../../components/Nav_bar/Nav_bar";
import Home_layout from "../../layouts/Home_layout/Home_layout";
import "./Homepage.scss";

export default function Homepage() {
  return (
    <>
      <div className="homepage">
        <Nav_bar />
        <Home_layout>
          <section className="section1">
            <Section1 />
          </section>
          <section className="section2">
            <Section2 />
          </section>
          <section className="section3">
            <Section3 />
          </section>
        </Home_layout>
      </div>
    </>
  );
}
