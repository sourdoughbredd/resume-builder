import "../styles/Education.css";
import Bullet from "./Bullet";

export default function Education({ degree, school, date, details }) {
  return (
    <div className="education-container">
      <div className="education-header">
        <Bullet></Bullet>
        <div className="education-degree">
          <p>
            <strong>{degree},</strong> {school}
          </p>
        </div>
        <div className="education-date">{date}</div>
      </div>
      <div className="education-details">
        {details.map((item) => (
          <>
            <p>{item.title}</p>
            <p>{item.description}</p>
          </>
        ))}
      </div>
    </div>
  );
}
