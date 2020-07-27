import React from 'react';

import PropTypes from 'prop-types';

function User(props) {
	const { name, surname, age } = props;

	return (
		<div>
			{name} {surname} {age}
		</div>
	);
}

User.propTypes = {
	name: PropTypes.string,
	surname: PropTypes.string,
	age: PropTypes.number,
	showMessage: PropTypes.func,
};

export default User;
