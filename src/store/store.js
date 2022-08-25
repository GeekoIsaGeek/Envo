import { configureStore } from '@reduxjs/toolkit';
import WordsSlice from '../features/content/WordsSlice';

export const store = configureStore({
	reducer: {
		words: WordsSlice,
	},
});
