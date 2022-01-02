import { useSelector } from 'react-redux';
import { useForecasts } from 'features/Forecasts/forecastsSlice';

export default function Forecasts() {
	const forecasts = useSelector(useForecasts);
	console.log(forecasts);
	return <div></div>;
}
