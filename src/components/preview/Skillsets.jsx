import "../../styles/preview/Skillsets.css";
import Bullet from "./Bullet";
import { Fragment } from "react";

export default function Skillsets({ skillsets }) {
  return (
    <div className="skillsets">
      {skillsets.map((skillset) => (
        <Fragment key={skillset.id}>
          <Bullet></Bullet>
          <p className="skillset-name">{skillset.name}</p>
          <p className="skillset-skills">{skillset.skills.join(", ")}</p>
        </Fragment>
      ))}
    </div>
  );
}
