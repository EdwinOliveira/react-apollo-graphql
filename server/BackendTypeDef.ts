import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BackendTypeDef = () => {
	return {
		createTypeDef: () => {
			return fs.readFileSync(path.join(__dirname, "Schema.gql"), "utf8");
		},
	};
};

export { BackendTypeDef };
