import type { Book } from "../graphql/domain/Book";
import "./Row.css";

type RowProps = Book;

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
