import { useSelector } from 'react-redux';
import { useSummary, useSummaryLoading, useSummaryError } from 'features/Summary/summarySlice';
import { useCity } from 'features/Dropdown/dropdownSlice';

export default function Summary() {
	const city = useSelector(useCity);
	const summary = useSelector(useSummary);
	const isLoading = useSelector(useSummaryLoading);
	const isError = useSelector(useSummaryError);

	const displayDetails = () => {
		if (isLoading) {
			return <h2>Loading Data.</h2>;
		}
		if (isError) {
			return <h2>Error while fetching data.</h2>;
		}
		return (
			<>
				<p>{summary?.weather[0].main}</p>
				<p>{summary?.weather[0].description}</p>
				<p>{summary?.main.temp}</p>
				<p>{summary?.wind.speed}</p>
				{summary && <button>5 Day Forecast</button>}
			</>
		);
	};
	return (
		<article>
			<h2>City: {city}</h2>
			{displayDetails()}
		</article>
	);
}
