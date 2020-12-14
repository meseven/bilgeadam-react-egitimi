import { useState, useEffect } from "react";

function Counter() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCount((c) => c + 1);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div>
			<h1>{count}</h1>
		</div>
	);
}

export default Counter;
