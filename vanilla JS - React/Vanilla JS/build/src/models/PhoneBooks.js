export class PhoneBook {
    constructor() {
        this._subscribers = [];
        this._contacts = [];
    }
    subscribe(callback) {
        this._subscribers.push(callback);
    }
    notify() {
        this._subscribers.forEach(callback => {
            callback(this._contacts);
        });
    }
    get contacts() {
        return this._contacts;
    }
    add(contact) {
        this._contacts.push(contact);
        this.notify();
    }
    addAll(contacts) {
        this._contacts = this._contacts.concat(contacts);
        this.notify();
    }
}
//# sourceMappingURL=PhoneBooks.js.map