export default function HeaderForm() {
  return (
    <form className="header-form">
      <input
        type="text"
        name="firstname"
        id="firstname"
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastname"
        id="lastname"
        placeholder="Last Name"
      />
      <input type="tel" name="phone" id="phone" placeholder="Phone Number" />
      <input type="email" name="email" id="email" placeholder="Email" />
      <input type="url" name="website" id="website" placeholder="Website" />
    </form>
  );
}
