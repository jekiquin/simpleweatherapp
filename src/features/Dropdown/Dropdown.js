import { useSelector, useDispatch } from 'react-redux';
import cities from 'data/cities.json';
import { setCity, selectCityId } from 'features/Dropdown/dropdownSlice';

export default function Dropdown() {
	const cityId = useSelector(selectCityId);
	const dispatch = useDispatch();

	const handleChange = ({ target }) => {
		dispatch(setCity(target.value));
	};

	const options = cities.map((city) => (
		<option key={city.id} value={city.id}>
			{city.name}, {city.country}
		</option>
	));

	return (
		<select className="bg-white border border-black" value={cityId} onChange={handleChange}>
			<option value="" hidden>
				---Select City---
			</option>
			{options}
		</select>
	);
}
