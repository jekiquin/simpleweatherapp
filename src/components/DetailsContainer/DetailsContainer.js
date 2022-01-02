import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Summary from 'features/Summary/Summary';
import { fetchSummaryByCityId } from 'features/Summary/summarySlice';
import { selectCityId } from 'features/Dropdown/dropdownSlice';
import { fetchForecastsByCityId } from 'features/Forecasts/forecastsSlice';
import Forecasts from 'features/Forecasts/Forecasts';

export default function DetailsContainer() {
	const cityId = useSelector(selectCityId);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchSummaryByCityId(cityId));
		dispatch(fetchForecastsByCityId(cityId));
	}, [cityId, dispatch]);

	return (
		<section>
			<Summary />
			<hr />
			<Forecasts />
		</section>
	);
}
