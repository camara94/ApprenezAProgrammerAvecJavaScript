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
console.log( myBook1 );
//export { myBook1 };