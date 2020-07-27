import React, { useEffect, useState } from 'react';

let interval;
function Counter(props) {
	const [count, setCount] = useState(props.startWith);

	useEffect(() => {
		console.log(count);
	}, [count]);

	const startCounter = () => {
		interval = setInterval(() => {
			setCount((count) => setCount(count + 10));
		}, 1000);
	};

	const stopCounter = () => {
		clearTimeout(interval);
	};

	return (
		<div>
			<h2>{count}</h2>
			<input type="button" value="Start" onClick={startCounter} />
			<input type="button" value="Stop" onClick={stopCounter} />
		</div>
	);
}

export default Counter;
