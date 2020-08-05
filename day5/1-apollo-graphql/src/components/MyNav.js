import React from "react";

import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNav() {
	return (
		<Nav
			activeKey="/"
			// onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
		>
			<Nav.Item>
				<Link to="/">
					<Nav.Link href="/">Home</Nav.Link>
				</Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="link-1">Link</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="link-2">Link</Nav.Link>
			</Nav.Item>
		</Nav>
	);
}

export default MyNav;
