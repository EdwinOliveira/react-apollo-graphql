import { z } from "zod";

type BookEntity = {
	id: number;
	designation: string;
	description: string;
};

const findBookByIdSchema = z.object({
	input: z.object({
		id: z
			.string()
			.transform((id) => Number.parseInt(id))
			.refine((id) => !Number.isNaN(id)),
	}),
});

type FindBookByIdRequest = z.infer<typeof findBookByIdSchema>;

const createBookSchema = z.object({
	input: z.object({
		designation: z.string(),
		description: z.string(),
	}),
});

type CreateBookRequest = z.infer<typeof createBookSchema>;

interface BookRepository {
	findBooks(): Array<BookEntity>;
	findBookById(id: number): BookEntity | undefined;
	createBook(designation: string, description: string): void;
}

export {
	type BookEntity,
	type BookRepository,
	findBookByIdSchema,
	type FindBookByIdRequest,
	createBookSchema,
	type CreateBookRequest,
};
