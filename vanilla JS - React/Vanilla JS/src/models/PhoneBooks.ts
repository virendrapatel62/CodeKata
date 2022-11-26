import {Contact} from './Contact';

type SubscribeCallBack = (contacts: Contact[]) => void;

export class PhoneBook {
  private _contacts: Contact[];
  private _subscribers: SubscribeCallBack[] = [];
  constructor() {
    this._contacts = [];
  }

  subscribe(callback: SubscribeCallBack) {
    this._subscribers.push(callback);
  }

  private notify() {
    this._subscribers.forEach(callback => {
      callback(this._contacts);
    });
  }


  deleteContact(id : number){
    this._contacts = this._contacts.filter(contact=>contact.id !== id)
    this.notify()
  }

  get contacts() {
    return this._contacts;
  }

  add(contact: Contact) {
    this._contacts.push(contact);
    this.notify();
  }

  addAll(contacts: Contact[]) {
    this._contacts = this._contacts.concat(contacts);
    this.notify();
  }
}
