import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	show: 'Expressions',
	date: 'Newest',
	searchFor: '',
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
	},
});

export default FilterSlice.reducer;
export const { show, setSearchFor } = FilterSlice.actions;
