import type { Book, BookRepository } from "../domains/Book";

const books: Array<Book> = [];

const BookRemoteRepository = (): BookRepository => {
	return {
		findBooks: () => {
			return books;
		},
		findBookById: (id: number) => {
			return books.find((book) => book.id === id);
		},
		createBook: (designation: string, description: string) => {
			books.push({ id: books.length + 1, designation, description });
		},
	};
};

export { BookRemoteRepository };
