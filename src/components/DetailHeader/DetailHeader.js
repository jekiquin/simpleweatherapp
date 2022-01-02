import PropTypes from 'prop-types';

export default function DetailHeader({ city }) {
	return (
		<div className="bg-gray-200 px-4 py-2">
			<h2>City: {city}</h2>
		</div>
	);
}

DetailHeader.propTypes = {
	city: PropTypes.string.isRequired
};
