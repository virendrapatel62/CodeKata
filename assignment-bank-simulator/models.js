class Bank {
  constructor() {
    this.accounts = [];
  }

  openAccount(userName, initialBalance, pin) {
    return new Promise((resolve, reject) => {
      const account = new Account(userName, initialBalance, pin);
      this.accounts.push(account);
      resolve(account);
    });
  }
}

class Account {
  #balance;

  get balance() {
    return this.#balance;
  }

  getAccountNumber() {
    return new Date().getTime();
  }
  constructor(
    name,
    initialBalance,
    pin = () => {
      throw new Error("Pin Required");
    }
  ) {
    this.name = name;
    this.#pin = pin;
    this.#balance = initialBalance || 0;
    this.accountNumber = this.getAccountNumber();
  }

  widraw(amount) {
    return new Promise((resolve, reject) => {
      if (!+amount) {
        return reject("invalid amount");
      }

      if (amount > this.#balance) {
        return reject("invalid amount");
      }

      console.log({ before: this.#balance });
      this.#balance -= amount;
      console.log({ curretNow: this.#balance });
      resolve(this.#balance);
    });
  }

  deposit(amount) {
    return new Promise((resolve, reject) => {
      if (!+amount) {
        return reject("invalid amount");
      }

      console.log({ before: this.#balance });
      this.#balance += amount;
      console.log({ curretNow: this.#balance });
      resolve(this.#balance);
    });
  }
}
