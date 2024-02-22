import { Fragment } from "react";
import "../../styles/preview/Education.css";
import Bullet from "./Bullet";

export default function Education({ degree, school, date, extras }) {
  return (
    <div className="education">
      <div className="education-header">
        <Bullet></Bullet>
        <div className="education-degree">
          <p>
            <strong>{degree},</strong> {school}
          </p>
        </div>
        <div className="education-date">{date}</div>
      </div>
      <div className="education-extras">
        {extras.map((item) => (
          <Fragment key={item.id}>
            <p>{item.title}</p>
            <p>{item.description}</p>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
