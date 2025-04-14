import "./List.css";
import type { BookEntity } from "../graphql/domain/BookEntity";
import Row from "./Row";

type ListProps = {
	books: Array<BookEntity>;
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
