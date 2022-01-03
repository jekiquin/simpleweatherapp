import { dateFormatter } from 'utils/utils';
import PropTypes from 'prop-types';

export default function ForecastDetail({ forecast }) {
	return (
		<div className="grid grid-cols-custom even:bg-gray-200">
			<p className="table-data">{dateFormatter(forecast.dt_txt)}</p>
			<p className="table-data">{forecast.main.temp} C</p>
			<p className="table-data">{forecast.main.temp_min} C</p>
			<p className="table-data">{forecast.main.temp_max} C</p>
			<p className="table-data">{forecast.wind.speed} m/s</p>
			<p className="table-data">{forecast.weather[0].description}</p>
		</div>
	);
}

ForecastDetail.propTypes = {
	forecast: PropTypes.object.isRequired
};
