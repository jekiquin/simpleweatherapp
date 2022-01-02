import PropTypes from 'prop-types';
import TableHeader from 'components/TableHeader/TableHeader';
import DetailHeader from 'components/DetailHeader/DetailHeader';
import ForecastsDetails from 'components/ForecastsDetails/ForecastsDetails';
import { useGetForecastsByCityIdQuery } from 'services/weatherApi';

export default function Forecasts({ cityId }) {
	const { data, error, isLoading } = useGetForecastsByCityIdQuery(cityId);
	return (
		<article className="w-full my-4">
			<DetailHeader />
			<TableHeader />
			{!error && !isLoading && <ForecastsDetails forecasts={data.list} />}
		</article>
	);
}

Forecasts.propTypes = {
	cityId: PropTypes.string.isRequired
};
