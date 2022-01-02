import { useSelector } from 'react-redux';
import { useForecasts } from 'features/Forecasts/forecastsSlice';
import { selectCity } from 'features/Dropdown/dropdownSlice';

export default function Forecasts() {
	const city = useSelector(selectCity);
	const forecasts = useSelector(useForecasts);

	console.log(forecasts);
	return <div></div>;
}
