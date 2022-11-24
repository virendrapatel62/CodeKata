import { Contact } from '../models/Contact.js';
const contactKey = 'contacts-local-storage-key';
export const saveContacts = (contacts = []) => {
    localStorage.setItem(contactKey, JSON.stringify(contacts));
};
export const getContacts = () => {
    const stringValue = localStorage.getItem(contactKey);
    if (stringValue) {
        const contacts = JSON.parse(stringValue);
        contacts.forEach(con => {
            Object.setPrototypeOf(con, Contact.prototype);
        });
        return contacts;
    }
    return [];
};
//# sourceMappingURL=localStorage.js.map