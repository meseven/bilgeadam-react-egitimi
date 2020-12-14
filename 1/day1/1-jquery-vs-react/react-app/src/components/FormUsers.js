import React, { useState, useEffect } from 'react';

function FormUsers() {
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState('');
	const [users, setUsers] = useState([]);

	const save = () => {
		setUsers([{ name }, ...users]);
		setName('');
	};

	useEffect(() => {
		console.log(users);
	}, [users]);

	return (
		<>
			<input name="name" value={name} onChange={(e) => setName(e.target.value)} />
			<input type="button" onClick={save} value="Save" />
			<input
				type="button"
				onClick={() => setLoading(!loading)}
				value={`Toggle Loading (${loading})`}
			/>

			{loading ? (
				<div>Loading...</div>
			) : (
				users.map((user, index) => (
					<div key={index}>
						{index + 1} {user.name}
					</div>
				))
			)}
		</>
	);
}

export default FormUsers;
