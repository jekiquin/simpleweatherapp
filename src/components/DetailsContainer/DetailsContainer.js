import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Summary from 'components/Summary/Summary';
import Forecasts from 'features/Forecasts/Forecasts';
import { selectCityId } from 'features/Dropdown/dropdownSlice';

export default function DetailsContainer() {
	const cityId = useSelector(selectCityId);

	useEffect(() => {}, [cityId]);

	return (
		<section>
			jerick
			{/* <Summary />
			<hr />
			<Forecasts /> */}
		</section>
	);
}
