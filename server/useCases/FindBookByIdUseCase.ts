import type { FindBookByIdRequest } from "../domains/Book";
import { BookRemoteRepository } from "../repositories/BookRemoteRepository";

const FindBookByIdUseCase = () => {
	const { findBookById } = BookRemoteRepository();

	return {
		findBookById: ({ id }: FindBookByIdRequest) => {
			return findBookById(id);
		},
	};
};

export { FindBookByIdUseCase };
