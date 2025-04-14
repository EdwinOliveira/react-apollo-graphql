import Form from "./components/Form";
import type { FormButtonProps } from "./components/FormButton";
import type { FormGroupProps } from "./components/FormGroup";
import Header from "./components/Header";
import { useMutationCreateBook } from "./hooks/useMutationCreateBook";

const App = () => {
	const { executeQuery: createBook } = useMutationCreateBook();

	const formGroups: Array<FormGroupProps> = [
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

	const formButtons: Array<FormButtonProps> = [
		{
			id: 1,
			content: "Continue",
			type: "submit",
		},
	];

	const formAction = async (formData: FormData) => {
		await createBook({
			designation: formData.get("designation")?.toString() || "",
			description: formData.get("descriptions")?.toString() || "",
		});
	};

	return (
		<div className="wrapper">
			<Header content="Book Collection" />
			<Form
				formGroups={formGroups}
				formButtons={formButtons}
				formAction={formAction}
			/>
		</div>
	);
};

export default App;
