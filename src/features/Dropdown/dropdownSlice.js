import { createSlice } from '@reduxjs/toolkit';
import cities from 'data/cities.json';

export const citySlice = createSlice({
	name: 'city',
	initialState: { city: null },
	reducers: {
		setCity: (state, action) => {
			const selectedCity = cities.find((city) => city.id.toString() === action.payload);
			state.city = selectedCity ?? null;
		}
	}
});

export const { setCity } = citySlice.actions;

export const selectCityId = (state) => state.city.city?.id;
export const selectCity = (state) =>
	state.city.city
		? `${state.city.city.name}, ${state.city.city.country}`
		: 'Please choose city from options';

export default citySlice.reducer;
