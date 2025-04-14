import FormControl, { type FormControlProps } from "./FormControl";
import "./FormGroup.css";

export type FormGroupProps = {
	id: number;
	formControls: Array<FormControlProps>;
};

const FormGroup: React.FC<FormGroupProps> = ({ formControls }) => {
	return (
		<div className="form-group">
			{formControls.map((formControl) => (
				<FormControl key={formControl.id} {...formControl} />
			))}
		</div>
	);
};

export default FormGroup;
