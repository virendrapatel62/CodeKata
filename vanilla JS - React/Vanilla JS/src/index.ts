import {Contact} from './models/Contact.js';
import {PhoneBook} from './models/PhoneBooks.js';
import {form, tableBody} from './dom-reader.js';
import {getContacts, saveContacts} from './utils/localStorage.js';
let phoneBook: PhoneBook = new PhoneBook();

phoneBook.subscribe(contacts => {
  renderContactList(contacts);
  saveContacts(contacts);
});

window.onload = () => {
  const contacts = getContacts();
  console.log(contacts);

  phoneBook.addAll(contacts);
};

function renderContactList(contacts: Contact[]) {
  tableBody && (tableBody.innerHTML = '');
  contacts.forEach((contact, index) => {
    const row = tableBody?.insertRow();
    const [sno, name, phone] = [
      row?.insertCell(),
      row?.insertCell(),
      row?.insertCell(),
    ];
    if (name && phone && sno) {
      sno.innerText = (index + 1).toString();
      name.innerText = contact.name;
      phone.innerText = contact.phone;
    }
  });
}

form?.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);
  const name = formData.get('name')?.toString();
  const phone = formData.get('phone')?.toString();

  if (!name) return;

  if (!phone) return;
  const contact = new Contact(name, phone);
  phoneBook.add(contact);
});
