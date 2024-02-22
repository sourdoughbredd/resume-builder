import "../../styles/preview/Resume.css";
import Header from "./Header";
import Section from "./Section";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Skillsets from "./Skillsets";

export default function Resume({ resumeInfo }) {
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
