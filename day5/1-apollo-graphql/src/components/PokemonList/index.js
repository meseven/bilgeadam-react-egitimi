import React from "react";

import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "./queries";

import ListItem from "./ListItem";

import { Container, Row } from "react-bootstrap";
import Loading from "./Loading";

function PokemonList() {
	const { loading, error, data } = useQuery(GET_POKEMONS);

	if (loading) return <Loading />;
	if (error) return `Error! ${error.message}`;

	console.log(data);

	return (
		<Container>
			<Row>
				{data.pokemons.map((pokemon, index) => (
					<ListItem key={index} pokemon={pokemon} />
				))}
			</Row>
		</Container>
	);
}

export default PokemonList;
