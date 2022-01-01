import { createSlice } from '@reduxjs/toolkit';

export const cityIdSlice = createSlice({
	name: 'cityId',
	initialState: { cityId: '' },
	reducers: {
		setCityId: (state, action) => {
			state.cityId = action.payload;
		}
	}
});

export const { setCityId } = cityIdSlice.actions;

export const useCityId = (state) => state.cityId.cityId;

export default cityIdSlice.reducer;
