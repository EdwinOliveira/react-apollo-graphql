import "./List.css";
import type { Book } from "../graphql/domain/Book";
import Row from "./Row";

type ListProps = {
	books: Array<Book>;
};

const List: React.FC<ListProps> = ({ books }) => {
	return (
		<div className="list">
			{books.map((book) => (
				<Row key={book.id} {...book} />
			))}
		</div>
	);
};

export default List;
