function ContactItem({ contact }) {
  return (
    <div className="contact-item">
      <h3>{contact.name}</h3>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Category: {contact.category}</p>
    </div>
  );
}

export default ContactItem