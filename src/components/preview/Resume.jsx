import "../../styles/preview/Resume.css";
import { useEffect } from "react";
import Header from "./Header";
import Section from "./Section";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Skillsets from "./Skillsets";

export default function Resume({ resumeInfo }) {
  function adjustScale() {
    const resume = document.querySelector(".resume");
    if (!resume) return;

    // Calculate scale based on the viewport width or height, whichever is smaller
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const scaleWidth = viewportWidth / resume.offsetWidth;
    const scaleHeight = viewportHeight / (resume.offsetWidth * (11 / 8.5));
    const scale = Math.min(scaleWidth, scaleHeight);

    // Apply the scale transformation
    resume.style.transform = `scale(${scale})`;
  }

  useEffect(() => {
    // Define the adjustScale function here or import it if defined externally
    adjustScale();
    window.addEventListener("resize", adjustScale);
    return () => window.removeEventListener("resize", adjustScale);
  }, []);

  return (
    <div className="resume">
      <Header {...resumeInfo.Header}></Header>

      <Section name="Education">
        {resumeInfo.Education.map((edu) => {
          return <Education key={edu.id} {...edu}></Education>;
        })}
      </Section>

      <Section name="Skills">
        <Skillsets skillsets={resumeInfo.Skillsets}></Skillsets>
      </Section>

      <Section name="Work Experience">
        {resumeInfo.WorkExperience.map((work) => {
          return <WorkExperience key={work.id} {...work}></WorkExperience>;
        })}
      </Section>
    </div>
  );
}
