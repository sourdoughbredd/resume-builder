import "../../styles/form/ResumeForm.css";
import FormSection from "./FormSection";
import HeaderForm from "./HeaderForm";

export default function ResumeForm() {
  return (
    <div className="resume-form">
      <FormSection name="Header">
        <HeaderForm></HeaderForm>
      </FormSection>
    </div>
  );
}
