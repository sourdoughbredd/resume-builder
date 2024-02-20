import "../styles/Resume.css";
import Header from "./Header";
import Section from "./Section";
import Education from "./Education";

export default function Resume() {
  return (
    <div className="resume">
      <Header
        name="Brett Bussell"
        phone="(209) 585 5343"
        email="bwbussell24@gmail.com"
        website="www.linkedin.com/in/brett-bussell"
      ></Header>
      <Section name="Education">
        <Education
          degree="M.S. in Mechanical Engineering"
          school="University of California, Berkeley"
          date="05/2021"
          details={[
            { title: "GPA", description: "3.77/4.00" },
            {
              title: "Emphasis",
              description: "Modeling and control of dynamical systems",
            },
            {
              title: "Select Coursework",
              description: "Control of Unmanned Aerial Vehicles",
            },
          ]}
        ></Education>
        <Education
          degree="B.S. in Mechanical Engineering"
          school="University of California, Berkeley"
          date="12/2019"
          details={[
            { title: "GPA", description: "3.90/4.00, Graduation with Honors" },
            {
              title: "Select Coursework",
              description: "Lagrangian Dynamics, Advanced Linear Algebra",
            },
          ]}
          gpa="3.90/4.00, Graduation with Honors"
          courses="Lagrangian Dynamics, Advanced Linear Algebra"
        ></Education>
      </Section>
      <Section name="Work Experience"></Section>
    </div>
  );
}
