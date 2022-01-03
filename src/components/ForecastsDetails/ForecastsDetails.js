import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ForecastDetail from 'components/ForecastDetail/ForecastDetail';
import { selectCurrentPage, DATAPERPAGE } from 'features/Pagination/paginationSlice';

export default function ForecastsDetails({ forecasts }) {
	const currentPage = useSelector(selectCurrentPage);
	const startItem = DATAPERPAGE * (currentPage - 1);
	const endItem = startItem + DATAPERPAGE;
	return (
		<>
			{forecasts.slice(startItem, endItem).map((forecast) => (
				<ForecastDetail key={forecast.dt} forecast={forecast} />
			))}
		</>
	);
}

ForecastsDetails.propTypes = {
	forecasts: PropTypes.array.isRequired
};
