import { useSelector, useDispatch } from 'react-redux';
import cities from 'data/cities.json';
import { setCityId, useCityId } from './dropdownSlice';

export default function Dropdown() {
	const cityId = useSelector(useCityId);
	const dispatch = useDispatch();

	const handleChange = ({ target }) => {
		dispatch(setCityId(target.value));
	};

	const options = cities.map((city) => (
		<option key={city.id} value={city.id}>
			{city.name}, {city.country}
		</option>
	));

	return (
		<select value={cityId} onChange={handleChange}>
			<option value="">---Select City---</option>
			{options}
		</select>
	);
}
