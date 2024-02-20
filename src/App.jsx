import "./App.css";
import Resume from "./components/preview/Resume.jsx";
import ResumeForm from "./components/form/ResumeForm.jsx";
import { useState } from "react";

const initialResumeInfo = {
  Header: {},
  Education: {},
  Skillsets: {},
  WorkExperience: {},
};

function App() {
  const [resumeInfo, setResumeInfo] = useState(initialResumeInfo);
  return (
    <div className="app-container">
      <ResumeForm
        resumeInfo={resumeInfo}
        setResumeInfo={setResumeInfo}
      ></ResumeForm>
      <Resume resumeInfo={resumeInfo}></Resume>
    </div>
  );
}

export default App;
