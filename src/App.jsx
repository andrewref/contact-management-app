import { useState } from "react";
import contacts from "./mockdata/contacts.js";
import ContactList from "./components/contacts/ContactList";
import ContactForm from "./components/contacts/ContactForm";

function App() {
  const [contactsList, setContactsList] = useState(contacts);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingContact, setEditingContact] = useState(null);
  
  function saveContact(contact) {
    if (editingContact) {
      setContactsList((prev) => prev.map(c => c.id === editingContact.id ? contact : c));
    } else {
      setContactsList((prev) => [...prev, { id: Date.now(), ...contact }]);
    }
    setIsFormOpen(false);
    setEditingContact(null);
  }

  function handleEdit(contact) {
    setEditingContact(contact);
    setIsFormOpen(true);
  }

  function handleAddNew() {
    setEditingContact(null);
    setIsFormOpen(true);
  }
  
  return (
    <div className="App">
      <h1>Contact Manager</h1>
      <button className="add-contact-button" onClick={handleAddNew}>
        Add Contact
      </button>
      
      {isFormOpen && (
        <div className="form-overlay" onClick={() => setIsFormOpen(false)}>
          <div className="form-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setIsFormOpen(false)}>
              X
            </button>
            <ContactForm onSaveContact={saveContact} contactToEdit={editingContact}/>
          </div>
        </div>
      )}  
      <ContactList contacts={contactsList} onEdit={handleEdit}/>
    </div>
  );
}

export default App;