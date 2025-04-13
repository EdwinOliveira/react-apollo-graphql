import { createBookSchema, type CreateBookRequest } from "../domains/Book";
import { BookRemoteRepository } from "../repositories/BookRemoteRepository";

const CreateBookUseCase = () => {
	const { createBook } = BookRemoteRepository();

	return {
		createBook: ({ input }: CreateBookRequest) => {
			const { data: schemaArgs, error: schemaErrors } =
				createBookSchema.safeParse({ input });

			if (schemaErrors !== undefined) {
				return schemaErrors.issues;
			}

			const {
				input: { designation, description },
			} = schemaArgs;

			return createBook(designation, description);
		},
	};
};

export { CreateBookUseCase };
