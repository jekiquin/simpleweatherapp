import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import env from 'react-dotenv';

export const APIKEY = env.API_KEY;
export const BASEURL = 'https://api.openweathermap.org/data/2.5';

export const weatherApi = createApi({
	reducerPath: 'weatherApi',
	baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
	endpoints: (builder) => ({
		getCurrentWeatherByCityId: builder.query({
			query: (cityId) => `weather?units=metric&id=${cityId}&appid=${APIKEY}`
		}),
		getForecastsByCityId: builder.query({
			query: (cityId) => `forecast?units=metric&id=${cityId}&appid=${APIKEY}`
		})
	})
});

export const { useGetCurrentWeatherByCityIdQuery, useGetForecastsByCityIdQuery } = weatherApi;
