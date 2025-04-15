import type { Book } from "../graphql/domain/Book";

type BookProps = Book;

const Book: React.FC<BookProps> = ({ id, designation, description }) => {
	return (
		<>
			<div className="book">
				<span>{id}</span>
				<span>{designation}</span>
				<span>{description}</span>
			</div>
		</>
	);
};

export default Book;
