export class Contact {
    constructor(_name, _phone) {
        this._name = _name;
        this._phone = _phone;
        this.id = Date.now();
    }
    set name(_name) {
        this._name = _name;
    }
    set phone(_phone) {
        this._phone = _phone;
    }
    get name() {
        return this._name;
    }
    get phone() {
        return this._phone;
    }
}
//# sourceMappingURL=Contact.js.map