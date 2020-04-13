let myBook = {
	title: 'The Story of Tau',
	author: 'Camara Laby Damaro',
	numberOfPages: 250,
	isAvailable: true
}


class Book {

	constructor(title, author, numberOfPages, isAvailable) {
		this.title = title;
		this.author = author;
		this.numberOfPages = numberOfPages;
		this.isAvailable = isAvailable;
	}
}

let myBook1 = new Book("JavaScript pour le SPA", "Camara Laby Damaro", 50, true);
let myBook2 = new Book("Java EE Spring boot", "Camara Laby Damaro", 50, false);
console.log( myBook1 );
console.log( myBook2 );
//export { myBook1 };