import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

function User() {
	const [name, setName] = useState('Mehmet');
	const [surname, setSurname] = useState('Seven');

	useEffect(() => {
		console.log('Component mounted or updated');
	});

	useEffect(() => {
		console.log('Component mounted');
	}, []);

	useEffect(() => {
		console.log('Component mounted');
	}, [name, surname]);

	const changeName = () => {
		setSurname('Ahmet');
	};

	return (
		<>
			<h2>{name}</h2>
			<input type="button" value="Click" onClick={changeName} />
		</>
	);
}

User.propTypes = {
	name: PropTypes.string,
	surname: PropTypes.string,
	age: PropTypes.number,
	showMessage: PropTypes.func,
};

export default User;
