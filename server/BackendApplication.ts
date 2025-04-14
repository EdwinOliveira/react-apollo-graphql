import { ApolloServer } from "@apollo/server";
import { BackendResolver } from "./BackendResolver";
import { BackendTypeDef } from "./BackendTypeDef";
import { startStandaloneServer } from "@apollo/server/standalone";

const BackendApplication = () => {
	const httpServer = new ApolloServer({
		typeDefs: BackendTypeDef().createTypeDef(),
		resolvers: BackendResolver().createBackendResolver(),
	});

	const createListner = async () => {
		await startStandaloneServer(httpServer, { listen: { port: 8000 } });
		console.log(`🚀 Server ready at: ${8000}`);
	};

	return { createListner };
};

const { createListner } = BackendApplication();

createListner();
