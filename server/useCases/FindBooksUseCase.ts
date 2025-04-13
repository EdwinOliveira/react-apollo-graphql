import { BookRemoteRepository } from "../repositories/BookRemoteRepository";

const FindBooksUseCase = () => {
	const { findBooks } = BookRemoteRepository();

	return {
		findBooks: () => {
			return findBooks();
		},
	};
};

export { FindBooksUseCase };
