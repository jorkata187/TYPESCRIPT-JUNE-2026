class BankAccounts{
    private balance: number;

    constructor(balans: number) {
        this.balance = balans;
    }

    deposit(amount: number) {
        this.balance += amount;
    }

    withdraw(amount: number) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
    }

    getBalance(): number {
        return this.balance
    }
}

const account = new BankAccounts(100);
account.deposit(50);
console.log(account.getBalance());
