import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { weather } from 'utils/axios';

export const fetchForecastsByCityId = createAsyncThunk(
	'forecasts/fetchForecasts',
	async (cityId) => {
		return cityId ? await weather.getForecastsByCityId(cityId) : null;
	}
);

const initialState = {
	forecasts: null,
	isForecastsLoading: false,
	isForecastsError: false
};

export const forecastsSlice = createSlice({
	name: 'forecasts',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchForecastsByCityId.pending]: (state) => {
			state.isForecastsLoading = true;
			state.isForecastsError = false;
		},
		[fetchForecastsByCityId.fulfilled]: (state, action) => {
			state.forecasts = action.payload;
			state.isForecastsLoading = false;
			state.isForecastsError = false;
		},
		[fetchForecastsByCityId.rejected]: (state) => {
			state.forecasts = null;
			state.isForecastsLoading = false;
			state.isForecastsError = true;
		}
	}
});

export const useForecasts = (state) => state.forecasts.forecasts;
export const useForecastsLoading = (state) => state.forecasts.isForecastsLoading;
export const useForecastsError = (state) => state.forecasts.isForecastsError;

export default forecastsSlice.reducer;
