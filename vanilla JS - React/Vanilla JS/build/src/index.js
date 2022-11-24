import { Contact } from './models/Contact.js';
import { PhoneBook } from './models/PhoneBooks.js';
import { form, tableBody } from './dom-reader.js';
import { getContacts, saveContacts } from './utils/localStorage.js';
let phoneBook = new PhoneBook();
phoneBook.subscribe(contacts => {
    renderContactList(contacts);
    saveContacts(contacts);
});
window.onload = () => {
    const contacts = getContacts();
    console.log(contacts);
    phoneBook.addAll(contacts);
};
function renderContactList(contacts) {
    tableBody && (tableBody.innerHTML = '');
    contacts.forEach((contact, index) => {
        const row = tableBody === null || tableBody === void 0 ? void 0 : tableBody.insertRow();
        const [sno, name, phone] = [
            row === null || row === void 0 ? void 0 : row.insertCell(),
            row === null || row === void 0 ? void 0 : row.insertCell(),
            row === null || row === void 0 ? void 0 : row.insertCell(),
        ];
        if (name && phone && sno) {
            sno.innerText = (index + 1).toString();
            name.innerText = contact.name;
            phone.innerText = contact.phone;
        }
    });
}
form === null || form === void 0 ? void 0 : form.addEventListener('submit', event => {
    var _a, _b;
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const name = (_a = formData.get('name')) === null || _a === void 0 ? void 0 : _a.toString();
    const phone = (_b = formData.get('phone')) === null || _b === void 0 ? void 0 : _b.toString();
    if (!name)
        return;
    if (!phone)
        return;
    const contact = new Contact(name, phone);
    phoneBook.add(contact);
});
//# sourceMappingURL=index.js.map