import PropTypes from 'prop-types';

export default function ForecastDetail({ forecast }) {
	return (
		<div className="grid grid-cols-custom odd:bg-gray-200">
			<p className="table-data">{forecast.dt}</p>
			<p className="table-data">{forecast.main.temp}</p>
			<p className="table-data">{forecast.main.temp_min}</p>
			<p className="table-data">{forecast.main.temp_max}</p>
			<p className="table-data">{forecast.wind.speed}</p>
			<p className="table-data">{forecast.weather[0].description}</p>
		</div>
	);
}

ForecastDetail.propTypes = {
	forecast: PropTypes.object.isRequired
};
