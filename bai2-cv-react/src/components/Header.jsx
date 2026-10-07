function Header({ name, title, contact }) {
  return (
    <header className="cv-header">
      <div className="avatar">{name.charAt(0)}</div>

      <div>
        <h1>{name}</h1>
        <p className="job-title">{title}</p>
        <div className="contact">
          <span>📧 {contact.email}</span>
          <span>📱 {contact.phone}</span>
          <span>📍 {contact.address}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
