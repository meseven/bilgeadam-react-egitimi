import React from "react";
import { useQuery } from "@apollo/client";

import { useParams, Link } from "react-router-dom";

import { GET_POKEMON } from "./queries";

function Detail() {
	const { name } = useParams();

	const { loading, error, data } = useQuery(GET_POKEMON, {
		variables: {
			name,
		},
	});

	if (loading) return "Loading...";
	if (error) return `Error! ${error.message}`;

	console.log(data.pokemon);

	const { pokemon } = data;

	return (
		<div>
			<h1>
				{pokemon.name} - #{pokemon.number}
			</h1>
			<h5> #{pokemon.id}</h5>
			<img src={pokemon.image} />

			<br />
			<br />
			<br />
			<div>
				<strong>Max HP: </strong> {pokemon.maxHP}
				<div>
					<strong>Weaknesses: </strong>
					<ul>
						{pokemon.weaknesses.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
				<div>
					<strong>Evolutions: </strong>
					<ul style={{ margin: 0, padding: 0 }}>
						{pokemon.evolutions &&
							pokemon.evolutions.map((item, index) => (
								<li key={index} style={{ listStyleType: "none" }}>
									<Link to={`/detail/${item.name.toLowerCase()}`}>
										<img src={item.image} style={{ width: 50, margin: 5 }} />
										{item.number} - {item.name}
									</Link>
								</li>
							))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Detail;
