import { configureStore } from '@reduxjs/toolkit';
import AdminSlice from './slices/AdminSlice';
import ExpressionsSlice from './slices/ExpressionsSlice';
import FilterSlice from './slices/FilterSlice';

export const store = configureStore({
	reducer: {
		expressions: ExpressionsSlice,
		filters: FilterSlice,
		admin: AdminSlice,
	},
});
