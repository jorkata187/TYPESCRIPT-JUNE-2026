function authorize(authService: MockAuthorizationService) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        const original = descriptor.get;

        descriptor.get = function () {
            if (authService.canViewData(key)) {
                return original?.call(this);
            } else {
                throw new Error("You are not authorized to view this information");
            }
        };

        return descriptor;
    }
};

class MockAuthorizationService {
    constructor(private userRole: 'Guest' | 'PersonalDataAdministrator' | 'Admin') { };
    canViewData(property: string): boolean {
        switch (this.userRole) {
            case 'Admin':
                return true;
            case 'PersonalDataAdministrator':
                return ['name', 'age'].includes(property);
            default:
                return false;
        }
    }
};

let mockAuthorizationService = new MockAuthorizationService('PersonalDataAdministrator');

class User {
    constructor(
        private _name: string,
        private _age: number,
        private _creditCardNumber: string
    ) {}
    
    @authorize(mockAuthorizationService)
    get name() {
        return this._name;
    }
    @authorize(mockAuthorizationService)
    get age() {
        return this._age;
    }
    @authorize(mockAuthorizationService)
    get creditCardNumber() {
        return this._creditCardNumber;
    }
};

const user1 = new User('George', 40, 'GDE885578MG');
console.log(user1.name);
console.log(user1.age);
// console.log(user1.creditCardNumber); // Error

