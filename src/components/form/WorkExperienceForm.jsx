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
          <div className="work-experience" key={work.id}>
            <div className="input-group">
              <label htmlFor={"work-title-" + work.id}>Job Title</label>
              <input
                type="text"
                name="title"
                id={"work-title-" + work.id}
                placeholder="Flight Controls Engineer (F-18)"
                value={work.title}
                onChange={(e) => basicInfoChanged(e, work.id)}
              />
            </div>
            <div className="input-group">
              <label htmlFor={"work-employer-" + work.id}>Employer</label>
              <input
                type="text"
                name="employer"
                id={"work-employer-" + work.id}
                placeholder="Naval Air Systems Command (NAVAIR)"
                value={work.employer}
                onChange={(e) => basicInfoChanged(e, work.id)}
              />
            </div>
            <div className="input-group">
              <label htmlFor={"work-start-month-" + work.id}>Start Month</label>
              <input
                type="text"
                name="start-month"
                id={"work-start-month-" + work.id}
                placeholder="MM"
                value={startMonth}
                onChange={(e) => basicInfoChanged(e, work.id)}
              />
            </div>
            <div className="input-group">
              <label htmlFor={"work-start-year-" + work.id}>Start Year</label>
              <input
                type="text"
                name="start-year"
                id={"work-start-year-" + work.id}
                placeholder="YYYY"
                value={startYear}
                onChange={(e) => basicInfoChanged(e, work.id)}
              />
            </div>
            <div className="input-group">
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
            <div className="input-group">
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
            <h3>Responsibilities</h3>
            <ul className="work-responsibilites">
              {work.responsibilities.map((resp) => (
                <li key={resp.id}>
                  <input
                    type="text"
                    name="work-responsibility"
                    placeholder="Boosted Monte Carlo data aggregation rate by 6x using parallel processing, saving..."
                    value={resp.text}
                    onChange={(e) => responsibilityChange(e, work.id, resp.id)}
                  />
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
        );
      })}
      <button type="button" onClick={addWorkButtonClicked}>
        Add Work Experience
      </button>
    </div>
  );
}
