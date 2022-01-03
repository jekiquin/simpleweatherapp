import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { weatherApi } from 'services/weatherApi';
import cityReducer from 'features/Dropdown/dropdownSlice';
import showForecastReducer from 'features/ShowForecastButton/showForecastSlice';
import paginationReducer from 'features/Pagination/paginationSlice';

export const store = configureStore({
	reducer: {
		city: cityReducer,
		showForecast: showForecastReducer,
		pagination: paginationReducer,
		[weatherApi.reducerPath]: weatherApi.reducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(weatherApi.middleware)
});

setupListeners(store.dispatch);
