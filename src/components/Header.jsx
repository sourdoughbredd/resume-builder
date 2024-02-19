import "../styles/Header.css";

function Header({ name, phone, email, website }) {
  // Strip the phone number and reformat

  return (
    <div className="header">
      <h2>{name}</h2>
      <ul>
        <li>{phone}</li>
        <li>○</li>
        <li>{email}</li>
        <li>○</li>
        <li>{website}</li>
      </ul>
    </div>
  );
}

export default Header;
