import { createSlice } from '@reduxjs/toolkit';

export const DATAPERPAGE = 3;

export const paginationSlice = createSlice({
	name: 'pagination',
	initialState: {
		totalPages: 0,
		currentPage: 0
	},
	reducers: {
		newPages: (state, action) => {
			state.totalPages = Math.ceil(action.payload / DATAPERPAGE);
			state.currentPage = 1;
		},
		gotoPage: (state, action) => {
			state.currentPage = action.payload;
		}
	}
});

export const selectCurrentPage = (state) => state.pagination.currentPage;
export const selectTotalPages = (state) => state.pagination.totalPages;

export const { newPages, gotoPage } = paginationSlice.actions;

export default paginationSlice.reducer;
