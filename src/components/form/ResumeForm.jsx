import "../../styles/form/ResumeForm.css";
import FormSection from "./FormSection";
import HeaderForm from "./HeaderForm";

export default function ResumeForm({ resumeInfo, setResumeInfo }) {
  return (
    <div className="resume-form">
      <FormSection name="Header">
        <HeaderForm
          resumeInfo={resumeInfo}
          setResumeInfo={setResumeInfo}
        ></HeaderForm>
      </FormSection>
    </div>
  );
}
