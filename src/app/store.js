import { configureStore } from '@reduxjs/toolkit';
import cityReducer from 'features/Dropdown/dropdownSlice';
import summaryReducer from 'features/Summary/summarySlice';
import forecastsReducer from 'features/Forecasts/forecastsSlice';

export const store = configureStore({
	reducer: {
		city: cityReducer,
		summary: summaryReducer,
		forecasts: forecastsReducer
	}
});
