import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "https://graphql-pokemon.now.sh/",
	cache: new InMemoryCache(),
});

export default client;
