import { configureStore } from '@reduxjs/toolkit';
import WordsSlice from './slices/WordsSlice';

export const store = configureStore({
	reducer: {
		words: WordsSlice,
	},
});
