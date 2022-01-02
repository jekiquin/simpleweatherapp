import { createSlice } from '@reduxjs/toolkit';
import cities from 'data/cities.json';

const initialState = { city: { id: '', name: '', country: '' } };

export const citySlice = createSlice({
	name: 'city',
	initialState,
	reducers: {
		setCity: (state, action) => {
			const selectedCity = cities.find((city) => city.id.toString() === action.payload);
			state.city = selectedCity ?? initialState.city;
		}
	}
});

export const { setCity } = citySlice.actions;

export const selectCityId = (state) => state.city.city.id.toString();
export const selectCity = (state) =>
	state.city.city.name && state.city.city.country
		? `${state.city.city.name}, ${state.city.city.country}`
		: 'Please choose city from options';

export default citySlice.reducer;
