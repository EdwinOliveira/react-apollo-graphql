import { useMutation } from "@apollo/client";
import { CREATE_BOOK_MUTATION } from "../graphql/mutations/CreateBookMutation";
import type { BookEntity } from "../graphql/domain/BookEntity";

type CreateBookRequest = Pick<BookEntity, "designation" | "description">;

const useMutationCreateBook = () => {
	const [createBook, { loading, error }] = useMutation<{
		createBook: null;
	}>(CREATE_BOOK_MUTATION);

	const executeQuery = async ({
		designation,
		description,
	}: CreateBookRequest) => {
		await createBook({ variables: { designation, description } });
	};

	return { executeQuery, isLoading: loading, error };
};

export { useMutationCreateBook };
