import "../styles/Resume.css";
import Header from "./Header";
import Section from "./Section";

export default function Resume() {
  return (
    <div className="resume">
      <Header
        name="Brett Bussell"
        phone="(209) 585 5343"
        email="bwbussell24@gmail.com"
        website="www.linkedin.com/in/brett-bussell"
      ></Header>
      <Section name="Education"></Section>
      <Section name="Work Experience"></Section>
    </div>
  );
}
