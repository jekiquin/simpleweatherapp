import { useSelector } from 'react-redux';
import {
	selectSummary,
	selectSummaryLoading,
	selectSummaryError
} from 'features/Summary/summarySlice';
import { selectCity } from 'features/Dropdown/dropdownSlice';

export default function Summary() {
	const city = useSelector(selectCity);
	const summary = useSelector(selectSummary);
	const isLoading = useSelector(selectSummaryLoading);
	const isError = useSelector(selectSummaryError);

	const displayDetails = () => {
		if (isLoading) {
			return <p>Loading Data.</p>;
		}
		if (isError) {
			return <p>Error while fetching data.</p>;
		}
		return (
			<>
				<p>Main: {summary?.weather[0].main}</p>
				<p>Description: {summary?.weather[0].description}</p>
				<p>Temp: {summary?.main.temp}</p>
				<p>Wind: {summary?.wind.speed}</p>
			</>
		);
	};

	const disabled = !summary || isLoading || isError;

	return (
		<article className="w-96 my-4 border border-black rounded-xl overflow-hidden">
			<div className="bg-gray-200 px-4 py-2">
				<h2>City: {city}</h2>
			</div>
			<div className="h-30 flex px-4 py-2">
				<div className="w-full h-full">{displayDetails()}</div>
				<button
					className="h-fit w-56 p-2 self-end bg-gray-600 text-white rounded-sm disabled:text-slate-800"
					disabled={disabled}>
					5 Day Forecast
				</button>
			</div>
		</article>
	);
}
