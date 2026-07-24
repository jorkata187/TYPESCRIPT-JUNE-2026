class User {
    private _username!: string;
    constructor(username: string) {
        this.username = username;
    }

    get username(): string{
        return this._username
    }

    set username(newUserName: string) {
        if(newUserName.length < 3) {
            throw new Error('Username must be at least 3 charecter long');
        }
        this._username = newUserName;
    }
};

const user = new User('John');
user.username = 'Jo'; // This will not change username
console.log(user.username); // Output: John