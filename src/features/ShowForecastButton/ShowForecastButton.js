import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setShowForecast } from './showForecastSlice';

export default function ShowForecastButton({ label, showForecast, disabled }) {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(setShowForecast(showForecast));
	};
	const styleClass = showForecast
		? 'self-end w-56 bg-gray-600 text-white p-2'
		: 'border border-black px-4 py-1 bg-white text-black absolute top-2 right-2';
	return (
		<button
			className={`h-fit  rounded-sm ${styleClass}`}
			disabled={disabled}
			onClick={handleClick}>
			{label}
		</button>
	);
}

ShowForecastButton.propTypes = {
	label: PropTypes.string.isRequired,
	showForecast: PropTypes.bool.isRequired,
	disabled: PropTypes.bool.isRequired
};
