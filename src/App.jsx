import "./App.css";
import Resume from "./components/preview/Resume.jsx";
import ResumeForm from "./components/form/ResumeForm.jsx";
import { useState } from "react";
import { exampleResumeInfo } from "./exampleResumeInfo.js";

export default function App() {
  const [resumeInfo, setResumeInfo] = useState(exampleResumeInfo);
  return (
    <div className="app-container">
      <ResumeForm
        resumeInfo={resumeInfo}
        setResumeInfo={setResumeInfo}
      ></ResumeForm>
      <div className="resume-container">
        <Resume resumeInfo={resumeInfo}></Resume>
      </div>
    </div>
  );
}
