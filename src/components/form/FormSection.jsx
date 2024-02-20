import "../../styles/form/FormSection.css";

export default function FormSection({ name, children }) {
  return (
    <div className="form-section">
      <h2>{name}</h2>
      {children}
    </div>
  );
}
