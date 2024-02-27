export default function HeaderForm({ headerInfo, setHeaderInfo }) {
  // Make info have firstname, lastname, phone, email, and website
  function infoChanged(e) {
    let newInfo = { ...headerInfo };

    // Name Changed
    if (e.target.id === "name") {
      newInfo.name = e.target.value;
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

  return (
    <form className="header-form">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Full Name"
        onChange={infoChanged}
        value={headerInfo.name}
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
