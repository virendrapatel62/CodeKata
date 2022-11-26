export class Contact {
  id;
  name;
  phone;
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
    this.id = Date.now();
  }
}
