import { useSelector } from 'react-redux';
import Summary from 'components/Summary/Summary';
import { selectCity, selectCityId } from 'features/Dropdown/dropdownSlice';

export default function DetailsContainer() {
	const cityId = useSelector(selectCityId);
	const city = useSelector(selectCity);

	return (
		<section>
			<Summary selectedCity={{ cityId, city }} />
			<hr />
			{/* <Forecasts /> */}
		</section>
	);
}
