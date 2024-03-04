import "../../styles/form/SkillsetsForm.css";

export default function SkillsetsForm({ skillsetsInfo, setSkillsetsInfo }) {
  function nameChanged(e, id) {
    const newSkillsetsInfo = [...skillsetsInfo];
    const idx = newSkillsetsInfo.findIndex((ss) => ss.id === id);
    newSkillsetsInfo[idx] = { ...newSkillsetsInfo[idx], name: e.target.value };
    setSkillsetsInfo(newSkillsetsInfo);
  }

  function skillsChanged(e, id) {
    const newSkillsetsInfo = [...skillsetsInfo];
    const idx = newSkillsetsInfo.findIndex((ss) => ss.id === id);
    newSkillsetsInfo[idx] = {
      ...newSkillsetsInfo[idx],
      skills: e.target.value.split(", "),
    };
    setSkillsetsInfo(newSkillsetsInfo);
  }

  function addSkillsetButtonClicked() {
    const newSkillsetsInfo = [...skillsetsInfo];
    const maxId = newSkillsetsInfo.reduce(
      (maxId, currSkillset) => (maxId = Math.max(maxId, currSkillset.id)),
      0
    );

    newSkillsetsInfo.push({
      id: maxId + 1,
      name: "",
      skills: [],
    });
    setSkillsetsInfo(newSkillsetsInfo);
  }

  return (
    <div className="skillsets-form">
      {skillsetsInfo.map((skillset) => (
        <div className="skillset" key={skillset.id}>
          <div className="input-group">
            <label htmlFor={"skillset-name-" + skillset.id}>
              Skillset Name
            </label>
            <input
              type="text"
              name="name"
              id={"skillset-name-" + skillset.id}
              placeholder="Programming"
              value={skillset.name}
              onChange={(e) => nameChanged(e, skillset.id)}
            />
          </div>
          <div className="input-group">
            <label htmlFor={"skillset-skills-" + skillset.id}>Skills</label>
            <textarea
              name="skills"
              id={"skillset-skills-" + skillset.id}
              cols="30"
              rows="1"
              placeholder="Python, C++, Java, ..."
              value={skillset.skills.join(", ")}
              onChange={(e) => skillsChanged(e, skillset.id)}
            ></textarea>
          </div>
        </div>
      ))}
      <button type="button" onClick={addSkillsetButtonClicked}>
        Add Skillset
      </button>
    </div>
  );
}
