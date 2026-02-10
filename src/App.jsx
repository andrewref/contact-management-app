import { useState } from "react";
import contacts from "./mockdata/contacts.js";
import ContactList from "./components/contacts/ContactList";
import ContactForm from "./components/contacts/ContactForm";

function App() {
  const [contactsList, setContactsList] = useState(contacts);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingContact, setEditingContact] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredContacts = contactsList
    .filter(contact => selectedCategory === "All" || contact.category === selectedCategory)
    .filter(contact => contact.name.toLowerCase().includes(searchTerm.toLowerCase()));
  
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

  function handleDelete(contact) {
    if (window.confirm(`Are you sure you want to delete ${contact.name}?`)) {
      setContactsList((prev) => prev.filter(c => c.id !== contact.id));
    }
  }

  function handleAddNew() {
    setEditingContact(null);
    setIsFormOpen(true);
  }
  
  return (
    <div className="App">
      <h1>Contact Manager</h1>
      <div className="toolbar">
        <button className="add-contact-button" onClick={handleAddNew}>
          Add Contact
        </button>
        <input 
          type="text" 
          className="search-input" 
          placeholder="Search by name..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="filter-group">
          <label>Select Category</label>
          <select 
            className="category-filter" 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Family">Family</option>
          </select>
        </div>
      </div>
      
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
      <ContactList contacts={filteredContacts} onEdit={handleEdit} onDelete={handleDelete}/>
    </div>
  );
}

export default App;