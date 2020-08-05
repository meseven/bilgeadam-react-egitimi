import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
	{
		pokemons(first: 20) {
			id
			name
			image
		}
	}
`;
