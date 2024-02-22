export default function HeaderForm({ headerInfo, setHeaderInfo }) {
  // Make info have firstname, lastname, phone, email, and website
  function infoChanged(e) {
    let newInfo = { ...headerInfo };

    // Name Changed
    if (e.target.id === "firstname" || e.target.id === "lastname") {
      let oldFirst = "";
      let oldLast = "";
      if (newInfo.name) {
        [oldFirst, oldLast] = newInfo.name.split(" ");
      }
      if (e.target.id === "firstname") {
        newInfo.name = e.target.value + " " + oldLast;
      } else {
        newInfo.name = oldFirst + " " + e.target.value;
      }
      setHeaderInfo(newInfo);
      return;
    }

    // Phone Changed
    if (e.target.id === "phone") {
      newInfo.phone = e.target.value;
      setHeaderInfo(newInfo);
      return;
    }

    // Email Changed
    if (e.target.id === "email") {
      newInfo.email = e.target.value;
      setHeaderInfo(newInfo);
      return;
    }

    // Website Changed
    if (e.target.id === "website") {
      newInfo.website = e.target.value;
      setHeaderInfo(newInfo);
      return;
    }
  }

  // Extract first and last name
  let [firstName, lastName] = headerInfo.name.split(" ");
  firstName = firstName === undefined ? "" : firstName;
  lastName = lastName === undefined ? "" : lastName;

  return (
    <form className="header-form">
      <input
        type="text"
        name="firstname"
        id="firstname"
        placeholder="First Name"
        onChange={infoChanged}
        value={firstName}
      />
      <input
        type="text"
        name="lastname"
        id="lastname"
        placeholder="Last Name"
        onChange={infoChanged}
        value={lastName}
      />
      <input
        type="tel"
        name="phone"
        id="phone"
        placeholder="Phone Number"
        onChange={infoChanged}
        value={headerInfo.phone}
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        onChange={infoChanged}
        value={headerInfo.email}
      />
      <input
        type="url"
        name="website"
        id="website"
        placeholder="Website"
        onChange={infoChanged}
        value={headerInfo.website}
      />
    </form>
  );
}
