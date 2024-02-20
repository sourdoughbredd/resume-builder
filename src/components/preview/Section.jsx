import "../../styles/preview/Section.css";

export default function Section({ name, children }) {
  return (
    <div className="section">
      <h3>{name}</h3>
      <hr />
      <div>{children}</div>
    </div>
  );
}
