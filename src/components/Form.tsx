import FormGroup, { type FormGroupProps } from "./FormGroup";
import "./Form.css";
import FormButton, { type FormButtonProps } from "./FormButton";

type FormProps = {
	formGroups: Array<FormGroupProps>;
	formButtons: Array<FormButtonProps>;
	formAction: (formData: FormData) => void;
};

const Form: React.FC<FormProps> = ({ formGroups, formButtons, formAction }) => {
	return (
		<form className="form" action={formAction}>
			{formGroups.map((formGroup) => (
				<FormGroup key={formGroup.id} {...formGroup} />
			))}
			{formButtons.map((formButton) => (
				<FormButton key={formButton.id} {...formButton} />
			))}
		</form>
	);
};

export default Form;
