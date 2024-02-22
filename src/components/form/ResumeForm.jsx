import "../../styles/form/ResumeForm.css";
import FormSection from "./FormSection";
import HeaderForm from "./HeaderForm";
import EducationForm from "./EducationForm";

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

  return (
    <div className="resume-form">
      <FormSection name="Header">
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
    </div>
  );
}
