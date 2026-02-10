import { useState } from "react";
function ContactForm({ onSaveContact, contactToEdit }) {
  const [formData, setFormData] = useState(
    contactToEdit || {
      name: "",
      email: "",
      phone: "",
      category: "",
    });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }


  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.category) newErrors.category = "Category is required";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSaveContact(contactToEdit ? { ...formData, id: contactToEdit.id } : formData);
    setFormData({ name: "", email: "", phone: "", category: "" });
    setErrors({});
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{contactToEdit ? "Edit Contact" : "Add New Contact"}</h2>
      
      <div>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      
      <div>
        <label>Phone</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>
    <div>
        <label>Category</label>
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="">Select category</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Family">Family</option>
        </select>
        {errors.category && <span className="error">{errors.category}</span>}
    </div>
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
