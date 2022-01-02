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
	isSummaryError: false
};

export const forecastsSlice = createSlice({
	name: 'forecasts',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchForecastsByCityId.pending]: (state) => {
			state.isForecastsLoading = true;
			state.isSummaryError = false;
		},
		[fetchForecastsByCityId.fulfilled]: (state, action) => {
			state.forecasts = action.payload;
			state.isForecastsLoading = false;
			state.isSummaryError = false;
		},
		[fetchForecastsByCityId.rejected]: (state) => {
			state.forecasts = null;
			state.isForecastsLoading = false;
			state.isSummaryError = true;
		}
	}
});

export const useForecasts = (state) => state.forecasts.forecasts;

export default forecastsSlice.reducer;
