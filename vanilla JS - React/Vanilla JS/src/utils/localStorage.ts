import {Contact} from '../models/Contact.js';

const contactKey = 'contacts-local-storage-key';

export const saveContacts = (contacts: Contact[] = []) => {
  localStorage.setItem(contactKey, JSON.stringify(contacts));
};

export const getContacts = (): Contact[] => {
  const stringValue = localStorage.getItem(contactKey);

  if (stringValue) {
    const contacts = JSON.parse(stringValue) as Contact[];

    contacts.forEach(con => {
      Object.setPrototypeOf(con, Contact.prototype);
    });

    return contacts;
  }

  return [];
};
