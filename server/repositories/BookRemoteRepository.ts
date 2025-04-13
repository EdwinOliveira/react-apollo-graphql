import type { BookEntity, BookRepository } from "../domains/Book";

const books: Array<BookEntity> = [];

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
