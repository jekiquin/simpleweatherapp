import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import TableHeader from 'components/TableHeader/TableHeader';
import DetailHeader from 'components/DetailHeader/DetailHeader';
import ForecastsDetails from 'components/ForecastsDetails/ForecastsDetails';
import Pagination from 'features/Pagination/Pagination';
import ShowForecastButton from 'features/ShowForecastButton/ShowForecastButton';
import { useGetForecastsByCityIdQuery } from 'services/weatherApi';
import { selectShowForecast } from 'features/ShowForecastButton/showForecastSlice';

import { newPages } from 'features/Pagination/paginationSlice';
export default function Forecasts({ cityId }) {
	const showForecast = useSelector(selectShowForecast);
	const dispatch = useDispatch();
	const { data, error, isFetching } = useGetForecastsByCityIdQuery(cityId);

	useEffect(() => {
		if (data) {
			dispatch(newPages(data.list.length));
		}
	}, [data, dispatch]);

	const disabled = !cityId || error || isFetching;

	const showDetails = !error && !isFetching;

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
