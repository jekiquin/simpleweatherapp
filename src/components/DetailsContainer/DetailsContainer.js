import Summary from 'components/Summary/Summary';
import Forecasts from 'components/Forecasts/Forecasts';
import { useSelector } from 'react-redux';
import { selectCityId } from 'features/Dropdown/dropdownSlice';

export default function DetailsContainer() {
	const cityId = useSelector(selectCityId);
	return (
		<section>
			<Summary cityId={cityId} />
			<hr />
			<Forecasts />
		</section>
	);
}
