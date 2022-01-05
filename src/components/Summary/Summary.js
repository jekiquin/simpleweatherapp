import PropTypes from 'prop-types';
import { useCallback, useMemo } from 'react';
import DetailHeader from 'components/DetailHeader/DetailHeader';
import { useGetCurrentWeatherByCityIdQuery } from 'services/weatherApi';
import ShowForecastButton from 'features/ShowForecastButton/ShowForecastButton';
import useSkip from 'hooks/skip-fetch';

export default function Summary({ cityId }) {
	const skip = useSkip(cityId);
	const { data, error, isFetching } = useGetCurrentWeatherByCityIdQuery(cityId, { skip });

	const getImageURL = useMemo(() => {
		return !error && !isFetching && data
			? `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
			: '';
	}, [error, isFetching]);

	const displayDetails = useCallback(() => {
		if (!cityId) {
			return <></>;
		}
		if (error) {
			return <p>Error fetching data</p>;
		}
		if (isFetching) {
			return <p>Fetching data</p>;
		}
		return (
			<>
				<p>{data?.weather[0].main}</p>
				<p>{data?.weather[0].description}</p>
				<p>{data?.main.temp} C</p>
				<p>{data?.wind.speed} m/s</p>
			</>
		);
	}, [cityId, data, error, isFetching]);

	const disabled = !cityId || error || isFetching;
	return (
		<article className="w-72 detail-container md:w-96 ">
			<DetailHeader />
			<div className="h-24 flex px-4 py-2 md:h-30">
				<div className="w-full h-full">{displayDetails()}</div>
				<div className="h-full flex flex-col items-center justify-between">
					<img src={getImageURL} alt="" aria-hidden={true} />
					<ShowForecastButton
						label="5 Day Forecast"
						showForecast={true}
						disabled={disabled}
					/>
				</div>
			</div>
		</article>
	);
}

Summary.propTypes = {
	cityId: PropTypes.string.isRequired
};
