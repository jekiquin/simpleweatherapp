import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { weather } from 'utils/axios';

const initialState = {
	summary: null,
	isSummaryLoading: false,
	isSummaryError: false
};

export const fetchSummaryByCityId = createAsyncThunk('summary/fetchSummary', async (cityId) => {
	return cityId ? await weather.getCurrentByCityId(cityId) : null;
});

export const summarySlice = createSlice({
	name: 'summary',
	initialState,
	extraReducers: {
		[fetchSummaryByCityId.pending]: (state) => {
			state.isSummaryLoading = true;
			state.isSummaryError = false;
		},
		[fetchSummaryByCityId.fulfilled]: (state, action) => {
			state.summary = action.payload;
			state.isSummaryLoading = false;
			state.isSummaryError = false;
		},
		[fetchSummaryByCityId.rejected]: (state) => {
			state.summary = null;
			state.isSummaryLoading = false;
			state.isSummaryError = true;
		}
	}
});

export const useSummary = (state) => state.summary.summary;
export const useSummaryLoading = (state) => state.summary.isSummaryLoading;
export const useSummaryError = (state) => state.summary.isSummaryError;

export default summarySlice.reducer;
