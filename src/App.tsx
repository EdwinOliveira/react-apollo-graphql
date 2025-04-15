import { useEffect } from "react";
import Form from "./components/Form";
import type { FormButtonProps } from "./components/FormButton";
import type { FormGroupProps } from "./components/FormGroup";
import Header from "./components/Header";
import List from "./components/List";
import { useMutationCreateBook } from "./hooks/useMutationCreateBook";
import { useQueryFindBooks } from "./hooks/useQueryFindBooks";
import { useQueryFindBookById } from "./hooks/useQueryFindBookById";

const App = () => {
	const { executeQuery: createBook } = useMutationCreateBook();
	const {
		executeQuery: findBooks,
		refetch: refetchFindBooks,
		cachedBooks,
	} = useQueryFindBooks();
	const { executeQuery: findBookById, cachedBook } = useQueryFindBookById();

	const createBookFormGroups: Array<FormGroupProps> = [
		{
			id: 1,
			formControls: [
				{
					id: 1,
					type: "text",
					name: "designation",
					placeholder: "Designation",
				},
				{
					id: 2,
					type: "text",
					name: "description",
					placeholder: "Description",
				},
			],
		},
	];

	const createBookFormButtons: Array<FormButtonProps> = [
		{
			id: 1,
			content: "Continue",
			type: "submit",
		},
	];

	const findBookByIdFormGroups: Array<FormGroupProps> = [
		{
			id: 1,
			formControls: [
				{
					id: 1,
					type: "text",
					name: "id",
					placeholder: "Id",
				},
			],
		},
	];

	const findBookByIdFormButtons: Array<FormButtonProps> = [
		{
			id: 1,
			content: "Continue",
			type: "submit",
		},
	];

	const createBookFormAction = async (formData: FormData) => {
		const designation = formData.get("designation");
		const description = formData.get("description");

		if (!designation || !description) {
			return;
		}

		await createBook({
			designation: designation.toString() || "",
			description: description.toString() || "",
		});

		await refetchFindBooks();
	};

	const findBookByIdFormAction = async (formData: FormData) => {
		if (formData.get("id") === undefined) {
			return;
		}

		await findBookById({ id: Number(formData.get("id")) });
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		findBooks();
	}, []);

	return (
		<div className="wrapper">
			<Header content="Book Collection" />
			<Form
				formGroups={createBookFormGroups}
				formButtons={createBookFormButtons}
				formAction={createBookFormAction}
			/>
			<Form
				formGroups={findBookByIdFormGroups}
				formButtons={findBookByIdFormButtons}
				formAction={findBookByIdFormAction}
			/>
			<List books={cachedBook ? [cachedBook] : cachedBooks} />
		</div>
	);
};

export default App;
