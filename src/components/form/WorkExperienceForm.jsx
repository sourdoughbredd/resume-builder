import "../../styles/form/WorkExperienceForm.css";

export default function WorkExperienceForm({ workInfo, setWorkInfo }) {
  function basicInfoChanged(e, id) {
    const newWorkInfo = [...workInfo];
    const idx = newWorkInfo.findIndex((work) => work.id === id);
    const [startMonth, startYear] = newWorkInfo[idx].start.split("/");
    const [endMonth, endYear] = newWorkInfo[idx].end.split("/");

    if (e.target.name === "title") {
      newWorkInfo[idx] = {
        ...newWorkInfo[idx],
        title: e.target.value,
      };
      setWorkInfo(newWorkInfo);
      return;
    }

    if (e.target.name === "employer") {
      newWorkInfo[idx] = {
        ...newWorkInfo[idx],
        employer: e.target.value,
      };
      setWorkInfo(newWorkInfo);
      return;
    }

    if (e.target.name === "start-month") {
      newWorkInfo[idx] = {
        ...newWorkInfo[idx],
        start: [e.target.value, startYear].join("/"),
      };
      setWorkInfo(newWorkInfo);
      return;
    }

    if (e.target.name === "start-year") {
      newWorkInfo[idx] = {
        ...newWorkInfo[idx],
        start: [startMonth, e.target.value].join("/"),
      };
      setWorkInfo(newWorkInfo);
      return;
    }

    if (e.target.name === "end-month") {
      newWorkInfo[idx] = {
        ...newWorkInfo[idx],
        end: [e.target.value, endYear].join("/"),
      };
      setWorkInfo(newWorkInfo);
      return;
    }

    if (e.target.name === "end-year") {
      newWorkInfo[idx] = {
        ...newWorkInfo[idx],
        end: [endMonth, e.target.value].join("/"),
      };
      setWorkInfo(newWorkInfo);
      return;
    }
  }

  function responsibilityChange(e, workId, respId) {
    const newWorkInfo = [...workInfo];
    const workIdx = newWorkInfo.findIndex((work) => work.id === workId);
    const respIdx = newWorkInfo[workIdx].responsibilities.findIndex(
      (resp) => resp.id === respId
    );
    newWorkInfo[workIdx] = {
      ...newWorkInfo[workIdx],
      responsibilities: [...newWorkInfo[workIdx].responsibilities],
    };
    newWorkInfo[workIdx].responsibilities[respIdx].text = e.target.value;
    setWorkInfo(newWorkInfo);
  }

  function addWorkButtonClicked() {
    const newWorkInfo = [...workInfo];
    const maxId = newWorkInfo.reduce(
      (maxId, currWork) => (maxId = Math.max(maxId, currWork.id)),
      0
    );

    newWorkInfo.push({
      id: maxId + 1,
      title: "",
      employer: "",
      start: "",
      end: "",
      responsibilities: [],
    });
    setWorkInfo(newWorkInfo);
  }

  function addResponsibilityButtonClicked(e, workId) {
    const newWorkInfo = [...workInfo];
    const workIdx = newWorkInfo.findIndex((work) => work.id === workId);
    const maxId = newWorkInfo[workIdx].responsibilities.reduce(
      (maxId, currResp) => (maxId = Math.max(maxId, currResp.id)),
      0
    );
    newWorkInfo[workIdx].responsibilities = [
      ...newWorkInfo[workIdx].responsibilities,
    ];
    newWorkInfo[workIdx].responsibilities.push({
      id: maxId + 1,
      text: "",
    });
    setWorkInfo(newWorkInfo);
  }

  return (
    <div className="work-experience-form">
      {workInfo.map((work) => {
        const [startMonth, startYear] = work.start.split("/");
        const [endMonth, endYear] = work.end.split("/");

        return (
          <div className="work-experience-instance" key={work.id}>
            <div className="form-group title-employer">
              <div className="input-group work-title">
                <label htmlFor={"work-title-" + work.id}>Job Title</label>
                <input
                  type="text"
                  name="title"
                  id={"work-title-" + work.id}
                  placeholder="Senior Software Engineer"
                  value={work.title}
                  onChange={(e) => basicInfoChanged(e, work.id)}
                />
              </div>
              <div className="input-group work-employer">
                <label htmlFor={"work-employer-" + work.id}>Employer</label>
                <input
                  type="text"
                  name="employer"
                  id={"work-employer-" + work.id}
                  placeholder="Big Tech Company"
                  value={work.employer}
                  onChange={(e) => basicInfoChanged(e, work.id)}
                />
              </div>
            </div>
            <div className="form-group work-dates">
              <div className="form-group start-date">
                <div className="input-group date-group start-month">
                  <label htmlFor={"work-start-month-" + work.id}>
                    Start Month
                  </label>
                  <input
                    type="text"
                    name="start-month"
                    id={"work-start-month-" + work.id}
                    placeholder="MM"
                    value={startMonth}
                    onChange={(e) => basicInfoChanged(e, work.id)}
                  />
                </div>
                <div className="input-group date-group start-year">
                  <label htmlFor={"work-start-year-" + work.id}>
                    Start Year
                  </label>
                  <input
                    type="text"
                    name="start-year"
                    id={"work-start-year-" + work.id}
                    placeholder="YYYY"
                    value={startYear}
                    onChange={(e) => basicInfoChanged(e, work.id)}
                  />
                </div>
              </div>
              <div className="form-group end-date">
                <div className="input-group date-group end-month">
                  <label htmlFor={"work-end-month-" + work.id}>End Month</label>
                  <input
                    type="text"
                    name="end-month"
                    id={"work-end-month-" + work.id}
                    placeholder="MM"
                    value={endMonth}
                    onChange={(e) => basicInfoChanged(e, work.id)}
                  />
                </div>
                <div className="input-group date-group end-year">
                  <label htmlFor={"work-end-year-" + work.id}>End Year</label>
                  <input
                    type="text"
                    name="end-year"
                    id={"work-end-year-" + work.id}
                    placeholder="YYYY"
                    value={endYear}
                    onChange={(e) => basicInfoChanged(e, work.id)}
                  />
                </div>
              </div>
            </div>
            <div className="responsibilities-container">
              <h3>Responsibilities</h3>
              <ul className="work-responsibilites">
                {work.responsibilities.map((resp) => (
                  <li key={resp.id}>
                    <textarea
                      name="work-responsibility"
                      cols="40"
                      rows="1"
                      placeholder="Led the migration of legacy systems to microservices architecture, ..."
                      value={resp.text}
                      onChange={(e) =>
                        responsibilityChange(e, work.id, resp.id)
                      }
                    ></textarea>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={(e) => addResponsibilityButtonClicked(e, work.id)}
              >
                Add Responsibility
              </button>
            </div>
          </div>
        );
      })}
      <button type="button" onClick={addWorkButtonClicked}>
        Add Work Experience
      </button>
    </div>
  );
}
