import { configureStore } from '@reduxjs/toolkit';
import cityReducer from 'features/Dropdown/dropdownSlice';
import summaryReducer from 'features/Summary/summarySlice';

export const store = configureStore({
	reducer: {
		city: cityReducer,
		summary: summaryReducer
	}
});
