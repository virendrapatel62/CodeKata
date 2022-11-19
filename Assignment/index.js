class Bank {
  constructor() {
    this.accounts = [];
  }

  getAccountByAccountNumber(account) {
    return this.accounts.find((acc) => acc.accountNumber === account);
  }

  #getAccountIndexByAccountNumber(account) {
    const index = this.accounts.findIndex(
      (acc) => acc.accountNumber === accountNumber
    );

    return index;
  }

  closeAccount(accountNumber, pin) {
    const index = this.#getAccountIndexByAccountNumber(accountNumber);
    if (index < 0) {
      return;
    }
    const account = this.accounts[index];
    const verified = account.verify(pin);
    if (verified) {
      this.accounts.splice(index, 1);
      alert("Deleted");
    }
  }

  widraw(amount, accountNumber, pin) {
    console.log(this.accounts, accountNumber);

    const account = this.getAccountByAccountNumber(accountNumber);
    if (account) {
      if (account.verify(pin)) return account.widraw(amount);

      alert("Invalid pin");
    }

    console.log(account);
  }

  openAccount(userName, initialBalance, pin) {
    return new Promise((resolve, reject) => {
      if (pin.toString().length < 4) {
        reject("Pin Required.");
      }
      const account = new Account(userName, initialBalance, pin);
      this.accounts.push(account);
      resolve(account);
    });
  }
}

class Account {
  #balance;
  #pin;

  get balance() {
    return this.#balance;
  }
  verify(pin) {
    return this.#pin == pin;
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

const bank = new Bank();

const createAccountButton = document.querySelector("#create-account-button");
const wMoneyButton = document.querySelector("#w-money-button");
const depositButton = document.querySelector("#deposit-money-button");
const pinInput = document.querySelector("#pin-input");
const wPinInput = document.querySelector("#w-pin-input");
const accountNumberInput = document.querySelector("#w-account-number");

const updateBalance = (balance) => {
  document.querySelector("#current-balance").innerHTML = balance;
};

let account;

createAccountButton.addEventListener("click", () => {
  console.log("creaeting account");
  bank.openAccount("Virendra", 1000, +pinInput.value).then((_account) => {
    updateBalance(_account.balance);
    account = _account;
    console.log(account);
  });
});

wMoneyButton.addEventListener("click", () => {
  const fromAccountNumber = accountNumberInput.value;
  const pin = wPinInput.value;
  const amount = document.querySelector("#w-input").value;

  console.log({ fromAccountNumber, pin });
  bank.widraw(amount, +fromAccountNumber, pin);
});

depositButton.addEventListener("click", () => {
  account
    .deposit(+document.querySelector("#deposit-input").value)
    .then(updateBalance);
});

document.querySelector(".closeButton").addEventListener("click", () => {
  bank.closeAccount(+accountNumberInput.value, +pinInput.value);
});
