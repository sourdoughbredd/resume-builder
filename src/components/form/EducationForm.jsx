function EducationInstance({
  educationInstanceInfo,
  setEducationInstanceInfo,
}) {
  let [month, year] = educationInstanceInfo.date.split("/");
  month = month === undefined ? "" : month;
  year = year === undefined ? "" : year;

  // Access/update Education Instance Extras State
  function setExtras(newExtras) {
    const newEducationInstanceInfo = {
      ...educationInstanceInfo,
      extras: [...newExtras],
    };
    setEducationInstanceInfo(newEducationInstanceInfo);
  }

  // Update state on changes to the basic info. Changes to extras is handled in the Extras component.
  function basicInfoChanged(e) {
    const newEducationInstanceInfo = { ...educationInstanceInfo };
    if (e.target.name === "degree") {
      newEducationInstanceInfo.degree = e.target.value;
      setEducationInstanceInfo(newEducationInstanceInfo);
      return;
    }

    if (e.target.name === "school") {
      newEducationInstanceInfo.school = e.target.value;
      setEducationInstanceInfo(newEducationInstanceInfo);
      return;
    }

    if (e.target.name === "month") {
      newEducationInstanceInfo.date = e.target.value + "/" + year;
      setEducationInstanceInfo(newEducationInstanceInfo);
      return;
    }

    if (e.target.name === "year") {
      newEducationInstanceInfo.date = month + "/" + e.target.value;
      setEducationInstanceInfo(newEducationInstanceInfo);
      return;
    }
  }

  // Add new extras clicked
  function addExtrasButtonClicked() {
    const newEducationInstanceInfo = { ...educationInstanceInfo };
    const maxId = newEducationInstanceInfo.extras.reduce(
      (maxId, currDetail) => (maxId = Math.max(maxId, currDetail.id)),
      0
    );
    newEducationInstanceInfo.extras.push({
      id: maxId + 1,
      title: "",
      description: "",
    });
    setEducationInstanceInfo(newEducationInstanceInfo);
  }

  return (
    <div>
      <input
        type="text"
        name="degree"
        placeholder="Degree"
        value={educationInstanceInfo.degree}
        onChange={basicInfoChanged}
      />
      <input
        type="text"
        name="school"
        placeholder="School"
        value={educationInstanceInfo.school}
        onChange={basicInfoChanged}
      />
      <input
        type="tel"
        name="month"
        placeholder="Graduation Month"
        value={month}
        onChange={basicInfoChanged}
      />
      <input
        type="tel"
        name="year"
        placeholder="Graduation Year"
        value={year}
        onChange={basicInfoChanged}
      />
      <EducationInstanceExtras
        extras={educationInstanceInfo.extras}
        setExtras={setExtras}
      ></EducationInstanceExtras>
      <button type="button" onClick={addExtrasButtonClicked}>
        Add Details
      </button>
    </div>
  );
}

function EducationInstanceExtras({ extras, setExtras }) {
  // extras should be an array of objects of form {id, title, description}

  function titleChanged(e, id) {
    const newExtras = [...extras];
    const newTitle = e.target.value;
    const idx = newExtras.findIndex((extObj) => extObj.id === id);
    newExtras[idx] = { ...extras[idx], title: newTitle };
    setExtras(newExtras);
  }

  function descriptionChanged(e, id) {
    const newExtras = [...extras];
    const newDescription = e.target.value;
    const idx = newExtras.findIndex((extObj) => extObj.id === id);
    newExtras[idx] = { ...extras[idx], description: newDescription };
    setExtras(newExtras);
  }

  return (
    <div className="education-extras">
      {extras.map((ext) => {
        return (
          <div className="extras-single" key={ext.id}>
            <input
              type="text"
              className="education-extras-title"
              placeholder="Title"
              value={ext.title}
              onChange={(e) => titleChanged(e, ext.id)}
            />
            <input
              type="text"
              className="education-extras-description"
              placeholder="Description"
              value={ext.description}
              onChange={(e) => descriptionChanged(e, ext.id)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default function EducationForm({ educationInfo, setEducationInfo }) {
  // educationInfo should be an array of objects, the objects have fields id, degree, school, date, and details.
  // The details field is an array of objects with fields id, title, and description

  // Access/update EDUCATION INSTANCE state
  function setEducationInstanceInfo(newEducationInstanceInfo) {
    const newEducationInfo = [...educationInfo];
    const id = newEducationInstanceInfo.id;
    const idx = newEducationInfo.findIndex((eduObj) => eduObj.id === id);
    newEducationInfo[idx] = {
      ...educationInfo[idx],
      ...newEducationInstanceInfo,
    };
    setEducationInfo(newEducationInfo);
  }

  // Add new education instance
  function addButtonClicked() {
    const newEducationInfo = [...educationInfo];
    const maxId = newEducationInfo.reduce(
      (maxId, currEdu) => (maxId = Math.max(maxId, currEdu.id)),
      0
    );
    newEducationInfo.push({
      id: maxId + 1,
      degree: "",
      school: "",
      date: "",
      extras: [],
    });
    setEducationInfo(newEducationInfo);
  }

  return (
    <form className="education-form">
      {educationInfo.map((edu) => {
        return (
          <EducationInstance
            key={edu.id}
            educationInstanceInfo={edu}
            setEducationInstanceInfo={setEducationInstanceInfo}
          ></EducationInstance>
        );
      })}
      <button type="button" onClick={addButtonClicked}>
        Add Education
      </button>
    </form>
  );
}
