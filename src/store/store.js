import { configureStore } from '@reduxjs/toolkit';
import WordsSlice from './slices/WordsSlice';
import FilterSlice from './slices/FilterSlice';

export const store = configureStore({
	reducer: {
		words: WordsSlice,
		filters: FilterSlice,
	},
});
