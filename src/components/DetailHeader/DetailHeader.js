import { selectCity } from 'features/Dropdown/dropdownSlice';
import { useSelector } from 'react-redux';

export default function DetailHeader() {
	const city = useSelector(selectCity);
	return (
		<div className="bg-gray-200 px-4 py-2">
			<h2>City: {city}</h2>
		</div>
	);
}
