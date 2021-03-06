import React from "react";

import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function ListItem({ pokemon: { id, name, image } }) {
	return (
		<Col xs={6} md={4}>
			<Card
				style={{
					width: "18rem",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Card.Img variant="top" src={image} style={{ width: "50%" }} />
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					{/* <Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text> */}

					<Link to={`/detail/${name.toLowerCase()}`}>
						<Button variant="primary">Details</Button>
					</Link>
				</Card.Body>
			</Card>
		</Col>
	);
}

export default ListItem;
