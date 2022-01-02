import { useSelector } from 'react-redux';
import { selectCity } from 'features/Dropdown/dropdownSlice';
import TableHeader from 'components/TableHeader/TableHeader';
import DetailHeader from 'components/DetailHeader/DetailHeader';

export default function Forecasts() {
	const city = useSelector(selectCity);

	return (
		<article className="w-full">
			<DetailHeader city={city} />
			<TableHeader />
		</article>
	);
}
