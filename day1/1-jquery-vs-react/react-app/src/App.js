import React from 'react';

// import Container from './components/Container';
// import Person from './components/Person';
// import User from './components/User';

import Counter from './components/Counter';

function App() {
	const showMessage = () => console.log('selam1');

	return (
		<div>
			{/* <h1>App Component</h1> */}
			{/* <Container /> */}
			{/* <Person /> */}
			{/* <User name="Mehmet" surname="Vural" age={28} showMessage={showMessage} /> */}
			<Counter startWith={10} />
		</div>
	);
}

export default App;
