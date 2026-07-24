class Book {
    readonly title: string;
    readonly author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
};

const book = new Book('Hary Poter', 'George');
console.log(`${book.title} by ${book.author}`);

// book.author = 'neshto si'; // Error
// book.title = 'neshto si' // Error
