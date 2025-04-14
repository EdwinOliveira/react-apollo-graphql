import "./Typography.css";

type TypographyProps = {
	content: string;
	segment: "brand";
};

const Typography: React.FC<TypographyProps> = ({
	content,
	segment,
}: TypographyProps) => {
	return <span className={segment}>{content}</span>;
};

export default Typography;
