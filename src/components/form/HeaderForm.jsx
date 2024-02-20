export default function HeaderForm({ resumeInfo, setResumeInfo }) {
  function nameChanged(e) {
    let newResumeInfo = { ...resumeInfo };
    let oldFirst = "";
    let oldLast = "";
    if (newResumeInfo.Header.name) {
      [oldFirst, oldLast] = newResumeInfo.Header.name.split(" ");
    }
    if (e.target.id === "firstname") {
      newResumeInfo.Header.name = e.target.value + " " + oldLast;
    } else {
      newResumeInfo.Header.name = oldFirst + " " + e.target.value;
    }
    setResumeInfo(newResumeInfo);
  }

  return (
    <form className="header-form">
      <input
        type="text"
        name="firstname"
        id="firstname"
        placeholder="First Name"
        onChange={nameChanged}
      />
      <input
        type="text"
        name="lastname"
        id="lastname"
        placeholder="Last Name"
        onChange={nameChanged}
      />
      <input type="tel" name="phone" id="phone" placeholder="Phone Number" />
      <input type="email" name="email" id="email" placeholder="Email" />
      <input type="url" name="website" id="website" placeholder="Website" />
    </form>
  );
}
