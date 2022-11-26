import React from "react";

export default function ContactList({ contacts, onDelete }) {
  contacts.forEach((contact, index) => {
    console.log(contact);
  });

  return (
    <div>
      <section id="contact-list">
        <table>
          <thead>
            <tr>
              <th>Sno</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr>
                <td>{contact.id}</td>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td>
                  <button onClick={() => onDelete(contacts[index])}>❌</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
