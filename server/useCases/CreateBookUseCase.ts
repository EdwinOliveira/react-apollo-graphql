import type { CreateBookRequest } from "../domains/Book";
import { BookRemoteRepository } from "../repositories/BookRemoteRepository";

const CreateBookUseCase = () => {
	const { createBook } = BookRemoteRepository();

	return {
		createBook: ({ designation, description }: CreateBookRequest) => {
			return createBook(designation, description);
		},
	};
};

export { CreateBookUseCase };
