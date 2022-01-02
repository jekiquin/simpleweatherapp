import PropTypes from 'prop-types';

export default function ForecastDetail({ forecast }) {
	return (
		<div className="grid grid-cols-custom">
			<p className="text-center border">{forecast.dt}</p>
			<p className="text-center border">{forecast.main.temp}</p>
			<p className="text-center border">{forecast.main.temp_min}</p>
			<p className="text-center border">{forecast.main.temp_max}</p>
			<p className="text-center border">{forecast.wind.speed}</p>
			<p className="text-center border">{forecast.weather[0].description}</p>
		</div>
	);
}

ForecastDetail.propTypes = {
	forecast: PropTypes.object.isRequired
};
