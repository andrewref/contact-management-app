import contacts from "./mockdata/contacts.js";
import ContactList from "./components/contacts/ContactList";


function App() {
  return (
    <div className="App">
      <h1>Contact Manager</h1>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;