import "../../styles/preview/WorkExperience.css";
import Bullet from "./Bullet";

export default function WorkExperience({
  title,
  employer,
  start,
  end,
  responsibilities,
}) {
  return (
    <div className="work-experience">
      <div className="work-header">
        <Bullet></Bullet>
        <div className="work-title">
          <p>
            <strong>{title},</strong> {employer}
          </p>
        </div>
        <div className="work-date">
          {start} - {end}
        </div>
      </div>
      <ul className="work-details">
        {responsibilities.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}
