import Typography from "./Typography";
import "./Header.css";

type HeaderProps = {
	content: string;
};

const Header: React.FC<HeaderProps> = ({ content }) => {
	return (
		<div className="header">
			<Typography content={content} segment="brand" />
		</div>
	);
};

export default Header;
