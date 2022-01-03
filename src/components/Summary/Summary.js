import PropTypes from 'prop-types';
import { useCallback } from 'react';
import DetailHeader from 'components/DetailHeader/DetailHeader';
import { useGetCurrentWeatherByCityIdQuery } from 'services/weatherApi';
import ShowForecastButton from 'features/ShowForecastButton/ShowForecastButton';
export default function Summary({ cityId }) {
	const { data, error, isLoading } = useGetCurrentWeatherByCityIdQuery(cityId);

	const displayDetails = useCallback(() => {
		if (!cityId) {
			return <></>;
		}
		if (error) {
			return <p>Error fetching data</p>;
		}
		if (isLoading) {
			return <p>Fetching data</p>;
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
		<article className="w-96 detail-container">
			<DetailHeader />
			<div className="h-30 flex px-4 py-2">
				<div className="w-full h-full">{displayDetails()}</div>
				<ShowForecastButton
					label="5 Day Forecast"
					showForecast={true}
					disabled={disabled}
				/>
			</div>
		</article>
	);
}

Summary.propTypes = {
	cityId: PropTypes.string.isRequired
};
