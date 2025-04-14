import "./FormButton.css";

export type FormButtonProps = {
	id: number;
	content: string;
	type: "submit" | "reset" | "button" | undefined;
};

const FormButton: React.FC<FormButtonProps> = ({ content, type }) => {
	return (
		<button className="form-button" type={type}>
			{content}
		</button>
	);
};

export default FormButton;
