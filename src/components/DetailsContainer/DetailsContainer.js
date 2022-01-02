import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Summary from 'features/Summary/Summary';
import { fetchSummaryByCityId } from 'features/Summary/summarySlice';
import { useCityId } from 'features/Dropdown/dropdownSlice';

export default function DetailsContainer() {
	const cityId = useSelector(useCityId);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchSummaryByCityId(cityId));
	}, [cityId, dispatch]);

	return (
		<section>
			<Summary />
		</section>
	);
}
