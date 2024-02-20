import "./App.css";
import Resume from "./components/preview/Resume.jsx";
import ResumeForm from "./components/form/ResumeForm.jsx";

function App() {
  return (
    <div className="app-container">
      <ResumeForm></ResumeForm>
      <Resume></Resume>
    </div>
  );
}

export default App;
