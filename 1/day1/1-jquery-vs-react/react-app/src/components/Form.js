import React, { useState } from 'react';

function Form() {
	const [school, setSchool] = useState('');
	const [student, setStudent] = useState('');

	const save = () => {
		if (school === '' || student === '') {
			alert('Please fill the form');
			return false;
		}

		console.log(`${student} - ${school}`);

		document.title = `${student} - ${school}`;
	};

	return (
		<>
			<label>School</label>
			<input name="school" value={school} onChange={(e) => setSchool(e.target.value)} /> <br />
			<label>Student</label>
			<input name="student" value={student} onChange={(e) => setStudent(e.target.value)} />
			<input type="button" value="Save" onClick={save} />
			<br />
			<br />
			{school} {student}
		</>
	);
}

export default Form;
