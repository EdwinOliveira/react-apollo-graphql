import "./FormControl.css";
import type { HTMLInputTypeAttribute } from "react";

export type FormControlProps = {
	id: number;
	type: HTMLInputTypeAttribute;
	placeholder: string;
	name: string;
};

const FormControl: React.FC<FormControlProps> = ({
	type,
	placeholder,
	name,
}) => {
	return (
		<input
			className="form-control"
			type={type}
			name={name}
			placeholder={placeholder}
		/>
	);
};

export default FormControl;
