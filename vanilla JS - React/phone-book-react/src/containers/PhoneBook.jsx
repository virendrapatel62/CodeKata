import React, { useState } from "react";
import { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import { getContacts, saveContacts } from "../utils/localStorage";

function PhoneBook() {
  const [contacts, setContacts] = useState(getContacts());

  const onContactSave = (contact) => {
    setContacts([...contacts, contact]);
  };
  const onDelete = (contact) => {
    setContacts(contacts.filter((con) => con.id !== contact.id));
  };

  useEffect(() => {
    saveContacts(contacts);
  }, [contacts]);

  return (
    <div>
      <ContactForm onSubmit={onContactSave} />

      <ContactList contacts={contacts} onDelete={onDelete} />
    </div>
  );
}

export { PhoneBook };
