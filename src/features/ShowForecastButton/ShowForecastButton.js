export default function ShowForecastButton({ label, showForecast, disabled }) {
	const handleClick = () => {
		console.log(showForecast);
	};
	const styleClass = showForecast
		? 'self-end w-56 bg-gray-600 text-white'
		: 'bg-white text-black';
	return (
		<button className={`h-fit p-2 rounded-sm ${styleClass}`} disabled={disabled}>
			{label}
		</button>
	);
}
