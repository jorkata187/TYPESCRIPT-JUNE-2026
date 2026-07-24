interface Animal {
    makeSound(): string;
};

class Dog implements Animal {
    makeSound(): string {
        return 'Woof';
    }
}