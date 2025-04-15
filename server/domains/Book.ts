import { z } from "zod";

type Book = {
	id: number;
	designation: string;
	description: string;
};

const findBookByIdSchema = z.object({
	id: z
		.string()
		.transform((id) => Number.parseInt(id))
		.refine((id) => !Number.isNaN(id)),
});

type FindBookByIdRequest = z.infer<typeof findBookByIdSchema>;

const createBookSchema = z.object({
	designation: z.string(),
	description: z.string(),
});

type CreateBookRequest = z.infer<typeof createBookSchema>;

interface BookRepository {
	findBooks(): Array<Book>;
	findBookById(id: number): Book | undefined;
	createBook(designation: string, description: string): void;
}

export {
	type Book,
	type BookRepository,
	findBookByIdSchema,
	type FindBookByIdRequest,
	createBookSchema,
	type CreateBookRequest,
};
