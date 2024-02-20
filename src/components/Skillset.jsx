import "../styles/Skillset.css";
import Bullet from "./Bullet";
import { Fragment } from "react";

export default function Skillset({ skillsets }) {
  return (
    <div className="skillset">
      {skillsets.map((skillset) => (
        <Fragment key={skillset.name}>
          <Bullet></Bullet>
          <p className="skillset-name">{skillset.name}</p>
          <p className="skillset-skills">{skillset.skills.join(", ")}</p>
        </Fragment>
      ))}
    </div>
  );
}
