import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	show: 'Expressions',
	searchFor: '',
	showN: 'All',
	date: 'Newest',
};

const FilterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		show: (state, action) => {
			switch (action.payload) {
				case 'Definitions':
					state.show = 'Definitions';
					break;
				default:
					state.show = 'Expressions';
			}
		},
		setSearchFor: (state, action) => {
			state.searchFor = action.payload;
		},
		setNumberOfExpressions: (state, action) => {
			state.showN = action.payload;
		},
		setDate: (state, action) => {
			state.date = action.payload;
		},
	},
});

export default FilterSlice.reducer;
export const { show, setSearchFor, setNumberOfExpressions, setDate } = FilterSlice.actions;
