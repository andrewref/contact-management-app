import ContactItem from "./ContactItem";

function ContactList({ contacts, onEdit }) {
return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onEdit={onEdit}/>
      ))}
    </div>
  );
}

export default ContactList;
