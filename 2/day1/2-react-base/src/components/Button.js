import PropTypes from "prop-types";

function Button({ text, textSize }) {
	return (
		<div>
			<button style={{ fontSize: textSize }}>{text}</button>
		</div>
	);
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	textSize: PropTypes.number,
};

Button.defaultProps = {
	textSize: 8,
};

export default Button;
