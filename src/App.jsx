import { useState } from "react";
import contacts from "./mockdata/contacts.js";
import ContactList from "./components/contacts/ContactList";
import ContactForm from "./components/contacts/ContactForm";

function App() {
  const [contactsList, setContactsList] = useState(contacts);
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  function addContact(newContact) {
    setContactsList((prev) =>[...prev, newContact]);
    setIsFormOpen(false);
  }
  return (
    <div className="App">
      <h1>Contact Manager</h1>
      <button className="add-contact-button" onClick={() => setIsFormOpen(true)}>
        Add Contact
      </button>
      
      {isFormOpen && (
        <div className="form-overlay" onClick={() => setIsFormOpen(false)}>
          <div className="form-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setIsFormOpen(false)}>
              X
            </button>
            <ContactForm onAddContact={addContact}/>
          </div>
        </div>
      )}  
      <ContactList contacts={contactsList}/>
    </div>
  );
}

export default App;