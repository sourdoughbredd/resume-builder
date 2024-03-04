import "../../styles/form/HeaderForm.css";

export default function HeaderForm({ headerInfo, setHeaderInfo }) {
  // Make info have firstname, lastname, phone, email, and website
  function infoChanged(e) {
    let newInfo = { ...headerInfo };

    // Name Changed
    if (e.target.name === "name") {
      newInfo.name = e.target.value;
      setHeaderInfo(newInfo);
      return;
    }

    // Phone Changed
    if (e.target.name === "phone") {
      newInfo.phone = e.target.value;
      setHeaderInfo(newInfo);
      return;
    }

    // Email Changed
    if (e.target.name === "email") {
      newInfo.email = e.target.value;
      setHeaderInfo(newInfo);
      return;
    }

    // Website Changed
    if (e.target.name === "website") {
      newInfo.website = e.target.value;
      setHeaderInfo(newInfo);
      return;
    }
  }

  return (
    <form className="header-form">
      <div className="form-group">
        <div className="input-group">
          <label htmlFor="name-input">Full Name</label>
          <input
            type="text"
            name="name"
            id="name-input"
            placeholder="John Doe"
            onChange={infoChanged}
            value={headerInfo.name}
          />
        </div>
        <div className="input-group">
          <label htmlFor="phone-input">Phone Number</label>
          <input
            type="tel"
            name="phone"
            id="phone-input"
            placeholder="(209) 867 5309"
            onChange={infoChanged}
            value={headerInfo.phone}
          />
        </div>
      </div>
      <div className="form-group">
        <div className="input-group">
          <label htmlFor="email-input">Email</label>
          <input
            type="email"
            name="email"
            id="email-input"
            placeholder="johndoe@gmail.com"
            onChange={infoChanged}
            value={headerInfo.email}
          />
        </div>
        <div className="input-group">
          <label htmlFor="website-input">Website URL</label>
          <input
            type="url"
            name="website"
            id="website-input"
            placeholder="www.linkedin.com/in/john-doe"
            onChange={infoChanged}
            value={headerInfo.website}
          />
        </div>
      </div>
    </form>
  );
}
