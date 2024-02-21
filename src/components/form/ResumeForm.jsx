import "../../styles/form/ResumeForm.css";
import FormSection from "./FormSection";
import HeaderForm from "./HeaderForm";

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

  return (
    <div className="resume-form">
      <FormSection name="Header">
        <HeaderForm
          headerInfo={headerInfo}
          setHeaderInfo={setHeaderInfo}
        ></HeaderForm>
      </FormSection>
    </div>
  );
}
