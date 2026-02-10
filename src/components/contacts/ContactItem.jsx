function ContactItem({ contact, onEdit }) {
  return (
    <div className="contact-item">
      <h3>{contact.name}</h3>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Category: {contact.category}</p>
      <button className="edit-button" onClick={() => onEdit(contact)}>Edit</button>
    </div>
  );
}

export default ContactItem