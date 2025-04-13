import { FindBooksUseCase } from "./useCases/FindBooksUseCase";
import { FindBookByIdUseCase } from "./useCases/FindBookByIdUseCase";
import { CreateBookUseCase } from "./useCases/CreateBookUseCase";
import {
	type CreateBookRequest,
	createBookSchema,
	type FindBookByIdRequest,
	findBookByIdSchema,
} from "./domains/Book";
import type { Input } from "./types/Input";

const BackendResolver = () => {
	const { findBooks } = FindBooksUseCase();
	const { findBookById } = FindBookByIdUseCase();
	const { createBook } = CreateBookUseCase();

	return {
		createBackendResolver: () => {
			return {
				Query: {
					findBooks,
					findBookById: (_data, { input }: Input<FindBookByIdRequest>) => {
						const { data: schemaArgs, error: schemaErrors } =
							findBookByIdSchema.safeParse({ id: input.id });

						if (schemaErrors !== undefined) {
							return schemaErrors.issues;
						}

						return findBookById({ id: schemaArgs.id });
					},
				},
				Mutation: {
					createBook: (_data, { input }: Input<CreateBookRequest>) => {
						const { data: schemaArgs, error: schemaErrors } =
							createBookSchema.safeParse({
								designation: input.designation,
								description: input.description,
							});

						if (schemaErrors !== undefined) {
							return schemaErrors.issues;
						}

						return createBook({
							designation: schemaArgs.designation,
							description: schemaArgs.description,
						});
					},
				},
			};
		},
	};
};

export { BackendResolver };
