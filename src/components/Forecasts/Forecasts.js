import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import TableHeader from 'components/TableHeader/TableHeader';
import DetailHeader from 'components/DetailHeader/DetailHeader';
import ForecastsDetails from 'components/ForecastsDetails/ForecastsDetails';
import Pagination from 'features/Pagination/Pagination';
import ShowForecastButton from 'features/ShowForecastButton/ShowForecastButton';
import { useGetForecastsByCityIdQuery } from 'services/weatherApi';
import { newPages } from 'features/Pagination/paginationSlice';

export default function Forecasts({ cityId }) {
	const [skip, setSkip] = useState(true);
	const dispatch = useDispatch();
	const { data, error, isFetching } = useGetForecastsByCityIdQuery(cityId, { skip });

	useEffect(() => {
		if (cityId) {
			setSkip(false);
		}
	}, [cityId]);

	useEffect(() => {
		if (data) {
			dispatch(newPages(data.list.length));
		}
	}, [data, dispatch]);

	const disabled = !cityId || error || isFetching;

	const showDetails = !error && !isFetching && data;

	return (
		<article className="relative w-full detail-container h-119 md:h-129" hidden={skip}>
			<DetailHeader />
			<ShowForecastButton label="Close" showForecast={false} disabled={disabled} />
			<div className="px-4">
				<div className="py-4 overflow-x-auto">
					<TableHeader />
					{showDetails && <ForecastsDetails forecasts={data.list} />}
				</div>
			</div>
			{showDetails && <Pagination listLength={data.list.length} />}
		</article>
	);
}

Forecasts.propTypes = {
	cityId: PropTypes.string.isRequired
};
