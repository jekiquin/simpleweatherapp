import { selectForecasts } from 'features/Forecasts/forecastsSlice';
import { useSelector } from 'react-redux';

export default function ForecastsDetails() {
	const forecasts = useSelector(selectForecasts);

	const displayForecasts = forecasts?.map((forecast) => (
		<div className="grid grid-cols-custom"></div>
	));
}
