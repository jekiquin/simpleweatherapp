import { createSlice } from '@reduxjs/toolkit';

export const showForecastSlice = createSlice({
	name: 'showForecast',
	initialState: { showForecast: true },
	reducers: {
		setShowForecast: (state, action) => {
			state.showForecast = action.payload;
		}
	}
});

export const selectShowForecast = (state) => state.showForecast.showForecast;

export const { setShowForecast } = showForecastSlice.actions;

export default showForecastSlice.reducer;
