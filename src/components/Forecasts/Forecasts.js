import { useSelector } from 'react-redux';
import { selectCity } from 'features/Dropdown/dropdownSlice';
import TableHeader from 'components/TableHeader/TableHeader';
import DetailHeader from 'components/DetailHeader/DetailHeader';
import ForecastsDetails from 'components/ForecastsDetails/ForecastsDetails';

export default function Forecasts() {
	const city = useSelector(selectCity);

	return (
		<article className="w-full my-4">
			<DetailHeader />
			<TableHeader />
			<ForecastsDetails />
		</article>
	);
}
