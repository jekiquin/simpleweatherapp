import { useSelector } from 'react-redux';
import { useForecasts } from 'features/Forecasts/forecastsSlice';
import { selectCity } from 'features/Dropdown/dropdownSlice';
import TableHeader from 'components/TableHeader/TableHeader';

export default function Forecasts() {
	const city = useSelector(selectCity);
	const forecasts = useSelector(useForecasts);

	const displayForecast = forecasts?.map((forecast) => <></>);
	return (
		<article className="w-full">
			<TableHeader />
		</article>
	);
}
