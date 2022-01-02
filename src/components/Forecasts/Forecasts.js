import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import TableHeader from 'components/TableHeader/TableHeader';
import DetailHeader from 'components/DetailHeader/DetailHeader';
import ForecastsDetails from 'components/ForecastsDetails/ForecastsDetails';
import Pagination from 'features/Pagination/Pagination';
import ShowForecastButton from 'features/ShowForecastButton/ShowForecastButton';
import { useGetForecastsByCityIdQuery } from 'services/weatherApi';
import { selectShowForecast } from 'features/ShowForecastButton/showForecastSlice';
export default function Forecasts({ cityId }) {
	const showForecast = useSelector(selectShowForecast);
	const { data, error, isLoading } = useGetForecastsByCityIdQuery(cityId);

	const disabled = !cityId || error || isLoading;

	const showDetails = !error && !isLoading;

	return (
		<article className="relative w-full detail-container" hidden={!showForecast}>
			<DetailHeader />
			<ShowForecastButton label="Close" showForecast={false} disabled={disabled} />
			<div className="m-4">
				<TableHeader />
				{showDetails && <ForecastsDetails forecasts={data.list} />}
			</div>
			{showDetails && <Pagination listLength={data.list.length} />}
		</article>
	);
}

Forecasts.propTypes = {
	cityId: PropTypes.string.isRequired
};
