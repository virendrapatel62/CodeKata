export class Contact {
  id: number;
  constructor(private _name: string, private _phone: string) {
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
