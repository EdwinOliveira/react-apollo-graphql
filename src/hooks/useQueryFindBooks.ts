import { useLazyQuery } from "@apollo/client";
import { FIND_BOOKS_QUERY } from "../graphql/queries/FindBooksQuery";
import type { Book } from "../graphql/domain/Book";

const useQueryFindBooks = () => {
	const [findBooks, { data, loading: isLoading, refetch }] = useLazyQuery<{
		findBooks: Array<Book>;
	}>(FIND_BOOKS_QUERY);

	const executeQuery = async () => {
		await findBooks();
	};

	return {
		executeQuery,
		isLoading,
		refetch,
		cachedBooks: data?.findBooks || [],
	};
};

export { useQueryFindBooks };
