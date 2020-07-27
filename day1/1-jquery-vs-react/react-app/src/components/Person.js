import React, { useState } from 'react';

function Person() {
	const [persons, setPersons] = useState([
		{
			id: 1,
			name: 'Mehmet',
		},
		{
			id: 1,
			name: 'Zeynep',
		},
	]);

	const addPerson = () => {
		setPersons([
			{
				id: 2,
				name: 'Murat',
			},
			...persons,
		]);
	};

	return (
		<div>
			<input type="button" value="Change Name" onClick={addPerson} />
			<hr />

			{persons.map((person, index) => (
				<div key={index}>{person.name}</div>
			))}
		</div>
	);
}

export default Person;
