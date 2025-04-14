import { type ApolloError, useLazyQuery } from "@apollo/client";
import { useState } from "react";
import { FIND_BOOKS_QUERY } from "../graphql/queries/FindBooksQuery";
import type { BookEntity } from "../graphql/domain/BookEntity";

const useQueryFindBooks = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [books, setBooks] = useState<Array<BookEntity>>();
	const [error, setError] = useState<ApolloError>();

	const [findBooks] = useLazyQuery<{ findBooks: Array<BookEntity> }>(
		FIND_BOOKS_QUERY,
	);

	const executeQuery = async () => {
		const { data, loading, error } = await findBooks();

		setIsLoading(loading);
		setError(error);
		setBooks(data?.findBooks);
	};

	return { executeQuery, isLoading, books, error };
};

export { useQueryFindBooks };
