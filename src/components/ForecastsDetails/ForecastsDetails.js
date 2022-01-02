import ForecastDetail from 'components/ForecastDetail/ForecastDetail';
import PropTypes from 'prop-types';

export default function ForecastsDetails({ forecasts }) {
	return (
		<>
			{forecasts.map((forecast) => (
				<ForecastDetail key={forecast.dt} forecast={forecast} />
			))}
		</>
	);
}

ForecastsDetails.propTypes = {
	forecasts: PropTypes.array.isRequired
};
