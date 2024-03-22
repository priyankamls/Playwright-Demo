// //Programming without classes
// //Define a function to create a book object
// function createBook(title:string, author:string, ISBN:string, status:string) {
//     return {
//         title: title,
//         author: author,
//         ISBN: ISBN,
//         status: status
//     };
// }

// //Instantiate 3 diff books
// let book1 = createBook("Ramayana", "Valmiki", "123", "Available" );
// let book2 = createBook("Malgudi Days", "RK Narayan", "234",  "Available" );
// let book3 = createBook("Cinderella", "Charles", "456", "Checked Out" );  

// // Function to display book information
// function displayBookInfo(book: {title: string, author: string, ISBN: string, status: string}) {
//     console.log("Title:", book.title);
//     console.log("Author:", book.author);
//     console.log("ISBN:", book.ISBN);
//     console.log("Status:", book.status);
//     console.log("\n");
// }

// // Display information for each book
// console.log("Book 1 Information:");
// displayBookInfo(book1);

// console.log("Book 2 Information:");
// displayBookInfo(book2);

// console.log("Book 3 Information:");
// displayBookInfo(book3);

// //Functions to Check Out and Return a Book
// function checkOutBook(book: {title: string, author: string, ISBN: string, status: string}) {
//     if (book.status === "Checked Out") {
//         console.log(`${book.title} is already checked out.`);
//     } else {
//         book.status = "Checked Out";
//         console.log(`${book.title} checked out successfully.`);
//     }
// }

// // Function to return a book
// function returnBook(book: { title: string, author: string, ISBN: string, status: string }) {
//     if (book.status === "Available") {
//         console.log(`${book.title} is already available.`);
//     } else {
//         book.status = "Available";
//         console.log(`${book.title} returned successfully.`);
//     }
// }

// checkOutBook(book1);
// returnBook(book2);
// checkOutBook(book3);

//Refactoring with Classes
//Define a book class
class Book {
    constructor(public title: string, public author: string, public ISBN: string, public status: string) {}

    displayInfo() {
        console.log("Title:", this.title);
        console.log("Author:", this.author);
        console.log("ISBN:", this.ISBN);
        console.log("Status:", this.status);
        console.log("\n");
    }

    checkOut() {
        if (this.status === "Available") {
            this.status = "Checked Out";
            console.log(`${this.title} has been checked out.`);
        } else {
            console.log(`${this.title} is already checked out.`);
        }
    }

    returnBook() {
        if (this.status === "Checked Out") {
            this.status = "Available";
            console.log(`${this.title} has been returned.`);
        } else {
            console.log(`${this.title} is already available.`);
        }
    }
}

// Create book objects using the Book class
const book1 = new Book("Ramayana", "Valmiki", "12345", "Available");
const book2 = new Book("Malgudi Days", "R.K. Narayan", "23456", "Available");
const book3 = new Book("Cinderella", "Charles Perrault", "34567", "Checked Out");

// Display book information
console.log("Book 1 Information:");
book1.displayInfo();
console.log("Book 2 Information:");
book2.displayInfo();
console.log("Book 3 Information:");
book3.displayInfo();

// Interact with book objects
book1.checkOut();
book2.returnBook();
book3.checkOut();

// Display updated book information
console.log("After interaction:");
console.log("Book 1 Information:");
book1.displayInfo();
console.log("Book 2 Information:");
book2.displayInfo();
console.log("Book 3 Information:");
book3.displayInfo();