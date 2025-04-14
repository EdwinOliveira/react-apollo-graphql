import type { BookEntity } from "../graphql/domain/BookEntity";
import "./Row.css";

type RowProps = BookEntity;

const Row: React.FC<RowProps> = ({ id, designation, description }) => {
	return (
		<div className="row">
			<span>{id}</span>
			<span>{designation}</span>
			<span>{description}</span>
		</div>
	);
};

export default Row;
