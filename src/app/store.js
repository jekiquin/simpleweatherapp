import { configureStore } from '@reduxjs/toolkit';
import cityIdReducer from 'features/Dropdown/dropdownSlice';

export const store = configureStore({
	reducer: {
		cityId: cityIdReducer
	}
});
