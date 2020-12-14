import { gql } from "@apollo/client";

export const GET_POKEMON = gql`
	query DetailQuery($name: String!) {
		pokemon(name: $name) {
			id
			name
			number
			weaknesses
			maxHP
			image
			evolutions {
				number
				name
				image
			}
		}
	}
`;
