import "../../styles/form/EducationForm.css";

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
    <div className="education-instance">
      <div className="education-basic-info">
        <div className="input-group">
          <label htmlFor={"degree-input-" + educationInstanceInfo.id}>
            Degree
          </label>
          <input
            type="text"
            name="degree"
            id={"degree-input-" + educationInstanceInfo.id}
            placeholder="M.S. in Mechanical Engineering"
            value={educationInstanceInfo.degree}
            onChange={basicInfoChanged}
          />
        </div>
        <div className="input-group">
          <label htmlFor={"school-input-" + educationInstanceInfo.id}>
            School
          </label>
          <input
            type="text"
            name="school"
            id={"school-input-" + educationInstanceInfo.id}
            placeholder="University of California, Berkeley"
            value={educationInstanceInfo.school}
            onChange={basicInfoChanged}
          />
        </div>
        <div className="grad-date">
          <div className="input-group">
            <label htmlFor={"month-input-" + educationInstanceInfo.id}>
              Grad Month
            </label>
            <input
              type="tel"
              name="month"
              id={"month-input-" + educationInstanceInfo.id}
              placeholder="MM"
              value={month}
              onChange={basicInfoChanged}
            />
          </div>
          <div className="input-group">
            <label htmlFor={"year-input-" + educationInstanceInfo.id}>
              Grad Year
            </label>
            <input
              type="tel"
              name="year"
              id={"year-input-" + educationInstanceInfo.id}
              placeholder="YYYY"
              value={year}
              onChange={basicInfoChanged}
            />
          </div>
        </div>
      </div>
      <h3>Extra Details</h3>
      <EducationInstanceExtras
        eduId={educationInstanceInfo.id}
        extras={educationInstanceInfo.extras}
        setExtras={setExtras}
      ></EducationInstanceExtras>
      <button type="button" onClick={addExtrasButtonClicked}>
        Add Details
      </button>
    </div>
  );
}

function EducationInstanceExtras({ eduId, extras, setExtras }) {
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
            <div className="input-group">
              <label htmlFor={`education-extras-title-${eduId}-${ext.id}`}>
                Title
              </label>
              <input
                type="text"
                className="education-extras-title"
                id={`education-extras-title-${eduId}-${ext.id}`}
                placeholder="GPA"
                value={ext.title}
                onChange={(e) => titleChanged(e, ext.id)}
              />
            </div>
            <div className="input-group">
              <label
                htmlFor={`education-extras-description-${eduId}-${ext.id}`}
              >
                Description
              </label>
              <input
                type="text"
                className="education-extras-description"
                id={`education-extras-description-${eduId}-${ext.id}`}
                placeholder="3.9/4.0"
                value={ext.description}
                onChange={(e) => descriptionChanged(e, ext.id)}
              />
            </div>
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
