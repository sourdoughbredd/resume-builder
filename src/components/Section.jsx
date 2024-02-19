import "../styles/Section.css";

export default function Section({ name, children }) {
  return (
    <div>
      <h3>{name}</h3>
      <hr />
      {children}
    </div>
  );
}
