function ContactItem({ contact, onEdit, onDelete }) {
  return (
    <div className="contact-item">
      <h3>{contact.name}</h3>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Category: {contact.category}</p>
      <div className="contact-actions">
        <button className="edit-button" onClick={() => onEdit(contact)}>Edit</button>
        <button className="delete-button" onClick={() => onDelete(contact)}>Delete</button>
      </div>
    </div>
  );
}

export default ContactItem