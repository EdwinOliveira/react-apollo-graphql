import { useApolloClient, useLazyQuery } from "@apollo/client";
import { FIND_BOOK_BY_ID_QUERY } from "../graphql/queries/FindBookByIdQuery";
import type { Book } from "../graphql/domain/Book";
import { FIND_BOOKS_QUERY } from "../graphql/queries/FindBooksQuery";

type FindBookByIdRequest = Pick<Book, "id">;

const useQueryFindBookById = () => {
	const client = useApolloClient();

	const [findBookById, { data, loading: isLoading }] = useLazyQuery<{
		findBookById: Book;
	}>(FIND_BOOK_BY_ID_QUERY, {
		fetchPolicy: "cache-first",
	});

	const executeQuery = async ({ id }: FindBookByIdRequest) => {
		const cachedQuery = client.readQuery<{ findBooks: Array<Book> }>({
			query: FIND_BOOKS_QUERY,
		});

		const cachedBook = cachedQuery?.findBooks.find(
			(cachedBook) => cachedBook.id === id,
		);

		if (cachedBook) {
			return;
		}

		await findBookById({ variables: { id } });
	};

	return {
		executeQuery,
		cachedBook: data?.findBookById,
		isLoading,
	};
};

export { useQueryFindBookById };
