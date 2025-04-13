import { findBookByIdSchema, type FindBookByIdRequest } from "../domains/Book";
import { BookRemoteRepository } from "../repositories/BookRemoteRepository";

const FindBookByIdUseCase = () => {
	const { findBookById } = BookRemoteRepository();

	return {
		findBookById: ({ input }: FindBookByIdRequest) => {
			const { data: schemaArgs, error: schemaErrors } =
				findBookByIdSchema.safeParse({ input });

			if (schemaErrors !== undefined) {
				return schemaErrors.issues;
			}

			const {
				input: { id },
			} = schemaArgs;

			return findBookById(id);
		},
	};
};

export { FindBookByIdUseCase };
