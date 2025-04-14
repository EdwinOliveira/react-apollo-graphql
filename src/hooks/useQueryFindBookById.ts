import { type ApolloError, useLazyQuery } from "@apollo/client";
import { FIND_BOOK_BY_ID_QUERY } from "../graphql/queries/FindBookByIdQuery";
import { useState } from "react";

type BookEntity = {
	id: number;
	designation: string;
	description: string;
};

const useQueryFindBookById = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [book, setBook] = useState<BookEntity>();
	const [error, setError] = useState<ApolloError>();

	const [findBookById] = useLazyQuery<{ findBookById: BookEntity }>(
		FIND_BOOK_BY_ID_QUERY,
	);

	const executeQuery = async (id: Pick<BookEntity, "id">) => {
		const { data, loading, error } = await findBookById({
			variables: id,
		});

		setIsLoading(loading);
		setError(error);
		setBook(data?.findBookById);
	};

	return { executeQuery, isLoading, book, error };
};

export { useQueryFindBookById };
