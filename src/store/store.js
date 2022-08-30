import { configureStore } from '@reduxjs/toolkit';
import addSlice from './slices/AddSlice';
import ExpressionsSlice from './slices/ExpressionsSlice';
import FilterSlice from './slices/FilterSlice';

export const store = configureStore({
	reducer: {
		expressions: ExpressionsSlice,
		filters: FilterSlice,
		add: addSlice,
	},
});
