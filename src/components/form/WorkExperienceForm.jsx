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
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={work.title}
              onChange={(e) => basicInfoChanged(e, work.id)}
            />
            <input
              type="text"
              name="employer"
              placeholder="Employer"
              value={work.employer}
              onChange={(e) => basicInfoChanged(e, work.id)}
            />
            <input
              type="text"
              name="start-month"
              placeholder="Start Month"
              value={startMonth}
              onChange={(e) => basicInfoChanged(e, work.id)}
            />
            <input
              type="text"
              name="start-year"
              placeholder="Start Year"
              value={startYear}
              onChange={(e) => basicInfoChanged(e, work.id)}
            />
            <input
              type="text"
              name="end-month"
              placeholder="End Month"
              value={endMonth}
              onChange={(e) => basicInfoChanged(e, work.id)}
            />
            <input
              type="text"
              name="end-year"
              placeholder="End Year"
              value={endYear}
              onChange={(e) => basicInfoChanged(e, work.id)}
            />
            <ul className="work-responsibilites">
              {work.responsibilities.map((resp) => (
                <li key={resp.id}>
                  <input
                    type="text"
                    name="work-responsibility"
                    placeholder="Responsibility"
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
      ;
      <button type="button" onClick={addWorkButtonClicked}>
        Add Work Experience
      </button>
    </div>
  );
}
