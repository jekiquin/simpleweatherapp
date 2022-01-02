import PropTypes from 'prop-types';
import { useCallback } from 'react';
import DetailHeader from 'components/DetailHeader/DetailHeader';
import { useGetCurrentWeatherByCityIdQuery } from 'services/weatherApi';
export default function Summary({ cityId }) {
	const { data, error, isLoading } = useGetCurrentWeatherByCityIdQuery(cityId);

	const displayDetails = useCallback(() => {
		if (!cityId) {
			return <></>;
		}
		if (isLoading) {
			return <p>Fetching data</p>;
		}
		if (error) {
			return <p>Error fetching data</p>;
		}
		return (
			<>
				<p>{data.weather[0].main}</p>
				<p>{data.weather[0].description}</p>
				<p>{data.main.temp}</p>
				<p>{data.wind.speed}</p>
			</>
		);
	}, [cityId, data, error, isLoading]);

	const disabled = !cityId || error || isLoading;
	return (
		<article className="w-96 my-4 border border-black rounded-xl overflow-hidden">
			<DetailHeader />
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

Summary.propTypes = {
	cityId: PropTypes.string.isRequired
};
