import { dateFormatter } from 'utils/utils';
import PropTypes from 'prop-types';

export default function ForecastDetail({ forecast }) {
	return (
		<div className="table-container even:bg-gray-200">
			<p className="table-data">{dateFormatter(forecast.dt_txt)}</p>
			<p className="table-data">{forecast.main.temp} C</p>
			<p className="table-data hidden md:block">{forecast.main.temp_min} C</p>
			<p className="table-data hidden md:block">{forecast.main.temp_max} C</p>
			<p className="table-data">{forecast.wind.speed} m/s</p>
			<p className="table-data">{forecast.weather[0].description}</p>
		</div>
	);
}

ForecastDetail.propTypes = {
	forecast: PropTypes.object.isRequired
};
