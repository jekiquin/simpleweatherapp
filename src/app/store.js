import { configureStore } from '@reduxjs/toolkit';
import { weatherApi } from 'services/weatherApi';
import cityReducer from 'features/Dropdown/dropdownSlice';

export const store = configureStore({
	reducer: {
		city: cityReducer,
		[weatherApi.reducerPath]: weatherApi.reducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(weatherApi.middleware)
});
