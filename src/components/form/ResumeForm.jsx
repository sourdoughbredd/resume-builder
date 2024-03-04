import "../../styles/form/ResumeForm.css";
import FormSection from "./FormSection";
import HeaderForm from "./HeaderForm";
import EducationForm from "./EducationForm";
import SkillsetsForm from "./SkillsetsForm";
import WorkExperienceForm from "./WorkExperienceForm";
import { emptyResumeInfo } from "../../emptyResumeInfo";
import { exampleResumeInfo } from "../../exampleResumeInfo";

export default function ResumeForm({ resumeInfo, setResumeInfo }) {
  // Access/update HEADER state
  const headerInfo = resumeInfo.Header;
  function setHeaderInfo(newHeaderInfo) {
    const newResumeInfo = {
      ...resumeInfo,
      Header: { ...resumeInfo.Header, ...newHeaderInfo },
    };
    setResumeInfo(newResumeInfo);
  }

  // Access/update EDUCATION state
  const educationInfo = resumeInfo.Education;
  function setEducationInfo(newEducationInfo) {
    const newResumeInfo = {
      ...resumeInfo,
      Education: [...newEducationInfo],
    };
    setResumeInfo(newResumeInfo);
  }

  // Access/update SKILLSETS state
  const skillsetsInfo = resumeInfo.Skillsets; // array of skillsets
  function setSkillsetsInfo(newSkillsetsInfo) {
    const newResumeInfo = {
      ...resumeInfo,
      Skillsets: [...newSkillsetsInfo],
    };
    setResumeInfo(newResumeInfo);
  }

  // Access/update WORK EXPERIENCE state
  const workInfo = resumeInfo.WorkExperience; // array of skillsets
  function setWorkInfo(newWorkInfo) {
    const newResumeInfo = {
      ...resumeInfo,
      WorkExperience: [...newWorkInfo],
    };
    setResumeInfo(newResumeInfo);
  }

  // Clear form button callback
  function clearFormPressed() {
    setResumeInfo(emptyResumeInfo);
  }

  // Load example button callback
  function loadExamplePressed() {
    setResumeInfo(exampleResumeInfo);
  }

  return (
    <div className="resume-form">
      <div className="resume-toolbar">
        <button className="clear-form" onClick={clearFormPressed}>
          Clear Form
        </button>
        <button className="load-example" onClick={loadExamplePressed}>
          Load Example
        </button>
      </div>
      <FormSection name="Basic Info">
        <HeaderForm
          headerInfo={headerInfo}
          setHeaderInfo={setHeaderInfo}
        ></HeaderForm>
      </FormSection>
      <FormSection name="Education">
        <EducationForm
          educationInfo={educationInfo}
          setEducationInfo={setEducationInfo}
        ></EducationForm>
      </FormSection>
      <FormSection name="Skills">
        <SkillsetsForm
          skillsetsInfo={skillsetsInfo}
          setSkillsetsInfo={setSkillsetsInfo}
        ></SkillsetsForm>
      </FormSection>
      <FormSection name="Work Experience">
        <WorkExperienceForm
          workInfo={workInfo}
          setWorkInfo={setWorkInfo}
        ></WorkExperienceForm>
      </FormSection>
    </div>
  );
}
